import { FormContactUs } from "./components";

export function ContactUsPage() {
    return (
        <div className="md:w-[1222px] bg-white h-[100%] min-h-40 md:py-[84px]">
            <div>
                <h1 className="text-black text-3xl font-bold">Đội ngũ chăm sóc khách hàng GARAX</h1>
            </div>
            <FormContactUs />
        </div>
    );
}