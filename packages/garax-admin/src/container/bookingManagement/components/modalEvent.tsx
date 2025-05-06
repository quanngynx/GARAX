"use client"

import React from 'react';
import {Checkbox, DatePicker, Form, FormProps, Input, Modal} from 'antd';
import dayjs from "dayjs";

interface EventData {
    title?: string;
    start?: string;
    end?: string;
    description?: string;
    allDay?: boolean;
}

interface ModalEventProps {
    modalOpen: boolean;
    setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
    handleAddEvent: (eventData: EventData) => void;
    handleCloseModal: () => void;
}

type FieldType = {
    title?: string;
    start?: dayjs.Dayjs; 
    end?: dayjs.Dayjs;
    description?: string;
    allDay?: boolean;
};

const ModalEvent: React.FC<ModalEventProps> = ({ modalOpen, handleAddEvent, handleCloseModal }) => {
    const [form] = Form.useForm();
    
    const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
        // Format datetime
        const formattedValues = {
            ...values,
            start: values.start?.toISOString(),
            end: values.end?.toISOString(),
        };
        handleAddEvent(formattedValues);
        form.resetFields();
    };

    // const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    //     console.log('Failed:', errorInfo);
    // };

    return (
        <Modal
            title="Lịch hẹn mới"
            centered
            okText={"Thêm lịch"}
            cancelText={"Hủy"}
            open={modalOpen}
            onCancel={handleCloseModal}
        >
            <Form
                form={form}
                name="eventForm"
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 18 }}
                onFinish={onFinish}
                autoComplete="off"
            >
                <Form.Item<FieldType>
                    label="Tiêu đề"
                    name="title"
                    rules={[{ required: true, message: 'Vui lòng nhập tiêu đề!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item<FieldType>
                    label="Bắt đầu"
                    name="start"
                    rules={[{ required: true, message: 'Vui lòng chọn thời gian bắt đầu!' }]}
                >
                    <DatePicker showTime style={{ width: '100%' }} />
                </Form.Item>

                <Form.Item<FieldType>
                    label="Kết thúc"
                    name="end"
                >
                    <DatePicker showTime style={{ width: '100%' }} />
                </Form.Item>

                <Form.Item<FieldType>
                    label="Mô tả"
                    name="description"
                >
                    <Input.TextArea />
                </Form.Item>

                <Form.Item<FieldType>
                    name="allDay"
                    valuePropName="checked"
                    wrapperCol={{ offset: 6, span: 18 }}
                >
                    <Checkbox>Sự kiện cả ngày</Checkbox>
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default ModalEvent;
