import { ModeToggle } from "../../ui/mode-toggle";
import {
  Footer,
  FooterColumn,
  FooterBottom,
  FooterContent,
} from "../../ui/footer";
import LaunchUI from "../../logos/launch-ui";
import { siteConfig } from "@/config/site";

export default function FooterSection() {
  return (
    <footer className="w-full bg-background px-4">
      <div className="mx-auto max-w-container">
        <Footer>
          <FooterContent>
            <FooterColumn className="col-span-2 sm:col-span-3 md:col-span-1">
              <div className="flex items-center gap-2">
                <LaunchUI />
                <h3 className="text-xl font-bold">Social Stream</h3>
              </div>
              <div className="mt-4">
                <form className="flex flex-col gap-2">
                  <p className="text-sm text-muted-foreground">Stay updated with the latest tips and tricks. Sign up for our newsletter!</p>
                  <input type="email" placeholder="Enter your email" className="rounded-md border bg-background px-3 py-2" />
                  <button type="submit" className="rounded-md bg-primary px-3 py-2 text-sm text-primary-foreground">Subscribe</button>
                </form>
              </div>
            </FooterColumn>
            <FooterColumn>
              <h3 className="text-md pt-1 font-semibold">Quick Links</h3>
              <a href="/" className="text-sm text-muted-foreground">Home</a>
              <a href="/features" className="text-sm text-muted-foreground">Features</a>
              <a href="/pricing" className="text-sm text-muted-foreground">Pricing</a>
              <a href="/blog" className="text-sm text-muted-foreground">Blog</a>
              <a href="/contact" className="text-sm text-muted-foreground">Contact</a>
            </FooterColumn>
            <FooterColumn>
              <h3 className="text-md pt-1 font-semibold">Resources</h3>
              <a href="/docs" className="text-sm text-muted-foreground">Documentation</a>
              <a href="/help" className="text-sm text-muted-foreground">Help Center</a>
              <a href="/guides" className="text-sm text-muted-foreground">Guides</a>
              <a href="/api" className="text-sm text-muted-foreground">API</a>
            </FooterColumn>
            <FooterColumn>
              <h3 className="text-md pt-1 font-semibold">Social Media</h3>
              <a href={siteConfig.links.facebook} className="text-sm text-muted-foreground">Facebook</a>
              <a href={siteConfig.links.twitter} className="text-sm text-muted-foreground">Twitter</a>
              <a href={siteConfig.links.instagram} className="text-sm text-muted-foreground">Instagram</a>
            </FooterColumn>
          </FooterContent>
          <FooterBottom>
            <div>© 2024 Social Stream. All rights reserved</div>
            <div className="flex items-center gap-4">
              <a href="/privacy">Privacy Policy</a>
              <a href="/terms">Terms of Service</a>
              <ModeToggle />
            </div>
          </FooterBottom>
        </Footer>
      </div>
    </footer>
  );
}
