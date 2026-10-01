import Link from "next/link";
import PageHead from "@/components/PageHead";

export default function NotFound() {
  return (
    <>
      <PageHead title="Page not found" text="Sorry, we could not find the page you were looking for." />
      <section className="section"><div className="wrap btns">
        <Link className="btn btn-primary" href="/">Back to home</Link>
        <Link className="btn btn-outline" href="/contact">Contact us</Link>
      </div></section>
    </>
  );
}
