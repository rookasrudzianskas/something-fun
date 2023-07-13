import groupBy from 'lodash/groupBy';
import filter from 'lodash/filter';
import find from 'lodash/find';

import React, {Component, useEffect, useState} from 'react';
import {Alert} from 'react-native';
import {
  ExpandableCalendar,
  TimelineEventProps,
  TimelineList,
  Timeline,
  CalendarProvider,
  TimelineProps,
  CalendarUtils
} from 'react-native-calendars';

import {timelineEvents, getDate} from '../../data/timelineEvents';

//@ts-nocheck
import {Text, View, StyleSheet} from 'react-native';
import {useRouter, useSearchParams} from "expo-router";


const INITIAL_TIME = {hour: 9, minutes: 0};
const EVENTS: TimelineEventProps[] = timelineEvents;
const START_OF_DAY = 8;
const END_OF_DAY = 18;
const INCREMENTS = 30;

const DoctorScreen = () => {
  const [currentDate, setCurrentDate] = useState(getDate());
  const [eventsByDate, setEventsByDate] = useState(
    groupBy(EVENTS, e => CalendarUtils.getCalendarDateString(e.start)) as {
    [key: string]: TimelineEventProps[];
  });

  const [slots, setSlots] = useState({});

  const { id } = useSearchParams();

  useEffect(() => {
    let timeSlotDate = new Date();
    timeSlotDate.setMinutes(0);
    timeSlotDate.setSeconds(0);
    timeSlotDate.setMilliseconds(0);
    timeSlotDate.setHours(START_OF_DAY);

    let endOfDay = new Date();
    endOfDay.setHours(END_OF_DAY);

    const slots = [];

    while (true) {
      const start = timeSlotDate.toISOString();
      timeSlotDate.setMinutes(timeSlotDate.getMinutes() + INCREMENTS);
      const end = timeSlotDate.toISOString();

      if(timeSlotDate >= endOfDay) {
        break;
      }

      slots.push({
        start,  // `${getDate(-1)} 09:20:00`,
        end,
        title: 'Available Slot',
        summary: 'Merge Timeline Calendar to React Native Calendars'
      });
    }

    setSlots(
      groupBy(slots, e => CalendarUtils.getCalendarDateString(e.start)) as {
      [key: string]: TimelineEventProps[];
        }
      );
  }, []);

  const marked = {
    [`${getDate(-1)}`]: {marked: true},
    [`${getDate()}`]: {marked: true},
    [`${getDate(1)}`]: {marked: true},
    [`${getDate(2)}`]: {marked: true},
    [`${getDate(4)}`]: {marked: true}
  };

  const router = useRouter();

  const onConfirmEventPressHandler = (event: any) => {
    router.replace(`/appointments/${id}`);
  }

  const onEventPressHandler = (event: any) => {
    Alert.alert('Confirm Appointment', `Are you sure you want to book this appointment with doctor - ${id} on ${new Date(event.start).toDateString()} at ${new Date(event.start).toLocaleTimeString()}?`, [
      {
        text: 'Yes',
        onPress: (event) => {
          Alert.alert('Appointment Booked', 'Your appointments has been booked successfully');
          onConfirmEventPressHandler(event);
        }
      },
      {
        text: 'No',
        onPress: () => {
          Alert.alert('Appointment Not Booked', 'Your appointments has not been booked');
        }
      },
    ]);
  }



  const  timelineProps: Partial<TimelineProps> = {
    format24h: true,
    start: START_OF_DAY - 1,
    end: END_OF_DAY + 1,
    // onBackgroundLongPress: createNewEvent,
    // onBackgroundLongPressOut: approveNewEvent,
    // scrollToFirst: true,
    // start: 0,
    // end: 24,
    unavailableHours: [{start: 0, end: 6}, {start: 18, end: 24}],
    overlapEventsSpacing: 8,
    rightEdgeSpacing: 24,
    onEventPress: (event: any) => onEventPressHandler(event),
    };

  const onDateChanged = (date: string) => {
    setCurrentDate(date);
  };

  const onMonthChange = (month: any, updateSource: any) => {
    console.log('TimelineCalendarScreen onMonthChange: ', month, updateSource);
  };

  return (
    <CalendarProvider
      date={currentDate}
      onDateChanged={onDateChanged}
      onMonthChange={onMonthChange}
      showTodayButton
      disabledOpacity={0.6}
      // numberOfDays={3}
    >
      <ExpandableCalendar
        firstDay={1}
        leftArrowImageSource={require('../../data/previous.png')}
        rightArrowImageSource={require('../../data/next.png')}
        markedDates={marked}
      />
      <TimelineList
        events={slots}
        timelineProps={timelineProps}
        showNowIndicator
        // scrollToNow
        scrollToFirst
        initialTime={INITIAL_TIME}
      />
    </CalendarProvider>
  );
};

export default DoctorScreen;
