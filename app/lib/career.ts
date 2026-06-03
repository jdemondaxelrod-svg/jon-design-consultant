/** Career dates aligned with resume (en-dash format). */

export const career = {
  clintonvilleHandyman: { start: 2022, end: null as number | null },
  elianeDesign: { start: 2026, end: null },
  karoleFoundation: { start: 2026, end: null },
  softSurroundings: { start: 2022, end: 2023 },
  scottsProductOwner: { start: 2018, end: 2021 },
  scottsDigitalMarketing: { start: 2013, end: 2018 },
  emusic: { start: 2008, end: 2013 },
  pearson: { start: 1999, end: 2006 },
} as const;

export function formatPeriod(
  start: number,
  end: number | null,
): string {
  return end ? `${start}–${end}` : `${start}–Present`;
}

export const periods = {
  clintonvilleHandyman: formatPeriod(
    career.clintonvilleHandyman.start,
    career.clintonvilleHandyman.end,
  ),
  elianeDesign: formatPeriod(
    career.elianeDesign.start,
    career.elianeDesign.end,
  ),
  karoleFoundation: formatPeriod(
    career.karoleFoundation.start,
    career.karoleFoundation.end,
  ),
  softSurroundings: formatPeriod(
    career.softSurroundings.start,
    career.softSurroundings.end,
  ),
  scottsProductOwner: formatPeriod(
    career.scottsProductOwner.start,
    career.scottsProductOwner.end,
  ),
  scottsDigitalMarketing: formatPeriod(
    career.scottsDigitalMarketing.start,
    career.scottsDigitalMarketing.end,
  ),
  emusic: formatPeriod(career.emusic.start, career.emusic.end),
  pearson: formatPeriod(career.pearson.start, career.pearson.end),
};
