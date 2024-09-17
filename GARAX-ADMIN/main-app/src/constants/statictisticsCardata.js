import {
    BanknotesIcon,
    UserPlusIcon,
    UsersIcon,
    ChartBarIcon,
  } from "@heroicons/react/24/solid";
  
  export const statisticsCardsData = [
    {
      color: "gray",
      icon: BanknotesIcon,
      title: "Today's money",
      value: "$7,265k",
      footer: {
        color: "text-green-500",
        value: "+11.02%",
        label: "than last week",
      },
    },
    {
      color: "gray",
      icon: UsersIcon,
      title: "Visits",
      value: "3,671",
      footer: {
        color: "text-green-500",
        value: "-0.03%",
        label: "than last month",
      },
    },
    {
      color: "gray",
      icon: UserPlusIcon,
      title: "New Clients",
      value: "156",
      footer: {
        color: "text-red-500",
        value: "+15.03%",
        label: "than yesterday",
      },
    },
    {
      color: "gray",
      icon: ChartBarIcon,
      title: "Total sales",
      value: "$222,318",
      footer: {
        color: "text-green-500",
        value: "+6.08%",
        label: "than yesterday",
      },
    },
  ];
  
  export default statisticsCardsData;
  