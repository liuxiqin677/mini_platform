// 默认图标（使用emoji）
export function DefaultIcon({ color, emoji }: { color: string; emoji: string }) {
  return (
    <div className="w-10 h-10 rounded-full flex items-center justify-center text-2xl" style={{ backgroundColor: `${color}30` }}>
      {emoji}
    </div>
  )
}

// 猫咪图标
export function CatIcon({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 64 64" className="w-10 h-10">
      {/* 耳朵 */}
      <path d="M12 8 L18 24 L6 24 Z" fill={color} />
      <path d="M52 8 L58 24 L46 24 Z" fill={color} />
      {/* 头部 */}
      <ellipse cx="32" cy="36" rx="24" ry="22" fill={color} />
      {/* 内耳 */}
      <path d="M14 12 L17 21 L10 21 Z" fill="#FFB6C1" />
      <path d="M50 12 L54 21 L47 21 Z" fill="#FFB6C1" />
      {/* 眼睛 */}
      <ellipse cx="22" cy="34" rx="4" ry="5" fill="#1F2937" />
      <ellipse cx="42" cy="34" rx="4" ry="5" fill="#1F2937" />
      <circle cx="23" cy="33" r="1.5" fill="white" />
      <circle cx="43" cy="33" r="1.5" fill="white" />
      {/* 鼻子 */}
      <ellipse cx="32" cy="42" rx="3" ry="2" fill="#FFB6C1" />
      {/* 嘴巴 */}
      <path d="M32 44 Q28 48 26 46" fill="none" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M32 44 Q36 48 38 46" fill="none" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" />
      {/* 胡须 */}
      <line x1="8" y1="38" x2="18" y2="40" stroke="#1F2937" strokeWidth="1" />
      <line x1="8" y1="42" x2="18" y2="42" stroke="#1F2937" strokeWidth="1" />
      <line x1="46" y1="40" x2="56" y2="38" stroke="#1F2937" strokeWidth="1" />
      <line x1="46" y1="42" x2="56" y2="42" stroke="#1F2937" strokeWidth="1" />
    </svg>
  )
}

// 狗狗图标
export function DogIcon({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 64 64" className="w-10 h-10">
      {/* 耳朵 */}
      <ellipse cx="14" cy="28" rx="8" ry="14" fill={color} />
      <ellipse cx="50" cy="28" rx="8" ry="14" fill={color} />
      {/* 头部 */}
      <ellipse cx="32" cy="36" rx="22" ry="20" fill={color} />
      {/* 眼睛 */}
      <circle cx="24" cy="32" r="4" fill="#1F2937" />
      <circle cx="40" cy="32" r="4" fill="#1F2937" />
      <circle cx="25" cy="31" r="1.5" fill="white" />
      <circle cx="41" cy="31" r="1.5" fill="white" />
      {/* 鼻子 */}
      <ellipse cx="32" cy="42" rx="5" ry="4" fill="#1F2937" />
      <ellipse cx="32" cy="41" rx="2" ry="1" fill="#6B7280" />
      {/* 嘴巴 */}
      <path d="M32 46 Q28 50 26 48" fill="none" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M32 46 Q36 50 38 48" fill="none" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" />
      {/* 舌头 */}
      <ellipse cx="32" cy="52" rx="4" ry="5" fill="#FF6B6B" />
    </svg>
  )
}

