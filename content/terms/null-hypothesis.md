---
title: "Null Hpyothesis"
abrv: null
tags: ["Statistical Inference"]
domain: "ds"
topics: []
author: "michael_brenndoerfer"
created: "2020-08-24"
updated: "2020-08-26"
references: null
draft: true
---

A null hyptohesis is the formulation of an assumption about a certain population or a data generating process. The null hyptohesis is usally formulated such that it states what is assumed to be true. Based on this null hyptohesis which forms the baseline, experiments are conducted to either reject or fail to reject the null hypothesis.

Rejecting the null hypothesis means that the experiments have beyond doubt shown that the population or the data generating process are different from the definition of the null hyptothesis. Failing to reject the null hypothesis means that the experiments are satisfying the definition of the null hypothesis.

Failing to reject the null hypothesis doesn't mean that the null hypothesis is correct. It simply means that the conducted experiments were not able to show beyond reasonble doubt that the null hyptohesis is not correct.

## Experiment setup

1. Formulate the null hypothesis
2. Formulate the alternative hyptohesis
3. Collect a sample of the data
4. Perform a statistical test
5. Could the null hyptothesis plasuibly be true by chance. In other terms: is the statistical test indicating that the analyzed data is "expainable by chance alone".
   1. If you answered yes, you failed to reject the null hyptohesis (failed to reject, but not stated as true because data is not sufficient to prove it). not innocent, simply not sufficient evidence to convict. might or might not be innocent (ordinary state)
   2. If you answered no, you are rejecting the null hyptohesis: we reject null hyptohesis in favor of alternative hypothesis (in data science it's the burden of the data scientst to prove the "unusual", aka. not the ordinary state)

## Intrepreting the data

xaxa

## Example

1.
2. Or in even simpler terms: Can the person be innocent, even if he looks guilty.
3. start with a null hypothesis $ H_0 $ that represents the status quo
4. set an alternative hypothesis $ H_A $ that represents the research question (what we are testing for)
5. conduct hyptothesis under the assumption that the null hypothesis is true
   1. if the results suggests that the data is does not provide convicing evidence for the alternative hypothesis (via simulation or theoretical methods), we stick with the null hypothesis, or in different words: we failed to reject the null hyptohesis
   2. Otherwise, we reject the null hypothesis in favor of the alternative hypothesis
