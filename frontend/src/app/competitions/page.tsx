import NextLink from "next/link";
import {
  ArrowForwardIos,
  BookmarkBorder,
  CalendarMonthOutlined,
  EmojiEventsOutlined,
  SchoolOutlined,
  Search,
  Tune,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Chip,
  Container,
  Divider,
  Grid,
  IconButton,
  InputAdornment,
  MenuItem,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import SiteHeader from "@/components/site-header";

const upcomingCompetitions = [
  {
    slug: "national-academic-challenge",
    title: "National Academic Challenge",
    status: "Registration Open",
    scheduleLabel: "Registration Ends",
    date: "10 Sep 2026",
    classes: "3 - 12",
    fee: "PKR 500",
    action: "View Details",
    actionVariant: "outlined" as const,
    actionHref: "/competitions/national-academic-challenge",
    secondaryAction: "Register Now",
    secondaryHref: "/signup",
    tone: "linear-gradient(140deg, #112B72 0%, #1A5DFF 100%)",
  },
  {
    slug: "young-minds-intelligence-competition",
    title: "Young Minds Intelligence Competition",
    status: "Registration Open",
    scheduleLabel: "Registration Ends",
    date: "15 Sep 2026",
    classes: "3 - 12",
    fee: "PKR 500",
    action: "View Details",
    actionVariant: "outlined" as const,
    actionHref: "/competitions/young-minds-intelligence-competition",
    secondaryAction: "Register Now",
    secondaryHref: "/signup",
    tone: "linear-gradient(140deg, #551A8B 0%, #7C3AED 100%)",
  },
  {
    slug: "knowledge-challenge-series",
    title: "Knowledge Challenge Series",
    status: "Coming Soon",
    scheduleLabel: "Registration Starts",
    date: "20 Sep 2026",
    classes: "3 - 12",
    fee: "PKR 500",
    action: "View Details",
    actionVariant: "outlined" as const,
    actionHref: "/competitions/knowledge-challenge-series",
    secondaryAction: "Notify Me",
    secondaryHref: "/competitions/knowledge-challenge-series",
    tone: "linear-gradient(140deg, #0E6A54 0%, #0B8D76 100%)",
  },
];

const pastCompetitions = [
  { title: "Smart Scholars Challenge 2024", heldOn: "15 Jun 2024", accent: "#1A5DFF" },
  { title: "Academic Excellence Test 2024", heldOn: "20 Apr 2024", accent: "#10B981" },
  { title: "Future Leaders Quiz 2024", heldOn: "10 Feb 2024", accent: "#7C3AED" },
];

export default function CompetitionsPage() {
  return (
    <Box sx={{ py: { xs: 2.5, md: 4 }, background: "linear-gradient(180deg, #F6F9FF 0%, #EEF3FF 100%)" }}>
      <Container maxWidth="lg">
        <Paper sx={{ p: { xs: 2, md: 3 }, bgcolor: "rgba(255,255,255,0.95)", backdropFilter: "blur(6px)" }}>
          <Stack spacing={3}>
            <SiteHeader activePage="competitions" />

            <Box
              sx={{
                borderRadius: 3,
                p: { xs: 2, md: 3 },
                border: "1px solid #E6EDFF",
                background: "linear-gradient(90deg, #FFFFFF 0%, #F4F8FF 100%)",
              }}
            >
              <Grid container spacing={2} alignItems="center">
                <Grid size={{ xs: 12, md: 7 }}>
                  <Typography variant="h2" sx={{ fontSize: { xs: "2rem", md: "2.7rem" }, mb: 1 }}>
                    Competitions
                  </Typography>
                  <Typography color="text.secondary">
                    Discover and participate in exciting academic competitions.
                  </Typography>
                </Grid>
                <Grid size={{ xs: 12, md: 5 }}>
                  <Box
                    sx={{
                      position: "relative",
                      minHeight: 130,
                      borderRadius: 3,
                      overflow: "hidden",
                      background: "radial-gradient(circle at 30% 30%, #E4EDFF 0%, #D8E5FF 45%, #F8FBFF 100%)",
                    }}
                  >
                    <Box
                      sx={{
                        position: "absolute",
                        right: 22,
                        top: 16,
                        color: "#F59E0B",
                        transform: "scale(1.4)",
                      }}
                    >
                      <EmojiEventsOutlined fontSize="large" />
                    </Box>
                    <Box
                      sx={{
                        position: "absolute",
                        left: 24,
                        top: 58,
                        width: 88,
                        height: 12,
                        borderRadius: 20,
                        bgcolor: "#1A5DFF",
                        boxShadow: "0 10px 20px rgba(26, 93, 255, 0.25)",
                      }}
                    />
                    <Box
                      sx={{
                        position: "absolute",
                        left: 55,
                        top: 44,
                        width: 64,
                        height: 10,
                        borderRadius: 20,
                        bgcolor: "#3B82F6",
                      }}
                    />
                    <Box
                      sx={{
                        position: "absolute",
                        left: 86,
                        top: 30,
                        width: 44,
                        height: 9,
                        borderRadius: 20,
                        bgcolor: "#60A5FA",
                      }}
                    />
                    <Box
                      sx={{
                        position: "absolute",
                        left: 180,
                        bottom: 20,
                        width: 30,
                        height: 38,
                        borderRadius: "6px 6px 0 0",
                        bgcolor: "#22C55E",
                      }}
                    />
                    <Box
                      sx={{
                        position: "absolute",
                        left: 172,
                        bottom: 16,
                        width: 46,
                        height: 8,
                        borderRadius: 10,
                        bgcolor: "#14532D",
                      }}
                    />
                  </Box>
                </Grid>
              </Grid>
            </Box>

            <Paper sx={{ p: { xs: 1.5, md: 2 } }}>
              <Stack direction={{ xs: "column", md: "row" }} spacing={1.2}>
                <TextField
                  fullWidth
                  size="small"
                  placeholder="Search competitions..."
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Search fontSize="small" />
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField select size="small" defaultValue="all" sx={{ minWidth: { md: 135 } }}>
                  <MenuItem value="all">All Status</MenuItem>
                  <MenuItem value="open">Registration Open</MenuItem>
                  <MenuItem value="soon">Coming Soon</MenuItem>
                </TextField>
                <TextField select size="small" defaultValue="all" sx={{ minWidth: { md: 135 } }}>
                  <MenuItem value="all">All Classes</MenuItem>
                  <MenuItem value="3-5">Class 3 - 5</MenuItem>
                  <MenuItem value="6-8">Class 6 - 8</MenuItem>
                  <MenuItem value="9-12">Class 9 - 12</MenuItem>
                </TextField>
                <TextField select size="small" defaultValue="all" sx={{ minWidth: { md: 145 } }}>
                  <MenuItem value="all">All Subjects</MenuItem>
                  <MenuItem value="math">Math</MenuItem>
                  <MenuItem value="science">Science</MenuItem>
                  <MenuItem value="general">General Knowledge</MenuItem>
                </TextField>
                <Box sx={{ flexGrow: 1, display: { xs: "none", md: "block" } }} />
                <TextField select size="small" defaultValue="latest" sx={{ minWidth: { md: 140 } }}>
                  <MenuItem value="latest">Sort by</MenuItem>
                  <MenuItem value="date">Date</MenuItem>
                  <MenuItem value="fee">Fee</MenuItem>
                </TextField>
                <IconButton sx={{ border: "1px solid #D7E3FF", borderRadius: 2 }}>
                  <Tune fontSize="small" />
                </IconButton>
              </Stack>
            </Paper>

            <Stack spacing={2}>
              <Typography variant="h4" sx={{ fontSize: { xs: "1.4rem", md: "1.8rem" } }}>
                Upcoming Competitions
              </Typography>
              <Grid container spacing={2}>
                {upcomingCompetitions.map((item) => (
                  <Grid size={{ xs: 12, lg: 4 }} key={item.title}>
                    <Paper sx={{ p: 0, overflow: "hidden", height: "100%" }}>
                      <Box
                        sx={{
                          p: 2,
                          color: "white",
                          minHeight: 144,
                          background: item.tone,
                          position: "relative",
                        }}
                      >
                        <Chip
                          label={item.status}
                          size="small"
                          sx={{ bgcolor: "rgba(255,255,255,0.2)", color: "white", fontWeight: 700, mb: 1.4 }}
                        />
                        <Typography variant="h5" sx={{ fontWeight: 800, maxWidth: 240, lineHeight: 1.15 }}>
                          {item.title}
                        </Typography>
                        <IconButton sx={{ position: "absolute", top: 10, right: 10, color: "white" }}>
                          <BookmarkBorder fontSize="small" />
                        </IconButton>
                      </Box>

                      <Box sx={{ p: 2 }}>
                        <Stack spacing={1}>
                          <Stack direction="row" spacing={1} alignItems="center" color="text.secondary">
                            <CalendarMonthOutlined fontSize="small" />
                            <Typography variant="body2">{item.scheduleLabel}</Typography>
                            <Typography variant="body2" fontWeight={700} ml="auto">
                              {item.date}
                            </Typography>
                          </Stack>
                          <Stack direction="row" spacing={1} alignItems="center" color="text.secondary">
                            <SchoolOutlined fontSize="small" />
                            <Typography variant="body2">Classes</Typography>
                            <Typography variant="body2" fontWeight={700} ml="auto">
                              {item.classes}
                            </Typography>
                          </Stack>
                          <Stack direction="row" spacing={1} alignItems="center" color="text.secondary">
                            <EmojiEventsOutlined fontSize="small" />
                            <Typography variant="body2">Entry Fee</Typography>
                            <Typography variant="body2" fontWeight={700} ml="auto">
                              {item.fee}
                            </Typography>
                          </Stack>
                        </Stack>

                        <Stack direction="row" spacing={1} mt={2}>
                          <Button component={NextLink} href={item.actionHref} fullWidth variant={item.actionVariant}>
                            {item.action}
                          </Button>
                          <Button component={NextLink} href={item.secondaryHref} fullWidth variant="contained">
                            {item.secondaryAction}
                          </Button>
                        </Stack>
                      </Box>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
              <Stack direction="row" justifyContent="flex-end">
                <IconButton sx={{ border: "1px solid #D7E3FF", bgcolor: "white" }}>
                  <ArrowForwardIos sx={{ fontSize: 16 }} />
                </IconButton>
              </Stack>
            </Stack>

            <Divider />

            <Stack spacing={1.6}>
              <Typography variant="h4" sx={{ fontSize: { xs: "1.4rem", md: "1.8rem" } }}>
                Past Competitions
              </Typography>
              <Grid container spacing={1.8}>
                {pastCompetitions.map((item) => (
                  <Grid size={{ xs: 12, md: 4 }} key={item.title}>
                    <Paper sx={{ p: 1.6, height: "100%" }}>
                      <Stack direction="row" spacing={1.3} alignItems="center">
                        <Box
                          sx={{
                            width: 56,
                            height: 56,
                            borderRadius: 2,
                            bgcolor: `${item.accent}20`,
                            color: item.accent,
                            display: "grid",
                            placeItems: "center",
                          }}
                        >
                          <EmojiEventsOutlined />
                        </Box>
                        <Box sx={{ flexGrow: 1 }}>
                          <Typography fontWeight={800} lineHeight={1.2}>
                            {item.title}
                          </Typography>
                          <Typography variant="body2" color="text.secondary" mt={0.5}>
                            Held on {item.heldOn}
                          </Typography>
                        </Box>
                        <Button variant="outlined" size="small">
                          View Results
                        </Button>
                      </Stack>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
              <Button variant="outlined" sx={{ alignSelf: "center", minWidth: 260 }}>
                View All Past Competitions
              </Button>
            </Stack>

            <Paper sx={{ p: { xs: 2, md: 2.2 }, bgcolor: "#F5F8FF" }}>
              <Stack direction="row" alignItems="center" justifyContent="space-between">
                <Stack direction="row" spacing={1.2} alignItems="center">
                  <Box sx={{ color: "primary.main" }}>
                    <EmojiEventsOutlined />
                  </Box>
                  <Box>
                    <Typography fontWeight={800}>Fair. Transparent. Merit Based.</Typography>
                    <Typography variant="body2" color="text.secondary">
                      Compete with students across the country and showcase your skills.
                    </Typography>
                  </Box>
                </Stack>
                <Button component={NextLink} href="/" variant="text" endIcon={<ArrowForwardIos sx={{ fontSize: 14 }} />}>
                  Back to Home
                </Button>
              </Stack>
            </Paper>
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
}
