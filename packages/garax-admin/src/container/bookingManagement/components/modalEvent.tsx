"use client"

import React, { useState, useEffect } from 'react';
import {Checkbox, DatePicker, Form, FormProps, Input, Modal, TimePicker} from 'antd';
import dayjs from "dayjs";
import { DateSelectArg } from '@fullcalendar/core';
import { IEventData } from "@/container/bookingManagement/types";

interface ModalEventProps {
    modalOpen: boolean;
    setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
    handleAddEvent: (IEventData: IEventData) => void;
    handleCloseModal: () => void;
    selectedDate: DateSelectArg | null;
    error: string;
    setError: React.Dispatch<React.SetStateAction<string>>;
}

const ModalEvent: React.FC<ModalEventProps> = ({ modalOpen, handleAddEvent, handleCloseModal, selectedDate, error, setError }) => {
    const [newEventTitle, setNewEventTitle] = useState('');
    const [description, setDescription] = useState('');
    const [allDay, setAllDay] = useState(false);
    const [startDateTime, setStartDateTime] = useState<dayjs.Dayjs | null>(null);
    const [endDateTime, setEndDateTime] = useState<dayjs.Dayjs | null>(null);

    useEffect(() => {
        if (selectedDate) {
            setStartDateTime(dayjs(selectedDate.start));
            setEndDateTime(dayjs(selectedDate.end));
        }
    }, [selectedDate]);

    const handleSubmit = () => {
        if (!newEventTitle.trim()) {
            setError('Vui lòng nhập tiêu đề lịch hẹn');
            return;
        }

        if (!startDateTime || !endDateTime) {
            setError('Vui lòng chọn thời gian');
            return;
        }

        handleAddEvent({
            title: newEventTitle,
            description: description,
            allDay: allDay,
            start: startDateTime.toISOString(),
            end: endDateTime.toISOString()
        });
        setNewEventTitle('');
        setDescription('');
        setError('');
        setAllDay(false);
        handleCloseModal();
    };

    return (
        <Modal
            title="Lịch hẹn mới"
            centered
            okText="Thêm lịch"
            onOk={handleSubmit}
            cancelText={"Hủy"}
            open={modalOpen}
            onCancel={handleCloseModal}
        >
            <form className="space-y-4">
                <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">Tiêu đề</label>
                    <input
                        type="text"
                        placeholder="Nhập tiêu đề lịch hẹn"
                        value={newEventTitle}
                        onChange={(e) => setNewEventTitle(e.target.value)}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                {error && <p className="text-red-500">{error}</p>}

                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">Thời gian bắt đầu</label>
                        <DatePicker
                            showTime
                            value={startDateTime}
                            onChange={(date) => setStartDateTime(date)}
                            className="w-full"
                            format="DD/MM/YYYY HH:mm"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">Thời gian kết thúc</label>
                        <DatePicker
                            showTime
                            value={endDateTime}
                            onChange={(date) => setEndDateTime(date)}
                            className="w-full"
                            format="DD/MM/YYYY HH:mm"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">Mô tả</label>
                    <textarea
                        placeholder="Nhập mô tả lịch hẹn"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[100px]"
                    />
                </div>

                <div className="flex items-center space-x-2">
                    <input
                        type="checkbox"
                        id="allDay"
                        checked={allDay}
                        onChange={(e) => setAllDay(e.target.checked)}
                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <label htmlFor="allDay" className="text-sm font-medium text-gray-700">
                        Sự kiện cả ngày
                    </label>
                </div>
            </form>
        </Modal>
    );
};

export default ModalEvent;
