const adminroutes2 = [
    {
        name: "Dashboard",
        path: "dashboard",
        element: "ADMIN_DASHBOARD",
    },
    {
        name: "User Management",
        children: [
            {
                name: "Create Admin",
                path: "create-admin",
                element: "CREATE_ADMIN",
            },
            {
                name: "Create Sttudent",
                path: "create-student",
                element: "CREATE_STUDENT",
            },
            {
                name: "Create Facuty",
                path: "create-faculty",
                element: "CREATE_FACULTY",
            },
        ],
    },
];
const newArray = adminroutes2.reduce((acc, item) => {
    if (item.path && item.name) {
        acc.push({
            key: item.name,
            label: "NAVLINK"
        })
    }
    if (item.children) {
        acc.push({
            key: item.name,
            label: item.name,
            children: item.children.map(child => ({
                key: child.name,
                label: "Navbar"
            }))

        })
    }
    return acc;
}, [])


// const newArray = adminroutes2.reduce((acc, item) => {
//     if (item.path && item.element) {
//         acc.push({
//             path: item.path,
//             element: item.element
//         })
//     }
//     if (item.Children) {
//         item.Children.forEach(child => {
//             acc.push({
//                 path: child.path,
//                 element: child.element
//             })
//         })
//     }
//     return acc;
// }, [])

console.log(newArray)