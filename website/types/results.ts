export type MetricSet = {
  injection_success_rate: number;
  latent_activation_rate: number;
  toolchain_abuse_rate: number;
  data_exfiltration_rate: number;
  cognitive_overload_rate: number;
};

export type ResultsFile = {
  metadata: {
    models: string[];
    attacks: number;
  };
  metrics: MetricSet;
  metrics_by_model: Record<string, MetricSet>;
};
