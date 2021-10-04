import Button from "@material-ui/core/Button";
import { Grid, Typography } from "@material-ui/core";
import { FormattedMessage } from "react-intl";

const Empresas = () => {
  return (
    <div>
      <Button variant="contained" className="dona_empresas">
        <FormattedMessage id="banner.botonEmpresas" defaultMessage="Empresas" />
      </Button>
    </div>
  );
};

export default Empresas;
