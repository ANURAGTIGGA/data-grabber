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
        query : "select * from customers where country == 'Germany'",
        condition: {
            key: "address.country",
            value: "Germany"
        }
    }
]

export default preDefinedQueries;