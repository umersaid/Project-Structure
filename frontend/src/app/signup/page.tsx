"use client";

import { useMemo, useState } from "react";
import NextLink from "next/link";
import {
  ArrowBack,
  CheckCircle,
  LockOutlined,
  PersonOutline,
  SchoolOutlined,
} from "@mui/icons-material";
import {
  Alert,
  Box,
  Button,
  Container,
  Grid,
  MenuItem,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import SiteHeader from "@/components/site-header";

type FormValues = {
  fullName: string;
  emailAddress: string;
  mobileNumber: string;
  password: string;
  confirmPassword: string;
  classGrade: string;
  schoolName: string;
  city: string;
  dateOfBirth: string;
};

const initialValues: FormValues = {
  fullName: "",
  emailAddress: "",
  mobileNumber: "",
  password: "",
  confirmPassword: "",
  classGrade: "",
  schoolName: "",
  city: "",
  dateOfBirth: "",
};

const classOptions = Array.from({ length: 10 }, (_, index) => {
  const classNumber = index + 3;
  return { label: `Class ${classNumber}`, value: String(classNumber) };
});

function generateStudentId() {
  const year = new Date().getFullYear();
  const randomPart = Math.floor(100000 + Math.random() * 900000);
  return `AC-${year}-${randomPart}`;
}

export default function SignUpPage() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [generatedStudentId, setGeneratedStudentId] = useState("");

  const passwordMatchError = useMemo(() => {
    if (!values.confirmPassword) {
      return "";
    }
    return values.password === values.confirmPassword ? "" : "Passwords do not match.";
  }, [values.password, values.confirmPassword]);

  function handleChange(field: keyof FormValues, value: string) {
    setValues((previous) => ({ ...previous, [field]: value }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setErrorMessage("");
    setSuccessMessage("");
    setGeneratedStudentId("");

    if (passwordMatchError) {
      setErrorMessage(passwordMatchError);
      return;
    }

    setIsSubmitting(true);

    try {
      const studentId = generateStudentId();

      const studentRecord = {
        student_id: studentId,
        full_name: values.fullName,
        email_address: values.emailAddress,
        mobile_number: values.mobileNumber,
        class_grade: Number(values.classGrade),
        school_name: values.schoolName,
        city: values.city,
        date_of_birth: values.dateOfBirth,
        created_at: new Date().toISOString(),
      };

      const existingRecords = window.localStorage.getItem("ac_students");
      const parsedRecords = existingRecords ? (JSON.parse(existingRecords) as unknown[]) : [];
      parsedRecords.push(studentRecord);
      window.localStorage.setItem("ac_students", JSON.stringify(parsedRecords));

      setGeneratedStudentId(studentId);
      setSuccessMessage("Student account created successfully.");
      setValues(initialValues);
    } catch {
      setErrorMessage("Could not save signup details in this browser. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Box sx={{ py: { xs: 2.5, md: 4 }, background: "linear-gradient(180deg, #F6F9FF 0%, #EEF3FF 100%)" }}>
      <Container maxWidth="lg">
        <Paper sx={{ p: { xs: 2, md: 3 }, bgcolor: "rgba(255,255,255,0.95)", backdropFilter: "blur(6px)" }}>
          <Stack spacing={2.2}>
            <SiteHeader activePage="none" />

            <Stack direction="row" justifyContent="space-between" alignItems="center" flexWrap="wrap" gap={1}>
              <Stack>
                <Typography variant="h2" sx={{ fontSize: { xs: "1.9rem", md: "2.5rem" } }}>
                  Student Sign Up
                </Typography>
                <Typography color="text.secondary">Student information plus secure login credentials.</Typography>
              </Stack>
              <Button component={NextLink} href="/competitions" startIcon={<ArrowBack sx={{ fontSize: 16 }} />}>
                Back to Competitions
              </Button>
            </Stack>

            <Grid container spacing={2} alignItems="stretch">
              <Grid size={{ xs: 12, lg: 8 }}>
                <Paper sx={{ p: { xs: 2, md: 2.4 } }}>
                  <Box component="form" onSubmit={handleSubmit}>
                    <Grid container spacing={1.5}>
                      <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField
                          fullWidth
                          required
                          label="Full Name"
                          value={values.fullName}
                          onChange={(event) => handleChange("fullName", event.target.value)}
                        />
                      </Grid>
                      <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField
                          fullWidth
                          required
                          label="Email Address"
                          type="email"
                          value={values.emailAddress}
                          onChange={(event) => handleChange("emailAddress", event.target.value)}
                        />
                      </Grid>
                      <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField
                          fullWidth
                          required
                          label="Mobile Number"
                          placeholder="+923001234567"
                          value={values.mobileNumber}
                          onChange={(event) => handleChange("mobileNumber", event.target.value)}
                        />
                      </Grid>
                      <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField
                          fullWidth
                          required
                          select
                          label="Class / Grade"
                          value={values.classGrade}
                          onChange={(event) => handleChange("classGrade", event.target.value)}
                        >
                          {classOptions.map((item) => (
                            <MenuItem key={item.value} value={item.value}>
                              {item.label}
                            </MenuItem>
                          ))}
                        </TextField>
                      </Grid>
                      <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField
                          fullWidth
                          required
                          label="Password"
                          type="password"
                          value={values.password}
                          onChange={(event) => handleChange("password", event.target.value)}
                        />
                      </Grid>
                      <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField
                          fullWidth
                          required
                          label="Confirm Password"
                          type="password"
                          value={values.confirmPassword}
                          onChange={(event) => handleChange("confirmPassword", event.target.value)}
                          error={Boolean(passwordMatchError)}
                          helperText={passwordMatchError || " "}
                        />
                      </Grid>
                      <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField
                          fullWidth
                          required
                          label="School Name"
                          value={values.schoolName}
                          onChange={(event) => handleChange("schoolName", event.target.value)}
                        />
                      </Grid>
                      <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField
                          fullWidth
                          required
                          label="City"
                          value={values.city}
                          onChange={(event) => handleChange("city", event.target.value)}
                        />
                      </Grid>
                      <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField
                          fullWidth
                          required
                          label="Date of Birth"
                          type="date"
                          InputLabelProps={{ shrink: true }}
                          value={values.dateOfBirth}
                          onChange={(event) => handleChange("dateOfBirth", event.target.value)}
                        />
                      </Grid>
                      <Grid size={{ xs: 12 }}>
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                          Student ID will be generated automatically after successful registration.
                        </Typography>
                      </Grid>

                      {errorMessage ? (
                        <Grid size={{ xs: 12 }}>
                          <Alert severity="error">{errorMessage}</Alert>
                        </Grid>
                      ) : null}

                      {successMessage ? (
                        <Grid size={{ xs: 12 }}>
                          <Alert severity="success">
                            {successMessage}
                            {generatedStudentId ? ` Generated Student ID: ${generatedStudentId}` : ""}
                          </Alert>
                        </Grid>
                      ) : null}

                      <Grid size={{ xs: 12 }}>
                        <Stack direction={{ xs: "column", sm: "row" }} spacing={1.2}>
                          <Button type="submit" variant="contained" size="large" disabled={isSubmitting}>
                            {isSubmitting ? "Creating Account..." : "Create Student Account"}
                          </Button>
                          <Button component={NextLink} href="/competitions" variant="outlined" size="large">
                            Cancel
                          </Button>
                        </Stack>
                      </Grid>
                    </Grid>
                  </Box>
                </Paper>
              </Grid>

              <Grid size={{ xs: 12, lg: 4 }}>
                <Stack spacing={1.4}>
                  <Paper sx={{ p: 2 }}>
                    <Stack direction="row" spacing={1.1} alignItems="center" mb={0.8}>
                      <PersonOutline color="primary" />
                      <Typography variant="h6">Student Information</Typography>
                    </Stack>
                    <Typography variant="body2" color="text.secondary">
                      Fill in your personal and academic details to complete profile setup.
                    </Typography>
                  </Paper>

                  <Paper sx={{ p: 2 }}>
                    <Stack direction="row" spacing={1.1} alignItems="center" mb={0.8}>
                      <LockOutlined color="primary" />
                      <Typography variant="h6">Login Credentials</Typography>
                    </Stack>
                    <Typography variant="body2" color="text.secondary">
                      Use your email and password to sign in after registration.
                    </Typography>
                  </Paper>

                  <Paper sx={{ p: 2 }}>
                    <Stack direction="row" spacing={1.1} alignItems="center" mb={0.8}>
                      <SchoolOutlined color="primary" />
                      <Typography variant="h6">What Happens Next?</Typography>
                    </Stack>
                    <Stack spacing={0.8}>
                      {["Student ID auto-generated", "Eligibility verified by class and DOB", "Ready to register for competitions"].map(
                        (item) => (
                          <Stack key={item} direction="row" spacing={0.8} alignItems="center">
                            <CheckCircle sx={{ fontSize: 16, color: "#22C55E" }} />
                            <Typography variant="body2" color="text.secondary">
                              {item}
                            </Typography>
                          </Stack>
                        )
                      )}
                    </Stack>
                  </Paper>
                </Stack>
              </Grid>
            </Grid>
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
}
