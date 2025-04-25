import { useState } from "react";
import {
  TextField,
  Button,
  Input,
  FormControl,
  Grid,
  Typography,
  Box,
  Card,
  CardContent,
  Stepper,
  Step,
  StepLabel,
  Menu,
  MenuItem,
} from "@mui/material";
import {
  FaArrowRight,
  FaArrowLeft,
  FaCheckCircle,
  FaUpload,
  FaTrash,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export const PropertyForm = () => {
  const [formData, setFormData] = useState({
    role: "Owner",
    propertyTitle: "",
    propertyType: "",
    configuration: "",
    carpetArea: "",
    builtUpArea: "",
    plotArea: "",
    numBathrooms: "",
    furnishingStatus: "",
    ownershipType: "Freehold",
    expectedPrice: "",
    propertyAge: "New",
    availabilityStatus: "Ready to Move",
    completeAddress: "",
    landmark: "",
    city: "",
    pincode: "",
    propertyImages: [],
    name: "",
    mobile: "",
    email: "",
    plotType: "",
    propertyUsageType: "",
    numFloors: "",
    washroomsAvailable: "",
    propertyStatus: "",
  });

  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate(); // Initialize navigate function

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (formData.propertyImages.length < 5) {
      alert("Upload at least 5 property images.");
      return;
    }
  
    if (!formData.propertyTitle || !formData.propertyType || !formData.name || !formData.mobile) {
      alert("Please fill in all required fields.");
      return;
    }
  
    // Submit the form data
    console.log("Form Submitted:", formData);
  
    // Once the form is successfully submitted, navigate to the seller dashboard
    setSubmitted(true);
    handleNavigation();  // Navigate to the seller dashboard
  };
  
  
  const handleNavigation = () => {
    navigate('/mainseller'); // Redirect to the seller dashboard
  };
  const steps = ["Basic Details", "Property Details", "Address & Images"];

  // Dropdown Menu State
  const [anchorEl, setAnchorEl] = useState(null);
  const [currentField, setCurrentField] = useState("");

  // Open Dropdown Menu
  const handleMenuOpen = (event, fieldName) => {
    setAnchorEl(event.currentTarget);
    setCurrentField(fieldName);
  };

  // Handle Dropdown Value
  const handleMenuClose = (option) => {
    if (option) {
      setFormData({ ...formData, [currentField]: option });
    }
    setAnchorEl(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, propertyImages: Array.from(e.target.files) });
  };

  const removeImage = (index) => {
    const updatedImages = formData.propertyImages.filter((_, i) => i !== index);
    setFormData({ ...formData, propertyImages: updatedImages });
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  // Property-specific fields based on type
  const additionalFields = {
    Residential: [
      { name: "propertyTitle", type: "text", placeholder: "Property Title" },
      {
        name: "propertyType",
        type: "select",
        options: ["Flat", "Apartment", "Independent House"],
      },
      {
        name: "configuration",
        type: "select",
        options: ["1 BHK", "2 BHK", "3 BHK", "4 BHK", "5 BHK"],
      },
      {
        name: "carpetArea",
        type: "number",
        placeholder: "Carpet Area (Sq. ft./Sq. m.)",
      },
      {
        name: "numBathrooms",
        type: "number",
        placeholder: "Number of Bathrooms",
      },
      {
        name: "furnishingStatus",
        type: "select",
        options: ["Fully Furnished", "Semi-Furnished", "Unfurnished"],
      },
      {
        name: "ownershipType",
        type: "select",
        options: ["Freehold", "Leasehold"],
      },
      { name: "expectedPrice", type: "number", placeholder: "Expected Price" },
      {
        name: "propertyAge",
        type: "select",
        options: ["New", "Resale"],
      },
      {
        name: "availabilityStatus",
        type: "select",
        options: ["Ready to Move", "Under Construction"],
      },
      {
        name: "completeAddress",
        type: "text",
        placeholder: "Complete Address (Landmark, City, Pincode)",
      },
      { name: "name", type: "text", placeholder: "Owner/Agent Name" },
      { name: "mobileNumber", type: "text", placeholder: "Mobile Number" },
      { name: "email", type: "email", placeholder: "Email Address" },
    ],
    Commercial: [
      { name: "propertyTitle", type: "text", placeholder: "Property Title" },
  {
    name: "propertyType",
    type: "select",
    options: ["Office", "Shop", "Showroom"],
  },
  {
    name: "carpetArea",
    type: "number",
    placeholder: "Carpet Area (Sq. ft./Sq. m.)",
  },
  {
    name: "washroomsAvailable",
    type: "select",
    options: ["Yes", "No"],
  },
  {
    name: "propertyUsageType",
    type: "select",
    options: ["Bare Shell", "Fully Furnished", "Semi-Furnished"],
  },
  {
    name: "ownershipType",
    type: "select",
    options: ["Freehold", "Leasehold"],
  },
  { name: "expectedPrice", type: "number", placeholder: "Expected Price" },
  {
    name: "propertyAge",
    type: "select",
    options: ["New", "Resale"],
  },
  {
    name: "availabilityStatus",
    type: "select",
    options: ["Ready to Move", "Under Construction"],
  },
  {
    name: "completeAddress",
    type: "text",
    placeholder: "Complete Address (Landmark, City, Pincode)",
  },
  
  { name: "name", type: "text", placeholder: "Owner/Agent Name" },
  { name: "mobileNumber", type: "text", placeholder: "Mobile Number" },
  { name: "email", type: "email", placeholder: "Email Address" },
    ],
    "Bungalow/Villa": [
      { name: "propertyTitle", type: "text", placeholder: "Property Title" },
  {
    name: "configuration",
    type: "select",
    options: ["3 BHK", "4 BHK", "5 BHK"],
  },
  {
    name: "plotArea",
    type: "number",
    placeholder: "Plot Area (Sq. ft./Sq. m.)",
  },
  {
    name: "builtUpArea",
    type: "number",
    placeholder: "Built-up Area (Sq. ft./Sq. m.)",
  },
  {
    name: "numFloors",
    type: "number",
    placeholder: "Number of Floors",
  },
  {
    name: "numBathrooms",
    type: "number",
    placeholder: "Number of Bathrooms",
  },
  {
    name: "furnishingStatus",
    type: "select",
    options: ["Fully Furnished", "Semi-Furnished", "Unfurnished"],
  },
  {
    name: "ownershipType",
    type: "select",
    options: ["Freehold", "Leasehold"],
  },
  { name: "expectedPrice", type: "number", placeholder: "Expected Price" },
  {
    name: "propertyAge",
    type: "select",
    options: ["New", "Resale"],
  },
  {
    name: "availabilityStatus",
    type: "select",
    options: ["Ready to Move", "Under Construction"],
  },
  {
    name: "completeAddress",
    type: "text",
    placeholder: "Complete Address (Landmark, City, Pincode)",
  },
  
  { name: "name", type: "text", placeholder: "Owner/Agent Name" },
  { name: "mobileNumber", type: "text", placeholder: "Mobile Number" },
  { name: "email", type: "email", placeholder: "Email Address" },
    ],
    "Plot/Land": [
      { name: "propertyTitle", type: "text", placeholder: "Property Title" },
  {
    name: "plotType",
    type: "select",
    options: ["Residential", "Commercial", "Agricultural", "Industrial"],
  },
  {
    name: "plotArea",
    type: "number",
    placeholder: "Plot Area (Sq. ft./Sq. m./Acres)",
  },
  {
    name: "ownershipType",
    type: "select",
    options: ["Freehold", "Leasehold"],
  },
  { name: "expectedPrice", type: "number", placeholder: "Expected Price" },
  {
    name: "propertyStatus",
    type: "select",
    options: ["New", "Resale"],
  },
  {
    name: "availabilityStatus",
    type: "select",
    options: ["Immediate", "Under Development"],
  },
  {
    name: "completeAddress",
    type: "text",
    placeholder: "Complete Address (Landmark, City, Pincode)",
  },
  
  { name: "name", type: "text", placeholder: "Owner/Agent Name" },
  { name: "mobileNumber", type: "text", placeholder: "Mobile Number" },
  { name: "email", type: "email", placeholder: "Email Address" },
    ],
  };

  const renderAdditionalFields = () => {
    const fields = additionalFields[formData.propertyType] || [];
    return (
      <Grid container spacing={2} mt={2}>
        {fields.map((field) =>
          field.type === "select" ? (
            <Grid item xs={12} sm={6} key={field.name}>
              <Button
                variant="outlined"
                fullWidth
                onClick={(e) => handleMenuOpen(e, field.name)}
                sx={{
                  textAlign: "left",
                  justifyContent: "space-between",
                  padding: "12px 16px",
                  color: formData[field.name] ? "black" : "#aaa",
                }}
              >
                {formData[field.name] || field.name.replace(/([A-Z])/g, " $1").trim()}
                <FaArrowRight style={{ marginLeft: "8px" }} />
              </Button>

              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl) && currentField === field.name}
                onClose={() => handleMenuClose(null)}
              >
                {field.options.map((option) => (
                  <MenuItem key={option} onClick={() => handleMenuClose(option)}>
                    {option}
                  </MenuItem>
                ))}
              </Menu>
            </Grid>
          ) : (
            <Grid item xs={12} sm={6} key={field.name}>
              <TextField
                type={field.type}
                name={field.name}
                label={field.placeholder}
                value={formData[field.name] || ""}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>
          )
        )}
      </Grid>
    );
  };

  return (
    <Box sx={{ maxWidth: 900, mx: "auto", mt: 6, px: { xs: 2, md: 4 } }}>
      <Card elevation={6} sx={{ borderRadius: 6, p: { xs: 3, md: 4 } }}>
        <CardContent>
          {submitted ? (
            <Box textAlign="center" p={5}>
              <Typography variant="h4" color="success.main" gutterBottom>
                <FaCheckCircle style={{ marginRight: 8 }} />
                Property Posted Successfully!
              </Typography>
              <Typography variant="body1" color="textSecondary">
                Thank you for posting your property. We’ll get in touch with you shortly.
              </Typography>
            </Box>
          ) : (
            <>
              <Typography variant="h4" fontWeight="bold" gutterBottom>
                Sell Your Property
              </Typography>

              <Stepper activeStep={step - 1} alternativeLabel sx={{ mb: 5 }}>
                {steps.map((label) => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>

              <form onSubmit={handleSubmit}>
                {step === 1 && (
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        name="propertyTitle"
                        label="Property Title"
                        value={formData.propertyTitle}
                        onChange={handleChange}
                        fullWidth
                        required
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Button
                        variant="outlined"
                        fullWidth
                        onClick={(e) => handleMenuOpen(e, "propertyType")}
                        sx={{
                          textAlign: "left",
                          justifyContent: "space-between",
                          padding: "12px 16px",
                          color: formData.propertyType ? "black" : "#aaa",
                        }}
                      >
                        {formData.propertyType || "Property Type"}
                        <FaArrowRight style={{ marginLeft: "8px" }} />
                      </Button>

                      <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl) && currentField === "propertyType"}
                        onClose={() => handleMenuClose(null)}
                      >
                        {["Residential", "Commercial", "Bungalow/Villa", "Plot/Land"].map(
                          (option) => (
                            <MenuItem key={option} onClick={() => handleMenuClose(option)}>
                              {option}
                            </MenuItem>
                          )
                        )}
                      </Menu>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        name="name"
                        label="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        fullWidth
                        required
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        name="mobile"
                        label="Mobile Number"
                        value={formData.mobile}
                        onChange={handleChange}
                        fullWidth
                        required
                      />
                    </Grid>
                  </Grid>
                )}

                {step === 2 && renderAdditionalFields()}

                {step === 3 && (
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField
                        name="completeAddress"
                        label="Complete Address"
                        value={formData.completeAddress}
                        onChange={handleChange}
                        fullWidth
                        required
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        name="city"
                        label="City"
                        value={formData.city}
                        onChange={handleChange}
                        fullWidth
                        required
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        name="pincode"
                        label="Pincode"
                        value={formData.pincode}
                        onChange={handleChange}
                        fullWidth
                        required
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        variant="contained"
                        component="label"
                        startIcon={<FaUpload />}
                        fullWidth
                        sx={{ mb: 2 }}
                      >
                        Upload Property Images (Min 5)
                        <Input type="file" multiple onChange={handleFileChange} hidden />
                      </Button>
                    </Grid>

                    {formData.propertyImages.length > 0 && (
                      <Grid item xs={12} mt={2}>
                        <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                          {formData.propertyImages.map((file, index) => (
                            <Box
                              key={index}
                              sx={{
                                position: "relative",
                                width: 120,
                                height: 120,
                                borderRadius: 2,
                                overflow: "hidden",
                                boxShadow: 1,
                              }}
                            >
                              <img
                                src={URL.createObjectURL(file)}
                                alt="Property"
                                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                              />
                              <FaTrash
                                onClick={() => removeImage(index)}
                                style={{
                                  position: "absolute",
                                  top: 5,
                                  right: 5,
                                  cursor: "pointer",
                                  color: "red",
                                  backgroundColor: "white",
                                  padding: 4,
                                  borderRadius: "50%",
                                }}
                              />
                            </Box>
                          ))}
                        </Box>
                      </Grid>
                    )}
                  </Grid>
                )}

                <Box mt={4} display="flex" justifyContent="space-between">
                  {step > 1 && (
                    <Button onClick={prevStep} variant="outlined" color="inherit" startIcon={<FaArrowLeft />}>
                      Previous
                    </Button>
                  )}
                  {step < 3 ? (
                    <Button onClick={nextStep} variant="contained" color="primary" endIcon={<FaArrowRight />}>
                      Next
                    </Button>
                  ) : (
                    <Button type="submit" onClick={handleNavigation} variant="contained" color="success" endIcon={<FaCheckCircle />}>
                      Submit
                    </Button>
                  )}
                </Box>
              </form>
            </>
          )}
        </CardContent>
      </Card>
    </Box>
  );
};

export default PropertyForm;
