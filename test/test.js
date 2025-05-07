const data = [
    {
        id: 1,
        name: "Data Stucture",
        type: "folder",
        children: [
            {
                id: 2,
                name: "Arrays",
                type: "file",
                content: {
                    title: "Arrays",
                    links: [
                        "https://www.geeksforgeeks.org/data-structures/arrays/",
                        "https://www.tutorialspoint.com/data_structures_algorithms/data_structures_arrays.htm",
                        "https://www.javatpoint.com/data-structure-array",
                    ],
                    tags: [
                        "Data Structure",
                        "Arrays",
                        "Linear Data Structure",
                        "Static Data Structure",
                    ],
                    notes: "An array is a collection of items stored at contiguous memory locations. The idea is to store multiple items of the same type together. It is a linear data structure where elements are stored in a sequential manner. Arrays are used to implement other data structures like stacks, queues, heaps, etc.",
                    code: [
                        `public class Main {\n    public static void main(String[] args) {\n        int[] arr = {1, 2, 3, 4, 5};\n        for (int i : arr) {\n            System.out.print(i + " ");\n        }\n    }\n}`,
                    ],
                },
            },
            {
                id: 3,
                name: "Linked List",
                type: "file",
                content:
                    "A linked list is a linear data structure where each element is a separate object. Each element (usually called a node) of a list is comprising of two items: the data and a reference (or link) to the next node in the sequence.",
            },
        ],
    },
    {
        id: 4,
        name: "Algorithms",
        type: "folder",
        children: [
            {
                id: 5,
                name: "Basic",
                type: "folder",
                children: [
                    {
                        id: 6,
                        name: "Sorting",
                        type: "file",
                        content:
                            "Sorting is the process of arranging the elements of a list or array in a certain order, typically in ascending or descending order.",
                    },
                    {
                        id: 7,
                        name: "Searching",
                        type: "file",
                        content:
                            "Searching is the process of finding a specific element in a data structure. Common searching algorithms include linear search and binary search.",
                    },
                ],
            },
        ],
    },
];
