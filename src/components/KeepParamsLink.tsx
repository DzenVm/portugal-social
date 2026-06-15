"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";
import type { CSSProperties, ReactNode } from "react";

/**
 * Internal link that forwards the current URL query string (e.g. utm_*, gclid)
 * to a fixed same-origin destination.
 *
 * Safe by design: it only ever appends the incoming query string to an
 * internal path passed by us — it never reads a destination URL from a
 * parameter (no open redirect) and never reflects parameter values into the
 * DOM (values only land in the href, URL-encoded). This avoids the patterns
 * that trigger Google Ads "Compromised site" / malicious-redirect flags.
 */

function subscribe(callback: () => void) {
  window.addEventListener("popstate", callback);
  return () => window.removeEventListener("popstate", callback);
}

const getSearch = () => window.location.search;
const getServerSearch = () => "";

function mergeHref(href: string, search: string): string {
  if (!search) return href;
  const [path, ownQuery = ""] = href.split("?");
  const params = new URLSearchParams(ownQuery);
  // The link's own params (e.g. ?game=pharaoh) win; forwarded params fill the rest.
  new URLSearchParams(search).forEach((value, key) => {
    if (!params.has(key)) params.append(key, value);
  });
  const qs = params.toString();
  return qs ? `${path}?${qs}` : path;
}

export default function KeepParamsLink({
  href,
  children,
  className,
  style,
  ariaLabel,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  ariaLabel?: string;
}) {
  const search = useSyncExternalStore(subscribe, getSearch, getServerSearch);

  return (
    <Link
      href={mergeHref(href, search)}
      className={className}
      style={style}
      aria-label={ariaLabel}
    >
      {children}
    </Link>
  );
}
