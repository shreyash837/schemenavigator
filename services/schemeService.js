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

export function filterByExtraCriteria(schemes, userData) {
  const result = [];
  // console.log(schemes);
  // console.log(userData);
  
  
  schemes.forEach((scheme) => {
    const criteria = scheme.extra_criteria;
    let pass = 0;

    // 1. gov_quota
    if (criteria.gov_quota === null || criteria.gov_quota === userData.gov_quota) {
      pass++;
    }

    // 2. distance_km
    if (
      criteria.distance_km === null ||
      Number(userData.distance_km) >= Number(criteria.distance_km)
    ) {
      pass++;
    }

    // 3. accommodation (array match)
    if (
      criteria.accommodation.length === 0 ||
      criteria.accommodation.includes(userData.accommodation)
    ) {
      pass++;
    }

    // 4. other_scholarship
    if (
      criteria.other_scholarship === null ||
      criteria.other_scholarship === userData.other_scholarship
    ) {
      pass++;
    }

    // 5. parent_occupation
    if (
      criteria.parent_occupation === null ||
      criteria.parent_occupation === userData.parent_occupation
    ) {
      pass++;
    }

    // 6. gap
    if (
      criteria.gap === null ||
      criteria.gap === userData.gap
    ) {
      pass++;
    }

    // final check
    if (pass === 6) {
      result.push(scheme);
    }
  });

  return result;
}