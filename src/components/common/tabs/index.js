import * as TabsPrimitive from "@radix-ui/react-tabs";
import Activity from "components/activity";
import React from "react";



const tabs = [
    {
        title: "Overview",
        value: "tab1",
    },
    {
        title: "Activity",
        value: "tab2",
    },
];





const Tabs = () => {
    return (
        <TabsPrimitive.Root defaultValue="tab1">
            <TabsPrimitive.List
                className="tabs-list z-0 "
            >
                {tabs.map(({ title, value }) => (
                    <TabsPrimitive.Trigger
                        key={`tab-trigger-${value}`}
                        value={value}
                        className=
                           "tabs-trigger radix-state-active:border-b-[4px] radix-state-active:border-[#1FBAD6] ">
                        <span
                            className="text-sm font-medium text-gray-700">
                            {title}
                        </span>
                    </TabsPrimitive.Trigger>
                ))}
            </TabsPrimitive.List>
            {tabs.map(({ value }) => (
                <TabsPrimitive.Content
                    key={`tab-content-${value}`}
                    value={value}
                    className="rounded-b-lg bg-white py-4"
                >
                    <span className="text-sm text-gray-700">
                        {
                            {
                                tab1: <Activity/> ,
                                tab2: "Make some coffee",
                            }[value]
                        }
                    </span>
                </TabsPrimitive.Content>
            ))}
        </TabsPrimitive.Root>
    );
};

export default Tabs;