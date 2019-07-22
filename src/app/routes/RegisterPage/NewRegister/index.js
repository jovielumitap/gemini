import React from "react";
import { Modal, ModalHeader } from "reactstrap";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import TextField from "@material-ui/core/TextField";
import IntlMessages from "util/IntlMessages";
import FormControl from "@material-ui/core/FormControl";
import Chip from "@material-ui/core/Chip";
import InputMask from "react-input-mask";
import BootstrapInput from 'components/BootstrapInput';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
};

const OTHER_CATEGORY = [
  "ELECTRICIAN",
  "BRICKLAYER",
  "PAINTER",
  "BLACKSMITH",
  "CHIMMEY SWEEP",
  "PLUMBER",
  "PURGE SEWERAGE",
  "CLEANING",
  "RODENT CONTROL"
];

class NewRegister extends React.Component {


  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };
  beforeMaskedValueChangeMobile = name => (newState, oldState, userInput) => {
    let { value } = newState;
    let selection = newState.selection;
    let cursorPosition = selection ? selection.start : null;

    // keep minus if entered by user
    if (name === "mobile") {
      if (value.endsWith("-") && userInput !== "-" && !this.state.mobile.endsWith("-")) {
        if (cursorPosition === value.length) {
          cursorPosition--;
          selection = { start: cursorPosition, end: cursorPosition };
        }
        value = value.slice(0, -1);
      }
    } else {
      if (value.endsWith("-") && userInput !== "-" && !this.state.phone.endsWith("-")) {
        if (cursorPosition === value.length) {
          cursorPosition--;
          selection = { start: cursorPosition, end: cursorPosition };
        }
        value = value.slice(0, -1);
      }
    }


    return {
      value,
      selection
    };
  };
  renderCategory = (userType) => {
    const { category } = this.state;
    switch (userType) {
      case "maintainer":
        return (
          <div className="row col-md-12 col-12 p-0 mb-2">
            <div className="col-md-4 text-right p-relative">
              <label className="align-center font-size-18">Category</label>
            </div>
            <div className="col-md-8 p-0">
              <FormControl className="w-100 mb-2">
                <Select
                  value={category}
                  onChange={this.handleChange("category")}
                  input={<BootstrapInput/>}
                >
                  <MenuItem value={"category1"}>ELECTRICIAN</MenuItem>
                  <MenuItem value={"category2"}>BRICKLAYER</MenuItem>
                  <MenuItem value={"category3"}>PAINTER</MenuItem>
                  <MenuItem value={"category4"}>BLACKSMITH</MenuItem>
                  <MenuItem value={"category5"}>CHIMNEY SWEEP</MenuItem>
                  <MenuItem value={"category6"}>PLUMBER</MenuItem>
                  <MenuItem value={"category7"}>PURGE SEWERAGE</MenuItem>
                  <MenuItem value={"category8"}>CLEANING</MenuItem>
                  <MenuItem value={"category9"}>RODENT CONTROL</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>

        );
      case "professional":
        return (
          <div className="row col-md-12 col-12 p-0 mb-2">
            <div className="col-md-4 text-right p-relative">
              <label className="align-center font-size-18">Category</label>
            </div>
            <div className="col-md-8 p-0">
              <FormControl className="w-100 mb-2">
                <Select
                  value={category}
                  onChange={this.handleChange("category")}
                  input={<Input/>}
                >
                  <MenuItem value={"category1"}>ARCHITECT</MenuItem>
                  <MenuItem value={"category2"}>SURVEYOR ENGINEER</MenuItem>
                  <MenuItem value={"category3"}>LAWYER BUSINESS</MenuItem>
                  <MenuItem value={"category4"}>CONSULTANT ENERGY</MenuItem>
                  <MenuItem value={"category5"}>MANAGER</MenuItem>
                  <MenuItem value={"category6"}>AGRONOMIST LABOR</MenuItem>
                  <MenuItem value={"category7"}>CONSULTANT</MenuItem>
                  <MenuItem value={"category8"}>EXPERT</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>

        );
      case "stockist":
        return (
          <div className="row col-md-12 col-12 p-0 mb-2">
            <div className="col-md-4 text-right p-relative">
              <label className="align-center font-size-18">Category</label>
            </div>
            <div className="col-md-8 p-0">
              <FormControl className="w-100 mb-2">
                <Select
                  value={category}
                  onChange={this.handleChange("category")}
                  input={<Input/>}
                >
                  <MenuItem value={"category1"}>BUILDING PRODUCT</MenuItem>
                  <MenuItem value={"category2"}>HARDWARE</MenuItem>
                  <MenuItem value={"category3"}>ELECTRICAL SYSTEM</MenuItem>
                  <MenuItem value={"category4"}>HYDRAULIC SYSTEMS AND HEATING</MenuItem>
                  <MenuItem value={"category5"}>GARDENING</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>

        );
      default:
        return null;

    }

  };
  constructor(props) {
    super(props);
    console.log({ NewRegister: props });
    this.state = {
      userType: props.userType,
      id: "",
      category: "",
      firstName: "",
      lastName: "",
      address: "",
      homeNumber: "",
      zip_code: "",
      city: "",
      province: "",
      codFisc: "",
      mobile: "",
      email: "",
      phone: "",
      pec: "",
      cuu: "",
      plva: "",
      otherCategory: [],
      building: ""
    };
  }
  render() {
    const { onRegisterClose, open, register } = this.props;
    const {
      userType,
      id,
      category,
      firstName,
      lastName,
      address,
      homeNumber,
      zip_code,
      city,
      province,
      codFisc,
      mobile,
      email,
      phone,
      otherCategory,
      pec,
      cuu,
      plva,
      building
    } = this.state;

    return (
      <Modal className="modal-box" isOpen={open}>
        <ModalHeader className="modal-box-header bg-primary text-white">
          {register === null ? "New Register" :
            "Save Register"}
          <IconButton className="text-white"
                      onClick={onRegisterClose}>
            <CloseIcon/>
          </IconButton>
        </ModalHeader>

        <div className="modal-box-content p-lg-5">
          <div className="row no-gutters">
            <div className="col-lg-12 d-flex flex-column order-lg-1">
              <form className="row" noValidate autoComplete="off">

                {this.renderCategory(userType)}
                <div className="row col-md-12 col-12 p-0 mb-2">
                  <div className="col-md-4 text-right p-relative">
                    <label className="align-center font-size-18">First Name</label>
                  </div>
                  <div className="col-md-8 p-0">
                    <input
                        className='form-control form-control-lg'
                        onChange={this.handleChange("firstName")}
                        value={firstName}
                    />
                  </div>
                </div>
                <div className="row col-md-12 col-12 p-0 mb-2">
                  <div className="col-md-4 text-right p-relative">
                    <label className="align-center font-size-18">Last Name</label>
                  </div>
                  <div className="col-md-8 p-0">
                    <input
                        className='form-control form-control-lg'
                        onChange={this.handleChange("lastName")}
                        value={lastName}
                    />
                  </div>
                </div>
                <div className="row col-md-12 col-12 p-0 mb-2">
                  <div className="col-md-4 text-right p-relative">
                    <label className="align-center font-size-18">Address</label>
                  </div>
                  <div className="col-md-8 p-0">
                    <input
                        className='form-control form-control-lg'
                        onChange={this.handleChange("address")}
                        value={address}
                    />
                  </div>
                </div>
                <div className="row col-md-12 col-12 p-0 mb-2">
                  <div className="col-md-4 text-right p-relative">
                    <label className="align-center font-size-18">Home Number</label>
                  </div>
                  <div className="col-md-8 p-0">
                    <input
                        className='form-control form-control-lg'
                        onChange={this.handleChange("homeNumber")}
                        value={homeNumber}
                    />
                  </div>
                </div>
                <div className="row col-md-12 col-12 p-0 mb-2">
                  <div className="col-md-4 text-right p-relative">
                    <label className="align-center font-size-18">ZIP CODE</label>
                  </div>
                  <div className="col-md-8 p-0">
                    <input
                        className='form-control form-control-lg'
                        type={"number"}
                        onChange={this.handleChange("zip_code")}
                        value={zip_code}
                    />
                  </div>
                </div>

                <div className="row col-md-12 col-12 p-0 mb-2">
                  <div className="col-md-4 text-right p-relative">
                    <label className="align-center font-size-18">City</label>
                  </div>
                  <div className="col-md-8 p-0">
                    <input
                        className='form-control form-control-lg'
                        onChange={this.handleChange("city")}
                        value={city}
                    />
                  </div>
                </div>

                <div className="row col-md-12 col-12 p-0 mb-2">
                  <div className="col-md-4 text-right p-relative">
                    <label className="align-center font-size-18">Province</label>
                  </div>
                  <div className="col-md-8 p-0">
                    <input
                        className='form-control form-control-lg'
                        onChange={this.handleChange("province")}
                        value={province}
                    />
                  </div>
                </div>

                <div className="row col-md-12 col-12 p-0 mb-2">
                  <div className="col-md-4 text-right p-relative">
                    <label className="align-center font-size-18">Cod.Fisc.</label>
                  </div>
                  <div className="col-md-8 p-0">
                    <input
                        className='form-control form-control-lg'
                        onChange={this.handleChange("codFisc")}
                        value={codFisc}
                    />
                  </div>
                </div>

                {userType === "maintainer" || userType === "professional" || userType === "stockist" || userType === "tenant" || userType === "landlord" ?
                  <div className="row col-md-12 col-12 p-0 mb-2">
                    <div className="col-md-4 text-right p-relative">
                      <label className="align-center font-size-18">P.lva</label>
                    </div>
                    <div className="col-md-8 p-0">
                      <input
                          className='form-control form-control-lg'
                          onChange={this.handleChange("plva")}
                          value={plva}
                      />
                    </div>
                  </div>
                  : null
                }


                <div className="row col-md-12 col-12 p-0 mb-2">
                  <div className="col-md-4 text-right p-relative">
                    <label className="align-center font-size-18">Mobile</label>
                  </div>
                  <div className="col-md-8 p-0">
                    <FormControl className="w-100 mb-2">
                      <InputMask
                        mask="(3\9) 3999-999-999"
                        maskChar={null}
                        value={mobile}
                        onChange={this.handleChange("mobile")}
                        beforeMaskedValueChange={this.beforeMaskedValueChangeMobile("mobile")}
                      >
                        {(inputProps) => <input
                            {...inputProps}
                            className='form-control form-control-lg'
                        />}
                      </InputMask>
                    </FormControl>
                  </div>
                </div>

                <div className="row col-md-12 col-12 p-0 mb-2">
                  <div className="col-md-4 text-right p-relative">
                    <label className="align-center font-size-18">Phone</label>
                  </div>
                  <div className="col-md-8 p-0">
                    <FormControl className="w-100 mb-2">
                      <InputMask
                        mask="(3\9) 0999-999-999"
                        maskChar={null}
                        value={phone}
                        onChange={this.handleChange("phone")}
                        beforeMaskedValueChange={this.beforeMaskedValueChangeMobile("phone")}
                      >
                        {(inputProps) =>
                            <input
                                {...inputProps}
                                className='form-control form-control-lg'
                          />}
                      </InputMask>
                    </FormControl>
                  </div>
                </div>

                <div className="row col-md-12 col-12 p-0 mb-2">
                  <div className="col-md-4 text-right p-relative">
                    <label className="align-center font-size-18">Email</label>
                  </div>
                  <div className="col-md-8 p-0">
                    <input
                        className='form-control form-control-lg'
                        onChange={this.handleChange("email")}
                        value={email}
                    />
                  </div>
                </div>

                {userType === "signaling" ?
                  <div className="row col-md-12 col-12 p-0 mb-2">
                    <div className="col-md-4 text-right p-relative">
                      <label className="align-center font-size-18">Building</label>
                    </div>
                    <div className="col-md-8 p-0">
                      <FormControl className="w-100 mb-2">
                        <Select
                          value={building}
                          onChange={this.handleChange("building")}
                          input={<BootstrapInput/>}
                        >
                          <MenuItem value={"building1"}>Building 1</MenuItem>
                          <MenuItem value={"building2"}>Building 2</MenuItem>
                          <MenuItem value={"building3"}>Building 3</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </div>
                  : null
                }
                {userType === "maintainer" || userType === "professional" || userType === "stockist" || userType === "tenant" || userType === "landlord" ?
                  <div className="row col-md-12 col-12 p-0 mb-2">
                    <div className="col-md-4 text-right p-relative">
                      <label className="align-center font-size-18">PEC</label>
                    </div>
                    <div className="col-md-8 p-0">
                      <input
                          className='form-control form-control-lg'
                          onChange={this.handleChange("pec")}
                          value={pec}
                      />
                    </div>
                  </div>
                  : null
                }
                {userType === "maintainer" || userType === "professional" || userType === "stockist" || userType === "tenant" || userType === "landlord" ?
                  <div className="row col-md-12 col-12 p-0 mb-2">
                    <div className="col-md-4 text-right p-relative">
                      <label className="align-center font-size-18">CUU</label>
                    </div>
                    <div className="col-md-8 p-0">
                      <input
                          className='form-control form-control-lg'
                          type={"number"}
                          onChange={this.handleChange("cuu")}
                          value={cuu}
                      />
                    </div>
                  </div>
                  : null
                }

                {userType === "collaborator" || userType === "maintainer" || userType === "professional" || userType === "stockist" ?
                  <div className="row col-md-12 col-12 p-0 mb-2">
                    <div className="col-md-4 text-right p-relative">
                      <label className="align-center font-size-18">Category to manage</label>
                    </div>
                    <div className="col-md-8 p-0">
                      <FormControl className="w-100 mb-2">
                        <Select
                          multiple
                          value={otherCategory}
                          onChange={this.handleChange("otherCategory")}
                          input={<BootstrapInput/>}
                          renderValue={selected => (
                            <div className="d-flex flex-wrap">
                              {selected.map(value => (
                                <Chip key={value} label={value} className="m-2"/>
                              ))}
                            </div>
                          )}
                          MenuProps={MenuProps}
                        >
                          {OTHER_CATEGORY.map(category => (
                            <MenuItem key={category} value={category}>
                              {category}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </div>
                  </div>
                  : null
                }


              </form>
            </div>
          </div>
        </div>

        <div className="modal-box-footer d-flex flex-row">
          <Button variant="contained" color="primary" onClick={() => {
            onRegisterClose();
          }}>Save Register</Button>
        </div>
      </Modal>
    );
  }
}

export default NewRegister;
