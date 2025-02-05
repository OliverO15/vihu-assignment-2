import { describe, expect, test } from 'vitest';
import { add, getCurrentYear, isDateBefore, isSameDay, isWithinRange } from '../dateUtils';
import { DATE_UNIT_TYPES } from '../constants';

describe("Date Utils", () => {
  // Get Curr Year
  test("getCurrentYear", () => {
    expect(getCurrentYear()).toBe(new Date().getFullYear());
  });

  // Add
  test("add - day", () => {
    const date = new Date(2025, 0, 1);
    expect(add(date, 1)).toEqual(new Date(2025, 0, 2));
  });

  test("add - month", () => {
    const date = new Date(2025, 0, 1);
    expect(add(date, 1, DATE_UNIT_TYPES.MONTHS)).toEqual(new Date(2025, 1, 1));
  });

  test("add - year", () => {
    const date = new Date(2025, 0, 1);
    expect(add(date, 1, DATE_UNIT_TYPES.YEARS)).toEqual(new Date(2026, 0, 1));
  });

  // isWithinRange
  test("isWithinRange - days", () => {
    const date = new Date(2025, 0, 15);
    const from = new Date(2025, 0, 1);
    const to = new Date(2025, 1, 1);
    expect(isWithinRange(date, from, to)).toBe(true);
  });

  test("isWithinRange - minutes", () => {
    const date = new Date(2025, 0, 15, 23, 49);
    const from = new Date(2025, 0, 15, 23, 15);
    const to = new Date(2025, 0, 16, 0, 2);
    expect(isWithinRange(date, from, to)).toBe(true);
  });

  // isDateBefore
  test("isDateBefore", () => {
    const date = new Date(2025, 0, 15);
    const compareDate = new Date(2025, 0, 16);
    expect(isDateBefore(date, compareDate)).toBe(true);
  });

  test("isDateBefore - same date", () => {
    const date = new Date(2025, 0, 15);
    const compareDate = new Date(2025, 0, 15);
    expect(isDateBefore(date, compareDate)).toBe(false);
  });

  // isSameDay
  test("isSameDay", () => {
    const date = new Date(2025, 0, 15);
    const compareDate = new Date(2025, 0, 15);
    expect(isSameDay(date, compareDate)).toBe(true);
  });

  test("isSameDay - different date", () => {
    const date = new Date(2025, 0, 15);
    const compareDate = new Date(2025, 0, 16);
    expect(isSameDay(date, compareDate)).toBe(false);
  });
});
