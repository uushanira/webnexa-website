import {
  Cloud,
  Code2,
  Cpu,
  Globe,
  LifeBuoy,
  MessageSquareCheck,
  Server,
  ShieldCheck,
  Smartphone,
  Sparkles,
  TrendingUp,
} from 'lucide-react'

const ICON_MAP = {
  Globe,
  Code2,
  Server,
  Smartphone,
  Cloud,
  Sparkles,
  LifeBuoy,
  Cpu,
  MessageSquareCheck,
  TrendingUp,
  ShieldCheck,
}

export default function ServiceIcon({ name, className = 'h-6 w-6' }) {
  const Icon = ICON_MAP[name] || Code2
  return <Icon className={className} aria-hidden="true" />
}

