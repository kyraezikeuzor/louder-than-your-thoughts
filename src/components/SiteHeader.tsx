"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { navItems } from "@/lib/content";
export function SiteHeader(){const [open,setOpen]=useState(false);const pathname=usePathname();return <header><nav className="wrap" aria-label="Main navigation"><Link href="/" className="brand" onClick={()=>setOpen(false)}>Louder Than Your Thoughts</Link><button className="nav-toggle" aria-label="Toggle menu" aria-expanded={open} aria-controls="navLinks" onClick={()=>setOpen(!open)}><svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round"><path d="M3 6h18M3 12h18M3 18h18"/></svg></button><ul className={"navlinks"+(open?" open":"")} id="navLinks">{navItems.map(item=><li key={item.href}><Link href={item.href} aria-current={pathname===item.href?"page":undefined} onClick={()=>setOpen(false)}>{item.label}</Link></li>)}</ul></nav></header>;}
