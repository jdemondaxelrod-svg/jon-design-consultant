import {
  Document,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";
import {
  resumeCoreStrengths,
  resumeEducation,
  resumeExperience,
  resumeHeader,
  resumeProfile,
  type ResumeRole,
} from "./resume-verbatim";

const styles = StyleSheet.create({
  page: {
    padding: 48,
    fontFamily: "Helvetica",
    fontSize: 10,
    lineHeight: 1.45,
    color: "#2a2826",
  },
  name: {
    fontSize: 22,
    fontFamily: "Helvetica-Bold",
    marginBottom: 6,
  },
  titleLine: {
    fontSize: 9,
    letterSpacing: 1.2,
    textTransform: "uppercase",
    color: "#6b6560",
    marginBottom: 8,
  },
  contact: {
    fontSize: 9,
    color: "#6b6560",
    marginBottom: 18,
  },
  sectionLabel: {
    fontSize: 8,
    letterSpacing: 1.6,
    textTransform: "uppercase",
    color: "#8a847c",
    marginBottom: 8,
    marginTop: 14,
  },
  paragraph: {
    marginBottom: 8,
    color: "#4a4642",
  },
  strengthsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 4,
  },
  strengthItem: {
    width: "48%",
    fontSize: 9,
    color: "#4a4642",
    marginBottom: 4,
  },
  roleBlock: {
    marginBottom: 12,
  },
  orgRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: 12,
    marginBottom: 2,
  },
  org: {
    fontSize: 10,
    fontFamily: "Helvetica-Bold",
    textTransform: "uppercase",
    flex: 1,
  },
  orgMeta: {
    fontFamily: "Helvetica",
    fontWeight: 400,
    textTransform: "none",
    color: "#6b6560",
  },
  period: {
    fontSize: 9,
    color: "#8a847c",
  },
  jobTitle: {
    fontSize: 9,
    color: "#4a4642",
    marginBottom: 4,
  },
  intro: {
    fontSize: 9,
    color: "#4a4642",
    marginBottom: 4,
  },
  bulletRow: {
    flexDirection: "row",
    gap: 6,
    marginBottom: 3,
  },
  bullet: {
    fontSize: 9,
    color: "#4a4642",
    flex: 1,
  },
  positionBlock: {
    marginTop: 4,
  },
  positionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12,
    marginBottom: 2,
  },
  educationSchool: {
    fontSize: 10,
    fontFamily: "Helvetica-Bold",
    marginBottom: 2,
  },
  educationDegree: {
    fontSize: 9,
    color: "#4a4642",
  },
});

function RoleBullets({ bullets }: { bullets: readonly string[] }) {
  if (bullets.length === 0) return null;

  return (
    <View>
      {bullets.map((bullet) => (
        <View key={bullet} style={styles.bulletRow}>
          <Text>●</Text>
          <Text style={styles.bullet}>{bullet}</Text>
        </View>
      ))}
    </View>
  );
}

function ExperienceRolePdf({ role }: { role: ResumeRole }) {
  const hasPositions = "positions" in role && role.positions;

  return (
    <View style={styles.roleBlock}>
      <View style={styles.orgRow}>
        <Text style={styles.org}>
          {role.org}
          <Text style={styles.orgMeta}> | {role.location}</Text>
        </Text>
        {!hasPositions ? <Text style={styles.period}>{role.period}</Text> : null}
      </View>

      {role.intro ? <Text style={styles.intro}>{role.intro}</Text> : null}

      {hasPositions ? (
        role.positions.map((position) => (
          <View key={`${position.title}-${position.period}`} style={styles.positionBlock}>
            <View style={styles.positionRow}>
              <Text style={styles.jobTitle}>{position.title}</Text>
              <Text style={styles.period}>{position.period}</Text>
            </View>
            <RoleBullets bullets={position.bullets} />
          </View>
        ))
      ) : (
        <>
          <Text style={styles.jobTitle}>{role.title}</Text>
          <RoleBullets bullets={role.bullets} />
        </>
      )}
    </View>
  );
}

export function ResumePdfDocument() {
  return (
    <Document title={`${resumeHeader.name} — Resume`}>
      <Page size="LETTER" style={styles.page}>
        <Text style={styles.name}>{resumeHeader.name}</Text>
        <Text style={styles.titleLine}>{resumeHeader.titleLine}</Text>
        <Text style={styles.contact}>
          {resumeHeader.location} | {resumeHeader.phone} | {resumeHeader.email}
        </Text>

        <Text style={styles.sectionLabel}>Profile</Text>
        {resumeProfile.map((paragraph) => (
          <Text key={paragraph} style={styles.paragraph}>
            {paragraph}
          </Text>
        ))}

        <Text style={styles.sectionLabel}>Core Strengths</Text>
        <View style={styles.strengthsGrid}>
          {resumeCoreStrengths.map((strength) => (
            <Text key={strength} style={styles.strengthItem}>
              {strength}
            </Text>
          ))}
        </View>

        <Text style={styles.sectionLabel}>Experience</Text>
        {resumeExperience.map((role) => (
          <ExperienceRolePdf
            key={
              "positions" in role && role.positions
                ? `${role.org}-${role.positions.map((p) => p.period).join("-")}`
                : `${role.org}-${role.title}-${role.period}`
            }
            role={role}
          />
        ))}

        <Text style={styles.sectionLabel}>Education</Text>
        <Text style={styles.educationSchool}>{resumeEducation.school}</Text>
        <Text style={styles.educationDegree}>{resumeEducation.degree}</Text>
      </Page>
    </Document>
  );
}
