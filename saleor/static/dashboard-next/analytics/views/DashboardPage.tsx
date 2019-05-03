import * as React from "react";

import Container from "../../components/Container";
import PageHeader from "../../components/PageHeader";
import i18n from "../../i18n";

const DashboardPage = () => (
  <Container width="md">
    <PageHeader title={i18n.t("Analytics")} />
  </Container>
);

DashboardPage.displayName = "DashboardPage";
export default DashboardPage;
