const TEXT =
  "Party Launch · Volume 1, Edition 1 · Filed under: General Unemployment · Sponsored by: No One · HQ: Wherever the WiFi Works · Together We Rise · You Cannot Stop a Movement · ";

export function Ticker() {
  return (
    <div className="bg-foreground text-background text-xs tracking-wider py-2 marquee">
      <div className="marquee-track">
        {TEXT.repeat(4)}
      </div>
    </div>
  );
}