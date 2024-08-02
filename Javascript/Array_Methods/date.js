// const d = new Date()
// console.log(d.toString())
// console.log(d.toDateString())
// console.log(d.toTimeString())
// console.log(d.toLocaleString())
// console.log(d.toUTCString())
// console.log(d.toISOString())

// const d1 = new Date("2024-03-12")
// console.log(d1)

let value = {
    "People": [
        {
            "id": "12",
            "parentId": "0",
            "text": "Man",
            "level": "1",
            "children": [
                {
                    "id": "6",
                    "parentId": "12",
                    "text": "Boy",
                    "level": "2",
                    "children": null
                },
                {
                    "id": "7",
                    "parentId": "12",
                    "text": "Other",
                    "level": "2",
                    "children": null
                }
            ]
        },
        {
            "id": "9",
            "parentId": "0",
            "text": "Woman",
            "level": "1",
            "children":
          [  {
                "id": "11",
                "parentId": "9",
                "text": "Girl",
                "level": "2",
                "children": null
            }]
        }
    ],
    "Animals": [
        {
            "id": "5",
            "parentId": "0",
            "text": "Dog",
            "level": "1",
            "children":
                {
                    "id": "8",
                    "parentId": "5",
                    "text": "Puppy",
                    "level": "2",
                    "children": null
                }
        },
        {
            "id": "10",
            "parentId": "13",
            "text": "Cat",
            "level": "1",
            "children":
            {
                "id": "14",
                "parentId": "13",
                "text": "Kitten",
                "level": "2",
                "children": null
            }
        }
    ]
}

const a = value.People;
console.log(a.flatMap((x) => x.map((e) => e.id)));