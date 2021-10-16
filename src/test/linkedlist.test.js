import { LinkedList } from "../linkedlist";

describe("LinkedList", () => {
  const list = new LinkedList();

  test("should be created with size 0", () => {
    expect(list.size()).toBe(0);
  });

  test("should add element 15", () => {
    list.add(15);
    expect(list.size()).toBe(1);
    expect(list.indexOf(15)).toBe(0);
  });

  test("should add element 10 at end", () => {
    list.add(10);
    expect(list.size()).toBe(2);
    expect(list.indexOf(10)).toBe(1);
  });

  test("should add element 11 and 12 at end and size should be 4", () => {
    list.add(11);
    list.add(12);
    expect(list.size()).toBe(4);
  });
});
