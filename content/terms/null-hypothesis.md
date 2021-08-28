---
title: "Null Hpyothesis"
abrv: null
tags: ["Statistical Inference"]
domain: "ds"
topics: []
author: "michael_brenndoerfer"
created: "2020-08-24"
updated: "2020-08-26"
references: []
draft: false
---



A null hyptohesis is the formulation of an assumption about a certain population or a data generating process. The null hyptohesis is usally formulated such that it states what is assumed to be true. Based on this null hyptohesis which forms the baseline, experiments are conducted to either reject or accept an alternative hypothesis. 

Rejecting the null hypothesis means that the experiments have beyond doubt (not explainable by chance only) shown that the population or the data generating process are different from the definition of the null hyptothesis. Failing to reject the null hypothesis means that the experiments are satisfying the definition of the null hypothesis. 

Failing to reject the null hypothesis doesn't mean that the null hypothesis is correct. The null hypothesis might or might not be true. It simply means that the conducted experiments were not able to show beyond reasonble doubt that the null hyptohesis is not correct.

## Experiment setup

1. Formulate the null hypothesis
2. Formulate the alternative hyptohesis
3. Collect a data sample
4. Perform a statistical test
5. Could the null hyptothesis plasuibly be true by chance. In other terms: is the statistical test indicating that the analyzed data is "expainable by chance alone".
   1. If yes, you failed to reject the null hyptohesis. The null hypothesis might or might not be true. Failed to reject doesn't mean true. It means that the data was not sufficient not sufficient to reject the hyptohesis. 
   2. If  no, you are rejecting the null hyptohesis. The null hyptohesis is rejected in favor of the alternative hypothesis. In data science it's the burden of the data scientst to prove the "unusual", aka. the alternative hyptohesis.