// 柯基图标
export function CorgiIcon() {
  return (
    <svg viewBox="0 0 64 64" className="w-10 h-10">
      <ellipse cx="12" cy="20" rx="6" ry="12" fill="#D97706" />
      <ellipse cx="52" cy="20" rx="6" ry="12" fill="#D97706" />
      <ellipse cx="32" cy="36" rx="22" ry="20" fill="#D97706" />
      <ellipse cx="32" cy="44" rx="12" ry="10" fill="#FFFFFF" />
      <circle cx="24" cy="32" r="3" fill="#1F2937" />
      <circle cx="40" cy="32" r="3" fill="#1F2937" />
      <circle cx="25" cy="31" r="1" fill="white" />
      <circle cx="41" cy="31" r="1" fill="white" />
      <ellipse cx="32" cy="42" rx="4" ry="3" fill="#1F2937" />
      <path d="M32 45 Q28 49 26 47" fill="none" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M32 45 Q36 49 38 47" fill="none" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

// 兔子图标
export function RabbitIcon({ color, hasLopEars }: { color: string; hasLopEars?: boolean }) {
  return (
    <svg viewBox="0 0 64 64" className="w-10 h-10">
      {hasLopEars ? (
        <>
          <ellipse cx="14" cy="38" rx="6" ry="16" fill={color} transform="rotate(-20 14 38)" />
          <ellipse cx="50" cy="38" rx="6" ry="16" fill={color} transform="rotate(20 50 38)" />
        </>
      ) : (
        <>
          <ellipse cx="20" cy="14" rx="5" ry="14" fill={color} />
          <ellipse cx="44" cy="14" rx="5" ry="14" fill={color} />
          <ellipse cx="20" cy="14" rx="2" ry="10" fill="#FFB6C1" />
          <ellipse cx="44" cy="14" rx="2" ry="10" fill="#FFB6C1" />
        </>
      )}
      <ellipse cx="32" cy="40" rx="20" ry="18" fill={color} />
      <circle cx="24" cy="36" r="3" fill="#1F2937" />
      <circle cx="40" cy="36" r="3" fill="#1F2937" />
      <circle cx="25" cy="35" r="1" fill="white" />
      <circle cx="41" cy="35" r="1" fill="white" />
      <ellipse cx="32" cy="44" rx="3" ry="2" fill="#FFB6C1" />
      <path d="M32 46 L32 50" stroke="#1F2937" strokeWidth="1" />
      <path d="M28 48 Q32 52 36 48" fill="none" stroke="#1F2937" strokeWidth="1" strokeLinecap="round" />
      <circle cx="18" cy="44" r="4" fill="#FFB6C1" opacity="0.5" />
      <circle cx="46" cy="44" r="4" fill="#FFB6C1" opacity="0.5" />
    </svg>
  )
}

// 仓鼠图标
export function HamsterIcon({ color = "#F5DEB3" }: { color?: string }) {
  return (
    <svg viewBox="0 0 64 64" className="w-10 h-10">
      <circle cx="14" cy="26" r="8" fill={color} />
      <circle cx="50" cy="26" r="8" fill={color} />
      <circle cx="14" cy="26" r="4" fill="#FFB6C1" />
      <circle cx="50" cy="26" r="4" fill="#FFB6C1" />
      <circle cx="32" cy="38" r="22" fill={color} />
      <ellipse cx="32" cy="46" rx="14" ry="10" fill="#FFFFFF" />
      <circle cx="22" cy="34" r="3" fill="#1F2937" />
      <circle cx="42" cy="34" r="3" fill="#1F2937" />
      <circle cx="23" cy="33" r="1" fill="white" />
      <circle cx="43" cy="33" r="1" fill="white" />
      <ellipse cx="32" cy="42" rx="3" ry="2" fill="#FFB6C1" />
      <path d="M32 44 Q28 48 26 46" fill="none" stroke="#1F2937" strokeWidth="1" strokeLinecap="round" />
      <path d="M32 44 Q36 48 38 46" fill="none" stroke="#1F2937" strokeWidth="1" strokeLinecap="round" />
      <circle cx="20" cy="44" r="5" fill="#FFB6C1" opacity="0.4" />
      <circle cx="44" cy="44" r="5" fill="#FFB6C1" opacity="0.4" />
    </svg>
  )
}

// 鹦鹉图标
export function ParrotIcon() {
  return (
    <svg viewBox="0 0 64 64" className="w-10 h-10">
      <path d="M32 4 Q40 8 38 18 L32 14 L26 18 Q24 8 32 4" fill="#EF4444" />
      <ellipse cx="32" cy="32" rx="18" ry="20" fill="#22C55E" />
      <ellipse cx="32" cy="36" rx="12" ry="14" fill="#86EFAC" />
      <circle cx="24" cy="28" r="4" fill="white" />
      <circle cx="40" cy="28" r="4" fill="white" />
      <circle cx="24" cy="28" r="2" fill="#1F2937" />
      <circle cx="40" cy="28" r="2" fill="#1F2937" />
      <path d="M32 34 Q38 34 36 42 Q32 46 28 42 Q26 34 32 34" fill="#F59E0B" />
    </svg>
  )
}

// 小黄鸭图标
export function DuckIcon() {
  return (
    <svg viewBox="0 0 64 64" className="w-10 h-10">
      <ellipse cx="32" cy="38" rx="20" ry="18" fill="#22C55E" />
      <ellipse cx="32" cy="26" rx="16" ry="14" fill="#22C55E" />
      <ellipse cx="32" cy="44" rx="8" ry="6" fill="#D4B896" />
      <circle cx="24" cy="24" r="3" fill="#1F2937" />
      <circle cx="40" cy="24" r="3" fill="#1F2937" />
      <circle cx="25" cy="23" r="1" fill="white" />
      <circle cx="41" cy="23" r="1" fill="white" />
      <ellipse cx="32" cy="32" rx="6" ry="4" fill="#F59E0B" />
    </svg>
  )
}

// 金鱼图标
export function FishIcon({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 64 64" className="w-10 h-10">
      <ellipse cx="28" cy="32" rx="18" ry="14" fill={color} />
      <path d="M46 32 L58 22 L58 42 Z" fill={color} />
      <ellipse cx="18" cy="28" rx="8" ry="10" fill={`${color}80`} />
      <circle cx="20" cy="28" r="4" fill="white" />
      <circle cx="20" cy="28" r="2" fill="#1F2937" />
      <path d="M28 18 Q32 14 36 18" fill="none" stroke={color} strokeWidth="4" strokeLinecap="round" />
      <circle cx="38" cy="36" r="2" fill={`${color}60`} />
      <circle cx="44" cy="28" r="1.5" fill={`${color}60`} />
    </svg>
  )
}

// 蜗牛图标
export function SnailIcon() {
  return (
    <svg viewBox="0 0 64 64" className="w-10 h-10">
      <ellipse cx="24" cy="46" rx="18" ry="10" fill="#D4A574" />
      <circle cx="38" cy="36" r="16" fill="#92400E" />
      <circle cx="38" cy="36" r="12" fill="#D4A574" />
      <path d="M38 28 Q42 32 38 36 Q34 40 38 44" fill="none" stroke="#92400E" strokeWidth="2" />
      <path d="M12 36 Q8 26 14 20" fill="none" stroke="#D4A574" strokeWidth="3" strokeLinecap="round" />
      <path d="M18 36 Q14 28 18 22" fill="none" stroke="#D4A574" strokeWidth="3" strokeLinecap="round" />
      <circle cx="14" cy="20" r="2" fill="#1F2937" />
      <circle cx="18" cy="22" r="2" fill="#1F2937" />
      <circle cx="16" cy="44" r="2" fill="#1F2937" />
      <path d="M14 48 Q16 50 18 48" fill="none" stroke="#1F2937" strokeWidth="1" strokeLinecap="round" />
    </svg>
  )
}

// 以下是更多动物图标的简化实现
export function LionIcon() {
  return (
    <svg viewBox="0 0 64 64" className="w-10 h-10">
      <circle cx="32" cy="32" r="24" fill="#D97706" />
      <circle cx="32" cy="36" r="16" fill="#F59E0B" />
      <circle cx="24" cy="32" r="3" fill="#1F2937" />
      <circle cx="40" cy="32" r="3" fill="#1F2937" />
      <ellipse cx="32" cy="40" rx="4" ry="3" fill="#92400E" />
      <path d="M32 43 Q28 47 26 45" fill="none" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M32 43 Q36 47 38 45" fill="none" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

export function TigerIcon() {
  return (
    <svg viewBox="0 0 64 64" className="w-10 h-10">
      <ellipse cx="32" cy="36" rx="22" ry="20" fill="#F97316" />
      <ellipse cx="14" cy="22" rx="6" ry="8" fill="#F97316" />
      <ellipse cx="50" cy="22" rx="6" ry="8" fill="#F97316" />
      <path d="M20 28 L24 36" stroke="#1F2937" strokeWidth="3" strokeLinecap="round" />
      <path d="M44 28 L40 36" stroke="#1F2937" strokeWidth="3" strokeLinecap="round" />
      <path d="M32 24 L32 32" stroke="#1F2937" strokeWidth="3" strokeLinecap="round" />
      <circle cx="24" cy="34" r="3" fill="#1F2937" />
      <circle cx="40" cy="34" r="3" fill="#1F2937" />
      <ellipse cx="32" cy="44" rx="4" ry="3" fill="#1F2937" />
    </svg>
  )
}

export function WolfIcon() {
  return <DogIcon color="#6B7280" />
}

export function FoxIcon() {
  return (
    <svg viewBox="0 0 64 64" className="w-10 h-10">
      <path d="M10 12 L18 30 L6 30 Z" fill="#EA580C" />
      <path d="M54 12 L58 30 L46 30 Z" fill="#EA580C" />
      <ellipse cx="32" cy="38" rx="22" ry="18" fill="#EA580C" />
      <ellipse cx="32" cy="46" rx="10" ry="8" fill="white" />
      <circle cx="24" cy="34" r="3" fill="#1F2937" />
      <circle cx="40" cy="34" r="3" fill="#1F2937" />
      <ellipse cx="32" cy="44" rx="3" ry="2" fill="#1F2937" />
    </svg>
  )
}

export function SquirrelIcon({ striped }: { striped?: boolean }) {
  return (
    <svg viewBox="0 0 64 64" className="w-10 h-10">
      <path d="M48 20 Q56 16 58 24 Q60 36 52 40 Q48 42 46 38" fill="#8B4513" />
      <ellipse cx="32" cy="38" rx="18" ry="16" fill="#8B4513" />
      <ellipse cx="12" cy="28" rx="6" ry="8" fill="#8B4513" />
      <ellipse cx="52" cy="28" rx="6" ry="8" fill="#8B4513" />
      {striped && (
        <>
          <line x1="26" y1="30" x2="26" y2="46" stroke="#D97706" strokeWidth="2" />
          <line x1="32" y1="28" x2="32" y2="48" stroke="#D97706" strokeWidth="2" />
          <line x1="38" y1="30" x2="38" y2="46" stroke="#D97706" strokeWidth="2" />
        </>
      )}
      <circle cx="24" cy="34" r="3" fill="#1F2937" />
      <circle cx="40" cy="34" r="3" fill="#1F2937" />
      <ellipse cx="32" cy="42" rx="2" ry="1.5" fill="#1F2937" />
    </svg>
  )
}

export function TotoroIcon() {
  return (
    <svg viewBox="0 0 64 64" className="w-10 h-10">
      <ellipse cx="32" cy="38" rx="22" ry="20" fill="#9CA3AF" />
      <ellipse cx="16" cy="18" rx="6" ry="10" fill="#9CA3AF" />
      <ellipse cx="48" cy="18" rx="6" ry="10" fill="#9CA3AF" />
      <ellipse cx="32" cy="46" rx="14" ry="10" fill="#E5E7EB" />
      <circle cx="22" cy="32" r="5" fill="white" />
      <circle cx="42" cy="32" r="5" fill="white" />
      <circle cx="22" cy="32" r="2" fill="#1F2937" />
      <circle cx="42" cy="32" r="2" fill="#1F2937" />
      <ellipse cx="32" cy="42" rx="3" ry="2" fill="#1F2937" />
    </svg>
  )
}

export function MouseIcon() {
  return (
    <svg viewBox="0 0 64 64" className="w-10 h-10">
      <circle cx="16" cy="28" r="10" fill="#9CA3AF" />
      <circle cx="48" cy="28" r="10" fill="#9CA3AF" />
      <circle cx="16" cy="28" r="5" fill="#FFB6C1" />
      <circle cx="48" cy="28" r="5" fill="#FFB6C1" />
      <ellipse cx="32" cy="40" rx="18" ry="16" fill="#9CA3AF" />
      <circle cx="24" cy="36" r="2" fill="#1F2937" />
      <circle cx="40" cy="36" r="2" fill="#1F2937" />
      <ellipse cx="32" cy="44" rx="3" ry="2" fill="#FFB6C1" />
      <line x1="10" y1="42" x2="20" y2="44" stroke="#1F2937" strokeWidth="1" />
      <line x1="44" y1="44" x2="54" y2="42" stroke="#1F2937" strokeWidth="1" />
    </svg>
  )
}

export function HedgehogIcon() {
  return (
    <svg viewBox="0 0 64 64" className="w-10 h-10">
      <ellipse cx="32" cy="40" rx="20" ry="16" fill="#8B4513" />
      <path d="M16 30 L20 22 L24 30" fill="#5D4037" />
      <path d="M24 28 L28 18 L32 28" fill="#5D4037" />
      <path d="M32 26 L36 16 L40 26" fill="#5D4037" />
      <path d="M40 28 L44 18 L48 28" fill="#5D4037" />
      <ellipse cx="28" cy="44" rx="12" ry="10" fill="#D4A574" />
      <circle cx="22" cy="42" r="2" fill="#1F2937" />
      <ellipse cx="18" cy="48" rx="3" ry="2" fill="#1F2937" />
    </svg>
  )
}

export function OwlIcon() {
  return (
    <svg viewBox="0 0 64 64" className="w-10 h-10">
      <path d="M18 12 L24 24 L12 24 Z" fill="#8B4513" />
      <path d="M46 12 L52 24 L40 24 Z" fill="#8B4513" />
      <ellipse cx="32" cy="38" rx="20" ry="18" fill="#8B4513" />
      <circle cx="24" cy="34" r="8" fill="white" />
      <circle cx="40" cy="34" r="8" fill="white" />
      <circle cx="24" cy="34" r="4" fill="#F59E0B" />
      <circle cx="40" cy="34" r="4" fill="#F59E0B" />
      <circle cx="24" cy="34" r="2" fill="#1F2937" />
      <circle cx="40" cy="34" r="2" fill="#1F2937" />
      <path d="M32 42 L28 48 L32 46 L36 48 Z" fill="#F59E0B" />
    </svg>
  )
}

export function PenguinIcon() {
  return (
    <svg viewBox="0 0 64 64" className="w-10 h-10">
      <ellipse cx="32" cy="38" rx="20" ry="22" fill="#1F2937" />
      <ellipse cx="32" cy="44" rx="12" ry="14" fill="white" />
      <circle cx="24" cy="30" r="3" fill="white" />
      <circle cx="40" cy="30" r="3" fill="white" />
      <circle cx="24" cy="30" r="1.5" fill="#1F2937" />
      <circle cx="40" cy="30" r="1.5" fill="#1F2937" />
      <path d="M32 36 L28 42 L32 40 L36 42 Z" fill="#F59E0B" />
    </svg>
  )
}

export function ChickIcon() {
  return (
    <svg viewBox="0 0 64 64" className="w-10 h-10">
      <circle cx="32" cy="36" r="20" fill="#FCD34D" />
      <path d="M32 10 Q36 6 34 14 Q38 10 36 16 Q32 12 32 18" fill="#F59E0B" />
      <circle cx="24" cy="32" r="3" fill="#1F2937" />
      <circle cx="40" cy="32" r="3" fill="#1F2937" />
      <path d="M32 38 L28 44 L32 42 L36 44 Z" fill="#F97316" />
      <circle cx="20" cy="40" r="4" fill="#FFB6C1" opacity="0.5" />
      <circle cx="44" cy="40" r="4" fill="#FFB6C1" opacity="0.5" />
    </svg>
  )
}

export function BirdIcon({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 64 64" className="w-10 h-10">
      <ellipse cx="32" cy="36" rx="18" ry="16" fill={color} />
      <circle cx="24" cy="32" r="2" fill="#1F2937" />
      <path d="M36 34 L44 32 L36 36" fill="#F59E0B" />
      <path d="M18 42 Q8 38 12 48" fill={color} />
    </svg>
  )
}

export function PeacockIcon() {
  return (
    <svg viewBox="0 0 64 64" className="w-10 h-10">
      <ellipse cx="32" cy="8" rx="24" ry="8" fill="#0EA5E9" />
      <circle cx="20" cy="8" r="3" fill="#22C55E" />
      <circle cx="32" cy="6" r="3" fill="#22C55E" />
      <circle cx="44" cy="8" r="3" fill="#22C55E" />
      <ellipse cx="32" cy="40" rx="16" ry="18" fill="#0EA5E9" />
      <circle cx="26" cy="36" r="2" fill="#1F2937" />
      <circle cx="38" cy="36" r="2" fill="#1F2937" />
      <path d="M32 42 L28 48 L36 48 Z" fill="#F59E0B" />
    </svg>
  )
}

export function FlamingoIcon() {
  return (
    <svg viewBox="0 0 64 64" className="w-10 h-10">
      <path d="M32 56 Q28 40 32 30" stroke="#EC4899" strokeWidth="4" fill="none" />
      <ellipse cx="32" cy="26" rx="14" ry="12" fill="#EC4899" />
      <circle cx="28" cy="24" r="2" fill="#1F2937" />
      <path d="M36 26 Q42 24 40 30 L36 28" fill="#1F2937" />
    </svg>
  )
}

export function SwanIcon() {
  return (
    <svg viewBox="0 0 64 64" className="w-10 h-10">
      <path d="M20 50 Q16 30 28 20 Q32 16 32 24" stroke="white" strokeWidth="8" fill="none" />
      <ellipse cx="32" cy="50" rx="18" ry="10" fill="white" />
      <circle cx="28" cy="22" r="6" fill="white" />
      <circle cx="26" cy="20" r="2" fill="#1F2937" />
      <path d="M30 24 L36 22 L30 26" fill="#F97316" />
    </svg>
  )
}

export function EagleIcon() {
  return (
    <svg viewBox="0 0 64 64" className="w-10 h-10">
      <ellipse cx="32" cy="36" rx="20" ry="18" fill="#92400E" />
      <ellipse cx="32" cy="42" rx="10" ry="8" fill="#F5F5DC" />
      <circle cx="24" cy="32" r="4" fill="#F59E0B" />
      <circle cx="40" cy="32" r="4" fill="#F59E0B" />
      <circle cx="24" cy="32" r="2" fill="#1F2937" />
      <circle cx="40" cy="32" r="2" fill="#1F2937" />
      <path d="M32 38 L26 48 L32 44 L38 48 Z" fill="#F59E0B" />
    </svg>
  )
}

export function CraneIcon() {
  return (
    <svg viewBox="0 0 64 64" className="w-10 h-10">
      <path d="M28 56 L28 36" stroke="#374151" strokeWidth="3" />
      <path d="M36 56 L36 36" stroke="#374151" strokeWidth="3" />
      <ellipse cx="32" cy="34" rx="14" ry="10" fill="white" />
      <path d="M32 34 Q24 20 32 16 Q40 20 32 34" fill="white" />
      <circle cx="32" cy="14" r="4" fill="#EF4444" />
      <circle cx="30" cy="20" r="2" fill="#1F2937" />
      <path d="M36 22 L44 20" stroke="#374151" strokeWidth="2" />
    </svg>
  )
}

export function ClownFishIcon() {
  return (
    <svg viewBox="0 0 64 64" className="w-10 h-10">
      <ellipse cx="28" cy="32" rx="18" ry="14" fill="#F97316" />
      <path d="M46 32 L58 22 L58 42 Z" fill="#F97316" />
      <ellipse cx="16" cy="32" rx="4" ry="8" fill="white" />
      <ellipse cx="28" cy="32" rx="4" ry="10" fill="white" />
      <ellipse cx="40" cy="32" rx="4" ry="8" fill="white" />
      <circle cx="18" cy="28" r="3" fill="white" />
      <circle cx="18" cy="28" r="1.5" fill="#1F2937" />
    </svg>
  )
}

export function DolphinIcon() {
  return (
    <svg viewBox="0 0 64 64" className="w-10 h-10">
      <path d="M8 32 Q16 20 36 24 Q56 28 56 36 Q56 44 36 44 Q16 44 8 32" fill="#6B7280" />
      <ellipse cx="36" cy="38" rx="12" ry="6" fill="#D1D5DB" />
      <circle cx="18" cy="32" r="2" fill="#1F2937" />
      <path d="M48 30 L56 24" stroke="#6B7280" strokeWidth="3" strokeLinecap="round" />
      <path d="M32 24 Q36 16 40 24" fill="#6B7280" />
    </svg>
  )
}

export function WhaleIcon() {
  return (
    <svg viewBox="0 0 64 64" className="w-10 h-10">
      <ellipse cx="32" cy="36" rx="26" ry="18" fill="#3B82F6" />
      <ellipse cx="32" cy="44" rx="16" ry="8" fill="#93C5FD" />
      <circle cx="18" cy="32" r="3" fill="#1F2937" />
      <path d="M32 14 Q28 8 32 4 Q36 8 32 14" fill="#60A5FA" />
      <path d="M54 32 Q60 28 58 36 Q56 40 54 36" fill="#3B82F6" />
    </svg>
  )
}

export function TurtleIcon({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 64 64" className="w-10 h-10">
      <ellipse cx="32" cy="40" rx="22" ry="14" fill={color} />
      <ellipse cx="32" cy="40" rx="16" ry="10" fill="#166534" />
      <path d="M24 36 L28 32 L32 36 L36 32 L40 36" stroke="#22C55E" strokeWidth="2" fill="none" />
      <ellipse cx="16" cy="48" rx="4" ry="3" fill={color} />
      <ellipse cx="48" cy="48" rx="4" ry="3" fill={color} />
      <ellipse cx="20" cy="32" rx="8" ry="6" fill={color} />
      <circle cx="18" cy="30" r="2" fill="#1F2937" />
    </svg>
  )
}

export function OctopusIcon() {
  return (
    <svg viewBox="0 0 64 64" className="w-10 h-10">
      <ellipse cx="32" cy="28" rx="18" ry="16" fill="#A855F7" />
      <path d="M14 40 Q10 50 14 56" stroke="#A855F7" strokeWidth="4" strokeLinecap="round" />
      <path d="M22 44 Q18 54 22 58" stroke="#A855F7" strokeWidth="4" strokeLinecap="round" />
      <path d="M32 46 Q32 56 32 60" stroke="#A855F7" strokeWidth="4" strokeLinecap="round" />
      <path d="M42 44 Q46 54 42 58" stroke="#A855F7" strokeWidth="4" strokeLinecap="round" />
      <path d="M50 40 Q54 50 50 56" stroke="#A855F7" strokeWidth="4" strokeLinecap="round" />
      <circle cx="24" cy="26" r="4" fill="white" />
      <circle cx="40" cy="26" r="4" fill="white" />
      <circle cx="24" cy="26" r="2" fill="#1F2937" />
      <circle cx="40" cy="26" r="2" fill="#1F2937" />
    </svg>
  )
}

export function JellyfishIcon() {
  return (
    <svg viewBox="0 0 64 64" className="w-10 h-10">
      <ellipse cx="32" cy="24" rx="18" ry="14" fill="#EC4899" opacity="0.7" />
      <path d="M16 32 Q14 44 18 56" stroke="#EC4899" strokeWidth="2" opacity="0.6" />
      <path d="M24 34 Q22 46 26 58" stroke="#EC4899" strokeWidth="2" opacity="0.6" />
      <path d="M32 36 Q32 48 32 60" stroke="#EC4899" strokeWidth="2" opacity="0.6" />
      <path d="M40 34 Q42 46 38 58" stroke="#EC4899" strokeWidth="2" opacity="0.6" />
      <path d="M48 32 Q50 44 46 56" stroke="#EC4899" strokeWidth="2" opacity="0.6" />
      <circle cx="26" cy="22" r="2" fill="white" />
      <circle cx="38" cy="22" r="2" fill="white" />
    </svg>
  )
}

export function StarfishIcon() {
  return (
    <svg viewBox="0 0 64 64" className="w-10 h-10">
      <path d="M32 8 L36 24 L52 24 L40 34 L44 52 L32 42 L20 52 L24 34 L12 24 L28 24 Z" fill="#F97316" />
      <circle cx="32" cy="32" r="4" fill="#FBBF24" />
    </svg>
  )
}

export function CrabIcon() {
  return (
    <svg viewBox="0 0 64 64" className="w-10 h-10">
      <ellipse cx="32" cy="40" rx="18" ry="12" fill="#EF4444" />
      <path d="M8 32 Q4 28 8 24 Q12 20 16 28 L18 36" fill="#EF4444" />
      <path d="M56 32 Q60 28 56 24 Q52 20 48 28 L46 36" fill="#EF4444" />
      <circle cx="24" cy="36" r="3" fill="white" />
      <circle cx="40" cy="36" r="3" fill="white" />
      <circle cx="24" cy="36" r="1.5" fill="#1F2937" />
      <circle cx="40" cy="36" r="1.5" fill="#1F2937" />
    </svg>
  )
}

export function ShrimpIcon() {
  return (
    <svg viewBox="0 0 64 64" className="w-10 h-10">
      <path d="M16 32 Q32 20 48 28 Q56 32 52 40 Q48 48 32 48 Q16 48 12 40 Q8 32 16 32" fill="#FB923C" />
      <path d="M12 28 Q8 20 12 16" stroke="#FB923C" strokeWidth="2" />
      <path d="M16 26 Q14 18 18 14" stroke="#FB923C" strokeWidth="2" />
      <circle cx="22" cy="34" r="2" fill="#1F2937" />
    </svg>
  )
}

export function SeahorseIcon() {
  return (
    <svg viewBox="0 0 64 64" className="w-10 h-10">
      <path d="M32 8 Q40 12 38 24 Q36 36 32 44 Q28 52 24 56 Q20 52 24 48 Q28 44 28 36 Q28 28 24 24 Q20 20 24 12 Q28 4 32 8" fill="#F59E0B" />
      <circle cx="30" cy="18" r="2" fill="#1F2937" />
      <path d="M36 16 L42 14" stroke="#F59E0B" strokeWidth="2" />
    </svg>
  )
}

export function SharkIcon() {
  return (
    <svg viewBox="0 0 64 64" className="w-10 h-10">
      <ellipse cx="32" cy="36" rx="24" ry="14" fill="#6B7280" />
      <path d="M32 22 L28 10 L36 22" fill="#6B7280" />
      <path d="M52 36 L60 32 L60 40 Z" fill="#6B7280" />
      <ellipse cx="32" cy="42" rx="14" ry="6" fill="#E5E7EB" />
      <circle cx="20" cy="32" r="3" fill="white" />
      <circle cx="20" cy="32" r="1.5" fill="#1F2937" />
      <path d="M36 38 Q40 42 36 46" stroke="#6B7280" strokeWidth="2" fill="none" />
    </svg>
  )
}

export function SealIcon() {
  return (
    <svg viewBox="0 0 64 64" className="w-10 h-10">
      <ellipse cx="32" cy="42" rx="22" ry="14" fill="#9CA3AF" />
      <circle cx="28" cy="32" r="12" fill="#9CA3AF" />
      <circle cx="22" cy="28" r="3" fill="#1F2937" />
      <circle cx="34" cy="28" r="3" fill="#1F2937" />
      <ellipse cx="28" cy="36" rx="4" ry="2" fill="#1F2937" />
      <line x1="12" y1="34" x2="20" y2="36" stroke="#1F2937" strokeWidth="1" />
      <line x1="36" y1="36" x2="44" y2="34" stroke="#1F2937" strokeWidth="1" />
    </svg>
  )
}

export function PufferfishIcon() {
  return (
    <svg viewBox="0 0 64 64" className="w-10 h-10">
      <circle cx="32" cy="32" r="20" fill="#FCD34D" />
      <circle cx="24" cy="28" r="4" fill="white" />
      <circle cx="40" cy="28" r="4" fill="white" />
      <circle cx="24" cy="28" r="2" fill="#1F2937" />
      <circle cx="40" cy="28" r="2" fill="#1F2937" />
      <ellipse cx="32" cy="40" rx="6" ry="4" fill="#F97316" />
      <path d="M54 32 L60 28 L60 36 Z" fill="#FCD34D" />
    </svg>
  )
}

export function BeeIcon() {
  return (
    <svg viewBox="0 0 64 64" className="w-10 h-10">
      <ellipse cx="32" cy="38" rx="16" ry="14" fill="#FCD34D" />
      <ellipse cx="32" cy="34" rx="14" ry="4" fill="#1F2937" />
      <ellipse cx="32" cy="42" rx="14" ry="4" fill="#1F2937" />
      <circle cx="32" cy="24" r="10" fill="#FCD34D" />
      <circle cx="28" cy="22" r="2" fill="#1F2937" />
      <circle cx="36" cy="22" r="2" fill="#1F2937" />
      <path d="M20 20 Q16 12 20 8" stroke="#1F2937" strokeWidth="2" />
      <path d="M44 20 Q48 12 44 8" stroke="#1F2937" strokeWidth="2" />
      <ellipse cx="20" cy="30" rx="8" ry="4" fill="#E5E7EB" opacity="0.6" transform="rotate(-30 20 30)" />
      <ellipse cx="44" cy="30" rx="8" ry="4" fill="#E5E7EB" opacity="0.6" transform="rotate(30 44 30)" />
    </svg>
  )
}

export function ButterflyIcon() {
  return (
    <svg viewBox="0 0 64 64" className="w-10 h-10">
      <ellipse cx="20" cy="28" rx="14" ry="12" fill="#8B5CF6" />
      <ellipse cx="44" cy="28" rx="14" ry="12" fill="#8B5CF6" />
      <ellipse cx="20" cy="44" rx="10" ry="8" fill="#A78BFA" />
      <ellipse cx="44" cy="44" rx="10" ry="8" fill="#A78BFA" />
      <ellipse cx="32" cy="36" rx="4" ry="16" fill="#1F2937" />
      <path d="M28 20 Q32 12 36 20" stroke="#1F2937" strokeWidth="2" fill="none" />
      <circle cx="28" cy="12" r="2" fill="#1F2937" />
      <circle cx="36" cy="12" r="2" fill="#1F2937" />
    </svg>
  )
}

export function LadybugIcon() {
  return (
    <svg viewBox="0 0 64 64" className="w-10 h-10">
      <circle cx="32" cy="38" r="20" fill="#EF4444" />
      <path d="M32 18 L32 58" stroke="#1F2937" strokeWidth="2" />
      <circle cx="24" cy="32" r="4" fill="#1F2937" />
      <circle cx="40" cy="32" r="4" fill="#1F2937" />
      <circle cx="26" cy="46" r="3" fill="#1F2937" />
      <circle cx="38" cy="46" r="3" fill="#1F2937" />
      <ellipse cx="32" cy="22" rx="8" ry="6" fill="#1F2937" />
      <circle cx="28" cy="20" r="2" fill="white" />
      <circle cx="36" cy="20" r="2" fill="white" />
    </svg>
  )
}

export function DragonflyIcon() {
  return (
    <svg viewBox="0 0 64 64" className="w-10 h-10">
      <ellipse cx="32" cy="24" rx="8" ry="6" fill="#3B82F6" />
      <ellipse cx="32" cy="44" rx="4" ry="16" fill="#60A5FA" />
      <ellipse cx="18" cy="28" rx="12" ry="4" fill="#BFDBFE" opacity="0.7" />
      <ellipse cx="46" cy="28" rx="12" ry="4" fill="#BFDBFE" opacity="0.7" />
      <circle cx="28" cy="22" r="3" fill="#1F2937" />
      <circle cx="36" cy="22" r="3" fill="#1F2937" />
    </svg>
  )
}

export function FireflyIcon() {
  return (
    <svg viewBox="0 0 64 64" className="w-10 h-10">
      <ellipse cx="32" cy="32" rx="12" ry="10" fill="#1F2937" />
      <ellipse cx="32" cy="48" rx="8" ry="8" fill="#84CC16" />
      <circle cx="28" cy="28" r="2" fill="white" />
      <circle cx="36" cy="28" r="2" fill="white" />
      <ellipse cx="20" cy="26" rx="8" ry="3" fill="#6B7280" opacity="0.5" />
      <ellipse cx="44" cy="26" rx="8" ry="3" fill="#6B7280" opacity="0.5" />
    </svg>
  )
}

export function AntIcon() {
  return (
    <svg viewBox="0 0 64 64" className="w-10 h-10">
      <circle cx="32" cy="20" r="8" fill="#1F2937" />
      <ellipse cx="32" cy="36" rx="10" ry="8" fill="#1F2937" />
      <ellipse cx="32" cy="52" rx="8" ry="6" fill="#1F2937" />
      <circle cx="28" cy="18" r="2" fill="white" />
      <circle cx="36" cy="18" r="2" fill="white" />
      <path d="M26 12 Q24 6 20 4" stroke="#1F2937" strokeWidth="2" />
      <path d="M38 12 Q40 6 44 4" stroke="#1F2937" strokeWidth="2" />
      <line x1="22" y1="36" x2="14" y2="44" stroke="#1F2937" strokeWidth="2" />
      <line x1="42" y1="36" x2="50" y2="44" stroke="#1F2937" strokeWidth="2" />
    </svg>
  )
}

export function GrasshopperIcon() {
  return (
    <svg viewBox="0 0 64 64" className="w-10 h-10">
      <ellipse cx="32" cy="36" rx="18" ry="10" fill="#22C55E" />
      <circle cx="18" cy="28" r="8" fill="#22C55E" />
      <circle cx="16" cy="26" r="2" fill="#1F2937" />
      <path d="M24 44 Q20 56 28 58" stroke="#22C55E" strokeWidth="4" />
      <path d="M40 44 Q44 56 36 58" stroke="#22C55E" strokeWidth="4" />
      <path d="M12 20 Q8 12 12 8" stroke="#22C55E" strokeWidth="2" />
      <path d="M18 18 Q16 10 20 6" stroke="#22C55E" strokeWidth="2" />
    </svg>
  )
}

export function CaterpillarIcon() {
  return (
    <svg viewBox="0 0 64 64" className="w-10 h-10">
      <circle cx="14" cy="40" r="8" fill="#84CC16" />
      <circle cx="26" cy="38" r="8" fill="#84CC16" />
      <circle cx="38" cy="40" r="8" fill="#84CC16" />
      <circle cx="50" cy="38" r="8" fill="#84CC16" />
      <circle cx="10" cy="40" r="2" fill="#1F2937" />
      <path d="M8 34 Q4 28 8 24" stroke="#84CC16" strokeWidth="2" />
      <path d="M14 32 Q12 26 16 22" stroke="#84CC16" strokeWidth="2" />
    </svg>
  )
}

export function MantisIcon() {
  return (
    <svg viewBox="0 0 64 64" className="w-10 h-10">
      <ellipse cx="32" cy="44" rx="14" ry="10" fill="#22C55E" />
      <ellipse cx="32" cy="28" rx="6" ry="8" fill="#22C55E" />
      <path d="M26 28 Q18 20 12 28 L18 32" fill="#22C55E" />
      <path d="M38 28 Q46 20 52 28 L46 32" fill="#22C55E" />
      <circle cx="30" cy="24" r="2" fill="#1F2937" />
      <circle cx="34" cy="24" r="2" fill="#1F2937" />
      <path d="M28 16 Q24 8 28 4" stroke="#22C55E" strokeWidth="2" />
      <path d="M36 16 Q40 8 36 4" stroke="#22C55E" strokeWidth="2" />
    </svg>
  )
}

export function PandaIcon() {
  return (
    <svg viewBox="0 0 64 64" className="w-10 h-10">
      <circle cx="14" cy="20" r="8" fill="#1F2937" />
      <circle cx="50" cy="20" r="8" fill="#1F2937" />
      <circle cx="32" cy="36" r="22" fill="white" />
      <ellipse cx="22" cy="32" rx="8" ry="10" fill="#1F2937" />
      <ellipse cx="42" cy="32" rx="8" ry="10" fill="#1F2937" />
      <circle cx="22" cy="32" r="3" fill="white" />
      <circle cx="42" cy="32" r="3" fill="white" />
      <circle cx="22" cy="32" r="1.5" fill="#1F2937" />
      <circle cx="42" cy="32" r="1.5" fill="#1F2937" />
      <ellipse cx="32" cy="44" rx="4" ry="3" fill="#1F2937" />
    </svg>
  )
}

export function RaccoonIcon() {
  return (
    <svg viewBox="0 0 64 64" className="w-10 h-10">
      <ellipse cx="12" cy="22" rx="6" ry="10" fill="#6B7280" />
      <ellipse cx="52" cy="22" rx="6" ry="10" fill="#6B7280" />
      <ellipse cx="32" cy="38" rx="22" ry="18" fill="#6B7280" />
      <ellipse cx="32" cy="44" rx="12" ry="10" fill="white" />
      <ellipse cx="22" cy="34" rx="8" ry="6" fill="#1F2937" />
      <ellipse cx="42" cy="34" rx="8" ry="6" fill="#1F2937" />
      <circle cx="22" cy="34" r="2" fill="white" />
      <circle cx="42" cy="34" r="2" fill="white" />
      <ellipse cx="32" cy="44" rx="3" ry="2" fill="#1F2937" />
    </svg>
  )
}

export function KoalaIcon() {
  return (
    <svg viewBox="0 0 64 64" className="w-10 h-10">
      <circle cx="12" cy="28" r="10" fill="#9CA3AF" />
      <circle cx="52" cy="28" r="10" fill="#9CA3AF" />
      <circle cx="12" cy="28" r="5" fill="#E5E7EB" />
      <circle cx="52" cy="28" r="5" fill="#E5E7EB" />
      <circle cx="32" cy="38" r="20" fill="#9CA3AF" />
      <circle cx="24" cy="34" r="3" fill="#1F2937" />
      <circle cx="40" cy="34" r="3" fill="#1F2937" />
      <ellipse cx="32" cy="44" rx="6" ry="4" fill="#374151" />
    </svg>
  )
}

export function SlothIcon() {
  return (
    <svg viewBox="0 0 64 64" className="w-10 h-10">
      <ellipse cx="32" cy="38" rx="22" ry="18" fill="#92400E" />
      <ellipse cx="32" cy="44" rx="14" ry="10" fill="#D4A574" />
      <ellipse cx="22" cy="34" rx="6" ry="4" fill="#D4A574" />
      <ellipse cx="42" cy="34" rx="6" ry="4" fill="#D4A574" />
      <circle cx="22" cy="34" r="2" fill="#1F2937" />
      <circle cx="42" cy="34" r="2" fill="#1F2937" />
      <ellipse cx="32" cy="44" rx="4" ry="2" fill="#1F2937" />
      <path d="M26 48 Q32 52 38 48" fill="none" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

export function GiraffeIcon() {
  return (
    <svg viewBox="0 0 64 64" className="w-10 h-10">
      <path d="M24 8 Q28 4 28 12" fill="#F59E0B" />
      <path d="M36 8 Q32 4 32 12" fill="#F59E0B" />
      <ellipse cx="30" cy="28" rx="14" ry="18" fill="#F59E0B" />
      <circle cx="34" cy="24" r="4" fill="#92400E" />
      <circle cx="26" cy="32" r="3" fill="#92400E" />
      <circle cx="38" cy="36" r="2" fill="#92400E" />
      <circle cx="24" cy="22" r="3" fill="#1F2937" />
      <circle cx="36" cy="22" r="3" fill="#1F2937" />
      <ellipse cx="30" cy="34" rx="4" ry="2" fill="#92400E" />
    </svg>
  )
}

export function ElephantIcon() {
  return (
    <svg viewBox="0 0 64 64" className="w-10 h-10">
      <circle cx="10" cy="32" r="8" fill="#9CA3AF" />
      <circle cx="54" cy="32" r="8" fill="#9CA3AF" />
      <circle cx="32" cy="36" r="20" fill="#9CA3AF" />
      <path d="M32 40 Q28 52 32 58 Q36 52 32 40" fill="#9CA3AF" />
      <circle cx="24" cy="32" r="3" fill="#1F2937" />
      <circle cx="40" cy="32" r="3" fill="#1F2937" />
    </svg>
  )
}

export function ZebraIcon() {
  return (
    <svg viewBox="0 0 64 64" className="w-10 h-10">
      <ellipse cx="12" cy="22" rx="6" ry="10" fill="white" />
      <ellipse cx="52" cy="22" rx="6" ry="10" fill="white" />
      <ellipse cx="32" cy="38" rx="22" ry="18" fill="white" />
      <path d="M18 26 L22 38" stroke="#1F2937" strokeWidth="3" />
      <path d="M26 24 L28 40" stroke="#1F2937" strokeWidth="3" />
      <path d="M34 24 L36 40" stroke="#1F2937" strokeWidth="3" />
      <path d="M42 26 L46 38" stroke="#1F2937" strokeWidth="3" />
      <circle cx="24" cy="34" r="3" fill="#1F2937" />
      <circle cx="40" cy="34" r="3" fill="#1F2937" />
      <ellipse cx="32" cy="46" rx="6" ry="4" fill="#374151" />
    </svg>
  )
}

export function HippoIcon() {
  return (
    <svg viewBox="0 0 64 64" className="w-10 h-10">
      <ellipse cx="32" cy="38" rx="24" ry="18" fill="#6B7280" />
      <ellipse cx="32" cy="48" rx="16" ry="10" fill="#9CA3AF" />
      <circle cx="20" cy="30" r="4" fill="white" />
      <circle cx="44" cy="30" r="4" fill="white" />
      <circle cx="20" cy="30" r="2" fill="#1F2937" />
      <circle cx="44" cy="30" r="2" fill="#1F2937" />
      <circle cx="26" cy="48" r="3" fill="#374151" />
      <circle cx="38" cy="48" r="3" fill="#374151" />
    </svg>
  )
}

export function RhinoIcon() {
  return (
    <svg viewBox="0 0 64 64" className="w-10 h-10">
      <ellipse cx="32" cy="38" rx="22" ry="16" fill="#6B7280" />
      <ellipse cx="16" cy="28" rx="6" ry="8" fill="#6B7280" />
      <ellipse cx="48" cy="28" rx="6" ry="8" fill="#6B7280" />
      <path d="M32 28 L32 18" stroke="#374151" strokeWidth="6" strokeLinecap="round" />
      <circle cx="24" cy="34" r="3" fill="#1F2937" />
      <circle cx="40" cy="34" r="3" fill="#1F2937" />
    </svg>
  )
}

export function MonkeyIcon() {
  return (
    <svg viewBox="0 0 64 64" className="w-10 h-10">
      <circle cx="10" cy="34" r="8" fill="#92400E" />
      <circle cx="54" cy="34" r="8" fill="#92400E" />
      <circle cx="10" cy="34" r="4" fill="#D4A574" />
      <circle cx="54" cy="34" r="4" fill="#D4A574" />
      <circle cx="32" cy="36" r="20" fill="#92400E" />
      <ellipse cx="32" cy="42" rx="12" ry="10" fill="#D4A574" />
      <circle cx="24" cy="32" r="3" fill="#1F2937" />
      <circle cx="40" cy="32" r="3" fill="#1F2937" />
      <ellipse cx="32" cy="44" rx="4" ry="2" fill="#92400E" />
    </svg>
  )
}

export function GorillaIcon() {
  return (
    <svg viewBox="0 0 64 64" className="w-10 h-10">
      <circle cx="32" cy="36" r="22" fill="#1F2937" />
      <ellipse cx="32" cy="44" rx="14" ry="10" fill="#374151" />
      <circle cx="22" cy="32" r="4" fill="#374151" />
      <circle cx="42" cy="32" r="4" fill="#374151" />
      <circle cx="22" cy="32" r="2" fill="#1F2937" />
      <circle cx="42" cy="32" r="2" fill="#1F2937" />
      <ellipse cx="32" cy="46" rx="6" ry="4" fill="#1F2937" />
      <circle cx="28" cy="46" r="2" fill="#374151" />
      <circle cx="36" cy="46" r="2" fill="#374151" />
    </svg>
  )
}

export function KangarooIcon() {
  return (
    <svg viewBox="0 0 64 64" className="w-10 h-10">
      <ellipse cx="16" cy="18" rx="6" ry="12" fill="#D97706" />
      <ellipse cx="48" cy="18" rx="6" ry="12" fill="#D97706" />
      <ellipse cx="32" cy="38" rx="18" ry="18" fill="#D97706" />
      <ellipse cx="32" cy="44" rx="10" ry="8" fill="#F5DEB3" />
      <circle cx="24" cy="32" r="3" fill="#1F2937" />
      <circle cx="40" cy="32" r="3" fill="#1F2937" />
      <ellipse cx="32" cy="44" rx="3" ry="2" fill="#1F2937" />
    </svg>
  )
}

export function DeerIcon() {
  return (
    <svg viewBox="0 0 64 64" className="w-10 h-10">
      <path d="M18 4 Q14 12 18 18 Q22 12 26 16 Q22 8 18 4" fill="#92400E" />
      <path d="M46 4 Q50 12 46 18 Q42 12 38 16 Q42 8 46 4" fill="#92400E" />
      <ellipse cx="32" cy="38" rx="20" ry="18" fill="#92400E" />
      <ellipse cx="32" cy="46" rx="10" ry="8" fill="#D4A574" />
      <circle cx="24" cy="32" r="3" fill="#1F2937" />
      <circle cx="40" cy="32" r="3" fill="#1F2937" />
      <ellipse cx="32" cy="46" rx="4" ry="2" fill="#1F2937" />
    </svg>
  )
}

export function AlpacaIcon() {
  return (
    <svg viewBox="0 0 64 64" className="w-10 h-10">
      <ellipse cx="12" cy="18" rx="6" ry="10" fill="#F5F5DC" />
      <ellipse cx="52" cy="18" rx="6" ry="10" fill="#F5F5DC" />
      <circle cx="32" cy="36" r="20" fill="#F5F5DC" />
      <path d="M16 30 Q20 26 24 30 Q28 26 32 30 Q36 26 40 30 Q44 26 48 30" fill="none" stroke="#E5E7EB" strokeWidth="3" />
      <circle cx="24" cy="34" r="3" fill="#1F2937" />
      <circle cx="40" cy="34" r="3" fill="#1F2937" />
      <ellipse cx="32" cy="46" rx="4" ry="3" fill="#FFB6C1" />
    </svg>
  )
}

export function PolarBearIcon() {
  return (
    <svg viewBox="0 0 64 64" className="w-10 h-10">
      <circle cx="14" cy="24" r="8" fill="white" />
      <circle cx="50" cy="24" r="8" fill="white" />
      <circle cx="32" cy="36" r="22" fill="white" />
      <circle cx="24" cy="32" r="3" fill="#1F2937" />
      <circle cx="40" cy="32" r="3" fill="#1F2937" />
      <ellipse cx="32" cy="44" rx="6" ry="4" fill="#1F2937" />
    </svg>
  )
}

export function SnakeIcon() {
  return (
    <svg viewBox="0 0 64 64" className="w-10 h-10">
      <path d="M8 40 Q16 32 24 40 Q32 48 40 40 Q48 32 56 40" stroke="#22C55E" strokeWidth="8" fill="none" strokeLinecap="round" />
      <circle cx="8" cy="40" r="6" fill="#22C55E" />
      <circle cx="6" cy="38" r="2" fill="#1F2937" />
      <path d="M4 44 L0 42 L0 46 Z" fill="#EF4444" />
    </svg>
  )
}

export function ChameleonIcon() {
  return (
    <svg viewBox="0 0 64 64" className="w-10 h-10">
      <ellipse cx="32" cy="36" rx="20" ry="14" fill="#84CC16" />
      <circle cx="20" cy="32" r="8" fill="#84CC16" />
      <circle cx="20" cy="32" r="5" fill="#22C55E" />
      <circle cx="20" cy="32" r="2" fill="#1F2937" />
      <path d="M52 36 Q60 32 56 40 Q52 44 48 40" fill="#84CC16" />
      <path d="M32 50 Q28 58 36 56" stroke="#84CC16" strokeWidth="4" strokeLinecap="round" />
    </svg>
  )
}

export function GeckoIcon() {
  return (
    <svg viewBox="0 0 64 64" className="w-10 h-10">
      <ellipse cx="32" cy="36" rx="16" ry="12" fill="#84CC16" />
      <ellipse cx="32" cy="24" rx="10" ry="8" fill="#84CC16" />
      <circle cx="28" cy="22" r="3" fill="#1F2937" />
      <circle cx="36" cy="22" r="3" fill="#1F2937" />
      <circle cx="12" cy="40" r="4" fill="#84CC16" />
      <circle cx="52" cy="40" r="4" fill="#84CC16" />
      <path d="M32 48 Q32 58 28 60" stroke="#84CC16" strokeWidth="4" strokeLinecap="round" />
    </svg>
  )
}

export function CrocodileIcon() {
  return (
    <svg viewBox="0 0 64 64" className="w-10 h-10">
      <ellipse cx="32" cy="36" rx="26" ry="12" fill="#22C55E" />
      <ellipse cx="14" cy="32" rx="12" ry="8" fill="#22C55E" />
      <circle cx="10" cy="28" r="3" fill="#FCD34D" />
      <circle cx="18" cy="28" r="3" fill="#FCD34D" />
      <circle cx="10" cy="28" r="1.5" fill="#1F2937" />
      <circle cx="18" cy="28" r="1.5" fill="#1F2937" />
      <path d="M4 36 L8 34 L12 36 L16 34 L20 36" fill="none" stroke="white" strokeWidth="2" />
    </svg>
  )
}

export function DinosaurIcon() {
  return (
    <svg viewBox="0 0 64 64" className="w-10 h-10">
      <ellipse cx="32" cy="42" rx="18" ry="14" fill="#10B981" />
      <path d="M24 28 Q20 18 28 14 Q36 10 40 20 Q44 30 36 34" fill="#10B981" />
      <circle cx="30" cy="22" r="3" fill="#1F2937" />
      <path d="M50 42 Q58 38 56 46 L50 44" fill="#10B981" />
      <path d="M28 14 L26 8 L30 12 L32 6 L34 12 L38 8 L36 14" fill="#10B981" />
    </svg>
  )
}

export function PigIcon() {
  return (
    <svg viewBox="0 0 64 64" className="w-10 h-10">
      <ellipse cx="12" cy="28" rx="6" ry="8" fill="#F9A8D4" />
      <ellipse cx="52" cy="28" rx="6" ry="8" fill="#F9A8D4" />
      <circle cx="32" cy="36" r="20" fill="#F9A8D4" />
      <ellipse cx="32" cy="44" rx="10" ry="8" fill="#FDA4AF" />
      <circle cx="28" cy="44" r="2" fill="#F472B6" />
      <circle cx="36" cy="44" r="2" fill="#F472B6" />
      <circle cx="24" cy="32" r="3" fill="#1F2937" />
      <circle cx="40" cy="32" r="3" fill="#1F2937" />
    </svg>
  )
}

export function CowIcon() {
  return (
    <svg viewBox="0 0 64 64" className="w-10 h-10">
      <ellipse cx="10" cy="20" rx="6" ry="10" fill="white" />
      <ellipse cx="54" cy="20" rx="6" ry="10" fill="white" />
      <circle cx="32" cy="36" r="20" fill="white" />
      <ellipse cx="24" cy="32" rx="6" ry="8" fill="#1F2937" />
      <ellipse cx="44" cy="36" rx="5" ry="6" fill="#1F2937" />
      <circle cx="24" cy="30" r="3" fill="white" />
      <circle cx="24" cy="30" r="1.5" fill="#1F2937" />
      <circle cx="40" cy="30" r="3" fill="white" />
      <circle cx="40" cy="30" r="1.5" fill="#1F2937" />
      <ellipse cx="32" cy="48" rx="8" ry="6" fill="#F9A8D4" />
      <circle cx="28" cy="48" r="2" fill="#1F2937" />
      <circle cx="36" cy="48" r="2" fill="#1F2937" />
    </svg>
  )
}

export function SheepIcon() {
  return (
    <svg viewBox="0 0 64 64" className="w-10 h-10">
      <circle cx="18" cy="30" r="8" fill="white" />
      <circle cx="46" cy="30" r="8" fill="white" />
      <circle cx="32" cy="24" r="8" fill="white" />
      <circle cx="24" cy="38" r="8" fill="white" />
      <circle cx="40" cy="38" r="8" fill="white" />
      <circle cx="32" cy="44" r="8" fill="white" />
      <ellipse cx="32" cy="36" rx="10" ry="8" fill="#1F2937" />
      <circle cx="28" cy="34" r="2" fill="white" />
      <circle cx="36" cy="34" r="2" fill="white" />
      <ellipse cx="32" cy="42" rx="3" ry="2" fill="#374151" />
    </svg>
  )
}

export function GoatIcon() {
  return (
    <svg viewBox="0 0 64 64" className="w-10 h-10">
      <path d="M16 8 Q12 16 18 24" stroke="#D4B896" strokeWidth="4" fill="none" />
      <path d="M48 8 Q52 16 46 24" stroke="#D4B896" strokeWidth="4" fill="none" />
      <ellipse cx="32" cy="38" rx="20" ry="16" fill="#D4B896" />
      <circle cx="24" cy="34" r="3" fill="#1F2937" />
      <circle cx="40" cy="34" r="3" fill="#1F2937" />
      <ellipse cx="32" cy="46" rx="6" ry="4" fill="#92400E" />
      <path d="M32 50 L32 56" stroke="#D4B896" strokeWidth="3" />
    </svg>
  )
}

export function HorseIcon() {
  return (
    <svg viewBox="0 0 64 64" className="w-10 h-10">
      <path d="M20 8 Q24 4 24 16" fill="#92400E" />
      <path d="M40 8 Q36 4 36 16" fill="#92400E" />
      <ellipse cx="30" cy="36" rx="20" ry="18" fill="#92400E" />
      <ellipse cx="26" cy="46" rx="10" ry="8" fill="#D4A574" />
      <circle cx="22" cy="30" r="3" fill="#1F2937" />
      <circle cx="38" cy="30" r="3" fill="#1F2937" />
      <ellipse cx="26" cy="48" rx="4" ry="2" fill="#1F2937" />
    </svg>
  )
}

export function DonkeyIcon() {
  return (
    <svg viewBox="0 0 64 64" className="w-10 h-10">
      <ellipse cx="14" cy="16" rx="6" ry="14" fill="#6B7280" />
      <ellipse cx="50" cy="16" rx="6" ry="14" fill="#6B7280" />
      <ellipse cx="14" cy="16" rx="3" ry="10" fill="#D4B896" />
      <ellipse cx="50" cy="16" rx="3" ry="10" fill="#D4B896" />
      <ellipse cx="32" cy="40" rx="20" ry="16" fill="#6B7280" />
      <ellipse cx="32" cy="48" rx="10" ry="8" fill="#D4B896" />
      <circle cx="24" cy="36" r="3" fill="#1F2937" />
      <circle cx="40" cy="36" r="3" fill="#1F2937" />
      <ellipse cx="32" cy="50" rx="4" ry="2" fill="#1F2937" />
    </svg>
  )
}

export function RoosterIcon() {
  return (
    <svg viewBox="0 0 64 64" className="w-10 h-10">
      <path d="M32 4 Q40 8 36 18 Q44 12 40 20 Q32 16 32 24" fill="#EF4444" />
      <circle cx="32" cy="36" r="18" fill="#D97706" />
      <circle cx="26" cy="32" r="3" fill="#1F2937" />
      <path d="M36 36 L48 32 L36 40" fill="#F59E0B" />
      <path d="M28 48 L32 56 L36 48" fill="#EF4444" />
    </svg>
  )
}

export function TurkeyIcon() {
  return (
    <svg viewBox="0 0 64 64" className="w-10 h-10">
      <ellipse cx="32" cy="12" rx="20" ry="10" fill="#92400E" />
      <circle cx="24" cy="12" r="4" fill="#EF4444" />
      <circle cx="32" cy="10" r="4" fill="#F97316" />
      <circle cx="40" cy="12" r="4" fill="#FCD34D" />
      <ellipse cx="32" cy="40" rx="18" ry="16" fill="#92400E" />
      <circle cx="26" cy="36" r="3" fill="#1F2937" />
      <path d="M36 40 L44 38 L36 44" fill="#F59E0B" />
      <path d="M30 48 L32 54 L34 48" fill="#EF4444" />
    </svg>
  )
}