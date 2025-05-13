import { Button, Col, Form, Input, Row, Select, Upload } from "antd";
import { useState } from "react";
import {
    // Controller,
    // type UseControllerReturn,
    type FieldErrors,
    type UseFormReturn,
    useForm
} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { PlusOutlined } from "@ant-design/icons";
import { UploadChangeParam } from "antd/es/upload";

import { ContactUsFormState, contactUsSchema } from "../schemas";
import { handleValidateError } from "@/utils";

export function FormContactUs() {
    const [form] = Form.useForm();
    const { Item } = Form;
    const { Option } = Select;
    const { TextArea } = Input;

    const [
        submitIn, 
        // setSubmitIn
    ] = useState(false);

    const formContactUsController: UseFormReturn<ContactUsFormState> =
        useForm<ContactUsFormState>({
            mode: 'onBlur',
            reValidateMode: 'onBlur',
            resolver: yupResolver(contactUsSchema),
            // defaultValues: {
            //   mainProblem: '',
            //   secondProblem: '',
            //   email: '',
            //   phone: '',
            //   desc: '',
            //   problemFile: undefined,
            // }
        });

    const errors: FieldErrors<ContactUsFormState> =
        formContactUsController.formState.errors;

    const normFile = (e: UploadChangeParam) => {
        if (Array.isArray(e)) {
            return e;
        }
        return e?.fileList;
    };

    return (
        <div className="mt-6">
            <div className=" mb-4">
                <h1 className="text-black text-sm font-normal">GARAX luôn sẵn sàng lắng nghe câu hỏi và ý kiến đóng góp từ bạn. Chúng tôi sẽ phản hồi ngay trong 24h tiếp theo!</h1>
            </div>

            <Form
                layout={'vertical'}
                form={form}
                onFinish={formContactUsController.handleSubmit((data) => {
                    console.log(data);
                })}
            >
                <Row>
                    <Col span={12}>
                        <Item

                            {...handleValidateError(errors, 'mainProblem')}
                            label="Vấn đề chính"
                        >
                            <Select {...formContactUsController.register('mainProblem')}>
                                <Option value="demo">Demo</Option>
                            </Select>
                        </Item>
                    </Col>
                </Row>

                <Row>
                    <Col span={12}>
                        <Item
                            {...handleValidateError(errors, 'secondProblem')}
                            label="Vấn đề phụ"
                        >
                            <Select {...formContactUsController.register('secondProblem')}>
                                <Option value="demo">Demo</Option>
                            </Select>
                        </Item>
                    </Col>
                </Row>

                <Row>
                    <Col span={12}>
                        <Item
                            {...handleValidateError(errors, 'email')}
                            label="Email"
                        >
                            <Input
                                {...formContactUsController.register('email')}
                                placeholder="input placeholder"
                            />
                        </Item>
                    </Col>
                </Row>

                <Row>
                    <Col span={12}>
                        <Item
                            {...handleValidateError(errors, 'phone')}
                            label="Phone"
                        >
                            <Input
                                {...formContactUsController.register('phone')}
                                placeholder="input placeholder"
                            />
                        </Item>
                    </Col>
                </Row>

                <Row>
                    <Col span={12}>
                        <Item
                            {...handleValidateError(errors, 'desc')}
                            label="TextArea"
                        >
                            <TextArea
                                {...formContactUsController.register('desc')}
                                rows={4}
                            />
                        </Item>
                    </Col>
                </Row>



                <Item
                    label="Upload"
                    valuePropName="fileList"
                    getValueFromEvent={normFile}
                    {...handleValidateError(errors, 'problemFile')}
                >
                    {/* <Controller
                        name={'problemFile'}
                        render={({
                            field: { onChange, ...rest },
                        }: UseControllerReturn<ContactUsFormState, 'problemFile'>) => (
                            <Upload
                                onChange={(value) => {
                                  if (value === null) {
                                    onChange(undefined);
                                    return;
                                  }
                                  onChange(value);
                                }}
                                action="/upload.do" 
                                listType="picture-card" 
                                {...rest}
                            >
                                <button
                                    style={{ color: 'inherit', cursor: 'inherit', border: 0, background: 'none' }}
                                    type="button"
                                >
                                    <PlusOutlined />
                                    <div style={{ marginTop: 8 }}>Upload</div>
                                </button>
                            </Upload>
                        )}
                    /> */}
                    <Upload
                        onChange={(value) => {
                            if (value === null) {
                                return;
                            }
                        }}
                        action="/upload.do"
                        listType="picture-card"
                    >
                        <button
                            style={{ color: 'inherit', cursor: 'inherit', border: 0, background: 'none' }}
                            type="button"
                        >
                            <PlusOutlined />
                            <div style={{ marginTop: 8 }}>Upload</div>
                        </button>
                    </Upload>
                </Item>

                <Row>
                    <Col span={12}>
                        <Item
                            style={{}}
                            label="Bằng cách tiếp tục, you agree to the Terms of use and Privacy Policy."
                        >
                            <Button
                                style={{
                                    width: '100%',
                                    borderRadius: 60,
                                    backgroundColor: '#050B20',
                                    padding: '20px 0px'
                                }}
                                type="primary"
                                htmlType="submit"
                                loading={submitIn}
                            >
                                Xác nhận
                            </Button>
                        </Item>
                    </Col>
                </Row>
            </Form>
        </div>
    );
}
