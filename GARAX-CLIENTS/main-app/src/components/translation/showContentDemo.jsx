import { useTranslation } from "react-i18next";

export default function ShowContentDemo() {
  const { t } = useTranslation();

  return (
    <div className="container text-center">
      <h1 className="my-3">React i18n</h1>
      <button className="btn btn-primary me-2">Change language EN - VI</button>
      <span className="badge rounded-pill text-bg-danger me-1">
        {t("common.button.search")}
      </span>
      <span className="badge rounded-pill text-bg-danger me-1">
        {t("common.button.cancel")}
      </span>
      <span className="badge rounded-pill text-bg-danger me-1">
        {t("common.button.delete")}
      </span>
      <span className="badge rounded-pill text-bg-danger me-1">
        {t("common.button.save")}
      </span>
    </div>
  );
}
