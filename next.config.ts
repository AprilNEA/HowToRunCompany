import type { NextConfig } from "next";
import nextra from "nextra";

const withNextra = nextra({
  // ... Add Nextra-specific options here
});

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true, // mandatory, otherwise won't export
  },
};

export default withNextra(nextConfig);
