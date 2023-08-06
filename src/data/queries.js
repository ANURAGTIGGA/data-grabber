const preDefinedQueries = [
    {
        id: 1,
        query : "select * from customers where title == 'Owner'",
        condition: {
            key: "contactTitle",
            value: "Owner"
        }
    },
    {
        id: 2,
        query : "select * from customers where title == 'Marketing Manager'",
        condition: {
            key: "contactTitle",
            value: "Marketing Manager"
        }
    },
    {
        id: 3,
        query : "select * from customers where title == 'Order Administrator'",
        condition: {
            key: "contactTitle",
            value: "Order Administrator"
        }
    }
]

export default preDefinedQueries;