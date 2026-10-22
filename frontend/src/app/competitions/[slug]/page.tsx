import NextLink from "next/link";
import {
  ArrowBack,
  ArrowForward,
  CalendarMonthOutlined,
  CheckCircle,
  Circle,
  EmojiEventsOutlined,
  LightbulbOutlined,
  MenuBookOutlined,
  MonetizationOnOutlined,
  SchoolOutlined,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Chip,
  Container,
  Grid,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import SiteHeader from "@/components/site-header";

const timeline = [
  { title: "Registration Starts", date: "15 August 2026", color: "#22C55E" },
  { title: "Registration Ends", date: "10 September 2026", color: "#16A34A" },
  { title: "Round 1", date: "20 September 2026", time: "07:00 PM - 08:00 PM", color: "#3B82F6" },
  { title: "Round 2", date: "04 October 2026", time: "07:00 PM - 08:00 PM", color: "#2563EB" },
  { title: "Round 3 (Final)", date: "18 October 2026", time: "07:00 PM - 08:00 PM", color: "#1D4ED8" },
];

const structure = [
  {
    round: "Round 1",
    title: "Specific Subject",
    points: ["50 Questions", "60 Minutes", "1 Mark Each"],
    footer: "Top 70% qualify for Round 2",
    color: "#1A5DFF",
    bg: "#F0F5FF",
  },
  {
    round: "Round 2",
    title: "Intelligence",
    points: ["50 Questions", "60 Minutes", "1 Mark Each"],
    footer: "Top 50% qualify for Round 3",
    color: "#22C55E",
    bg: "#F3FFF8",
  },
  {
    round: "Round 3",
    title: "General Knowledge",
    points: ["50 Questions", "60 Minutes", "1 Mark Each"],
    footer: "Final Round",
    color: "#7C3AED",
    bg: "#F8F4FF",
  },
];

const featurePoints = [
  "3 Exciting Rounds",
  "Merit Based Competition",
  "Top 3 Win Prizes",
  "Fair & Transparent",
];

const eligibility = ["Classes 3 to 12", "Students from all schools", "Open to all across the country"];

const rules = [
  "MCQ based questions",
  "No negative marking",
  "Randomized questions",
  "Automatic submission after time is up",
  "Reconnect within the test window if disconnected",
];

export default function CompetitionDetailsPage() {
  return (
    <Box sx={{ py: { xs: 2.5, md: 4 }, background: "linear-gradient(180deg, #F6F9FF 0%, #EEF3FF 100%)" }}>
      <Container maxWidth="lg">
        <Paper sx={{ p: { xs: 2, md: 3 }, bgcolor: "rgba(255,255,255,0.95)", backdropFilter: "blur(6px)" }}>
          <Stack spacing={2}>
            <SiteHeader activePage="competitions" />

            <Stack direction="row" justifyContent="space-between" alignItems="center" flexWrap="wrap" gap={1}>
              <Stack direction="row" spacing={0.8} alignItems="center" color="text.secondary" sx={{ typography: "body2" }}>
                <Link component={NextLink} href="/" underline="hover" color="inherit">
                  Home
                </Link>
                <Typography>›</Typography>
                <Link component={NextLink} href="/competitions" underline="hover" color="inherit">
                  Competitions
                </Link>
                <Typography>›</Typography>
                <Typography color="text.primary" fontWeight={700}>
                  National Academic Challenge
                </Typography>
              </Stack>

              <Button component={NextLink} href="/competitions" size="small" startIcon={<ArrowBack sx={{ fontSize: 16 }} />}>
                Back to Competitions
              </Button>
            </Stack>

            <Grid container spacing={2}>
              <Grid size={{ xs: 12, lg: 8 }}>
                <Stack spacing={2}>
                  <Paper sx={{ p: 2, background: "linear-gradient(140deg, #0E2E76 0%, #1B4DA9 100%)", color: "white" }}>
                    <Grid container spacing={2} alignItems="center">
                      <Grid size={{ xs: 12, md: 8 }}>
                        <Chip
                          label="Registration Open"
                          size="small"
                          sx={{ bgcolor: "rgba(255,255,255,0.2)", color: "white", fontWeight: 700, mb: 1.2 }}
                        />
                        <Typography variant="h3" sx={{ fontSize: { xs: "1.8rem", md: "2.2rem" }, mb: 1 }}>
                          National Academic Challenge
                        </Typography>
                        <Typography sx={{ opacity: 0.9, maxWidth: 540 }}>
                          A prestigious 3-round academic competition for students of Classes 3 to 12.
                        </Typography>
                        <Stack direction="row" spacing={2} mt={2} flexWrap="wrap" useFlexGap>
                          <Stack direction="row" spacing={0.7} alignItems="center">
                            <CalendarMonthOutlined fontSize="small" />
                            <Typography variant="body2">Registration: 15 Aug - 10 Sep 2026</Typography>
                          </Stack>
                          <Stack direction="row" spacing={0.7} alignItems="center">
                            <SchoolOutlined fontSize="small" />
                            <Typography variant="body2">Classes: 3 - 12</Typography>
                          </Stack>
                          <Stack direction="row" spacing={0.7} alignItems="center">
                            <MonetizationOnOutlined fontSize="small" />
                            <Typography variant="body2">Entry Fee: PKR 500</Typography>
                          </Stack>
                        </Stack>
                      </Grid>

                      <Grid size={{ xs: 12, md: 4 }}>
                        <Box
                          sx={{
                            minHeight: 170,
                            borderRadius: 3,
                            display: "grid",
                            placeItems: "center",
                            background: "radial-gradient(circle at 40% 35%, #FFD667 0%, #F59E0B 45%, #B45309 100%)",
                            boxShadow: "inset 0 0 30px rgba(255,255,255,0.25)",
                          }}
                        >
                          <EmojiEventsOutlined sx={{ fontSize: 98, color: "#FFF7D6" }} />
                        </Box>
                      </Grid>
                    </Grid>
                  </Paper>

                  <Paper sx={{ p: { xs: 2, md: 2.2 } }}>
                    <Typography variant="h5" sx={{ fontSize: "1.35rem", mb: 1.2 }}>
                      About the Competition
                    </Typography>
                    <Grid container spacing={2} alignItems="center">
                      <Grid size={{ xs: 12, md: 8 }}>
                        <Typography color="text.secondary" sx={{ lineHeight: 1.75 }}>
                          The National Academic Challenge is a merit-based competition that tests students on Subject
                          Knowledge, Intelligence, and General Knowledge. Compete with the best, challenge yourself,
                          and achieve greatness.
                        </Typography>
                      </Grid>
                      <Grid size={{ xs: 12, md: 4 }}>
                        <Box
                          sx={{
                            height: 114,
                            borderRadius: 2,
                            bgcolor: "#F6F9FF",
                            color: "#1A5DFF",
                            display: "grid",
                            placeItems: "center",
                          }}
                        >
                          <LightbulbOutlined sx={{ fontSize: 56 }} />
                        </Box>
                      </Grid>
                    </Grid>
                  </Paper>

                  <Paper sx={{ p: { xs: 2, md: 2.2 } }}>
                    <Typography variant="h5" sx={{ fontSize: "1.35rem", mb: 1.2 }}>
                      Competition Structure
                    </Typography>

                    <Grid container spacing={1.4} alignItems="stretch">
                      {structure.map((item, index) => (
                        <Grid size={{ xs: 12, md: 4 }} key={item.round}>
                          <Paper sx={{ p: 1.6, bgcolor: item.bg, borderColor: `${item.color}33`, height: "100%" }}>
                            <Stack direction="row" alignItems="center" justifyContent="space-between">
                              <Chip
                                label={item.round}
                                size="small"
                                sx={{ mb: 1.2, bgcolor: item.color, color: "white", fontWeight: 700 }}
                              />
                              {index < structure.length - 1 ? (
                                <ArrowForward sx={{ display: { xs: "none", md: "inline-flex" }, color: "#9AA9CC" }} />
                              ) : null}
                            </Stack>
                            <Typography fontWeight={800} sx={{ mb: 1 }}>
                              {item.title}
                            </Typography>
                            <Stack spacing={0.8}>
                              {item.points.map((point) => (
                                <Stack key={point} direction="row" spacing={0.8} alignItems="center">
                                  <Circle sx={{ fontSize: 8, color: item.color }} />
                                  <Typography variant="body2" color="text.secondary">
                                    {point}
                                  </Typography>
                                </Stack>
                              ))}
                            </Stack>
                            <Typography variant="body2" sx={{ color: item.color, fontWeight: 700, mt: 1.6 }}>
                              {item.footer}
                            </Typography>
                          </Paper>
                        </Grid>
                      ))}
                    </Grid>

                    <Paper sx={{ mt: 1.8, p: 1.2, bgcolor: "#F8FAFF" }}>
                      <Typography variant="body2" color="text.secondary">
                        Time at each stage will be carried forward to the next round.
                      </Typography>
                    </Paper>
                  </Paper>

                  <Grid container spacing={1.6}>
                    <Grid size={{ xs: 12, md: 6 }}>
                      <Paper sx={{ p: 2 }}>
                        <Typography variant="h6" sx={{ mb: 1.1 }}>
                          Eligibility
                        </Typography>
                        <List disablePadding>
                          {eligibility.map((item) => (
                            <ListItem key={item} disableGutters>
                              <ListItemIcon sx={{ minWidth: 26 }}>
                                <Circle sx={{ fontSize: 8, color: "#1A5DFF" }} />
                              </ListItemIcon>
                              <ListItemText primary={item} primaryTypographyProps={{ variant: "body2", color: "text.secondary" }} />
                            </ListItem>
                          ))}
                        </List>
                      </Paper>
                    </Grid>

                    <Grid size={{ xs: 12, md: 6 }}>
                      <Paper sx={{ p: 2 }}>
                        <Typography variant="h6" sx={{ mb: 1.1 }}>
                          Rules Highlights
                        </Typography>
                        <List disablePadding>
                          {rules.map((item) => (
                            <ListItem key={item} disableGutters>
                              <ListItemIcon sx={{ minWidth: 26 }}>
                                <CheckCircle sx={{ fontSize: 16, color: "#2563EB" }} />
                              </ListItemIcon>
                              <ListItemText primary={item} primaryTypographyProps={{ variant: "body2", color: "text.secondary" }} />
                            </ListItem>
                          ))}
                        </List>
                      </Paper>
                    </Grid>
                  </Grid>

                  <Paper
                    sx={{
                      p: { xs: 2, md: 2.2 },
                      background: "linear-gradient(90deg, #F8FBFF 0%, #EDF5FF 100%)",
                    }}
                  >
                    <Stack direction="row" alignItems="center" justifyContent="space-between" gap={2}>
                      <Stack direction="row" spacing={1.2} alignItems="center">
                        <MenuBookOutlined sx={{ color: "#7C3AED" }} />
                        <Box>
                          <Typography fontWeight={800}>Prize details will be announced after registration closes.</Typography>
                          <Typography variant="body2" color="text.secondary">
                            Top 3 winners will receive exciting prizes.
                          </Typography>
                        </Box>
                      </Stack>
                      <EmojiEventsOutlined sx={{ color: "#F59E0B", fontSize: 34 }} />
                    </Stack>
                  </Paper>
                </Stack>
              </Grid>

              <Grid size={{ xs: 12, lg: 4 }}>
                <Stack spacing={1.5}>
                  <Paper sx={{ p: 2 }}>
                    <Typography variant="h5" sx={{ fontSize: "1.5rem", mb: 1.2 }}>
                      Register Now
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Entry Fee
                    </Typography>
                    <Typography variant="h4" color="primary.main" sx={{ mb: 1.2 }}>
                      PKR 500
                    </Typography>

                    <Stack spacing={0.8} mb={1.7}>
                      {featurePoints.map((point) => (
                        <Stack key={point} direction="row" spacing={0.8} alignItems="center">
                          <CheckCircle sx={{ color: "#22C55E", fontSize: 17 }} />
                          <Typography variant="body2" color="text.secondary">
                            {point}
                          </Typography>
                        </Stack>
                      ))}
                    </Stack>

                    <Button
                      component={NextLink}
                      href="/signup"
                      fullWidth
                      variant="contained"
                      size="large"
                      endIcon={<ArrowForward sx={{ fontSize: 16 }} />}
                    >
                      Register Now
                    </Button>
                    <Button fullWidth variant="outlined" size="large" sx={{ mt: 1 }}>
                      Save for Later
                    </Button>
                  </Paper>

                  <Paper sx={{ p: 2 }}>
                    <Typography variant="h6" sx={{ mb: 1.3 }}>
                      Important Dates
                    </Typography>
                    <Stack spacing={1.1}>
                      {timeline.map((item) => (
                        <Stack key={item.title} direction="row" spacing={1} alignItems="flex-start">
                          <Box sx={{ pt: 0.4 }}>
                            <Circle sx={{ color: item.color, fontSize: 12 }} />
                          </Box>
                          <Box>
                            <Typography variant="body2" fontWeight={700}>
                              {item.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              {item.date}
                            </Typography>
                            {item.time ? (
                              <Typography variant="body2" color="text.secondary">
                                {item.time}
                              </Typography>
                            ) : null}
                          </Box>
                        </Stack>
                      ))}
                    </Stack>

                    <Button sx={{ mt: 1.2 }} size="small" endIcon={<ArrowForward sx={{ fontSize: 14 }} />}>
                      View Full Schedule
                    </Button>
                  </Paper>

                  <Paper sx={{ p: 2 }}>
                    <Typography variant="h6">Need Help?</Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mt: 0.4 }}>
                      Facing any issue? We are here to help.
                    </Typography>
                    <Button fullWidth variant="outlined" sx={{ mt: 1.4 }}>
                      Contact Support
                    </Button>
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
