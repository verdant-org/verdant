import {
    pgTable,
    text,
    integer,
    doublePrecision
} from "drizzle-orm/pg-core";

export const hazard = pgTable("hazard_data", {
	objectId: integer("oid_"), // Primary Key
	nationalRiskIndexId: text("nri_id"), // Relevance Type: All --- No Metrics --- Details: No details
	stateName: text("state"), // Relevance Type: All --- No Metrics --- Details: No details
	stateNameAbbreviation: text("stateabbrv"), // Relevance Type: All --- No Metrics --- Details: No details
	stateFipsCode: text("statefips"), // Relevance Type: All --- No Metrics --- Details: No details
	countyName: text("county"), // Relevance Type: All --- No Metrics --- Details: No details
	countyType: text("countytype"), // Relevance Type: All --- No Metrics --- Details: No details
	countyFipsCode: text("countyfips"), // Relevance Type: All --- No Metrics --- Details: No details
	stateCountyFipsCode: text("stcofips"), // Relevance Type: All --- No Metrics --- Details: No details
	population: integer("population"), // Relevance Type: All --- No Metrics --- Details: Year of 2020
	buildingValue: doublePrecision("buildvalue"), // Relevance Type: All --- No Metrics --- Details: In US Dollars
	agricultureValue: doublePrecision("agrivalue"), // Relevance Type: All --- No Metrics --- Details: In US Dollars
	area: doublePrecision("area"), // Relevance Type: All --- No Metrics --- Details: In Square Miles
	nationalRiskIndexValueComposite: doublePrecision("risk_value"), // Relevance Type: National Risk Index --- Metric Type: Value --- Details: No details
	nationalRiskIndexScoreComposite: doublePrecision("risk_score"), // Relevance Type: National Risk Index --- Metric Type: Score --- Details: No details
	nationalRiskIndexRatingComposite: text("risk_ratng"), // Relevance Type: National Risk Index --- Metric Type: Rating --- Details: No details
	nationalRiskIndexStatePercentileComposite: doublePrecision("risk_spctl"), // Relevance Type: National Risk Index --- Metric Type: State Percentile --- Details: No details
	expectedAnnualLossScoreComposite: doublePrecision("eal_score"), // Relevance Type: Expected Annual Loss --- Metric Type: Score --- Details: No details
	expectedAnnualLossRatingComposite: text("eal_ratng"), // Relevance Type: Expected Annual Loss --- Metric Type: Rating --- Details: No details
	expectedAnnualLossStatePercentileComposite: doublePrecision("eal_spctl"), // Relevance Type: Expected Annual Loss --- Metric Type: State Percentile --- Details: No details
	expectedAnnualLossTotalComposite: doublePrecision("eal_valt"), // Relevance Type: Expected Annual Loss --- Metric Type: Value --- Details: No details
	expectedAnnualLossBuildingValueComposite: doublePrecision("eal_valb"), // Relevance Type: Expected Annual Loss --- Metric Type: Value --- Details: No details
	expectedAnnualLossPopulationComposite: doublePrecision("eal_valp"), // Relevance Type: Expected Annual Loss --- Metric Type: Value --- Details: No details
	expectedAnnualLossPopulationEquivalenceComposite: doublePrecision("eal_valpe"), // Relevance Type: Expected Annual Loss --- Metric Type: Value --- Details: No details
	expectedAnnualLossAgricultureValueComposite: doublePrecision("eal_vala"), // Relevance Type: Expected Annual Loss --- Metric Type: Value --- Details: No details
	expectedAnnualLossRateBuildingComposite: doublePrecision("alr_valb"), // Relevance Type: Expected Annual Loss Rate --- Metric Type: Value --- Details: No details
	expectedAnnualLossRatePopulationComposite: doublePrecision("alr_valp"), // Relevance Type: Expected Annual Loss Rate --- Metric Type: Value --- Details: No details
	expectedAnnualLossRateAgricultureComposite: doublePrecision("alr_vala"), // Relevance Type: Expected Annual Loss Rate --- Metric Type: Value --- Details: No details
	expectedAnnualLossRateNationalPercentileComposite: doublePrecision("alr_npctl"), // Relevance Type: Expected Annual Loss Rate --- Metric Type: National Percentile --- Details: No details
	socialVulnerabilityAndCommunityResilienceAdjustedExpectedAnnualLossRateNationalPercentileComposite: doublePrecision("alr_vra_npctl"), // Relevance Type: Social Vulnerability and Community Resilience Adjusted Expected Annual Loss Rate --- Metric Type: National Percentile --- Details: No details
	socialVulnerabilityScore: doublePrecision("sovi_score"), // Relevance Type: Social Vulnerability --- Metric Type: Score --- Details: No details
	socialVulnerabilityRating: text("sovi_ratng"), // Relevance Type: Social Vulnerability --- Metric Type: Rating --- Details: No details
	socialVulnerabilityStatePercentile: doublePrecision("sovi_spctl"), // Relevance Type: Social Vulnerability --- Metric Type: State Percentile --- Details: No details
	communityResilienceScore: doublePrecision("resl_score"), // Relevance Type: Community Resilience --- Metric Type: Score --- Details: No details
	communityResilienceRating: text("resl_ratng"), // Relevance Type: Community Resilience --- Metric Type: Rating --- Details: No details
	communityResilienceStatePercentile: doublePrecision("resl_spctl"), // Relevance Type: Community Resilience --- Metric Type: State Percentile --- Details: No details
	communityResilienceValue: doublePrecision("resl_value"), // Relevance Type: Community Resilience --- Metric Type: Value --- Details: No details
	communityRiskFactorValue: doublePrecision("crf_value"), // Relevance Type: Community Risk Factor --- Metric Type: Value --- Details: No details
	avalancheNumberOfEvents: doublePrecision("avln_evnts"), // Relevance Type: Avalanche --- Metric Type: Number of Events --- Details: No details
	avalancheAnnualizedFrequency: doublePrecision("avln_afreq"), // Relevance Type: Avalanche --- Metric Type: Annualized Frequency --- Details: No details
	avalancheExposureImpactedArea: doublePrecision("avln_exp_area"), // Relevance Type: Avalanche --- Metric Type: Exposure - Area --- Details: In Square Miles
	avalancheExposureBuildingValue: doublePrecision("avln_expb"), // Relevance Type: Avalanche --- Metric Type: Exposure - Building Value --- Details: No details
	avalancheExposurePopulation: doublePrecision("avln_expp"), // Relevance Type: Avalanche --- Metric Type: Exposure - Population --- Details: No details
	avalancheExposurePopulationEquivalence: doublePrecision("avln_exppe"), // Relevance Type: Avalanche --- Metric Type: Exposure - Population Equivalence --- Details: No details
	avalancheExposureTotal: doublePrecision("avln_expt"), // Relevance Type: Avalanche --- Metric Type: Exposure - Total --- Details: No details
	avalancheHistoricLossRatioBuildings: doublePrecision("avln_hlrb"), // Relevance Type: Avalanche --- Metric Type: Historic Loss Ratio - Buildings --- Details: No details
	avalancheHistoricLossRatioPopulation: doublePrecision("avln_hlrp"), // Relevance Type: Avalanche --- Metric Type: Historic Loss Ratio - Population --- Details: No details
	avalancheHistoricLossRatioTotalRating: text("avln_hlrr"), // Relevance Type: Avalanche --- Metric Type: Historic Loss Ratio - Total Rating --- Details: No details
	avalancheExpectedAnnualLossBuildingValue: doublePrecision("avln_ealb"), // Relevance Type: Avalanche --- Metric Type: Expected Annual Loss - Building Value --- Details: No details
	avalancheExpectedAnnualLossPopulation: doublePrecision("avln_ealp"), // Relevance Type: Avalanche --- Metric Type: Expected Annual Loss - Population --- Details: No details
	avalancheExpectedAnnualLossPopulationEquivalence: doublePrecision("avln_ealpe"), // Relevance Type: Avalanche --- Metric Type: Expected Annual Loss - Population Equivalence --- Details: No details
	avalancheExpectedAnnualLossTotal: doublePrecision("avln_ealt"), // Relevance Type: Avalanche --- Metric Type: Expected Annual Loss - Total --- Details: No details
	avalancheExpectedAnnualLossScore: doublePrecision("avln_eals"), // Relevance Type: Avalanche --- Metric Type: Expected Annual Loss Score --- Details: No details
	avalancheExpectedAnnualLossRating: text("avln_ealr"), // Relevance Type: Avalanche --- Metric Type: Expected Annual Loss Rating --- Details: No details
	avalancheExpectedAnnualLossRateBuilding: doublePrecision("avln_alrb"), // Relevance Type: Avalanche --- Metric Type: Expected Annual Loss Rate - Building --- Details: No details
	avalancheExpectedAnnualLossRatePopulation: doublePrecision("avln_alrp"), // Relevance Type: Avalanche --- Metric Type: Expected Annual Loss Rate - Population --- Details: No details
	avalancheExpectedAnnualLossRateNationalPercentile: doublePrecision("avln_alr_npctl"), // Relevance Type: Avalanche --- Metric Type: National Percentile --- Details: No details
	avalancheHazardTypeRiskIndexValue: doublePrecision("avln_riskv"), // Relevance Type: Avalanche --- Metric Type: Hazard Type Risk Index Value --- Details: No details
	avalancheHazardTypeRiskIndexScore: doublePrecision("avln_risks"), // Relevance Type: Avalanche --- Metric Type: Hazard Type Risk Index Score --- Details: No details
	avalancheHazardTypeRiskIndexRating: text("avln_riskr"), // Relevance Type: Avalanche --- Metric Type: Hazard Type Risk Index Rating --- Details: No details
	coastalFloodingNumberOfEvents: doublePrecision("cfld_evnts"), // Relevance Type: Coastal Flooding --- Metric Type: Number of Events --- Details: No details
	coastalFloodingAnnualizedFrequency: doublePrecision("cfld_afreq"), // Relevance Type: Coastal Flooding --- Metric Type: Annualized Frequency --- Details: No details
	coastalFloodingExposureImpactedArea: doublePrecision("cfld_exp_area"), // Relevance Type: Coastal Flooding --- Metric Type: Exposure - Area --- Details: In Square Miles
	coastalFloodingExposureBuildingValue: doublePrecision("cfld_expb"), // Relevance Type: Coastal Flooding --- Metric Type: Exposure - Building Value --- Details: No details
	coastalFloodingExposurePopulation: doublePrecision("cfld_expp"), // Relevance Type: Coastal Flooding --- Metric Type: Exposure - Population --- Details: No details
	coastalFloodingExposurePopulationEquivalence: doublePrecision("cfld_exppe"), // Relevance Type: Coastal Flooding --- Metric Type: Exposure - Population Equivalence --- Details: No details
	coastalFloodingExposureTotal: doublePrecision("cfld_expt"), // Relevance Type: Coastal Flooding --- Metric Type: Exposure - Total --- Details: No details
	coastalFloodingHistoricLossRatioBuildings: doublePrecision("cfld_hlrb"), // Relevance Type: Coastal Flooding --- Metric Type: Historic Loss Ratio - Buildings --- Details: No details
	coastalFloodingHistoricLossRatioPopulation: doublePrecision("cfld_hlrp"), // Relevance Type: Coastal Flooding --- Metric Type: Historic Loss Ratio - Population --- Details: No details
	coastalFloodingHistoricLossRatioTotalRating: text("cfld_hlrr"), // Relevance Type: Coastal Flooding --- Metric Type: Historic Loss Ratio - Total Rating --- Details: No details
	coastalFloodingExpectedAnnualLossBuildingValue: doublePrecision("cfld_ealb"), // Relevance Type: Coastal Flooding --- Metric Type: Expected Annual Loss - Building Value --- Details: No details
	coastalFloodingExpectedAnnualLossPopulation: doublePrecision("cfld_ealp"), // Relevance Type: Coastal Flooding --- Metric Type: Expected Annual Loss - Population --- Details: No details
	coastalFloodingExpectedAnnualLossPopulationEquivalence: doublePrecision("cfld_ealpe"), // Relevance Type: Coastal Flooding --- Metric Type: Expected Annual Loss - Population Equivalence --- Details: No details
	coastalFloodingExpectedAnnualLossTotal: doublePrecision("cfld_ealt"), // Relevance Type: Coastal Flooding --- Metric Type: Expected Annual Loss - Total --- Details: No details
	coastalFloodingExpectedAnnualLossScore: doublePrecision("cfld_eals"), // Relevance Type: Coastal Flooding --- Metric Type: Expected Annual Loss Score --- Details: No details
	coastalFloodingExpectedAnnualLossRating: text("cfld_ealr"), // Relevance Type: Coastal Flooding --- Metric Type: Expected Annual Loss Rating --- Details: No details
	coastalFloodingExpectedAnnualLossRateBuilding: doublePrecision("cfld_alrb"), // Relevance Type: Coastal Flooding --- Metric Type: Expected Annual Loss Rate - Building --- Details: No details
	coastalFloodingExpectedAnnualLossRatePopulation: doublePrecision("cfld_alrp"), // Relevance Type: Coastal Flooding --- Metric Type: Expected Annual Loss Rate - Population --- Details: No details
	coastalFloodingExpectedAnnualLossRateNationalPercentile: doublePrecision("cfld_alr_npctl"), // Relevance Type: Coastal Flooding --- Metric Type: National Percentile --- Details: No details
	coastalFloodingHazardTypeRiskIndexValue: doublePrecision("cfld_riskv"), // Relevance Type: Coastal Flooding --- Metric Type: Hazard Type Risk Index Value --- Details: No details
	coastalFloodingHazardTypeRiskIndexScore: doublePrecision("cfld_risks"), // Relevance Type: Coastal Flooding --- Metric Type: Hazard Type Risk Index Score --- Details: No details
	coastalFloodingHazardTypeRiskIndexRating: text("cfld_riskr"), // Relevance Type: Coastal Flooding --- Metric Type: Hazard Type Risk Index Rating --- Details: No details
	coldWaveNumberOfEvents: doublePrecision("cwav_evnts"), // Relevance Type: Cold Wave --- Metric Type: Number of Events --- Details: No details
	coldWaveAnnualizedFrequency: doublePrecision("cwav_afreq"), // Relevance Type: Cold Wave --- Metric Type: Annualized Frequency --- Details: No details
	coldWaveExposureImpactedArea: doublePrecision("cwav_exp_area"), // Relevance Type: Cold Wave --- Metric Type: Exposure - Area --- Details: In Square Miles
	coldWaveExposureBuildingValue: doublePrecision("cwav_expb"), // Relevance Type: Cold Wave --- Metric Type: Exposure - Building Value --- Details: No details
	coldWaveExposurePopulation: doublePrecision("cwav_expp"), // Relevance Type: Cold Wave --- Metric Type: Exposure - Population --- Details: No details
	coldWaveExposurePopulationEquivalence: doublePrecision("cwav_exppe"), // Relevance Type: Cold Wave --- Metric Type: Exposure - Population Equivalence --- Details: No details
	coldWaveExposureAgricultureValue: doublePrecision("cwav_expa"), // Relevance Type: Cold Wave --- Metric Type: Exposure - Agriculture Value --- Details: No details
	coldWaveExposureTotal: doublePrecision("cwav_expt"), // Relevance Type: Cold Wave --- Metric Type: Exposure - Total --- Details: No details
	coldWaveHistoricLossRatioBuildings: doublePrecision("cwav_hlrb"), // Relevance Type: Cold Wave --- Metric Type: Historic Loss Ratio - Buildings --- Details: No details
	coldWaveHistoricLossRatioPopulation: doublePrecision("cwav_hlrp"), // Relevance Type: Cold Wave --- Metric Type: Historic Loss Ratio - Population --- Details: No details
	coldWaveHistoricLossRatioAgriculture: doublePrecision("cwav_hlra"), // Relevance Type: Cold Wave --- Metric Type: Historic Loss Ratio - Agriculture --- Details: No details
	coldWaveHistoricLossRatioTotalRating: text("cwav_hlrr"), // Relevance Type: Cold Wave --- Metric Type: Historic Loss Ratio - Total Rating --- Details: No details
	coldWaveExpectedAnnualLossBuildingValue: doublePrecision("cwav_ealb"), // Relevance Type: Cold Wave --- Metric Type: Expected Annual Loss - Building Value --- Details: No details
	coldWaveExpectedAnnualLossPopulation: doublePrecision("cwav_ealp"), // Relevance Type: Cold Wave --- Metric Type: Expected Annual Loss - Population --- Details: No details
	coldWaveExpectedAnnualLossPopulationEquivalence: doublePrecision("cwav_ealpe"), // Relevance Type: Cold Wave --- Metric Type: Expected Annual Loss - Population Equivalence --- Details: No details
	coldWaveExpectedAnnualLossAgricultureValue: doublePrecision("cwav_eala"), // Relevance Type: Cold Wave --- Metric Type: Expected Annual Loss - Agriculture Value --- Details: No details
	coldWaveExpectedAnnualLossTotal: doublePrecision("cwav_ealt"), // Relevance Type: Cold Wave --- Metric Type: Expected Annual Loss - Total --- Details: No details
	coldWaveExpectedAnnualLossScore: doublePrecision("cwav_eals"), // Relevance Type: Cold Wave --- Metric Type: Expected Annual Loss Score --- Details: No details
	coldWaveExpectedAnnualLossRating: text("cwav_ealr"), // Relevance Type: Cold Wave --- Metric Type: Expected Annual Loss Rating --- Details: No details
	coldWaveExpectedAnnualLossRateBuilding: doublePrecision("cwav_alrb"), // Relevance Type: Cold Wave --- Metric Type: Expected Annual Loss Rate - Building --- Details: No details
	coldWaveExpectedAnnualLossRatePopulation: doublePrecision("cwav_alrp"), // Relevance Type: Cold Wave --- Metric Type: Expected Annual Loss Rate - Population --- Details: No details
	coldWaveExpectedAnnualLossRateAgriculture: doublePrecision("cwav_alra"), // Relevance Type: Cold Wave --- Metric Type: Expected Annual Loss Rate - Agriculture --- Details: No details
	coldWaveExpectedAnnualLossRateNationalPercentile: doublePrecision("cwav_alr_npctl"), // Relevance Type: Cold Wave --- Metric Type: National Percentile --- Details: No details
	coldWaveHazardTypeRiskIndexValue: doublePrecision("cwav_riskv"), // Relevance Type: Cold Wave --- Metric Type: Hazard Type Risk Index Value --- Details: No details
	coldWaveHazardTypeRiskIndexScore: doublePrecision("cwav_risks"), // Relevance Type: Cold Wave --- Metric Type: Hazard Type Risk Index Score --- Details: No details
	coldWaveHazardTypeRiskIndexRating: text("cwav_riskr"), // Relevance Type: Cold Wave --- Metric Type: Hazard Type Risk Index Rating --- Details: No details
	droughtNumberOfEvents: doublePrecision("drgt_evnts"), // Relevance Type: Drought --- Metric Type: Number of Events --- Details: No details
	droughtAnnualizedFrequency: doublePrecision("drgt_afreq"), // Relevance Type: Drought --- Metric Type: Annualized Frequency --- Details: No details
	droughtExposureImpactedArea: doublePrecision("drgt_exp_area"), // Relevance Type: Drought --- Metric Type: Exposure - Area --- Details: In Square Miles
	droughtExposureAgricultureValue: doublePrecision("drgt_expa"), // Relevance Type: Drought --- Metric Type: Exposure - Agriculture Value --- Details: No details
	droughtExposureTotal: doublePrecision("drgt_expt"), // Relevance Type: Drought --- Metric Type: Exposure - Total --- Details: No details
	droughtHistoricLossRatioAgriculture: doublePrecision("drgt_hlra"), // Relevance Type: Drought --- Metric Type: Historic Loss Ratio - Agriculture --- Details: No details
	droughtHistoricLossRatioTotalRating: text("drgt_hlrr"), // Relevance Type: Drought --- Metric Type: Historic Loss Ratio - Total Rating --- Details: No details
	droughtExpectedAnnualLossAgricultureValue: doublePrecision("drgt_eala"), // Relevance Type: Drought --- Metric Type: Expected Annual Loss - Agriculture Value --- Details: No details
	droughtExpectedAnnualLossTotal: doublePrecision("drgt_ealt"), // Relevance Type: Drought --- Metric Type: Expected Annual Loss - Total --- Details: No details
	droughtExpectedAnnualLossScore: doublePrecision("drgt_eals"), // Relevance Type: Drought --- Metric Type: Expected Annual Loss Score --- Details: No details
	droughtExpectedAnnualLossRating: text("drgt_ealr"), // Relevance Type: Drought --- Metric Type: Expected Annual Loss Rating --- Details: No details
	droughtExpectedAnnualLossRateAgriculture: doublePrecision("drgt_alra"), // Relevance Type: Drought --- Metric Type: Expected Annual Loss Rate - Agriculture --- Details: No details
	droughtExpectedAnnualLossRateNationalPercentile: doublePrecision("drgt_alr_npctl"), // Relevance Type: Drought --- Metric Type: National Percentile --- Details: No details
	droughtHazardTypeRiskIndexValue: doublePrecision("drgt_riskv"), // Relevance Type: Drought --- Metric Type: Hazard Type Risk Index Value --- Details: No details
	droughtHazardTypeRiskIndexScore: doublePrecision("drgt_risks"), // Relevance Type: Drought --- Metric Type: Hazard Type Risk Index Score --- Details: No details
	droughtHazardTypeRiskIndexRating: text("drgt_riskr"), // Relevance Type: Drought --- Metric Type: Hazard Type Risk Index Rating --- Details: No details
	earthquakeNumberOfEvents: doublePrecision("erqk_evnts"), // Relevance Type: Earthquake --- Metric Type: Number of Events --- Details: No details
	earthquakeAnnualizedFrequency: doublePrecision("erqk_afreq"), // Relevance Type: Earthquake --- Metric Type: Annualized Frequency --- Details: No details
	earthquakeExposureImpactedArea: doublePrecision("erqk_exp_area"), // Relevance Type: Earthquake --- Metric Type: Exposure - Area --- Details: In Square Miles
	earthquakeExposureBuildingValue: doublePrecision("erqk_expb"), // Relevance Type: Earthquake --- Metric Type: Exposure - Building Value --- Details: No details
	earthquakeExposurePopulation: doublePrecision("erqk_expp"), // Relevance Type: Earthquake --- Metric Type: Exposure - Population --- Details: No details
	earthquakeExposurePopulationEquivalence: doublePrecision("erqk_exppe"), // Relevance Type: Earthquake --- Metric Type: Exposure - Population Equivalence --- Details: No details
	earthquakeExposureTotal: doublePrecision("erqk_expt"), // Relevance Type: Earthquake --- Metric Type: Exposure - Total --- Details: No details
	earthquakeHistoricLossRatioBuildings: doublePrecision("erqk_hlrb"), // Relevance Type: Earthquake --- Metric Type: Historic Loss Ratio - Buildings --- Details: No details
	earthquakeHistoricLossRatioPopulation: doublePrecision("erqk_hlrp"), // Relevance Type: Earthquake --- Metric Type: Historic Loss Ratio - Population --- Details: No details
	earthquakeHistoricLossRatioTotalRating: text("erqk_hlrr"), // Relevance Type: Earthquake --- Metric Type: Historic Loss Ratio - Total Rating --- Details: No details
	earthquakeExpectedAnnualLossBuildingValue: doublePrecision("erqk_ealb"), // Relevance Type: Earthquake --- Metric Type: Expected Annual Loss - Building Value --- Details: No details
	earthquakeExpectedAnnualLossPopulation: doublePrecision("erqk_ealp"), // Relevance Type: Earthquake --- Metric Type: Expected Annual Loss - Population --- Details: No details
	earthquakeExpectedAnnualLossPopulationEquivalence: doublePrecision("erqk_ealpe"), // Relevance Type: Earthquake --- Metric Type: Expected Annual Loss - Population Equivalence --- Details: No details
	earthquakeExpectedAnnualLossTotal: doublePrecision("erqk_ealt"), // Relevance Type: Earthquake --- Metric Type: Expected Annual Loss - Total --- Details: No details
	earthquakeExpectedAnnualLossScore: doublePrecision("erqk_eals"), // Relevance Type: Earthquake --- Metric Type: Expected Annual Loss Score --- Details: No details
	earthquakeExpectedAnnualLossRating: text("erqk_ealr"), // Relevance Type: Earthquake --- Metric Type: Expected Annual Loss Rating --- Details: No details
	earthquakeExpectedAnnualLossRateBuilding: doublePrecision("erqk_alrb"), // Relevance Type: Earthquake --- Metric Type: Expected Annual Loss Rate - Building --- Details: No details
	earthquakeExpectedAnnualLossRatePopulation: doublePrecision("erqk_alrp"), // Relevance Type: Earthquake --- Metric Type: Expected Annual Loss Rate - Population --- Details: No details
	earthquakeExpectedAnnualLossRateNationalPercentile: doublePrecision("erqk_alr_npctl"), // Relevance Type: Earthquake --- Metric Type: National Percentile --- Details: No details
	earthquakeHazardTypeRiskIndexValue: doublePrecision("erqk_riskv"), // Relevance Type: Earthquake --- Metric Type: Hazard Type Risk Index Value --- Details: No details
	earthquakeHazardTypeRiskIndexScore: doublePrecision("erqk_risks"), // Relevance Type: Earthquake --- Metric Type: Hazard Type Risk Index Score --- Details: No details
	earthquakeHazardTypeRiskIndexRating: text("erqk_riskr"), // Relevance Type: Earthquake --- Metric Type: Hazard Type Risk Index Rating --- Details: No details
	hailNumberOfEvents: doublePrecision("hail_evnts"), // Relevance Type: Hail --- Metric Type: Number of Events --- Details: No details
	hailAnnualizedFrequency: doublePrecision("hail_afreq"), // Relevance Type: Hail --- Metric Type: Annualized Frequency --- Details: No details
	hailExposureImpactedArea: doublePrecision("hail_exp_area"), // Relevance Type: Hail --- Metric Type: Exposure - Area --- Details: In Square Miles
	hailExposureBuildingValue: doublePrecision("hail_expb"), // Relevance Type: Hail --- Metric Type: Exposure - Building Value --- Details: No details
	hailExposurePopulation: doublePrecision("hail_expp"), // Relevance Type: Hail --- Metric Type: Exposure - Population --- Details: No details
	hailExposurePopulationEquivalence: doublePrecision("hail_exppe"), // Relevance Type: Hail --- Metric Type: Exposure - Population Equivalence --- Details: No details
	hailExposureAgricultureValue: doublePrecision("hail_expa"), // Relevance Type: Hail --- Metric Type: Exposure - Agriculture Value --- Details: No details
	hailExposureTotal: doublePrecision("hail_expt"), // Relevance Type: Hail --- Metric Type: Exposure - Total --- Details: No details
	hailHistoricLossRatioBuildings: doublePrecision("hail_hlrb"), // Relevance Type: Hail --- Metric Type: Historic Loss Ratio - Buildings --- Details: No details
	hailHistoricLossRatioPopulation: doublePrecision("hail_hlrp"), // Relevance Type: Hail --- Metric Type: Historic Loss Ratio - Population --- Details: No details
	hailHistoricLossRatioAgriculture: doublePrecision("hail_hlra"), // Relevance Type: Hail --- Metric Type: Historic Loss Ratio - Agriculture --- Details: No details
	hailHistoricLossRatioTotalRating: text("hail_hlrr"), // Relevance Type: Hail --- Metric Type: Historic Loss Ratio - Total Rating --- Details: No details
	hailExpectedAnnualLossBuildingValue: doublePrecision("hail_ealb"), // Relevance Type: Hail --- Metric Type: Expected Annual Loss - Building Value --- Details: No details
	hailExpectedAnnualLossPopulation: doublePrecision("hail_ealp"), // Relevance Type: Hail --- Metric Type: Expected Annual Loss - Population --- Details: No details
	hailExpectedAnnualLossPopulationEquivalence: doublePrecision("hail_ealpe"), // Relevance Type: Hail --- Metric Type: Expected Annual Loss - Population Equivalence --- Details: No details
	hailExpectedAnnualLossAgricultureValue: doublePrecision("hail_eala"), // Relevance Type: Hail --- Metric Type: Expected Annual Loss - Agriculture Value --- Details: No details
	hailExpectedAnnualLossTotal: doublePrecision("hail_ealt"), // Relevance Type: Hail --- Metric Type: Expected Annual Loss - Total --- Details: No details
	hailExpectedAnnualLossScore: doublePrecision("hail_eals"), // Relevance Type: Hail --- Metric Type: Expected Annual Loss Score --- Details: No details
	hailExpectedAnnualLossRating: text("hail_ealr"), // Relevance Type: Hail --- Metric Type: Expected Annual Loss Rating --- Details: No details
	hailExpectedAnnualLossRateBuilding: doublePrecision("hail_alrb"), // Relevance Type: Hail --- Metric Type: Expected Annual Loss Rate - Building --- Details: No details
	hailExpectedAnnualLossRatePopulation: doublePrecision("hail_alrp"), // Relevance Type: Hail --- Metric Type: Expected Annual Loss Rate - Population --- Details: No details
	hailExpectedAnnualLossRateAgriculture: doublePrecision("hail_alra"), // Relevance Type: Hail --- Metric Type: Expected Annual Loss Rate - Agriculture --- Details: No details
	hailExpectedAnnualLossRateNationalPercentile: doublePrecision("hail_alr_npctl"), // Relevance Type: Hail --- Metric Type: National Percentile --- Details: No details
	hailHazardTypeRiskIndexValue: doublePrecision("hail_riskv"), // Relevance Type: Hail --- Metric Type: Hazard Type Risk Index Value --- Details: No details
	hailHazardTypeRiskIndexScore: doublePrecision("hail_risks"), // Relevance Type: Hail --- Metric Type: Hazard Type Risk Index Score --- Details: No details
	hailHazardTypeRiskIndexRating: text("hail_riskr"), // Relevance Type: Hail --- Metric Type: Hazard Type Risk Index Rating --- Details: No details
	heatWaveNumberOfEvents: doublePrecision("hwav_evnts"), // Relevance Type: Heat Wave --- Metric Type: Number of Events --- Details: No details
	heatWaveAnnualizedFrequency: doublePrecision("hwav_afreq"), // Relevance Type: Heat Wave --- Metric Type: Annualized Frequency --- Details: No details
	heatWaveExposureImpactedArea: doublePrecision("hwav_exp_area"), // Relevance Type: Heat Wave --- Metric Type: Exposure - Area --- Details: In Square Miles
	heatWaveExposureBuildingValue: doublePrecision("hwav_expb"), // Relevance Type: Heat Wave --- Metric Type: Exposure - Building Value --- Details: No details
	heatWaveExposurePopulation: doublePrecision("hwav_expp"), // Relevance Type: Heat Wave --- Metric Type: Exposure - Population --- Details: No details
	heatWaveExposurePopulationEquivalence: doublePrecision("hwav_exppe"), // Relevance Type: Heat Wave --- Metric Type: Exposure - Population Equivalence --- Details: No details
	heatWaveExposureAgricultureValue: doublePrecision("hwav_expa"), // Relevance Type: Heat Wave --- Metric Type: Exposure - Agriculture Value --- Details: No details
	heatWaveExposureTotal: doublePrecision("hwav_expt"), // Relevance Type: Heat Wave --- Metric Type: Exposure - Total --- Details: No details
	heatWaveHistoricLossRatioBuildings: doublePrecision("hwav_hlrb"), // Relevance Type: Heat Wave --- Metric Type: Historic Loss Ratio - Buildings --- Details: No details
	heatWaveHistoricLossRatioPopulation: doublePrecision("hwav_hlrp"), // Relevance Type: Heat Wave --- Metric Type: Historic Loss Ratio - Population --- Details: No details
	heatWaveHistoricLossRatioAgriculture: doublePrecision("hwav_hlra"), // Relevance Type: Heat Wave --- Metric Type: Historic Loss Ratio - Agriculture --- Details: No details
	heatWaveHistoricLossRatioTotalRating: text("hwav_hlrr"), // Relevance Type: Heat Wave --- Metric Type: Historic Loss Ratio - Total Rating --- Details: No details
	heatWaveExpectedAnnualLossBuildingValue: doublePrecision("hwav_ealb"), // Relevance Type: Heat Wave --- Metric Type: Expected Annual Loss - Building Value --- Details: No details
	heatWaveExpectedAnnualLossPopulation: doublePrecision("hwav_ealp"), // Relevance Type: Heat Wave --- Metric Type: Expected Annual Loss - Population --- Details: No details
	heatWaveExpectedAnnualLossPopulationEquivalence: doublePrecision("hwav_ealpe"), // Relevance Type: Heat Wave --- Metric Type: Expected Annual Loss - Population Equivalence --- Details: No details
	heatWaveExpectedAnnualLossAgricultureValue: doublePrecision("hwav_eala"), // Relevance Type: Heat Wave --- Metric Type: Expected Annual Loss - Agriculture Value --- Details: No details
	heatWaveExpectedAnnualLossTotal: doublePrecision("hwav_ealt"), // Relevance Type: Heat Wave --- Metric Type: Expected Annual Loss - Total --- Details: No details
	heatWaveExpectedAnnualLossScore: doublePrecision("hwav_eals"), // Relevance Type: Heat Wave --- Metric Type: Expected Annual Loss Score --- Details: No details
	heatWaveExpectedAnnualLossRating: text("hwav_ealr"), // Relevance Type: Heat Wave --- Metric Type: Expected Annual Loss Rating --- Details: No details
	heatWaveExpectedAnnualLossRateBuilding: doublePrecision("hwav_alrb"), // Relevance Type: Heat Wave --- Metric Type: Expected Annual Loss Rate - Building --- Details: No details
	heatWaveExpectedAnnualLossRatePopulation: doublePrecision("hwav_alrp"), // Relevance Type: Heat Wave --- Metric Type: Expected Annual Loss Rate - Population --- Details: No details
	heatWaveExpectedAnnualLossRateAgriculture: doublePrecision("hwav_alra"), // Relevance Type: Heat Wave --- Metric Type: Expected Annual Loss Rate - Agriculture --- Details: No details
	heatWaveExpectedAnnualLossRateNationalPercentile: doublePrecision("hwav_alr_npctl"), // Relevance Type: Heat Wave --- Metric Type: National Percentile --- Details: No details
	heatWaveHazardTypeRiskIndexValue: doublePrecision("hwav_riskv"), // Relevance Type: Heat Wave --- Metric Type: Hazard Type Risk Index Value --- Details: No details
	heatWaveHazardTypeRiskIndexScore: doublePrecision("hwav_risks"), // Relevance Type: Heat Wave --- Metric Type: Hazard Type Risk Index Score --- Details: No details
	heatWaveHazardTypeRiskIndexRating: text("hwav_riskr"), // Relevance Type: Heat Wave --- Metric Type: Hazard Type Risk Index Rating --- Details: No details
	hurricaneNumberOfEvents: doublePrecision("hrcn_evnts"), // Relevance Type: Hurricane --- Metric Type: Number of Events --- Details: No details
	hurricaneAnnualizedFrequency: doublePrecision("hrcn_afreq"), // Relevance Type: Hurricane --- Metric Type: Annualized Frequency --- Details: No details
	hurricaneExposureImpactedArea: doublePrecision("hrcn_exp_area"), // Relevance Type: Hurricane --- Metric Type: Exposure - Area --- Details: In Square Miles
	hurricaneExposureBuildingValue: doublePrecision("hrcn_expb"), // Relevance Type: Hurricane --- Metric Type: Exposure - Building Value --- Details: No details
	hurricaneExposurePopulation: doublePrecision("hrcn_expp"), // Relevance Type: Hurricane --- Metric Type: Exposure - Population --- Details: No details
	hurricaneExposurePopulationEquivalence: doublePrecision("hrcn_exppe"), // Relevance Type: Hurricane --- Metric Type: Exposure - Population Equivalence --- Details: No details
	hurricaneExposureAgricultureValue: doublePrecision("hrcn_expa"), // Relevance Type: Hurricane --- Metric Type: Exposure - Agriculture Value --- Details: No details
	hurricaneExposureTotal: doublePrecision("hrcn_expt"), // Relevance Type: Hurricane --- Metric Type: Exposure - Total --- Details: No details
	hurricaneHistoricLossRatioBuildings: doublePrecision("hrcn_hlrb"), // Relevance Type: Hurricane --- Metric Type: Historic Loss Ratio - Buildings --- Details: No details
	hurricaneHistoricLossRatioPopulation: doublePrecision("hrcn_hlrp"), // Relevance Type: Hurricane --- Metric Type: Historic Loss Ratio - Population --- Details: No details
	hurricaneHistoricLossRatioAgriculture: doublePrecision("hrcn_hlra"), // Relevance Type: Hurricane --- Metric Type: Historic Loss Ratio - Agriculture --- Details: No details
	hurricaneHistoricLossRatioTotalRating: text("hrcn_hlrr"), // Relevance Type: Hurricane --- Metric Type: Historic Loss Ratio - Total Rating --- Details: No details
	hurricaneExpectedAnnualLossBuildingValue: doublePrecision("hrcn_ealb"), // Relevance Type: Hurricane --- Metric Type: Expected Annual Loss - Building Value --- Details: No details
	hurricaneExpectedAnnualLossPopulation: doublePrecision("hrcn_ealp"), // Relevance Type: Hurricane --- Metric Type: Expected Annual Loss - Population --- Details: No details
	hurricaneExpectedAnnualLossPopulationEquivalence: doublePrecision("hrcn_ealpe"), // Relevance Type: Hurricane --- Metric Type: Expected Annual Loss - Population Equivalence --- Details: No details
	hurricaneExpectedAnnualLossAgricultureValue: doublePrecision("hrcn_eala"), // Relevance Type: Hurricane --- Metric Type: Expected Annual Loss - Agriculture Value --- Details: No details
	hurricaneExpectedAnnualLossTotal: doublePrecision("hrcn_ealt"), // Relevance Type: Hurricane --- Metric Type: Expected Annual Loss - Total --- Details: No details
	hurricaneExpectedAnnualLossScore: doublePrecision("hrcn_eals"), // Relevance Type: Hurricane --- Metric Type: Expected Annual Loss Score --- Details: No details
	hurricaneExpectedAnnualLossRating: text("hrcn_ealr"), // Relevance Type: Hurricane --- Metric Type: Expected Annual Loss Rating --- Details: No details
	hurricaneExpectedAnnualLossRateBuilding: doublePrecision("hrcn_alrb"), // Relevance Type: Hurricane --- Metric Type: Expected Annual Loss Rate - Building --- Details: No details
	hurricaneExpectedAnnualLossRatePopulation: doublePrecision("hrcn_alrp"), // Relevance Type: Hurricane --- Metric Type: Expected Annual Loss Rate - Population --- Details: No details
	hurricaneExpectedAnnualLossRateAgriculture: doublePrecision("hrcn_alra"), // Relevance Type: Hurricane --- Metric Type: Expected Annual Loss Rate - Agriculture --- Details: No details
	hurricaneExpectedAnnualLossRateNationalPercentile: doublePrecision("hrcn_alr_npctl"), // Relevance Type: Hurricane --- Metric Type: National Percentile --- Details: No details
	hurricaneHazardTypeRiskIndexValue: doublePrecision("hrcn_riskv"), // Relevance Type: Hurricane --- Metric Type: Hazard Type Risk Index Value --- Details: No details
	hurricaneHazardTypeRiskIndexScore: doublePrecision("hrcn_risks"), // Relevance Type: Hurricane --- Metric Type: Hazard Type Risk Index Score --- Details: No details
	hurricaneHazardTypeRiskIndexRating: text("hrcn_riskr"), // Relevance Type: Hurricane --- Metric Type: Hazard Type Risk Index Rating --- Details: No details
	iceStormNumberOfEvents: doublePrecision("istm_evnts"), // Relevance Type: Ice Storm --- Metric Type: Number of Events --- Details: No details
	iceStormAnnualizedFrequency: doublePrecision("istm_afreq"), // Relevance Type: Ice Storm --- Metric Type: Annualized Frequency --- Details: No details
	iceStormExposureImpactedArea: doublePrecision("istm_exp_area"), // Relevance Type: Ice Storm --- Metric Type: Exposure - Area --- Details: In Square Miles
	iceStormExposureBuildingValue: doublePrecision("istm_expb"), // Relevance Type: Ice Storm --- Metric Type: Exposure - Building Value --- Details: No details
	iceStormExposurePopulation: doublePrecision("istm_expp"), // Relevance Type: Ice Storm --- Metric Type: Exposure - Population --- Details: No details
	iceStormExposurePopulationEquivalence: doublePrecision("istm_exppe"), // Relevance Type: Ice Storm --- Metric Type: Exposure - Population Equivalence --- Details: No details
	iceStormExposureTotal: doublePrecision("istm_expt"), // Relevance Type: Ice Storm --- Metric Type: Exposure - Total --- Details: No details
	iceStormHistoricLossRatioBuildings: doublePrecision("istm_hlrb"), // Relevance Type: Ice Storm --- Metric Type: Historic Loss Ratio - Buildings --- Details: No details
	iceStormHistoricLossRatioPopulation: doublePrecision("istm_hlrp"), // Relevance Type: Ice Storm --- Metric Type: Historic Loss Ratio - Population --- Details: No details
	iceStormHistoricLossRatioTotalRating: text("istm_hlrr"), // Relevance Type: Ice Storm --- Metric Type: Historic Loss Ratio - Total Rating --- Details: No details
	iceStormExpectedAnnualLossBuildingValue: doublePrecision("istm_ealb"), // Relevance Type: Ice Storm --- Metric Type: Expected Annual Loss - Building Value --- Details: No details
	iceStormExpectedAnnualLossPopulation: doublePrecision("istm_ealp"), // Relevance Type: Ice Storm --- Metric Type: Expected Annual Loss - Population --- Details: No details
	iceStormExpectedAnnualLossPopulationEquivalence: doublePrecision("istm_ealpe"), // Relevance Type: Ice Storm --- Metric Type: Expected Annual Loss - Population Equivalence --- Details: No details
	iceStormExpectedAnnualLossTotal: doublePrecision("istm_ealt"), // Relevance Type: Ice Storm --- Metric Type: Expected Annual Loss - Total --- Details: No details
	iceStormExpectedAnnualLossScore: doublePrecision("istm_eals"), // Relevance Type: Ice Storm --- Metric Type: Expected Annual Loss Score --- Details: No details
	iceStormExpectedAnnualLossRating: text("istm_ealr"), // Relevance Type: Ice Storm --- Metric Type: Expected Annual Loss Rating --- Details: No details
	iceStormExpectedAnnualLossRateBuilding: doublePrecision("istm_alrb"), // Relevance Type: Ice Storm --- Metric Type: Expected Annual Loss Rate - Building --- Details: No details
	iceStormExpectedAnnualLossRatePopulation: doublePrecision("istm_alrp"), // Relevance Type: Ice Storm --- Metric Type: Expected Annual Loss Rate - Population --- Details: No details
	iceStormExpectedAnnualLossRateNationalPercentile: doublePrecision("istm_alr_npctl"), // Relevance Type: Ice Storm --- Metric Type: National Percentile --- Details: No details
	iceStormHazardTypeRiskIndexValue: doublePrecision("istm_riskv"), // Relevance Type: Ice Storm --- Metric Type: Hazard Type Risk Index Value --- Details: No details
	iceStormHazardTypeRiskIndexScore: doublePrecision("istm_risks"), // Relevance Type: Ice Storm --- Metric Type: Hazard Type Risk Index Score --- Details: No details
	iceStormHazardTypeRiskIndexRating: text("istm_riskr"), // Relevance Type: Ice Storm --- Metric Type: Hazard Type Risk Index Rating --- Details: No details
	landslideNumberOfEvents: doublePrecision("lnds_evnts"), // Relevance Type: Landslide --- Metric Type: Number of Events --- Details: No details
	landslideAnnualizedFrequency: doublePrecision("lnds_afreq"), // Relevance Type: Landslide --- Metric Type: Annualized Frequency --- Details: No details
	landslideExposureImpactedArea: doublePrecision("lnds_exp_area"), // Relevance Type: Landslide --- Metric Type: Exposure - Area --- Details: In Square Miles
	landslideExposureBuildingValue: doublePrecision("lnds_expb"), // Relevance Type: Landslide --- Metric Type: Exposure - Building Value --- Details: No details
	landslideExposurePopulation: doublePrecision("lnds_expp"), // Relevance Type: Landslide --- Metric Type: Exposure - Population --- Details: No details
	landslideExposurePopulationEquivalence: doublePrecision("lnds_exppe"), // Relevance Type: Landslide --- Metric Type: Exposure - Population Equivalence --- Details: No details
	landslideExposureTotal: doublePrecision("lnds_expt"), // Relevance Type: Landslide --- Metric Type: Exposure - Total --- Details: No details
	landslideHistoricLossRatioBuildings: doublePrecision("lnds_hlrb"), // Relevance Type: Landslide --- Metric Type: Historic Loss Ratio - Buildings --- Details: No details
	landslideHistoricLossRatioPopulation: doublePrecision("lnds_hlrp"), // Relevance Type: Landslide --- Metric Type: Historic Loss Ratio - Population --- Details: No details
	landslideHistoricLossRatioTotalRating: text("lnds_hlrr"), // Relevance Type: Landslide --- Metric Type: Historic Loss Ratio - Total Rating --- Details: No details
	landslideExpectedAnnualLossBuildingValue: doublePrecision("lnds_ealb"), // Relevance Type: Landslide --- Metric Type: Expected Annual Loss - Building Value --- Details: No details
	landslideExpectedAnnualLossPopulation: doublePrecision("lnds_ealp"), // Relevance Type: Landslide --- Metric Type: Expected Annual Loss - Population --- Details: No details
	landslideExpectedAnnualLossPopulationEquivalence: doublePrecision("lnds_ealpe"), // Relevance Type: Landslide --- Metric Type: Expected Annual Loss - Population Equivalence --- Details: No details
	landslideExpectedAnnualLossTotal: doublePrecision("lnds_ealt"), // Relevance Type: Landslide --- Metric Type: Expected Annual Loss - Total --- Details: No details
	landslideExpectedAnnualLossScore: doublePrecision("lnds_eals"), // Relevance Type: Landslide --- Metric Type: Expected Annual Loss Score --- Details: No details
	landslideExpectedAnnualLossRating: text("lnds_ealr"), // Relevance Type: Landslide --- Metric Type: Expected Annual Loss Rating --- Details: No details
	landslideExpectedAnnualLossRateBuilding: doublePrecision("lnds_alrb"), // Relevance Type: Landslide --- Metric Type: Expected Annual Loss Rate - Building --- Details: No details
	landslideExpectedAnnualLossRatePopulation: doublePrecision("lnds_alrp"), // Relevance Type: Landslide --- Metric Type: Expected Annual Loss Rate - Population --- Details: No details
	landslideExpectedAnnualLossRateNationalPercentile: doublePrecision("lnds_alr_npctl"), // Relevance Type: Landslide --- Metric Type: National Percentile --- Details: No details
	landslideHazardTypeRiskIndexValue: doublePrecision("lnds_riskv"), // Relevance Type: Landslide --- Metric Type: Hazard Type Risk Index Value --- Details: No details
	landslideHazardTypeRiskIndexScore: doublePrecision("lnds_risks"), // Relevance Type: Landslide --- Metric Type: Hazard Type Risk Index Score --- Details: No details
	landslideHazardTypeRiskIndexRating: text("lnds_riskr"), // Relevance Type: Landslide --- Metric Type: Hazard Type Risk Index Rating --- Details: No details
	lightningNumberOfEvents: doublePrecision("ltng_evnts"), // Relevance Type: Lightning --- Metric Type: Number of Events --- Details: No details
	lightningAnnualizedFrequency: doublePrecision("ltng_afreq"), // Relevance Type: Lightning --- Metric Type: Annualized Frequency --- Details: No details
	lightningExposureImpactedArea: doublePrecision("ltng_exp_area"), // Relevance Type: Lightning --- Metric Type: Exposure - Area --- Details: In Square Miles
	lightningExposureBuildingValue: doublePrecision("ltng_expb"), // Relevance Type: Lightning --- Metric Type: Exposure - Building Value --- Details: No details
	lightningExposurePopulation: doublePrecision("ltng_expp"), // Relevance Type: Lightning --- Metric Type: Exposure - Population --- Details: No details
	lightningExposurePopulationEquivalence: doublePrecision("ltng_exppe"), // Relevance Type: Lightning --- Metric Type: Exposure - Population Equivalence --- Details: No details
	lightningExposureTotal: doublePrecision("ltng_expt"), // Relevance Type: Lightning --- Metric Type: Exposure - Total --- Details: No details
	lightningHistoricLossRatioBuildings: doublePrecision("ltng_hlrb"), // Relevance Type: Lightning --- Metric Type: Historic Loss Ratio - Buildings --- Details: No details
	lightningHistoricLossRatioPopulation: doublePrecision("ltng_hlrp"), // Relevance Type: Lightning --- Metric Type: Historic Loss Ratio - Population --- Details: No details
	lightningHistoricLossRatioTotalRating: text("ltng_hlrr"), // Relevance Type: Lightning --- Metric Type: Historic Loss Ratio - Total Rating --- Details: No details
	lightningExpectedAnnualLossBuildingValue: doublePrecision("ltng_ealb"), // Relevance Type: Lightning --- Metric Type: Expected Annual Loss - Building Value --- Details: No details
	lightningExpectedAnnualLossPopulation: doublePrecision("ltng_ealp"), // Relevance Type: Lightning --- Metric Type: Expected Annual Loss - Population --- Details: No details
	lightningExpectedAnnualLossPopulationEquivalence: doublePrecision("ltng_ealpe"), // Relevance Type: Lightning --- Metric Type: Expected Annual Loss - Population Equivalence --- Details: No details
	lightningExpectedAnnualLossTotal: doublePrecision("ltng_ealt"), // Relevance Type: Lightning --- Metric Type: Expected Annual Loss - Total --- Details: No details
	lightningExpectedAnnualLossScore: doublePrecision("ltng_eals"), // Relevance Type: Lightning --- Metric Type: Expected Annual Loss Score --- Details: No details
	lightningExpectedAnnualLossRating: text("ltng_ealr"), // Relevance Type: Lightning --- Metric Type: Expected Annual Loss Rating --- Details: No details
	lightningExpectedAnnualLossRateBuilding: doublePrecision("ltng_alrb"), // Relevance Type: Lightning --- Metric Type: Expected Annual Loss Rate - Building --- Details: No details
	lightningExpectedAnnualLossRatePopulation: doublePrecision("ltng_alrp"), // Relevance Type: Lightning --- Metric Type: Expected Annual Loss Rate - Population --- Details: No details
	lightningExpectedAnnualLossRateNationalPercentile: doublePrecision("ltng_alr_npctl"), // Relevance Type: Lightning --- Metric Type: National Percentile --- Details: No details
	lightningHazardTypeRiskIndexValue: doublePrecision("ltng_riskv"), // Relevance Type: Lightning --- Metric Type: Hazard Type Risk Index Value --- Details: No details
	lightningHazardTypeRiskIndexScore: doublePrecision("ltng_risks"), // Relevance Type: Lightning --- Metric Type: Hazard Type Risk Index Score --- Details: No details
	lightningHazardTypeRiskIndexRating: text("ltng_riskr"), // Relevance Type: Lightning --- Metric Type: Hazard Type Risk Index Rating --- Details: No details
	riverineFloodingNumberOfEvents: doublePrecision("rfld_evnts"), // Relevance Type: Riverine Flooding --- Metric Type: Number of Events --- Details: No details
	riverineFloodingAnnualizedFrequency: doublePrecision("rfld_afreq"), // Relevance Type: Riverine Flooding --- Metric Type: Annualized Frequency --- Details: No details
	riverineFloodingExposureImpactedArea: doublePrecision("rfld_exp_area"), // Relevance Type: Riverine Flooding --- Metric Type: Exposure - Area --- Details: In Square Miles
	riverineFloodingExposureBuildingValue: doublePrecision("rfld_expb"), // Relevance Type: Riverine Flooding --- Metric Type: Exposure - Building Value --- Details: No details
	riverineFloodingExposurePopulation: doublePrecision("rfld_expp"), // Relevance Type: Riverine Flooding --- Metric Type: Exposure - Population --- Details: No details
	riverineFloodingExposurePopulationEquivalence: doublePrecision("rfld_exppe"), // Relevance Type: Riverine Flooding --- Metric Type: Exposure - Population Equivalence --- Details: No details
	riverineFloodingExposureAgricultureValue: doublePrecision("rfld_expa"), // Relevance Type: Riverine Flooding --- Metric Type: Exposure - Agriculture Value --- Details: No details
	riverineFloodingExposureTotal: doublePrecision("rfld_expt"), // Relevance Type: Riverine Flooding --- Metric Type: Exposure - Total --- Details: No details
	riverineFloodingHistoricLossRatioBuildings: doublePrecision("rfld_hlrb"), // Relevance Type: Riverine Flooding --- Metric Type: Historic Loss Ratio - Buildings --- Details: No details
	riverineFloodingHistoricLossRatioPopulation: doublePrecision("rfld_hlrp"), // Relevance Type: Riverine Flooding --- Metric Type: Historic Loss Ratio - Population --- Details: No details
	riverineFloodingHistoricLossRatioAgriculture: doublePrecision("rfld_hlra"), // Relevance Type: Riverine Flooding --- Metric Type: Historic Loss Ratio - Agriculture --- Details: No details
	riverineFloodingHistoricLossRatioTotalRating: text("rfld_hlrr"), // Relevance Type: Riverine Flooding --- Metric Type: Historic Loss Ratio - Total Rating --- Details: No details
	riverineFloodingExpectedAnnualLossBuildingValue: doublePrecision("rfld_ealb"), // Relevance Type: Riverine Flooding --- Metric Type: Expected Annual Loss - Building Value --- Details: No details
	riverineFloodingExpectedAnnualLossPopulation: doublePrecision("rfld_ealp"), // Relevance Type: Riverine Flooding --- Metric Type: Expected Annual Loss - Population --- Details: No details
	riverineFloodingExpectedAnnualLossPopulationEquivalence: doublePrecision("rfld_ealpe"), // Relevance Type: Riverine Flooding --- Metric Type: Expected Annual Loss - Population Equivalence --- Details: No details
	riverineFloodingExpectedAnnualLossAgricultureValue: doublePrecision("rfld_eala"), // Relevance Type: Riverine Flooding --- Metric Type: Expected Annual Loss - Agriculture Value --- Details: No details
	riverineFloodingExpectedAnnualLossTotal: doublePrecision("rfld_ealt"), // Relevance Type: Riverine Flooding --- Metric Type: Expected Annual Loss - Total --- Details: No details
	riverineFloodingExpectedAnnualLossScore: doublePrecision("rfld_eals"), // Relevance Type: Riverine Flooding --- Metric Type: Expected Annual Loss Score --- Details: No details
	riverineFloodingExpectedAnnualLossRating: text("rfld_ealr"), // Relevance Type: Riverine Flooding --- Metric Type: Expected Annual Loss Rating --- Details: No details
	riverineFloodingExpectedAnnualLossRateBuilding: doublePrecision("rfld_alrb"), // Relevance Type: Riverine Flooding --- Metric Type: Expected Annual Loss Rate - Building --- Details: No details
	riverineFloodingExpectedAnnualLossRatePopulation: doublePrecision("rfld_alrp"), // Relevance Type: Riverine Flooding --- Metric Type: Expected Annual Loss Rate - Population --- Details: No details
	riverineFloodingExpectedAnnualLossRateAgriculture: doublePrecision("rfld_alra"), // Relevance Type: Riverine Flooding --- Metric Type: Expected Annual Loss Rate - Agriculture --- Details: No details
	riverineFloodingExpectedAnnualLossRateNationalPercentile: doublePrecision("rfld_alr_npctl"), // Relevance Type: Riverine Flooding --- Metric Type: National Percentile --- Details: No details
	riverineFloodingHazardTypeRiskIndexValue: doublePrecision("rfld_riskv"), // Relevance Type: Riverine Flooding --- Metric Type: Hazard Type Risk Index Value --- Details: No details
	riverineFloodingHazardTypeRiskIndexScore: doublePrecision("rfld_risks"), // Relevance Type: Riverine Flooding --- Metric Type: Hazard Type Risk Index Score --- Details: No details
	riverineFloodingHazardTypeRiskIndexRating: text("rfld_riskr"), // Relevance Type: Riverine Flooding --- Metric Type: Hazard Type Risk Index Rating --- Details: No details
	strongWindNumberOfEvents: doublePrecision("swnd_evnts"), // Relevance Type: Strong Wind --- Metric Type: Number of Events --- Details: No details
	strongWindAnnualizedFrequency: doublePrecision("swnd_afreq"), // Relevance Type: Strong Wind --- Metric Type: Annualized Frequency --- Details: No details
	strongWindExposureImpactedArea: doublePrecision("swnd_exp_area"), // Relevance Type: Strong Wind --- Metric Type: Exposure - Area --- Details: In Square Miles
	strongWindExposureBuildingValue: doublePrecision("swnd_expb"), // Relevance Type: Strong Wind --- Metric Type: Exposure - Building Value --- Details: No details
	strongWindExposurePopulation: doublePrecision("swnd_expp"), // Relevance Type: Strong Wind --- Metric Type: Exposure - Population --- Details: No details
	strongWindExposurePopulationEquivalence: doublePrecision("swnd_exppe"), // Relevance Type: Strong Wind --- Metric Type: Exposure - Population Equivalence --- Details: No details
	strongWindExposureAgricultureValue: doublePrecision("swnd_expa"), // Relevance Type: Strong Wind --- Metric Type: Exposure - Agriculture Value --- Details: No details
	strongWindExposureTotal: doublePrecision("swnd_expt"), // Relevance Type: Strong Wind --- Metric Type: Exposure - Total --- Details: No details
	strongWindHistoricLossRatioBuildings: doublePrecision("swnd_hlrb"), // Relevance Type: Strong Wind --- Metric Type: Historic Loss Ratio - Buildings --- Details: No details
	strongWindHistoricLossRatioPopulation: doublePrecision("swnd_hlrp"), // Relevance Type: Strong Wind --- Metric Type: Historic Loss Ratio - Population --- Details: No details
	strongWindHistoricLossRatioAgriculture: doublePrecision("swnd_hlra"), // Relevance Type: Strong Wind --- Metric Type: Historic Loss Ratio - Agriculture --- Details: No details
	strongWindHistoricLossRatioTotalRating: text("swnd_hlrr"), // Relevance Type: Strong Wind --- Metric Type: Historic Loss Ratio - Total Rating --- Details: No details
	strongWindExpectedAnnualLossBuildingValue: doublePrecision("swnd_ealb"), // Relevance Type: Strong Wind --- Metric Type: Expected Annual Loss - Building Value --- Details: No details
	strongWindExpectedAnnualLossPopulation: doublePrecision("swnd_ealp"), // Relevance Type: Strong Wind --- Metric Type: Expected Annual Loss - Population --- Details: No details
	strongWindExpectedAnnualLossPopulationEquivalence: doublePrecision("swnd_ealpe"), // Relevance Type: Strong Wind --- Metric Type: Expected Annual Loss - Population Equivalence --- Details: No details
	strongWindExpectedAnnualLossAgricultureValue: doublePrecision("swnd_eala"), // Relevance Type: Strong Wind --- Metric Type: Expected Annual Loss - Agriculture Value --- Details: No details
	strongWindExpectedAnnualLossTotal: doublePrecision("swnd_ealt"), // Relevance Type: Strong Wind --- Metric Type: Expected Annual Loss - Total --- Details: No details
	strongWindExpectedAnnualLossScore: doublePrecision("swnd_eals"), // Relevance Type: Strong Wind --- Metric Type: Expected Annual Loss Score --- Details: No details
	strongWindExpectedAnnualLossRating: text("swnd_ealr"), // Relevance Type: Strong Wind --- Metric Type: Expected Annual Loss Rating --- Details: No details
	strongWindExpectedAnnualLossRateBuilding: doublePrecision("swnd_alrb"), // Relevance Type: Strong Wind --- Metric Type: Expected Annual Loss Rate - Building --- Details: No details
	strongWindExpectedAnnualLossRatePopulation: doublePrecision("swnd_alrp"), // Relevance Type: Strong Wind --- Metric Type: Expected Annual Loss Rate - Population --- Details: No details
	strongWindExpectedAnnualLossRateAgriculture: doublePrecision("swnd_alra"), // Relevance Type: Strong Wind --- Metric Type: Expected Annual Loss Rate - Agriculture --- Details: No details
	strongWindExpectedAnnualLossRateNationalPercentile: doublePrecision("swnd_alr_npctl"), // Relevance Type: Strong Wind --- Metric Type: National Percentile --- Details: No details
	strongWindHazardTypeRiskIndexValue: doublePrecision("swnd_riskv"), // Relevance Type: Strong Wind --- Metric Type: Hazard Type Risk Index Value --- Details: No details
	strongWindHazardTypeRiskIndexScore: doublePrecision("swnd_risks"), // Relevance Type: Strong Wind --- Metric Type: Hazard Type Risk Index Score --- Details: No details
	strongWindHazardTypeRiskIndexRating: text("swnd_riskr"), // Relevance Type: Strong Wind --- Metric Type: Hazard Type Risk Index Rating --- Details: No details
	tornadoNumberOfEvents: doublePrecision("trnd_evnts"), // Relevance Type: Tornado --- Metric Type: Number of Events --- Details: No details
	tornadoAnnualizedFrequency: doublePrecision("trnd_afreq"), // Relevance Type: Tornado --- Metric Type: Annualized Frequency --- Details: No details
	tornadoExposureImpactedArea: doublePrecision("trnd_exp_area"), // Relevance Type: Tornado --- Metric Type: Exposure - Area --- Details: In Square Miles
	tornadoExposureBuildingValue: doublePrecision("trnd_expb"), // Relevance Type: Tornado --- Metric Type: Exposure - Building Value --- Details: No details
	tornadoExposurePopulation: doublePrecision("trnd_expp"), // Relevance Type: Tornado --- Metric Type: Exposure - Population --- Details: No details
	tornadoExposurePopulationEquivalence: doublePrecision("trnd_exppe"), // Relevance Type: Tornado --- Metric Type: Exposure - Population Equivalence --- Details: No details
	tornadoExposureAgricultureValue: doublePrecision("trnd_expa"), // Relevance Type: Tornado --- Metric Type: Exposure - Agriculture Value --- Details: No details
	tornadoExposureTotal: doublePrecision("trnd_expt"), // Relevance Type: Tornado --- Metric Type: Exposure - Total --- Details: No details
	tornadoHistoricLossRatioBuildings: doublePrecision("trnd_hlrb"), // Relevance Type: Tornado --- Metric Type: Historic Loss Ratio - Buildings --- Details: No details
	tornadoHistoricLossRatioPopulation: doublePrecision("trnd_hlrp"), // Relevance Type: Tornado --- Metric Type: Historic Loss Ratio - Population --- Details: No details
	tornadoHistoricLossRatioAgriculture: doublePrecision("trnd_hlra"), // Relevance Type: Tornado --- Metric Type: Historic Loss Ratio - Agriculture --- Details: No details
	tornadoHistoricLossRatioTotalRating: text("trnd_hlrr"), // Relevance Type: Tornado --- Metric Type: Historic Loss Ratio - Total Rating --- Details: No details
	tornadoExpectedAnnualLossBuildingValue: doublePrecision("trnd_ealb"), // Relevance Type: Tornado --- Metric Type: Expected Annual Loss - Building Value --- Details: No details
	tornadoExpectedAnnualLossPopulation: doublePrecision("trnd_ealp"), // Relevance Type: Tornado --- Metric Type: Expected Annual Loss - Population --- Details: No details
	tornadoExpectedAnnualLossPopulationEquivalence: doublePrecision("trnd_ealpe"), // Relevance Type: Tornado --- Metric Type: Expected Annual Loss - Population Equivalence --- Details: No details
	tornadoExpectedAnnualLossAgricultureValue: doublePrecision("trnd_eala"), // Relevance Type: Tornado --- Metric Type: Expected Annual Loss - Agriculture Value --- Details: No details
	tornadoExpectedAnnualLossTotal: doublePrecision("trnd_ealt"), // Relevance Type: Tornado --- Metric Type: Expected Annual Loss - Total --- Details: No details
	tornadoExpectedAnnualLossScore: doublePrecision("trnd_eals"), // Relevance Type: Tornado --- Metric Type: Expected Annual Loss Score --- Details: No details
	tornadoExpectedAnnualLossRating: text("trnd_ealr"), // Relevance Type: Tornado --- Metric Type: Expected Annual Loss Rating --- Details: No details
	tornadoExpectedAnnualLossRateBuilding: doublePrecision("trnd_alrb"), // Relevance Type: Tornado --- Metric Type: Expected Annual Loss Rate - Building --- Details: No details
	tornadoExpectedAnnualLossRatePopulation: doublePrecision("trnd_alrp"), // Relevance Type: Tornado --- Metric Type: Expected Annual Loss Rate - Population --- Details: No details
	tornadoExpectedAnnualLossRateAgriculture: doublePrecision("trnd_alra"), // Relevance Type: Tornado --- Metric Type: Expected Annual Loss Rate - Agriculture --- Details: No details
	tornadoExpectedAnnualLossRateNationalPercentile: doublePrecision("trnd_alr_npctl"), // Relevance Type: Tornado --- Metric Type: National Percentile --- Details: No details
	tornadoHazardTypeRiskIndexValue: doublePrecision("trnd_riskv"), // Relevance Type: Tornado --- Metric Type: Hazard Type Risk Index Value --- Details: No details
	tornadoHazardTypeRiskIndexScore: doublePrecision("trnd_risks"), // Relevance Type: Tornado --- Metric Type: Hazard Type Risk Index Score --- Details: No details
	tornadoHazardTypeRiskIndexRating: text("trnd_riskr"), // Relevance Type: Tornado --- Metric Type: Hazard Type Risk Index Rating --- Details: No details
	tsunamiNumberOfEvents: doublePrecision("tsun_evnts"), // Relevance Type: Tsunami --- Metric Type: Number of Events --- Details: No details
	tsunamiAnnualizedFrequency: doublePrecision("tsun_afreq"), // Relevance Type: Tsunami --- Metric Type: Annualized Frequency --- Details: No details
	tsunamiExposureImpactedArea: doublePrecision("tsun_exp_area"), // Relevance Type: Tsunami --- Metric Type: Exposure - Area --- Details: In Square Miles
	tsunamiExposureBuildingValue: doublePrecision("tsun_expb"), // Relevance Type: Tsunami --- Metric Type: Exposure - Building Value --- Details: No details
	tsunamiExposurePopulation: doublePrecision("tsun_expp"), // Relevance Type: Tsunami --- Metric Type: Exposure - Population --- Details: No details
	tsunamiExposurePopulationEquivalence: doublePrecision("tsun_exppe"), // Relevance Type: Tsunami --- Metric Type: Exposure - Population Equivalence --- Details: No details
	tsunamiExposureTotal: doublePrecision("tsun_expt"), // Relevance Type: Tsunami --- Metric Type: Exposure - Total --- Details: No details
	tsunamiHistoricLossRatioBuildings: doublePrecision("tsun_hlrb"), // Relevance Type: Tsunami --- Metric Type: Historic Loss Ratio - Buildings --- Details: No details
	tsunamiHistoricLossRatioPopulation: doublePrecision("tsun_hlrp"), // Relevance Type: Tsunami --- Metric Type: Historic Loss Ratio - Population --- Details: No details
	tsunamiHistoricLossRatioTotalRating: text("tsun_hlrr"), // Relevance Type: Tsunami --- Metric Type: Historic Loss Ratio - Total Rating --- Details: No details
	tsunamiExpectedAnnualLossBuildingValue: doublePrecision("tsun_ealb"), // Relevance Type: Tsunami --- Metric Type: Expected Annual Loss - Building Value --- Details: No details
	tsunamiExpectedAnnualLossPopulation: doublePrecision("tsun_ealp"), // Relevance Type: Tsunami --- Metric Type: Expected Annual Loss - Population --- Details: No details
	tsunamiExpectedAnnualLossPopulationEquivalence: doublePrecision("tsun_ealpe"), // Relevance Type: Tsunami --- Metric Type: Expected Annual Loss - Population Equivalence --- Details: No details
	tsunamiExpectedAnnualLossTotal: doublePrecision("tsun_ealt"), // Relevance Type: Tsunami --- Metric Type: Expected Annual Loss - Total --- Details: No details
	tsunamiExpectedAnnualLossScore: doublePrecision("tsun_eals"), // Relevance Type: Tsunami --- Metric Type: Expected Annual Loss Score --- Details: No details
	tsunamiExpectedAnnualLossRating: text("tsun_ealr"), // Relevance Type: Tsunami --- Metric Type: Expected Annual Loss Rating --- Details: No details
	tsunamiExpectedAnnualLossRateBuilding: doublePrecision("tsun_alrb"), // Relevance Type: Tsunami --- Metric Type: Expected Annual Loss Rate - Building --- Details: No details
	tsunamiExpectedAnnualLossRatePopulation: doublePrecision("tsun_alrp"), // Relevance Type: Tsunami --- Metric Type: Expected Annual Loss Rate - Population --- Details: No details
	tsunamiExpectedAnnualLossRateNationalPercentile: doublePrecision("tsun_alr_npctl"), // Relevance Type: Tsunami --- Metric Type: National Percentile --- Details: No details
	tsunamiHazardTypeRiskIndexValue: doublePrecision("tsun_riskv"), // Relevance Type: Tsunami --- Metric Type: Hazard Type Risk Index Value --- Details: No details
	tsunamiHazardTypeRiskIndexScore: doublePrecision("tsun_risks"), // Relevance Type: Tsunami --- Metric Type: Hazard Type Risk Index Score --- Details: No details
	tsunamiHazardTypeRiskIndexRating: text("tsun_riskr"), // Relevance Type: Tsunami --- Metric Type: Hazard Type Risk Index Rating --- Details: No details
	volcanicActivityNumberOfEvents: doublePrecision("vlcn_evnts"), // Relevance Type: Volcanic Activity --- Metric Type: Number of Events --- Details: No details
	volcanicActivityAnnualizedFrequency: doublePrecision("vlcn_afreq"), // Relevance Type: Volcanic Activity --- Metric Type: Annualized Frequency --- Details: No details
	volcanicActivityExposureImpactedArea: doublePrecision("vlcn_exp_area"), // Relevance Type: Volcanic Activity --- Metric Type: Exposure - Area --- Details: In Square Miles
	volcanicActivityExposureBuildingValue: doublePrecision("vlcn_expb"), // Relevance Type: Volcanic Activity --- Metric Type: Exposure - Building Value --- Details: No details
	volcanicActivityExposurePopulation: doublePrecision("vlcn_expp"), // Relevance Type: Volcanic Activity --- Metric Type: Exposure - Population --- Details: No details
	volcanicActivityExposurePopulationEquivalence: doublePrecision("vlcn_exppe"), // Relevance Type: Volcanic Activity --- Metric Type: Exposure - Population Equivalence --- Details: No details
	volcanicActivityExposureTotal: doublePrecision("vlcn_expt"), // Relevance Type: Volcanic Activity --- Metric Type: Exposure - Total --- Details: No details
	volcanicActivityHistoricLossRatioBuildings: doublePrecision("vlcn_hlrb"), // Relevance Type: Volcanic Activity --- Metric Type: Historic Loss Ratio - Buildings --- Details: No details
	volcanicActivityHistoricLossRatioPopulation: doublePrecision("vlcn_hlrp"), // Relevance Type: Volcanic Activity --- Metric Type: Historic Loss Ratio - Population --- Details: No details
	volcanicActivityHistoricLossRatioTotalRating: text("vlcn_hlrr"), // Relevance Type: Volcanic Activity --- Metric Type: Historic Loss Ratio - Total Rating --- Details: No details
	volcanicActivityExpectedAnnualLossBuildingValue: doublePrecision("vlcn_ealb"), // Relevance Type: Volcanic Activity --- Metric Type: Expected Annual Loss - Building Value --- Details: No details
	volcanicActivityExpectedAnnualLossPopulation: doublePrecision("vlcn_ealp"), // Relevance Type: Volcanic Activity --- Metric Type: Expected Annual Loss - Population --- Details: No details
	volcanicActivityExpectedAnnualLossPopulationEquivalence: doublePrecision("vlcn_ealpe"), // Relevance Type: Volcanic Activity --- Metric Type: Expected Annual Loss - Population Equivalence --- Details: No details
	volcanicActivityExpectedAnnualLossTotal: doublePrecision("vlcn_ealt"), // Relevance Type: Volcanic Activity --- Metric Type: Expected Annual Loss - Total --- Details: No details
	volcanicActivityExpectedAnnualLossScore: doublePrecision("vlcn_eals"), // Relevance Type: Volcanic Activity --- Metric Type: Expected Annual Loss Score --- Details: No details
	volcanicActivityExpectedAnnualLossRating: text("vlcn_ealr"), // Relevance Type: Volcanic Activity --- Metric Type: Expected Annual Loss Rating --- Details: No details
	volcanicActivityExpectedAnnualLossRateBuilding: doublePrecision("vlcn_alrb"), // Relevance Type: Volcanic Activity --- Metric Type: Expected Annual Loss Rate - Building --- Details: No details
	volcanicActivityExpectedAnnualLossRatePopulation: doublePrecision("vlcn_alrp"), // Relevance Type: Volcanic Activity --- Metric Type: Expected Annual Loss Rate - Population --- Details: No details
	volcanicActivityExpectedAnnualLossRateNationalPercentile: doublePrecision("vlcn_alr_npctl"), // Relevance Type: Volcanic Activity --- Metric Type: National Percentile --- Details: No details
	volcanicActivityHazardTypeRiskIndexValue: doublePrecision("vlcn_riskv"), // Relevance Type: Volcanic Activity --- Metric Type: Hazard Type Risk Index Value --- Details: No details
	volcanicActivityHazardTypeRiskIndexScore: doublePrecision("vlcn_risks"), // Relevance Type: Volcanic Activity --- Metric Type: Hazard Type Risk Index Score --- Details: No details
	volcanicActivityHazardTypeRiskIndexRating: text("vlcn_riskr"), // Relevance Type: Volcanic Activity --- Metric Type: Hazard Type Risk Index Rating --- Details: No details
	wildfireNumberOfEvents: doublePrecision("wfir_evnts"), // Relevance Type: Wildfire --- Metric Type: Number of Events --- Details: No details
	wildfireAnnualizedFrequency: doublePrecision("wfir_afreq"), // Relevance Type: Wildfire --- Metric Type: Annualized Frequency --- Details: No details
	wildfireExposureImpactedArea: doublePrecision("wfir_exp_area"), // Relevance Type: Wildfire --- Metric Type: Exposure - Area --- Details: In Square Miles
	wildfireExposureBuildingValue: doublePrecision("wfir_expb"), // Relevance Type: Wildfire --- Metric Type: Exposure - Building Value --- Details: No details
	wildfireExposurePopulation: doublePrecision("wfir_expp"), // Relevance Type: Wildfire --- Metric Type: Exposure - Population --- Details: No details
	wildfireExposurePopulationEquivalence: doublePrecision("wfir_exppe"), // Relevance Type: Wildfire --- Metric Type: Exposure - Population Equivalence --- Details: No details
	wildfireExposureAgricultureValue: doublePrecision("wfir_expa"), // Relevance Type: Wildfire --- Metric Type: Exposure - Agriculture Value --- Details: No details
	wildfireExposureTotal: doublePrecision("wfir_expt"), // Relevance Type: Wildfire --- Metric Type: Exposure - Total --- Details: No details
	wildfireHistoricLossRatioBuildings: doublePrecision("wfir_hlrb"), // Relevance Type: Wildfire --- Metric Type: Historic Loss Ratio - Buildings --- Details: No details
	wildfireHistoricLossRatioPopulation: doublePrecision("wfir_hlrp"), // Relevance Type: Wildfire --- Metric Type: Historic Loss Ratio - Population --- Details: No details
	wildfireHistoricLossRatioAgriculture: doublePrecision("wfir_hlra"), // Relevance Type: Wildfire --- Metric Type: Historic Loss Ratio - Agriculture --- Details: No details
	wildfireHistoricLossRatioTotalRating: text("wfir_hlrr"), // Relevance Type: Wildfire --- Metric Type: Historic Loss Ratio - Total Rating --- Details: No details
	wildfireExpectedAnnualLossBuildingValue: doublePrecision("wfir_ealb"), // Relevance Type: Wildfire --- Metric Type: Expected Annual Loss - Building Value --- Details: No details
	wildfireExpectedAnnualLossPopulation: doublePrecision("wfir_ealp"), // Relevance Type: Wildfire --- Metric Type: Expected Annual Loss - Population --- Details: No details
	wildfireExpectedAnnualLossPopulationEquivalence: doublePrecision("wfir_ealpe"), // Relevance Type: Wildfire --- Metric Type: Expected Annual Loss - Population Equivalence --- Details: No details
	wildfireExpectedAnnualLossAgricultureValue: doublePrecision("wfir_eala"), // Relevance Type: Wildfire --- Metric Type: Expected Annual Loss - Agriculture Value --- Details: No details
	wildfireExpectedAnnualLossTotal: doublePrecision("wfir_ealt"), // Relevance Type: Wildfire --- Metric Type: Expected Annual Loss - Total --- Details: No details
	wildfireExpectedAnnualLossScore: doublePrecision("wfir_eals"), // Relevance Type: Wildfire --- Metric Type: Expected Annual Loss Score --- Details: No details
	wildfireExpectedAnnualLossRating: text("wfir_ealr"), // Relevance Type: Wildfire --- Metric Type: Expected Annual Loss Rating --- Details: No details
	wildfireExpectedAnnualLossRateBuilding: doublePrecision("wfir_alrb"), // Relevance Type: Wildfire --- Metric Type: Expected Annual Loss Rate - Building --- Details: No details
	wildfireExpectedAnnualLossRatePopulation: doublePrecision("wfir_alrp"), // Relevance Type: Wildfire --- Metric Type: Expected Annual Loss Rate - Population --- Details: No details
	wildfireExpectedAnnualLossRateAgriculture: doublePrecision("wfir_alra"), // Relevance Type: Wildfire --- Metric Type: Expected Annual Loss Rate - Agriculture --- Details: No details
	wildfireExpectedAnnualLossRateNationalPercentile: doublePrecision("wfir_alr_npctl"), // Relevance Type: Wildfire --- Metric Type: National Percentile --- Details: No details
	wildfireHazardTypeRiskIndexValue: doublePrecision("wfir_riskv"), // Relevance Type: Wildfire --- Metric Type: Hazard Type Risk Index Value --- Details: No details
	wildfireHazardTypeRiskIndexScore: doublePrecision("wfir_risks"), // Relevance Type: Wildfire --- Metric Type: Hazard Type Risk Index Score --- Details: No details
	wildfireHazardTypeRiskIndexRating: text("wfir_riskr"), // Relevance Type: Wildfire --- Metric Type: Hazard Type Risk Index Rating --- Details: No details
	winterWeatherNumberOfEvents: doublePrecision("wntw_evnts"), // Relevance Type: Winter Weather --- Metric Type: Number of Events --- Details: No details
	winterWeatherAnnualizedFrequency: doublePrecision("wntw_afreq"), // Relevance Type: Winter Weather --- Metric Type: Annualized Frequency --- Details: No details
	winterWeatherExposureImpactedArea: doublePrecision("wntw_exp_area"), // Relevance Type: Winter Weather --- Metric Type: Exposure - Area --- Details: In Square Miles
	winterWeatherExposureBuildingValue: doublePrecision("wntw_expb"), // Relevance Type: Winter Weather --- Metric Type: Exposure - Building Value --- Details: No details
	winterWeatherExposurePopulation: doublePrecision("wntw_expp"), // Relevance Type: Winter Weather --- Metric Type: Exposure - Population --- Details: No details
	winterWeatherExposurePopulationEquivalence: doublePrecision("wntw_exppe"), // Relevance Type: Winter Weather --- Metric Type: Exposure - Population Equivalence --- Details: No details
	winterWeatherExposureAgricultureValue: doublePrecision("wntw_expa"), // Relevance Type: Winter Weather --- Metric Type: Exposure - Agriculture Value --- Details: No details
	winterWeatherExposureTotal: doublePrecision("wntw_expt"), // Relevance Type: Winter Weather --- Metric Type: Exposure - Total --- Details: No details
	winterWeatherHistoricLossRatioBuildings: doublePrecision("wntw_hlrb"), // Relevance Type: Winter Weather --- Metric Type: Historic Loss Ratio - Buildings --- Details: No details
	winterWeatherHistoricLossRatioPopulation: doublePrecision("wntw_hlrp"), // Relevance Type: Winter Weather --- Metric Type: Historic Loss Ratio - Population --- Details: No details
	winterWeatherHistoricLossRatioAgriculture: doublePrecision("wntw_hlra"), // Relevance Type: Winter Weather --- Metric Type: Historic Loss Ratio - Agriculture --- Details: No details
	winterWeatherHistoricLossRatioTotalRating: text("wntw_hlrr"), // Relevance Type: Winter Weather --- Metric Type: Historic Loss Ratio - Total Rating --- Details: No details
	winterWeatherExpectedAnnualLossBuildingValue: doublePrecision("wntw_ealb"), // Relevance Type: Winter Weather --- Metric Type: Expected Annual Loss - Building Value --- Details: No details
	winterWeatherExpectedAnnualLossPopulation: doublePrecision("wntw_ealp"), // Relevance Type: Winter Weather --- Metric Type: Expected Annual Loss - Population --- Details: No details
	winterWeatherExpectedAnnualLossPopulationEquivalence: doublePrecision("wntw_ealpe"), // Relevance Type: Winter Weather --- Metric Type: Expected Annual Loss - Population Equivalence --- Details: No details
	winterWeatherExpectedAnnualLossAgricultureValue: doublePrecision("wntw_eala"), // Relevance Type: Winter Weather --- Metric Type: Expected Annual Loss - Agriculture Value --- Details: No details
	winterWeatherExpectedAnnualLossTotal: doublePrecision("wntw_ealt"), // Relevance Type: Winter Weather --- Metric Type: Expected Annual Loss - Total --- Details: No details
	winterWeatherExpectedAnnualLossScore: doublePrecision("wntw_eals"), // Relevance Type: Winter Weather --- Metric Type: Expected Annual Loss Score --- Details: No details
	winterWeatherExpectedAnnualLossRating: text("wntw_ealr"), // Relevance Type: Winter Weather --- Metric Type: Expected Annual Loss Rating --- Details: No details
	winterWeatherExpectedAnnualLossRateBuilding: doublePrecision("wntw_alrb"), // Relevance Type: Winter Weather --- Metric Type: Expected Annual Loss Rate - Building --- Details: No details
	winterWeatherExpectedAnnualLossRatePopulation: doublePrecision("wntw_alrp"), // Relevance Type: Winter Weather --- Metric Type: Expected Annual Loss Rate - Population --- Details: No details
	winterWeatherExpectedAnnualLossRateAgriculture: doublePrecision("wntw_alra"), // Relevance Type: Winter Weather --- Metric Type: Expected Annual Loss Rate - Agriculture --- Details: No details
	winterWeatherExpectedAnnualLossRateNationalPercentile: doublePrecision("wntw_alr_npctl"), // Relevance Type: Winter Weather --- Metric Type: National Percentile --- Details: No details
	winterWeatherHazardTypeRiskIndexValue: doublePrecision("wntw_riskv"), // Relevance Type: Winter Weather --- Metric Type: Hazard Type Risk Index Value --- Details: No details
	winterWeatherHazardTypeRiskIndexScore: doublePrecision("wntw_risks"), // Relevance Type: Winter Weather --- Metric Type: Hazard Type Risk Index Score --- Details: No details
	winterWeatherHazardTypeRiskIndexRating: text("wntw_riskr"), // Relevance Type: Winter Weather --- Metric Type: Hazard Type Risk Index Rating --- Details: No details
	nationalRiskIndexVersion: text("nri_ver"), // Relevance Type: All --- No Metrics --- Details: No details
})