import Image from "next/image";
import NextLink from "next/link";
import {
  AutoAwesomeOutlined,
  EmojiEventsOutlined,
  Facebook,
  Instagram,
  LinkedIn,
  MenuBookOutlined,
  SchoolOutlined,
  WorkspacePremiumOutlined,
  X,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Chip,
  Container,
  Grid,
  IconButton,
  Link,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import SiteHeader from "@/components/site-header";

const highlights = [
  {
    icon: <AutoAwesomeOutlined sx={{ color: "#1A5DFF" }} />,
    title: "3 Exciting Rounds",
    description: "Quizlet, Intelligence and General Knowledge",
  },
  {
    icon: <WorkspacePremiumOutlined sx={{ color: "#16A34A" }} />,
    title: "Top 3 Winners",
    description: "Win prizes and recognition",
  },
  {
    icon: <EmojiEventsOutlined sx={{ color: "#F59E0B" }} />,
    title: "Fair & Transparent",
    description: "Merit-based selection process",
  },
];

const competitions = [
  {
    title: "National Academic Challenge",
    status: "Registration Open",
    ends: "10 Sep 2026",
    classes: "3 - 12",
    fee: "PKR 500",
    tone: "#1A5DFF",
  },
  {
    title: "Young Minds Intelligence Competition",
    status: "Registration Open",
    ends: "15 Sep 2026",
    classes: "3 - 12",
    fee: "PKR 500",
    tone: "#7C3AED",
  },
  {
    title: "Knowledge Challenge Series",
    status: "Coming Soon",
    ends: "Coming Soon",
    classes: "3 - 12",
    fee: "PKR 500",
    tone: "#0F766E",
  },
];

const stats = [
  { value: "25,000+", label: "Students Registered", icon: <SchoolOutlined /> },
  { value: "120+", label: "Competitions Conducted", icon: <MenuBookOutlined /> },
  { value: "300+", label: "Winners Rewarded", icon: <EmojiEventsOutlined /> },
  { value: "95%", label: "Student Satisfaction", icon: <AutoAwesomeOutlined /> },
];

export default function HomePage() {
  return (
    <Box
      sx={{
        position: "relative",
        overflowX: "hidden",
        py: { xs: 2.5, md: 4 },
        background: "radial-gradient(circle at 20% 20%, #FFFFFF 0%, #F6F9FF 42%, #EDF2FF 100%)",
        "&::before": {
          content: '""',
          position: "absolute",
          width: 280,
          height: 280,
          borderRadius: "999px",
          filter: "blur(40px)",
          bgcolor: "rgba(26, 93, 255, 0.16)",
          top: -70,
          left: -60,
          zIndex: 0,
        },
        "&::after": {
          content: '""',
          position: "absolute",
          width: 320,
          height: 320,
          borderRadius: "999px",
          filter: "blur(40px)",
          bgcolor: "rgba(14, 165, 164, 0.16)",
          right: -110,
          top: 420,
          zIndex: 0,
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Paper sx={{ p: { xs: 2, md: 3 }, bgcolor: "rgba(255,255,255,0.92)", backdropFilter: "blur(6px)" }}>
          <Stack spacing={{ xs: 5, md: 7 }}>
            <SiteHeader activePage="home" />

            <Grid container spacing={4} alignItems="center">
              <Grid size={{ xs: 12, md: 7 }}>
                <Stack spacing={2.5}>
                  <Typography variant="overline" color="primary.main" sx={{ fontWeight: 700, letterSpacing: 1.5 }}>
                    LEARN • COMPETE • WIN
                  </Typography>
                  <Typography variant="h1" sx={{ fontSize: { xs: "2.3rem", md: "3.45rem" }, lineHeight: 1.08 }}>
                    Compete Today,
                    <br />
                    <Box component="span" sx={{ color: "primary.main" }}>
                      Excel Tomorrow
                    </Box>
                  </Typography>
                  <Typography color="text.secondary" sx={{ maxWidth: 560 }}>
                    Academic competitions for classes 3 to 12. Challenge yourself and turn your effort into medals,
                    confidence, and lasting achievement.
                  </Typography>

                  <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5}>
                    <Button component={NextLink} href="/competitions" variant="contained" color="primary" size="large">
                      Explore Competitions
                    </Button>
                    <Button variant="outlined" color="primary" size="large">
                      Learn More
                    </Button>
                  </Stack>

                  <Grid container spacing={1.5}>
                    {highlights.map((item) => (
                      <Grid size={{ xs: 12, sm: 4 }} key={item.title}>
                        <Paper sx={{ p: 1.75, height: "100%" }}>
                          <Stack spacing={0.8}>
                            {item.icon}
                            <Typography fontWeight={700} fontSize="0.93rem">
                              {item.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" fontSize="0.78rem">
                              {item.description}
                            </Typography>
                          </Stack>
                        </Paper>
                      </Grid>
                    ))}
                  </Grid>
                </Stack>
              </Grid>

              <Grid size={{ xs: 12, md: 5 }}>
                <Box
                  sx={{
                    position: "relative",
                    borderRadius: 5,
                    p: 1,
                    background: "linear-gradient(145deg, #EAF0FF 0%, #DCE7FF 50%, #ECF7FF 100%)",
                    boxShadow: "0 18px 45px rgba(26, 93, 255, 0.2)",
                    animation: "floatUp 6s ease-in-out infinite",
                    "@keyframes floatUp": {
                      "0%": {
                        transform: "translateY(0px)",
                      },
                      "50%": {
                        transform: "translateY(-8px)",
                      },
                      "100%": {
                        transform: "translateY(0px)",
                      },
                    },
                  }}
                >
                  <Image
                    src="/hero-illustration.svg"
                    alt="Students holding books and trophy"
                    width={560}
                    height={520}
                    style={{ width: "100%", height: "auto", borderRadius: 16 }}
                    priority
                  />
                </Box>
              </Grid>
            </Grid>

            <Stack spacing={2}>
              <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Typography variant="h4" sx={{ fontSize: { xs: "1.5rem", md: "2rem" } }}>
                  Upcoming Competitions
                </Typography>
                <Link component={NextLink} href="/competitions" underline="hover" color="primary.main" fontWeight={700}>
                  View All
                </Link>
              </Stack>

              <Grid container spacing={2}>
                {competitions.map((item) => (
                  <Grid size={{ xs: 12, md: 4 }} key={item.title}>
                    <Paper sx={{ p: 2.2, height: "100%" }}>
                      <Stack spacing={1.7}>
                        <Box
                          sx={{
                            borderRadius: 2,
                            p: 2,
                            color: "white",
                            background: `linear-gradient(140deg, ${item.tone} 0%, #1F2A44 100%)`,
                          }}
                        >
                          <Chip
                            label={item.status}
                            size="small"
                            sx={{
                              bgcolor: "rgba(255,255,255,0.2)",
                              color: "white",
                              fontWeight: 700,
                              mb: 1.6,
                            }}
                          />
                          <Typography variant="h6" sx={{ fontWeight: 800, lineHeight: 1.2 }}>
                            {item.title}
                          </Typography>
                        </Box>

                        <Stack spacing={0.9}>
                          <Typography variant="body2" color="text.secondary">
                            Registration Ends: <strong>{item.ends}</strong>
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            Classes: <strong>{item.classes}</strong>
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            Entry Fee: <strong>{item.fee}</strong>
                          </Typography>
                        </Stack>

                        <Button
                          component={NextLink}
                          href="/competitions"
                          variant={item.status === "Coming Soon" ? "outlined" : "contained"}
                        >
                          {item.status === "Coming Soon" ? "Notify Me" : "View Details"}
                        </Button>
                      </Stack>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </Stack>

            <Paper sx={{ p: { xs: 2, md: 2.4 }, bgcolor: "#F8FAFF" }}>
              <Grid container spacing={1.5}>
                {stats.map((item) => (
                  <Grid key={item.label} size={{ xs: 6, md: 3 }}>
                    <Stack spacing={0.7} alignItems="center" textAlign="center" py={1}>
                      <Box sx={{ color: "primary.main" }}>{item.icon}</Box>
                      <Typography variant="h5" sx={{ fontWeight: 800 }}>
                        {item.value}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {item.label}
                      </Typography>
                    </Stack>
                  </Grid>
                ))}
              </Grid>
            </Paper>

            <Paper
              sx={{
                p: { xs: 2.2, md: 3 },
                bgcolor: "#172B58",
                color: "#DCE7FF",
              }}
            >
              <Grid container spacing={3}>
                <Grid size={{ xs: 12, md: 4 }}>
                  <Typography variant="h6" color="white" sx={{ fontWeight: 800, mb: 1.1 }}>
                    Academic Challenge
                  </Typography>
                  <Typography variant="body2" sx={{ maxWidth: 280 }}>
                    Empowering students through fair and exciting academic competitions.
                  </Typography>
                </Grid>
                <Grid size={{ xs: 6, md: 2.5 }}>
                  <Typography color="white" fontWeight={700} mb={1}>
                    Quick Links
                  </Typography>
                  <Stack spacing={0.5}>
                    {[
                      "Competitions",
                      "About Us",
                      "FAQ",
                      "Contact Us",
                    ].map((item) => (
                      <Link
                        key={item}
                        component={NextLink}
                        href={item === "Competitions" ? "/competitions" : "#"}
                        underline="hover"
                        color="inherit"
                      >
                        {item}
                      </Link>
                    ))}
                  </Stack>
                </Grid>
                <Grid size={{ xs: 6, md: 2.5 }}>
                  <Typography color="white" fontWeight={700} mb={1}>
                    Important
                  </Typography>
                  <Stack spacing={0.5}>
                    {[
                      "Terms & Conditions",
                      "Privacy Policy",
                    ].map((item) => (
                      <Link key={item} href="#" underline="hover" color="inherit">
                        {item}
                      </Link>
                    ))}
                  </Stack>
                </Grid>
                <Grid size={{ xs: 12, md: 3 }}>
                  <Typography color="white" fontWeight={700} mb={1}>
                    Follow Us
                  </Typography>
                  <Stack direction="row" spacing={0.8}>
                    <IconButton size="small" sx={{ color: "#DCE7FF", border: "1px solid #3A4F86" }}>
                      <Facebook fontSize="small" />
                    </IconButton>
                    <IconButton size="small" sx={{ color: "#DCE7FF", border: "1px solid #3A4F86" }}>
                      <Instagram fontSize="small" />
                    </IconButton>
                    <IconButton size="small" sx={{ color: "#DCE7FF", border: "1px solid #3A4F86" }}>
                      <LinkedIn fontSize="small" />
                    </IconButton>
                    <IconButton size="small" sx={{ color: "#DCE7FF", border: "1px solid #3A4F86" }}>
                      <X fontSize="small" />
                    </IconButton>
                  </Stack>
                </Grid>
              </Grid>
            </Paper>
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
}
