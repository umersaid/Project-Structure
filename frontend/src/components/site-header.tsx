import NextLink from "next/link";
import { Avatar, Button, Link, Stack, Typography } from "@mui/material";

type SiteHeaderProps = {
  activePage: "home" | "competitions" | "none";
};

const navItems = [
  { label: "Home", href: "/" },
  { label: "Competitions", href: "/competitions" },
  { label: "About Us", href: "#" },
  { label: "FAQ", href: "#" },
  { label: "Contact", href: "#" },
] as const;

export default function SiteHeader({ activePage }: SiteHeaderProps) {
  return (
    <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={2}>
      <Link
        component={NextLink}
        href="/"
        underline="none"
        color="inherit"
        sx={{ display: "inline-flex", alignItems: "center", gap: 1.25 }}
      >
        <Avatar
          variant="rounded"
          sx={{
            width: 40,
            height: 40,
            bgcolor: "#E8EEFF",
            color: "#1A5DFF",
            fontWeight: 800,
          }}
        >
          AC
        </Avatar>
        <Typography variant="h6" sx={{ fontWeight: 800, lineHeight: 1.1 }}>
          Academic
          <br />
          Challenge
        </Typography>
      </Link>

      <Stack direction="row" spacing={3} sx={{ display: { xs: "none", md: "flex" } }}>
        {navItems.map((item) => {
          const isActive =
            (activePage === "home" && item.href === "/") ||
            (activePage === "competitions" && item.href === "/competitions");

          return (
            <Link
              key={item.label}
              component={NextLink}
              href={item.href}
              underline="none"
              color={isActive ? "primary.main" : "text.secondary"}
              sx={{
                fontWeight: isActive ? 700 : 600,
                borderBottom: isActive ? "2px solid" : "2px solid transparent",
                borderColor: "primary.main",
                pb: 0.5,
              }}
            >
              {item.label}
            </Link>
          );
        })}
      </Stack>

      <Stack direction="row" spacing={1}>
        <Button variant="outlined" color="primary" sx={{ display: { xs: "none", sm: "inline-flex" } }}>
          Login
        </Button>
        <Button component={NextLink} href="/signup" variant="contained" color="primary">
          Sign Up
        </Button>
      </Stack>
    </Stack>
  );
}
