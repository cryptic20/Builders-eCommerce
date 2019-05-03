import * as React from "react";

import PageHeader from "../../components/PageHeader";
import i18n from "../../i18n";

const DashboardPage = () => (
    <PageHeader title={i18n.t("Analytics")} />
);

DashboardPage.displayName = "DashboardPage";
export default DashboardPage;
