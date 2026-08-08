import pool from '../config/db.js';

export async function getSchemes(filters) {
  const {
    gender,
    state,
    category,
    qualification,
    family_income,
    disability
  } = filters;

  const query = `
    SELECT scheme_id, scheme_name, extra_criteria
    FROM schemes
    WHERE
      $1 = ANY(gender)
      AND ($2 = ANY(state) OR 'all' = ANY(state))
      AND $3 = ANY(category)
      AND qualification = $4
      AND (family_income IS NULL OR family_income >= $5)
      AND (disability = 0 OR disability <= $6)
  `;

  const values = [
    gender,
    state,
    category,
    qualification,
    family_income,
    disability
  ];

  const result = await pool.query(query, values);
  return result.rows;
}

export function filterByExtraCriteriaForMba(schemes, userData) {
  const result = [];

  schemes.forEach((scheme) => {
    const criteria = scheme.extra_criteria;
    let pass = 0;

    // 1. gov_quota
    if (
      criteria.gov_quota === null ||
      criteria.gov_quota === userData.gov_quota
    ) {
      pass++;
    }

    // 2. distance_km
    if (
      criteria.distance_km === null ||
      Number(userData.distance_km) >= Number(criteria.distance_km)
    ) {
      pass++;
    }

    // 3. accommodation
    if (
      criteria.accommodation.length === 0 ||
      criteria.accommodation.includes(userData.accommodation)
    ) {
      pass++;
    }

    // 4. parent_occupation
    if (
      criteria.parent_occupation.length === 0 ||
      criteria.parent_occupation.includes(userData.parent_occupation)
    ) {
      pass++;
    }

    // 5. gap
    if (
      criteria.gap === null ||
      criteria.gap === userData.gap
    ) {
      pass++;
    }

    // 6. minority
    if (
      criteria.minority === null ||
      criteria.minority === userData.minority
    ) {
      pass++;
    }

    // 7. regular
    if (
      criteria.regular === null ||
      criteria.regular === userData.regular
    ) {
      pass++;
    }

    // 8. backlog
    if (
      criteria.backlog === null ||
      criteria.backlog === userData.backlog
    ) {
      pass++;
    }

    // 9. min_marks
    if (
      criteria.min_marks === null ||
      Number(userData.min_marks) >= Number(criteria.min_marks)
    ) {
      pass++;
    }

    // 10. min_attendance
    if (
      criteria.min_attendance === null ||
      Number(userData.min_attendance) >= Number(criteria.min_attendance)
    ) {
      pass++;
    }

    if (pass === 10) {
      result.push(scheme);
    }
  });

  return result;
}