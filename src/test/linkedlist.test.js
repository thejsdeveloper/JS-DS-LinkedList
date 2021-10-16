import { LinkedList } from "../linkedlist";

describe("LinkedList", () => {
  const list = new LinkedList();
  let size = 0;

  beforeEach(() => {
    size = list.size();
  });

  test("should be created with size 0", () => {
    expect(list.size()).toBe(0);
  });

  test("should add element 15", () => {
    list.add(15);
    expect(list.size()).toBe(size + 1);
    expect(list.indexOf(15)).toBe(0);
  });

  test("should gethead 15", () => {
    const head = list.getHead();
    expect(head.data).toBe(15);
  });

  test("should get element at 0 to be 15", () => {
    const element = list.getAt(0);
    expect(element).toBe(15);
  });

  test("should add element 10 at end", () => {
    list.add(10);
    expect(list.size()).toBe(size + 1);
    expect(list.indexOf(10)).toBe(1);
  });

  test("should add element 11 and 12 at end and size should be 4", () => {
    list.add(11);
    list.add(12);
    expect(list.size()).toBe(4);
  });

  test("should insertAt 100 at index 1", () => {
    const data = 100;
    list.insertAt(data, 1);
    expect(list.getAt(1)).toBe(data);
    expect(list.size()).toBe(size + 1);
  });

  test("should addFirst 200 to start", () => {
    const data = 200;
    list.addFirst(data);
    expect(list.getAt(0)).toBe(data);
    expect(list.size()).toBe(size + 1);
  });

  test("should addLast 201 to last", () => {
    const data = 201;
    list.addLast(data);
    expect(list.getTail()).toBe(data);
    expect(list.size()).toBe(size + 1);
  });

  test("should removeAt specified index {3}", () => {
    const index = 3;
    const data = list.getAt(index);
    const result = list.removeAt(index);
    expect(result).toBe(data);
    expect(list.size()).toBe(size - 1);
  });

  test("should remove specified element {200}", () => {
    const element = 200;
    const result = list.remove(element);
    expect(result).toBe(element);
    expect(list.size()).toBe(size - 1);
  });

  test("should get indexOf specified element {201}", () => {
    const element = 201;
    const index = list.indexOf(201);
    const result = list.getAt(index);
    expect(result).toBe(element);
  });

  test("should clear list", () => {
    list.clear();
    expect(list.size()).toBe(0);
  });
});
