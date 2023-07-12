import groupBy from 'lodash/groupBy';
import filter from 'lodash/filter';
import find from 'lodash/find';

import React, {Component, useEffect, useState} from 'react';
import {Alert} from 'react-native';
import {
  ExpandableCalendar,
  TimelineEventProps,
  TimelineList,
  CalendarProvider,
  TimelineProps,
  CalendarUtils
} from 'react-native-calendars';

import {timelineEvents, getDate} from '../../data/timelineEvents';

//@ts-nocheck
import {Text, View, StyleSheet} from 'react-native';
import {useSearchParams} from "expo-router";


const INITIAL_TIME = {hour: 9, minutes: 0};
const EVENTS: TimelineEventProps[] = timelineEvents;
const START_OF_DAY = 8;
const END_OF_DAY = 18;

const DoctorScreen = () => {
  const [currentDate, setCurrentDate] = useState(getDate());
  const [eventsByDate, setEventsByDate] = useState(
    groupBy(EVENTS, e => CalendarUtils.getCalendarDateString(e.start)) as {
    [key: string]: TimelineEventProps[];
  });

  const { id } = useSearchParams();

  useEffect(() => {

  }, [])

  const marked = {
    [`${getDate(-1)}`]: {marked: true},
    [`${getDate()}`]: {marked: true},
    [`${getDate(1)}`]: {marked: true},
    [`${getDate(2)}`]: {marked: true},
    [`${getDate(4)}`]: {marked: true}
  };



  const  timelineProps: Partial<TimelineProps> = {
    format24h: true,
    // onBackgroundLongPress: createNewEvent,
    // onBackgroundLongPressOut: approveNewEvent,
    // scrollToFirst: true,
    // start: 0,
    // end: 24,
    unavailableHours: [{start: 0, end: 6}, {start: 18, end: 24}],
    overlapEventsSpacing: 8,
    rightEdgeSpacing: 24,
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
        events={eventsByDate}
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
