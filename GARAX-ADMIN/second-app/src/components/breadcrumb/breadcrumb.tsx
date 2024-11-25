import { HomeOutlined, UserOutlined } from "@ant-design/icons";
import { Breadcrumb } from "antd";

// import uppercaseFirstCharacter from "../../helpers/uppercaseFirstCharacter";

function Breadcrumbs() {
    // const paths = window.location.pathname.split("/").slice(1);

    // const breadcrumbs = [];
    // paths.map((p, index) => {
    //     breadcrumbs.push({
    //         title: `${p}`,
    //         link: `/${paths.slice(0, index + 1).join("/")}`,
    //     });
    // });

    return (
        <div className="text-black">
            <Breadcrumb
                items={[
                    {
                        href: "",
                        title: <HomeOutlined />,
                    },
                    {
                        href: "",
                        title: (
                            <>
                                <UserOutlined />
                                <span>Application List</span>
                            </>
                        ),
                    },
                    {
                        title: "Application",
                    },
                ]}
            />
        </div>
    );
}

export default Breadcrumbs;
