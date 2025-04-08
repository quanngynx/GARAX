"use client";

import { ReactNode, Fragment } from "react";

import { usePathname } from "next/navigation";
import Link from "next/link";

type TBreadCrumbProps = {
    homeElement: ReactNode;
    separator: ReactNode;
    parentClasses?: string;
    childClasses?: string;
    activeClasses?: string;
    capitalizeLinks?: boolean;
};

const CommonBreadcrumbs = ({
    homeElement,
    separator,
    parentClasses,
    childClasses,
    activeClasses,
    capitalizeLinks,
}: TBreadCrumbProps) => {
    const paths = usePathname();
    const pathNames = paths.split("/").filter((path) => path);

    return (
        <div className="">
            <ul className={parentClasses}>
                <li className={childClasses}>
                    <Link href={"/"}>{homeElement}</Link>
                </li>
                {pathNames.length > 0 && separator}
                {pathNames.map((link, index) => {
                    const href = `/${pathNames.slice(0, index + 1).join("/")}`;
                    const itemClasses = (paths === href)
                        ? `${childClasses} ${activeClasses}`
                        : childClasses;
                    const itemLink = capitalizeLinks
                        ? link[0].toUpperCase() + link.slice(1, link.length)
                        : link;
                    return (
                        <Fragment key={index}>
                            <li className={itemClasses}>
                                <Link href={href}>{itemLink}</Link>
                            </li>
                            {pathNames.length !== index + 1 && separator}
                        </Fragment>
                    );
                })}
            </ul>
        </div>
    );
};

export default CommonBreadcrumbs;
