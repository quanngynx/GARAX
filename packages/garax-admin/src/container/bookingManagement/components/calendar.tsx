"use client"

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import React, {useEffect, useState} from "react";
import {DateSelectArg, EventApi, EventClickArg, formatDate,} from "@fullcalendar/core";
import interactionPlugin from '@fullcalendar/interaction';
import ModalEvent from "@/container/bookingManagement/components/modalEvent";
import "./calendar.css"

interface EventData {
    title?: string;
    start?: string;
    end?: string;
    description?: string;
    allDay?: boolean;
}
 
const Calendar = () => {
    const [currentEvents, setCurrentEvents] = useState<EventApi[]>([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [newEventTitle, setNewEventTitle] = useState<string>("");
    const [selectedDate, setSelectedDate] = useState<DateSelectArg | null>(null);
    
    useEffect(() => {
        if (typeof window !== "undefined"){
            // TODO: get events from API
        }
    })

    const handleDateClick = (selected: DateSelectArg) => {
        setSelectedDate(selected);
        setModalOpen(true);
    };

    const handleEventClick = (selected: EventClickArg) => {
        // Prompt user for confirmation before deleting an event
        if (
            window.confirm(
                `Are you sure you want to delete the event "${selected.event.title}"?`
            )
        ) {
            selected.event.remove();
        }
    };
    
    const handleAddEvent = (eventData: EventData) => {
        if (eventData.title && selectedDate) {
            const calendarApi = selectedDate.view.calendar;
            calendarApi.unselect();

            const newEvent = {
                id: `${selectedDate.start.toISOString()}-${eventData.title}`,
                title: newEventTitle,
                start: selectedDate.start,
                end: selectedDate.end,
                allDay: selectedDate.allDay,
                description: eventData.description,
            };

            calendarApi.addEvent(newEvent);
            handleCloseModal();
        }
    };

    const handleCloseModal = () => {
        setModalOpen(false);
        setNewEventTitle("");
    };
    
    return (
        <div>
            <div className="flex w-full justify-start items-start gap-8">
                <div className="w-3/12">
                    <div className="py-10 text-2xl font-extrabold px-7">
                        Calendar Events
                    </div>
                    <ul className="space-y-4">
                        {currentEvents.length <= 0 && (
                            <div className="italic text-center text-gray-400">
                                No Events Present
                            </div>
                        )}

                        {currentEvents.length > 0 &&
                            currentEvents.map((event: EventApi) => (
                                <li
                                    className="border border-gray-200 shadow px-4 py-2 rounded-md text-blue-800"
                                    key={event.id}
                                >
                                    {event.title}
                                    <br />
                                    <label className="text-slate-950">
                                        {formatDate(event.start!, {
                                            year: "numeric",
                                            month: "short",
                                            day: "numeric",
                                        })}{" "}
                                        {/* Format event start date */}
                                    </label>
                                </li>
                            ))}
                    </ul>
                </div>
                <div className="w-9/12 mt-8">
                    <FullCalendar
                        plugins={[ dayGridPlugin, interactionPlugin]}
                        initialView="dayGridMonth"
                        headerToolbar={{
                            left: 'prev,next today',
                            center: 'title',
                            right: 'dayGridMonth,dayGridWeek,dayGridDay'
                        }}
                        editable={true} // Allow events to be edited.
                        selectable={true} // Allow dates to be selectable.
                        selectMirror={true} // Mirror selections visually.
                        dayMaxEvents={true} // Limit the number of events displayed per day.
                        select={handleDateClick} // Handle date selection to create new events.
                        eventClick={handleEventClick} // Handle clicking on events (e.g., to delete them).
                        eventsSet={(events) => setCurrentEvents(events)} // Update state with current events whenever they change.
                        initialEvents={
                            typeof window !== "undefined"
                                ? JSON.parse(localStorage.getItem("events") || "[]")
                                : []
                        }
                    />
                    
                </div>
                
                <ModalEvent
                    modalOpen={modalOpen}
                    setModalOpen={setModalOpen}
                    handleAddEvent={handleAddEvent}
                    handleCloseModal={handleCloseModal}
                />
            </div>
        </div>
    )
}

export default Calendar;