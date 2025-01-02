import { useState } from "react";
import { TextField, Button, Box } from "@mui/material";

interface UserDetailsFormProps {
  onSubmit: (formData: any) => void;
}

export const UserDetailsForm: React.FC<UserDetailsFormProps> = ({
  onSubmit,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    state: "",
    country: "",
    address: "",
    pincode: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} style={{ textAlign: "center" }}>
      <TextField
        fullWidth
        margin="normal"
        label="Full Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <TextField
        fullWidth
        margin="normal"
        label="Email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <TextField
        fullWidth
        margin="normal"
        label="Phone"
        name="phone"
        type="phone"
        value={formData.phone}
        onChange={handleChange}
        required
      />
      <TextField
        fullWidth
        margin="normal"
        label="City"
        name="city"
        value={formData.city}
        onChange={handleChange}
        required
      />
      <TextField
        fullWidth
        margin="normal"
        label="State"
        name="state"
        value={formData.state}
        onChange={handleChange}
        required
      />
      <TextField
        fullWidth
        margin="normal"
        label="Country"
        name="country"
        value={formData.country}
        onChange={handleChange}
        required
      />
      <TextField
        fullWidth
        margin="normal"
        label="Address"
        name="address"
        value={formData.address}
        onChange={handleChange}
        required
      />
      <TextField
        fullWidth
        margin="normal"
        label="Pincode"
        name="pincode"
        value={formData.pincode}
        onChange={handleChange}
        required
      />
      <Button
        type="submit"
        variant="contained"
        sx={{ mt: 2, height: 50, textAlign: "center" }}
      >
        Save
      </Button>
    </form>
  );
};
