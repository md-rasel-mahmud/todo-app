const useTaskList = () => {
  const allTaskList = [
    {
      id: 1,
      todoTitle: "Lorem ipsum dolor sit amet consectetur.",
      taskList: [
        {
          taskName: "task1",
          creatorName: "Rasel Mahmud",
          createdAt: new Date().toLocaleDateString(),
          deadline: new Date().toLocaleDateString(),
          status: "pending",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente ipsum delectus, totam non neque libero voluptatibus. Debitis fugiat explicabo quaerat.",
        },
        {
          taskName: "task2",
          creatorName: "Rasel Mahmud",
          createdAt: new Date().toLocaleDateString(),
          deadline: new Date().toLocaleDateString(),
          status: "pending",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente ipsum delectus, totam non neque libero voluptatibus. Debitis fugiat explicabo quaerat.",
        },
        {
          taskName: "task3",

          creatorName: "Rasel Mahmud",
          createdAt: new Date().toLocaleDateString(),
          deadline: new Date().toLocaleDateString(),
          status: "pending",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente ipsum delectus, totam non neque libero voluptatibus. Debitis fugiat explicabo quaerat.",
        },
      ],
    },
    {
      id: 2,
      todoTitle: "Lorem ipsum dolor sit amet.",
      taskList: [
        {
          taskName: "create a to do app 1",
          creatorName: "Rasel Mahmud",
          createdAt: new Date().toLocaleDateString(),
          deadline: new Date().toLocaleDateString(),
          status: "pending",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente ipsum delectus, totam non neque libero voluptatibus. Debitis fugiat explicabo quaerat.",
        },
        {
          taskName: "create a to do app 2",
          creatorName: "Rasel Mahmud",
          createdAt: new Date().toLocaleDateString(),
          deadline: new Date().toLocaleDateString(),
          status: "pending",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente ipsum delectus, totam non neque libero voluptatibus. Debitis fugiat explicabo quaerat.",
        },
        {
          taskName: "create a to do app 2",
          creatorName: "Rasel Mahmud",
          createdAt: new Date().toLocaleDateString(),
          deadline: new Date().toLocaleDateString(),
          status: "pending",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente ipsum delectus, totam non neque libero voluptatibus. Debitis fugiat explicabo quaerat.",
        },
      ],
    },

    {
      id: 3,
      todoTitle: "Lorem ipsum dolor sit.",
      taskList: [
        {
          taskName: "create a to do app 1",
          creatorName: "Rasel Mahmud",
          createdAt: new Date().toLocaleDateString(),
          deadline: new Date().toLocaleDateString(),
          status: "pending",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente ipsum delectus, totam non neque libero voluptatibus. Debitis fugiat explicabo quaerat.",
        },
      ],
    },
  ];

  return [allTaskList];
};

export default useTaskList;
