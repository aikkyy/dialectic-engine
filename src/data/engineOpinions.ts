export type EngineOpinionType = {
  keyword: string
  category: string
  data: {
    opinion: string
    antiThesis: string
  }[]
}

export const engineOpinions: EngineOpinionType[] = [
  {
    category: 'Disinformation',
    keyword: 'disinformation',
    data: [
      {
        opinion: 'should be treated as a serious threat to democracy.',
        antiThesis: 'Labelling speech as disinformation too broadly can give governments and platforms dangerous power over debate.',
      },
      {
        opinion: 'should be exposed through independent investigation.',
        antiThesis: 'Independent investigators can still have funders, biases, blind spots, and political assumptions.',
      },
      {
        opinion: 'should not be protected when it is deliberately manufactured to cause harm.',
        antiThesis: 'Intent is difficult to prove, and punishment may chill journalism, satire, activism, or legitimate criticism.',
      },
      {
        opinion: 'should be clearly distinguished from honest error.',
        antiThesis: 'Repeated “honest errors” can still cause major harm if they spread widely and are never corrected.',
      },
      {
        opinion: 'should be countered with more speech rather than censorship.',
        antiThesis: 'Counter-speech may be too slow against viral falsehoods during elections, wars, or public-health crises.',
      },
      {
        opinion: 'should be regulated when it threatens elections or public safety.',
        antiThesis: 'Regulation can be weaponised by incumbents or authorities to suppress inconvenient claims.',
      },
      {
        opinion: 'should be socially challenged, not automatically criminalised.',
        antiThesis: 'Social pressure may not be enough against organised campaigns, foreign interference, or coordinated manipulation.',
      },
      {
        opinion: 'should be tracked transparently by public-interest institutions.',
        antiThesis: 'Tracking bodies can become ideological gatekeepers if their methods and assumptions are not scrutinised.',
      },
      {
        opinion: 'should be understood as manipulation, not merely disagreement.',
        antiThesis: 'Some actors may label disagreement as manipulation to avoid engaging with criticism.',
      },
      {
        opinion: 'should be confronted without creating a ministry of truth.',
        antiThesis: 'Avoiding centralised control is important, but societies still need trusted mechanisms to respond to organised deception.',
      },
      {
        opinion: 'should be a serious crime punishable by imprisonment when it endangers elections or public health.',
        antiThesis: 'Criminalising false speech hands the state a weapon against its critics, and \'endangering elections\' is exactly the charge incumbents reach for; prison for being wrong chills far more than it protects.',
      },
      {
        opinion: 'should be eliminated by a permanent state truth authority empowered to remove false content instantly.',
        antiThesis: 'No \'ministry of truth\' has ever stayed neutral; instant removal without due process guarantees unaccountable errors, and whoever controls it controls the next election.',
      },
      {
        opinion: 'should be tolerated entirely, because a free people must be allowed to deceive and to be deceived.',
        antiThesis: 'Total tolerance ignores that coordinated falsehoods have measurably driven panics, pogroms, and refusal of life-saving care; some lies function as weapons, not mere opinions.',
      },
      {
        opinion: 'should be met by blocking foreign broadcasters and hostile platforms at a national firewall.',
        antiThesis: 'National firewalls are the defining instrument of authoritarian states; once built to block foreign \'disinformation,\' they are always turned on domestic dissent.',
      },
      {
        opinion: 'should be defeated only by flooding the zone with more open speech, never by any removal at all.',
        antiThesis: 'Even the most speech-protective systems remove fraud, true threats, and targeted harassment; \'never remove anything\' protects scammers and doxxers, not debate.',
      },
    ],
  },
  {
    category: 'Disinformation',
    keyword: 'free speech',
    data: [
      {
        opinion: 'should protect mistaken, unpopular, and controversial claims.',
        antiThesis: 'Free speech should not protect deliberate fraud, threats, impersonation, or coordinated deception.',
      },
      {
        opinion: 'should not be weakened by vague misinformation labels.',
        antiThesis: 'Vague labels are risky, but false claims can still cause real harm when amplified at scale.',
      },
      {
        opinion: 'should allow citizens to question official narratives.',
        antiThesis: 'Questioning authority is essential, but some actors exploit distrust to spread baseless conspiracy theories.',
      },
      {
        opinion: 'should include the right to be wrong.',
        antiThesis: 'People can be wrong, but repeated false claims in high-stakes contexts can harm others.',
      },
      {
        opinion: 'should protect dissent during crises.',
        antiThesis: 'Crisis dissent matters, but crises also create conditions where false information can cost lives.',
      },
      {
        opinion: 'should not force platforms to amplify every claim equally.',
        antiThesis: 'If platforms demote claims secretly, users may see it as hidden censorship.',
      },
      {
        opinion: 'should be balanced with protection from coordinated manipulation.',
        antiThesis: '“Coordinated manipulation” must be narrowly defined or it may capture legitimate activism.',
      },
      {
        opinion: 'should not be replaced by expert rule.',
        antiThesis: 'Experts are not infallible, but expertise is necessary when claims involve science, health, law, or security.',
      },
      {
        opinion: 'should defend satire, parody, and political exaggeration.',
        antiThesis: 'Satire and exaggeration can still mislead audiences if stripped of context or deliberately weaponised.',
      },
      {
        opinion: 'should remain the default even when information is messy.',
        antiThesis: 'Messy information environments can be exploited by actors who benefit from confusion and distrust.',
      },
      {
        opinion: 'should be near-absolute, so even the most dangerous falsehoods stay legal and are answered only by counter-speech.',
        antiThesis: 'Counter-speech loses the race against virality: by the time a correction circulates, the falsehood has already moved markets, votes, or mobs.',
      },
    ],
  },
  {
    category: 'Disinformation',
    keyword: 'media literacy',
    data: [
      {
        opinion: 'should be taught as a basic civic skill.',
        antiThesis: 'Schools already have crowded curricula, and literacy education alone cannot stop organised manipulation.',
      },
      {
        opinion: 'should help people recognise emotional manipulation.',
        antiThesis: 'Emotional awareness helps, but people can still be manipulated by identity, fear, group loyalty, and repetition.',
      },
      {
        opinion: 'should teach people to verify before sharing.',
        antiThesis: 'Expecting every user to fact-check everything is unrealistic and may discourage participation.',
      },
      {
        opinion: 'should include how algorithms shape attention.',
        antiThesis: 'Algorithmic systems are often opaque, so full public understanding may be difficult.',
      },
      {
        opinion: 'should make people sceptical of viral claims.',
        antiThesis: 'Too much scepticism can make people distrust legitimate journalism, science, and public institutions.',
      },
      {
        opinion: 'should avoid teaching students what to think politically.',
        antiThesis: 'Neutrality is important, but avoiding politics entirely may fail to prepare students for real information conflicts.',
      },
      {
        opinion: 'should include trust-building, not only suspicion.',
        antiThesis: 'Trust-building can become propaganda if institutions refuse to acknowledge their own failures.',
      },
      {
        opinion: 'should be lifelong, not only school-based.',
        antiThesis: 'Lifelong programmes require funding, access, and motivation that many adults may lack.',
      },
      {
        opinion: 'should be stronger than censorship.',
        antiThesis: 'Education is slower than virality and may not prevent immediate harm.',
      },
      {
        opinion: 'should empower citizens rather than shame them.',
        antiThesis: 'Avoiding shame is good, but harmful sharing still needs accountability when it affects others.',
      },
      {
        opinion: 'should be compulsory from early childhood, with the state certifying which sources count as legitimate.',
        antiThesis: 'A state that certifies which sources are \'legitimate\' defines orthodoxy by decree, freezing today\'s consensus and branding dissenting-but-correct voices illegitimate.',
      },
    ],
  },
  {
    category: 'Disinformation',
    keyword: 'social media',
    data: [
      {
        opinion: 'should be held responsible when it amplifies disinformation.',
        antiThesis: 'Platforms influence visibility, but users, politicians, media, and foreign actors also spread disinformation.',
      },
      {
        opinion: 'should not profit from viral falsehoods.',
        antiThesis: 'Determining truth at scale is difficult, and mistakes can affect legitimate speech.',
      },
      {
        opinion: 'should reduce the reach of proven disinformation.',
        antiThesis: 'Demotion can become hidden censorship if evidence and criteria are unclear.',
      },
      {
        opinion: 'should label manipulated media clearly.',
        antiThesis: 'Labels may be ignored, distrusted, or interpreted as partisan intervention.',
      },
      {
        opinion: 'should remove coordinated foreign interference networks.',
        antiThesis: 'Platforms must distinguish foreign manipulation from diaspora activism, journalism, or legitimate political speech.',
      },
      {
        opinion: 'should not be forced to become political truth courts.',
        antiThesis: 'Without platform intervention, false claims can spread faster than corrections.',
      },
      {
        opinion: 'should give users more control over ranking and feeds.',
        antiThesis: 'User control can create echo chambers and expose people to more extreme content.',
      },
      {
        opinion: 'should slow virality during emergencies.',
        antiThesis: 'Slowing content can also delay urgent warnings, eyewitness reports, and independent documentation.',
      },
      {
        opinion: 'should be transparent about recommendation systems.',
        antiThesis: 'Full transparency may help bad actors manipulate ranking systems.',
      },
      {
        opinion: 'should prioritise plural debate over maximum engagement.',
        antiThesis: 'Engagement helps platforms identify relevance and sustain services users choose to use.',
      },
      {
        opinion: 'should be nationalised as public utilities so private owners can no longer shape what citizens believe.',
        antiThesis: 'State-owned platforms concentrate the very censorship power the proposal fears; public ownership of the square is the historic precondition for propaganda, not its cure.',
      },
      {
        opinion: 'should be banned outright for everyone under eighteen to halt the industrial manufacture of false belief.',
        antiThesis: 'A blanket ban is unenforceable, pushes minors to fake their age or migrate to worse spaces, and strips teenagers of legitimate news, connection, and political voice.',
      },
    ],
  },
  {
    category: 'Disinformation',
    keyword: 'fact-checking',
    data: [
      {
        opinion: 'should be independent from governments and parties.',
        antiThesis: 'Independence is essential, but fact-checkers still have methods, funders, values, and blind spots.',
      },
      {
        opinion: 'should correct false claims publicly and quickly.',
        antiThesis: 'Speed can produce errors, and corrections often reach fewer people than the original false claim.',
      },
      {
        opinion: 'should distinguish falsehood from uncertainty.',
        antiThesis: 'Uncertainty can be exploited to create doubt where evidence is already strong.',
      },
      {
        opinion: 'should be transparent about evidence and methods.',
        antiThesis: 'Some sources may require protection for privacy, safety, or investigative reasons.',
      },
      {
        opinion: 'should not become ideological policing.',
        antiThesis: 'Some factual questions are politically charged and cannot be separated from public debate.',
      },
      {
        opinion: 'should include corrections when fact-checkers are wrong.',
        antiThesis: 'Visible corrections may be weaponised to dismiss all fact-checking as unreliable.',
      },
      {
        opinion: 'should focus on claims with real-world consequences.',
        antiThesis: 'Smaller falsehoods can accumulate and distort public understanding over time.',
      },
      {
        opinion: 'should support public judgement, not replace it.',
        antiThesis: 'Public judgement still needs reliable institutions to help navigate complex information.',
      },
      {
        opinion: 'should not be treated as neutral by default.',
        antiThesis: 'Excessive suspicion toward fact-checkers can make any shared factual baseline impossible.',
      },
      {
        opinion: 'should be one tool among journalism, education, transparency, and open debate.',
        antiThesis: 'A multi-tool approach is ideal, but coordination between institutions can be slow and inconsistent.',
      },
      {
        opinion: 'should be abolished, because it is merely elite censorship wearing the mask of neutrality.',
        antiThesis: 'Fact-checking removes nothing; it adds information. Abolishing it doesn\'t free speech, it just leaves verified and fabricated claims indistinguishable.',
      },
    ],
  },
  {
    category: 'Gender',
    keyword: 'gender',
    data: [
      {
        opinion: 'should be understood as a social and cultural identity.',
        antiThesis: 'Gender may be shaped by society, but biological sex remains relevant in medicine, sport, and demographic data.',
      },
      {
        opinion: 'should be distinguished from biological sex.',
        antiThesis: 'Distinguishing sex and gender may create confusion in law, education, and public policy if categories are not clearly defined.',
      },
      {
        opinion: 'should be self-defined by each individual.',
        antiThesis: 'Self-definition matters socially, but institutions may still need stable criteria for records, healthcare, prisons, and sport.',
      },
      {
        opinion: 'should be treated as a spectrum.',
        antiThesis: 'A spectrum may reflect identity diversity, but binary categories remain useful in many legal, medical, and statistical contexts.',
      },
      {
        opinion: 'should be less important in how society judges people.',
        antiThesis: 'Reducing gender’s importance may ignore the real discrimination people experience because of gender.',
      },
      {
        opinion: 'should be protected as part of personal freedom.',
        antiThesis: 'Personal freedom must still be balanced with institutional rules, safeguarding, and other people’s rights.',
      },
      {
        opinion: 'should remain connected to biological sex.',
        antiThesis: 'Connecting gender too strictly to sex may exclude people whose identity does not match their assigned sex.',
      },
      {
        opinion: 'should not replace sex in every policy context.',
        antiThesis: 'If gender identity is excluded from policy, transgender and non-binary people may lack protection from discrimination.',
      },
      {
        opinion: 'should be discussed openly without fear.',
        antiThesis: 'Open debate is important, but it should not become harassment or dehumanisation of gender-diverse people.',
      },
      {
        opinion: 'should not be treated as the only basis of identity.',
        antiThesis: 'Gender may not matter equally to everyone, but for many people it is a central part of self-understanding and social recognition.',
      },
      {
        opinion: 'should be abolished entirely as a category, since all gender is an oppressive social invention.',
        antiThesis: 'Abolishing the category erases the vocabulary people use to name real discrimination and identity; you cannot fight sexism with concepts you have declared not to exist.',
      },
      {
        opinion: 'should be treated as a private matter the state records but never promotes or suppresses.',
        antiThesis: 'Strict neutrality is impossible: every form, prison rule, and medical record forces a working definition, so \'neutral\' silently picks a side anyway.',
      },
    ],
  },
  {
    category: 'Gender',
    keyword: 'gender identity',
    data: [
      {
        opinion: 'should be respected as a deeply personal reality.',
        antiThesis: 'Respecting identity does not remove the need to consider evidence, safety, and competing rights in specific contexts.',
      },
      {
        opinion: 'should be legally recognised.',
        antiThesis: 'Legal recognition must be carefully designed so it does not erase sex-based protections or create administrative confusion.',
      },
      {
        opinion: 'should be protected from discrimination.',
        antiThesis: 'Anti-discrimination protections must still distinguish between harassment, disagreement, and legitimate debate.',
      },
      {
        opinion: 'should be private unless a person chooses to share it.',
        antiThesis: 'Privacy matters, but some settings require disclosure for healthcare, safeguarding, or legal classification.',
      },
      {
        opinion: 'should not be imposed through compelled speech.',
        antiThesis: 'Inclusive language can reduce exclusion and does not necessarily force belief if handled proportionately.',
      },
      {
        opinion: 'should be recognised in workplaces and public services.',
        antiThesis: 'Recognition policies can improve inclusion, but they must be clear, practical, and respectful of different beliefs.',
      },
      {
        opinion: 'should not automatically override sex-based categories.',
        antiThesis: 'Strict sex-based categories may exclude transgender people from spaces and services where they need recognition.',
      },
      {
        opinion: 'should be understood as complex rather than fashionable.',
        antiThesis: 'Complexity should not be used to dismiss people’s self-knowledge or delay recognition unnecessarily.',
      },
      {
        opinion: 'should be supported without pressuring anyone into labels.',
        antiThesis: 'Some people need clear labels to understand themselves and find community.',
      },
      {
        opinion: 'should be accepted without requiring medical proof.',
        antiThesis: 'Some institutions may still require evidence or documentation to prevent fraud, inconsistency, or unsafe decisions.',
      },
      {
        opinion: 'should be recognised instantly on self-declaration alone, with no medical or legal gatekeeping whatsoever.',
        antiThesis: 'Zero verification creates obvious openings for bad-faith claims in prisons, sport, and safeguarding, which is why even sympathetic jurisdictions kept some check to preserve credibility.',
      },
      {
        opinion: 'should never be enforced through compelled language, which no citizen can be made to use.',
        antiThesis: 'Using someone\'s name and pronouns is ordinary courtesy enforced in every workplace, not compelled belief; the \'compelled speech\' framing inflates manners into tyranny.',
      },
    ],
  },
  {
    category: 'Gender',
    keyword: 'biological sex',
    data: [
      {
        opinion: 'should remain a relevant category in law and medicine.',
        antiThesis: 'Sex matters in some contexts, but relying only on sex can erase gender identity and lived social reality.',
      },
      {
        opinion: 'should not be treated as the whole of gender.',
        antiThesis: 'If sex is minimised too much, policy may fail to address sex-specific health, safety, and inequality.',
      },
      {
        opinion: 'should be recorded accurately for healthcare.',
        antiThesis: 'Accurate records matter, but healthcare systems should also record gender identity to treat patients respectfully and effectively.',
      },
      {
        opinion: 'should guide some sport categories.',
        antiThesis: 'Sex-based categories may protect fairness, but they can also exclude transgender athletes from meaningful participation.',
      },
      {
        opinion: 'should not be used to deny someone’s dignity.',
        antiThesis: 'Dignity is universal, but dignity does not necessarily settle every legal or policy dispute.',
      },
      {
        opinion: 'should be separated from stereotypes about behaviour.',
        antiThesis: 'Rejecting stereotypes is important, but some sex-based differences may still matter in specific physical or medical contexts.',
      },
      {
        opinion: 'should not define social roles.',
        antiThesis: 'Some people freely choose traditional roles connected to sex or gender and should not be stigmatised for that.',
      },
      {
        opinion: 'should matter in single-sex spaces where safety is at stake.',
        antiThesis: 'Excluding people based on birth sex can harm transgender people who also face safety risks.',
      },
      {
        opinion: 'should not be politicised into a weapon against minorities.',
        antiThesis: 'Concern for sex-based rights is not always anti-minority and may be grounded in legitimate policy questions.',
      },
      {
        opinion: 'should be discussed scientifically and respectfully.',
        antiThesis: 'Scientific discussion must also recognise that science is interpreted within social and ethical contexts.',
      },
      {
        opinion: 'should be the sole legal category, with gender identity given no standing in law or policy at all.',
        antiThesis: 'Stripping gender identity of all legal standing leaves trans people exposed to discrimination with no remedy, and ignores that many states already run mixed criteria workably.',
      },
      {
        opinion: 'should determine every single-sex space, sport, and record with no exceptions.',
        antiThesis: '\'No exceptions\' is brittle: it forces post-operative trans people into spaces where they face real danger and cannot classify intersex people whom pure binaries don\'t fit.',
      },
    ],
  },
  {
    category: 'Gender',
    keyword: 'gender transition',
    data: [
      {
        opinion: 'should be accessible to adults through informed consent.',
        antiThesis: 'Informed consent should still include careful assessment of risks, expectations, and long-term consequences.',
      },
      {
        opinion: 'should be guided by qualified medical professionals.',
        antiThesis: 'Medical guidance matters, but transition also includes social, legal, and personal dimensions beyond medicine.',
      },
      {
        opinion: 'should be approached cautiously for minors.',
        antiThesis: 'Excessive caution can delay support for young people experiencing serious and persistent distress.',
      },
      {
        opinion: 'should not be banned for ideological reasons.',
        antiThesis: 'Public oversight is still necessary when treatment affects minors, public funding, or national medical guidelines.',
      },
      {
        opinion: 'should include psychological support when needed.',
        antiThesis: 'Support should not become unnecessary gatekeeping that blocks access for people who are certain and informed.',
      },
      {
        opinion: 'should be publicly funded when clinically indicated.',
        antiThesis: 'Public funding must compete with other healthcare priorities and should be based on evidence, resources, and need.',
      },
      {
        opinion: 'should not be publicly funded in all cases.',
        antiThesis: 'Excluding transition care from public funding may create inequality and deny care to people who cannot pay privately.',
      },
      {
        opinion: 'should be treated with dignity even when people disagree about policy.',
        antiThesis: 'Dignity must be mutual, but some policy disagreements may still feel harmful to affected people.',
      },
      {
        opinion: 'should include the possibility of regret without making regret the whole story.',
        antiThesis: 'Focusing on regret can be weaponised to delegitimise transition care generally.',
      },
      {
        opinion: 'should be based on evidence, autonomy, and safeguarding together.',
        antiThesis: 'Balancing all three is difficult because different groups prioritise autonomy, protection, and evidence differently.',
      },
      {
        opinion: 'should be freely available to anyone who requests it, fully publicly funded and on demand.',
        antiThesis: 'Pure on-demand provision removes the clinical assessment that guards against misdiagnosis and regret, and \'instantly funded for all\' ignores that every health budget is finite and triaged.',
      },
      {
        opinion: 'should be prohibited for all minors without exception under medical law.',
        antiThesis: 'An absolute ban overrides clinicians and parents in genuine cases of severe, persistent distress; blanket prohibition is itself an ideological stance, not neutral safeguarding.',
      },
    ],
  },
  {
    category: 'Gender',
    keyword: 'education and family',
    data: [
      {
        opinion: 'should teach respect for gender diversity.',
        antiThesis: 'Respect can be taught, but families may object if schools teach contested views as settled truth.',
      },
      {
        opinion: 'should keep gender lessons age-appropriate.',
        antiThesis: '“Age-appropriate” can be used vaguely to avoid teaching inclusion at all.',
      },
      {
        opinion: 'should involve parents in sensitive gender-related policies.',
        antiThesis: 'Parental involvement matters, but outing a child or withholding support may create safety risks in some cases.',
      },
      {
        opinion: 'should challenge restrictive gender stereotypes.',
        antiThesis: 'Challenging stereotypes should not shame children who genuinely prefer traditional roles or expressions.',
      },
      {
        opinion: 'should not pressure children into fixed identities.',
        antiThesis: 'Children should also be allowed to name and explore their identity when they need language for it.',
      },
      {
        opinion: 'should prepare students for a society with different gender identities.',
        antiThesis: 'Schools should prepare students for diversity while respecting pluralism and family beliefs.',
      },
      {
        opinion: 'should focus on biology in science classes and inclusion in civic education.',
        antiThesis: 'Separating biology and inclusion may be too neat, because gender and sex often overlap in real life.',
      },
      {
        opinion: 'should protect students from bullying related to gender.',
        antiThesis: 'Anti-bullying policy must not become a way to punish ordinary confusion, questions, or good-faith disagreement.',
      },
      {
        opinion: 'should allow open discussion without humiliating students.',
        antiThesis: 'Open discussion must be carefully moderated so vulnerable students are not turned into debate topics.',
      },
      {
        opinion: 'should balance inclusion, safeguarding, parental trust, and freedom of belief.',
        antiThesis: 'A balance sounds ideal, but in practice these values often conflict and require difficult institutional choices.',
      },
      {
        opinion: 'should actively teach children the full diversity of gender from their earliest school years.',
        antiThesis: 'Teaching contested adult frameworks to very young children invites legitimate parental objection and confuses identity with curriculum; pluralist societies generally age-gate contested ideology.',
      },
      {
        opinion: 'should leave all teaching about gender entirely to parents, with schools kept strictly neutral.',
        antiThesis: 'Schools cannot stay neutral on bullying and basic respect without abandoning vulnerable pupils; \'leave it to parents\' fails the children whose home is the source of harm.',
      },
    ],
  },
  {
    category: 'Capitalism',
    keyword: 'capitalism',
    data: [
      {
        opinion: 'should be abolished because it turns human life into profit.',
        antiThesis: 'Capitalism should not be abolished because regulated markets have helped generate innovation, growth, and rising living standards.',
      },
      {
        opinion: 'should be replaced by democratic socialism.',
        antiThesis: 'Capitalism can already coexist with democracy, welfare states, public services, and labour protections.',
      },
      {
        opinion: 'should be radically transformed to reduce inequality.',
        antiThesis: 'Radical transformation may create instability; gradual reform may protect people while correcting inequality.',
      },
      {
        opinion: 'should be regulated by strong social protections.',
        antiThesis: 'Excessive regulation can reduce investment, entrepreneurship, and economic flexibility.',
      },
      {
        opinion: 'should be preserved but corrected where markets fail.',
        antiThesis: 'Market failure may be so widespread in housing, healthcare, climate, and labour that correction is not enough.',
      },
      {
        opinion: 'should reward enterprise while protecting the vulnerable.',
        antiThesis: 'Protection for the vulnerable may be insufficient if wealth and power remain structurally unequal.',
      },
      {
        opinion: 'should be defended as the most effective system for prosperity.',
        antiThesis: 'Prosperity under capitalism is unevenly distributed and often depends on unpaid labour, extraction, and ecological harm.',
      },
      {
        opinion: 'should be protected from excessive state intervention.',
        antiThesis: 'Without state intervention, capitalism can produce monopolies, exploitation, pollution, and extreme inequality.',
      },
      {
        opinion: 'should remain open to competition, not corporate capture.',
        antiThesis: 'Competition alone may not prevent inequality or guarantee social rights.',
      },
      {
        opinion: 'should be judged by freedom, prosperity, and opportunity.',
        antiThesis: 'It should also be judged by dignity, equality, environmental limits, and democratic accountability.',
      },
      {
        opinion: 'should be abolished completely and replaced by collective ownership of all means of production.',
        antiThesis: 'Every large-scale attempt to abolish markets has produced shortages and famine—not from malice but because planners cannot price millions of goods without market signals.',
      },
      {
        opinion: 'should be left almost wholly unregulated, since the free market corrects itself better than any state.',
        antiThesis: 'Unregulated markets reliably produce monopolies, pollution, and financial crises; 2008 alone showed \'self-correction\' arriving only after catastrophic public cost.',
      },
      {
        opinion: 'should be defended as the only moral system, because voluntary exchange is the basis of all freedom.',
        antiThesis: 'Exchange isn\'t truly voluntary when one side faces destitution; calling every market outcome \'free\' ignores inherited advantage, monopsony, and the coercion of necessity.',
      },
    ],
  },
  {
    category: 'Capitalism',
    keyword: 'markets',
    data: [
      {
        opinion: 'should be subordinated to social and ecological needs.',
        antiThesis: 'Markets can help coordinate complex needs efficiently and may support ecological innovation when properly priced.',
      },
      {
        opinion: 'should not decide access to healthcare, housing, or education.',
        antiThesis: 'Markets can coexist with universal access if the state guarantees minimum provision and regulates prices.',
      },
      {
        opinion: 'should be regulated when they create inequality.',
        antiThesis: 'Inequality is not always caused by markets; regulation can sometimes create inefficiency or protect insiders.',
      },
      {
        opinion: 'should be used where they work and limited where they harm.',
        antiThesis: 'This sounds balanced, but deciding where markets “harm” is politically contested.',
      },
      {
        opinion: 'should encourage innovation while being accountable to public interest.',
        antiThesis: 'Public-interest accountability can become vague and over-politicise business decisions.',
      },
      {
        opinion: 'should remain competitive rather than dominated by monopolies.',
        antiThesis: 'Some large firms achieve scale that lowers prices, improves logistics, and supports innovation.',
      },
      {
        opinion: 'should be trusted more than governments to allocate resources.',
        antiThesis: 'Markets may allocate efficiently, but they do not automatically protect equality, rights, or the environment.',
      },
      {
        opinion: 'should be free unless there is clear evidence of harm.',
        antiThesis: 'Waiting for clear harm can allow exploitation, monopoly, or ecological damage to become entrenched.',
      },
      {
        opinion: 'should reward risk, skill, and value creation.',
        antiThesis: 'Markets often reward ownership, inherited advantage, and bargaining power more than genuine contribution.',
      },
      {
        opinion: 'should be global because free exchange benefits everyone.',
        antiThesis: 'Global markets can create dependency, labour exploitation, deindustrialisation, and unequal bargaining power.',
      },
      {
        opinion: 'should be retained for everyday goods but removed from housing, health, and education entirely.',
        antiThesis: 'Removing prices entirely from housing, health, and education replaces rationing-by-price with rationing-by-queue and politics, as the waiting lists of fully decommodified systems show.',
      },
      {
        opinion: 'should set every price, including water, medicine, and roads, with no state provision at all.',
        antiThesis: 'Pure market provision of natural monopolies and public goods leads to under-supply and gouging, which is why no developed economy leaves roads, water, or basic medicine entirely to price.',
      },
    ],
  },
  {
    category: 'Capitalism',
    keyword: 'wealth',
    data: [
      {
        opinion: 'should be radically redistributed to correct structural injustice.',
        antiThesis: 'Radical redistribution may reduce incentives to invest, build businesses, or preserve capital.',
      },
      {
        opinion: 'should be capped when it becomes politically dangerous.',
        antiThesis: 'Wealth caps may be hard to enforce and could encourage capital flight or avoidance.',
      },
      {
        opinion: 'should be taxed progressively to fund public goods.',
        antiThesis: 'Progressive taxation is useful, but very high taxes may discourage enterprise or push wealth offshore.',
      },
      {
        opinion: 'should come with stronger civic responsibility.',
        antiThesis: 'Civic responsibility is desirable, but it can become symbolic if not backed by enforceable rules.',
      },
      {
        opinion: 'should be allowed when it is earned fairly and taxed fairly.',
        antiThesis: '“Earned fairly” is difficult to define because wealth often depends on inherited systems and unequal starting points.',
      },
      {
        opinion: 'should reward innovation, discipline, and risk-taking.',
        antiThesis: 'Wealth often rewards ownership and market position more than discipline or social value.',
      },
      {
        opinion: 'should not be treated as immoral by default.',
        antiThesis: 'Extreme wealth can still distort democracy, media, housing, and opportunity even if legally acquired.',
      },
      {
        opinion: 'should be protected as the result of personal freedom and property rights.',
        antiThesis: 'Property rights should not protect extreme accumulation when others lack basic necessities.',
      },
      {
        opinion: 'should be inherited without excessive state interference.',
        antiThesis: 'Large inheritances reproduce inequality and weaken meritocracy.',
      },
      {
        opinion: 'should be created before it is redistributed.',
        antiThesis: 'Wealth creation without redistribution can produce growth alongside poverty, exclusion, and democratic imbalance.',
      },
      {
        opinion: 'should be capped by law, with everything above a fixed ceiling taken entirely into common ownership.',
        antiThesis: 'Hard ceilings trigger capital flight and valuation games rather than redistribution; since most wealth is illiquid ownership, seizing \'everything above\' a line means nationalising firms and the jobs inside them.',
      },
      {
        opinion: 'should be entirely untaxed, because taxation of earned property is a form of confiscation.',
        antiThesis: 'Zero capital tax shifts the whole burden onto wages and consumption, worsening inequality and starving the courts and registries that make property ownable in the first place.',
      },
    ],
  },
  {
    category: 'Capitalism',
    keyword: 'property',
    data: [
      {
        opinion: 'should serve human need before private profit.',
        antiThesis: 'Private property can support autonomy, security, investment, and long-term stewardship.',
      },
      {
        opinion: 'should not allow people to profit from homelessness.',
        antiThesis: 'Rental and property markets can provide housing supply if regulated and taxed properly.',
      },
      {
        opinion: 'should be limited when it harms collective survival.',
        antiThesis: 'Broad limits on property can threaten individual freedom and legal stability.',
      },
      {
        opinion: 'should be regulated to prevent speculation and rent extraction.',
        antiThesis: 'Over-regulation can reduce housing supply and discourage renovation or construction.',
      },
      {
        opinion: 'should be balanced with the right to housing.',
        antiThesis: 'If the right to housing overrides property too broadly, ownership becomes legally uncertain.',
      },
      {
        opinion: 'should be protected but taxed when it generates passive wealth.',
        antiThesis: 'Taxing passive wealth may punish savers, retirees, or small landlords as well as large asset owners.',
      },
      {
        opinion: 'should be protected as a foundation of personal independence.',
        antiThesis: 'Property can create independence for owners while creating dependency for renters and workers.',
      },
      {
        opinion: 'should be strongly defended against state overreach.',
        antiThesis: 'Without state intervention, property ownership can become concentrated and socially harmful.',
      },
      {
        opinion: 'should allow people to build wealth across generations.',
        antiThesis: 'Intergenerational wealth can entrench class advantage and reduce social mobility.',
      },
      {
        opinion: 'should be governed by clear rules rather than moral suspicion.',
        antiThesis: 'Clear rules matter, but morally neutral property law can still protect unjust outcomes.',
      },
      {
        opinion: 'should be limited to personal possessions, with all productive property held in common.',
        antiThesis: 'Without private productive property no one bears the cost of misallocation, so capital is squandered; the personal/productive line also collapses, since homes, tools, and land are both.',
      },
      {
        opinion: 'should be treated as an absolute right that no government may infringe for any social purpose.',
        antiThesis: 'Absolute property would void zoning, environmental law, and the eminent domain needed for roads and hospitals; every functioning system limits property so it can coexist with others\' rights.',
      },
    ],
  },
  {
    category: 'Capitalism',
    keyword: 'labour',
    data: [
      {
        opinion: 'should own a fair share of what it produces.',
        antiThesis: 'Production also depends on capital, management, technology, risk, and entrepreneurship.',
      },
      {
        opinion: 'should have democratic power inside the workplace.',
        antiThesis: 'Workplace democracy may slow decisions and reduce managerial accountability.',
      },
      {
        opinion: 'should be protected from poverty wages and insecure contracts.',
        antiThesis: 'Strong protections are necessary, but they may increase costs for small businesses and reduce hiring flexibility.',
      },
      {
        opinion: 'should be valued beyond productivity.',
        antiThesis: 'Productivity remains important because it supports wages, public revenue, and organisational survival.',
      },
      {
        opinion: 'should benefit directly from automation and productivity gains.',
        antiThesis: 'Firms that invest in automation also need returns to justify risk, capital expenditure, and innovation.',
      },
      {
        opinion: 'should be free to negotiate without excessive union or state control.',
        antiThesis: 'Individual negotiation is often unequal because employers usually have more power than workers.',
      },
      {
        opinion: 'should be rewarded according to skill, effort, and market demand.',
        antiThesis: 'Market demand does not always reflect social value, especially in care, education, and essential work.',
      },
      {
        opinion: 'should remain flexible so businesses can adapt and grow.',
        antiThesis: 'Flexibility can become precarity when workers lack security, bargaining power, or benefits.',
      },
      {
        opinion: 'should not be overregulated because jobs depend on business survival.',
        antiThesis: 'Under-regulation can produce exploitation, unsafe conditions, and poverty wages.',
      },
      {
        opinion: 'should allow entrepreneurship, self-employment, and risk-taking to flourish.',
        antiThesis: 'Entrepreneurship should flourish, but not by shifting risk onto workers without protection.',
      },
      {
        opinion: 'should govern every enterprise directly through worker councils, ending the employer class altogether.',
        antiThesis: 'Worker self-management scales poorly: councils struggle to raise capital, bear risk, and decide quickly, which is why even socialist economies reintroduced managers.',
      },
    ],
  },
  {
    category: 'Censorship',
    keyword: 'censorship',
    data: [
      {
        opinion: 'should be abolished in democratic societies.',
        antiThesis: 'Some limits may be necessary to prevent threats, incitement, harassment, or direct harm.',
      },
      {
        opinion: 'should be resisted even when speech is offensive.',
        antiThesis: 'Offensive speech may still contribute to hostile environments or targeted intimidation.',
      },
      {
        opinion: 'should never protect people from discomfort alone.',
        antiThesis: 'Discomfort is different from harm, but repeated abuse can silence vulnerable groups.',
      },
      {
        opinion: 'should be limited to the narrowest possible cases.',
        antiThesis: 'Narrow limits may be insufficient against coordinated disinformation, hate campaigns, or extremist recruitment.',
      },
      {
        opinion: 'should be transparent, lawful, and open to appeal.',
        antiThesis: 'Some urgent cases may require fast action before full review is possible.',
      },
      {
        opinion: 'should protect democratic debate from manipulation.',
        antiThesis: 'Anti-manipulation rules can become tools for suppressing unpopular views.',
      },
      {
        opinion: 'should be used carefully against incitement and targeted abuse.',
        antiThesis: 'Even careful restrictions can chill legitimate political speech.',
      },
      {
        opinion: 'should protect children from age-inappropriate material.',
        antiThesis: 'Child protection can be used too broadly to restrict art, education, or minority expression.',
      },
      {
        opinion: 'should restrict speech that directly endangers public safety.',
        antiThesis: '“Public safety” can be stretched to justify authoritarian control.',
      },
      {
        opinion: 'should be allowed during emergencies only under strict oversight.',
        antiThesis: 'Emergency powers often expand beyond their original purpose and become permanent.',
      },
      {
        opinion: 'should be expanded by the state to remove all hateful and extremist material from public life.',
        antiThesis: '\'All hateful material\' has no stable definition, so the power expands to whatever the government dislikes; the tool built against extremists is what regimes use against reformers.',
      },
      {
        opinion: 'should be permitted narrowly, only against direct incitement, and reviewed by independent courts.',
        antiThesis: 'Even narrow incitement rules struggle in real time—courts are slow—so a standard this tight may leave genuinely coordinated harm unaddressed until the damage is done.',
      },
      {
        opinion: 'should be entirely abolished, with no speech of any kind ever removable by state or platform.',
        antiThesis: 'No legal system treats fraud, true threats, and child-abuse imagery as protected; \'nothing removable\' would shield the gravest crimes under a free-speech banner.',
      },
    ],
  },
  {
    category: 'Censorship',
    keyword: 'free speech',
    data: [
      {
        opinion: 'should protect unpopular and offensive opinions.',
        antiThesis: 'Protection should not extend to threats, harassment, or direct incitement to violence.',
      },
      {
        opinion: 'should include the right to criticise governments and institutions.',
        antiThesis: 'Criticism is essential, but false accusations may still trigger defamation or legal consequences.',
      },
      {
        opinion: 'should not depend on majority approval.',
        antiThesis: 'Democratic communities may still set boundaries against abuse or intimidation.',
      },
      {
        opinion: 'should protect satire, parody, and provocation.',
        antiThesis: 'Satire can still become defamatory, cruel, or deliberately misleading.',
      },
      {
        opinion: 'should protect the right to make mistakes publicly.',
        antiThesis: 'Repeated misinformation can cause harm, especially in health, elections, or public safety.',
      },
      {
        opinion: 'should be balanced with dignity and safety.',
        antiThesis: 'Vague appeals to dignity can justify suppressing legitimate disagreement.',
      },
      {
        opinion: 'should not include the right to harass.',
        antiThesis: 'Harassment must be defined carefully so robust criticism is not punished.',
      },
      {
        opinion: 'should be limited when it becomes targeted dehumanisation.',
        antiThesis: 'The boundary between harsh political speech and dehumanisation can be contested.',
      },
      {
        opinion: 'should not protect coordinated intimidation campaigns.',
        antiThesis: 'Coordination is hard to prove, and some protest movements are also coordinated.',
      },
      {
        opinion: 'should remain accountable to truth during crises.',
        antiThesis: 'Truth can be uncertain during crises, and premature enforcement may silence useful dissent.',
      },
      {
        opinion: 'should protect every utterance absolutely, including the most offensive and hateful expression.',
        antiThesis: 'Absolute protection ignores that targeted harassment silences its victims, shrinking the total amount of speech rather than expanding it.',
      },
    ],
  },
  {
    category: 'Censorship',
    keyword: 'online platforms',
    data: [
      {
        opinion: 'should not decide the limits of public debate alone.',
        antiThesis: 'Platforms still need moderation rules because they host massive amounts of harmful or illegal content.',
      },
      {
        opinion: 'should be transparent about moderation decisions.',
        antiThesis: 'Full transparency may help bad actors evade enforcement.',
      },
      {
        opinion: 'should give users appeal rights after content removal.',
        antiThesis: 'Appeals can be slow and expensive at platform scale.',
      },
      {
        opinion: 'should protect political dissent from arbitrary removal.',
        antiThesis: 'Political dissent can be used as cover for coordinated manipulation or incitement.',
      },
      {
        opinion: 'should reduce the reach of proven disinformation.',
        antiThesis: 'Demotion can look like hidden censorship if criteria are unclear.',
      },
      {
        opinion: 'should remove threats, doxxing, and targeted harassment quickly.',
        antiThesis: 'Fast removal can increase mistakes and suppress lawful speech.',
      },
      {
        opinion: 'should label misleading content instead of deleting it.',
        antiThesis: 'Labels may be ignored, distrusted, or used to amplify false claims.',
      },
      {
        opinion: 'should preserve public archives of major moderation decisions.',
        antiThesis: 'Archives may re-amplify harmful, illegal, or traumatic material.',
      },
      {
        opinion: 'should moderate content according to human rights principles.',
        antiThesis: 'Human rights principles can be interpreted differently across cultures and legal systems.',
      },
      {
        opinion: 'should remove extremist recruitment content.',
        antiThesis: 'Over-removal can push groups underground and affect research, journalism, or counter-speech.',
      },
      {
        opinion: 'should be legally forced to delete harmful content within minutes or face criminal penalties.',
        antiThesis: 'Minute-level deletion mandates force platforms to over-remove everything borderline to avoid prison, sweeping up satire, journalism, and dissent as collateral.',
      },
      {
        opinion: 'should be barred by law from removing any lawful speech, becoming pure neutral conduits.',
        antiThesis: 'Forcing platforms to host all lawful speech makes them unusable—spam, gore, and harassment are often lawful—and overrides the platform\'s own expression rights.',
      },
    ],
  },
  {
    category: 'Censorship',
    keyword: 'governments',
    data: [
      {
        opinion: 'should never criminalise peaceful dissent.',
        antiThesis: 'Governments may still restrict actions or speech that directly threaten public safety.',
      },
      {
        opinion: 'should not control public opinion.',
        antiThesis: 'Governments still need to counter fraud, threats, foreign interference, and incitement.',
      },
      {
        opinion: 'should not define misinformation without independent oversight.',
        antiThesis: 'During emergencies, public authorities may need to respond quickly to dangerous false claims.',
      },
      {
        opinion: 'should protect whistleblowers and investigative journalists.',
        antiThesis: 'Leaks may endanger privacy, national security, or active investigations.',
      },
      {
        opinion: 'should not ban books for ideological reasons.',
        antiThesis: 'Schools and libraries may still make age-appropriate selection decisions.',
      },
      {
        opinion: 'should restrict speech that incites violence.',
        antiThesis: 'Incitement standards must remain narrow to avoid suppressing radical but lawful politics.',
      },
      {
        opinion: 'should regulate harmful misinformation during elections.',
        antiThesis: 'Election misinformation rules can be weaponised by incumbents against opponents.',
      },
      {
        opinion: 'should require due process in censorship decisions.',
        antiThesis: 'Due process can be slow when harm is immediate or viral.',
      },
      {
        opinion: 'should defend minority speech rights.',
        antiThesis: 'Minority speech rights do not protect threats, harassment, or organised intimidation.',
      },
      {
        opinion: 'should intervene when speech creates clear and imminent danger.',
        antiThesis: '“Clear danger” must be defined strictly or it becomes a tool of repression.',
      },
      {
        opinion: 'should hold direct power to shut down any outlet that threatens social cohesion.',
        antiThesis: '\'Social cohesion\' is the classic pretext of authoritarian press law; granting that power makes criticism of the government itself a punishable threat to order.',
      },
      {
        opinion: 'should be constitutionally forbidden from regulating speech under any circumstance.',
        antiThesis: 'Absolute bars can\'t handle perjury, fraud, true threats, or incitement; every speech-protective constitution carves these out for good reason.',
      },
    ],
  },
  {
    category: 'Censorship',
    keyword: 'media',
    data: [
      {
        opinion: 'should publish controversial ideas with context.',
        antiThesis: 'Some ideas may be too harmful, manipulative, or false to responsibly amplify.',
      },
      {
        opinion: 'should not confuse criticism with censorship.',
        antiThesis: 'Coordinated criticism can still function as informal censorship by making people afraid to speak.',
      },
      {
        opinion: 'should expose state and corporate censorship.',
        antiThesis: 'Media outlets also exercise editorial judgement and cannot publish every view.',
      },
      {
        opinion: 'should avoid amplifying hate for attention.',
        antiThesis: 'Avoiding hateful content can become avoidance of difficult but necessary debate.',
      },
      {
        opinion: 'should distinguish disagreement from danger.',
        antiThesis: 'Some rhetoric can create conditions for harassment or violence even if framed as disagreement.',
      },
      {
        opinion: 'should not let advertisers decide what can be said.',
        antiThesis: 'Media organisations need financial sustainability and may reasonably protect brand safety.',
      },
      {
        opinion: 'should correct false claims without silencing debate.',
        antiThesis: 'Corrections alone may not stop false claims from spreading faster than truth.',
      },
      {
        opinion: 'should protect journalists from political intimidation.',
        antiThesis: 'Journalists still need accountability for errors, defamation, and unethical reporting.',
      },
      {
        opinion: 'should make room for complexity instead of moral panic.',
        antiThesis: 'Excessive complexity can obscure urgent harms that require clear public response.',
      },
      {
        opinion: 'should refuse to platform direct calls for violence.',
        antiThesis: 'Refusal is justified, but standards must be clear so controversial advocacy is not misclassified as violence.',
      },
      {
        opinion: 'should be licensed by the state so that only responsible outlets may broadcast to the public.',
        antiThesis: 'Licensing the press puts the incumbent in charge of who may criticise it; \'responsible\' quickly becomes a synonym for \'compliant.\'',
      },
      {
        opinion: 'should be wholly deregulated, with no public broadcaster and no content rules at all.',
        antiThesis: 'Pure deregulation tends toward consolidation and a race to the bottom; public broadcasters exist precisely because markets under-supply impartial news and minority programming.',
      },
    ],
  },
  {
    category: 'Copyright',
    keyword: 'copyright',
    data: [
      {
        opinion: 'should strongly protect creators from unauthorised use.',
        antiThesis: 'Strong protection can restrict education, remix, access, and cultural circulation.',
      },
      {
        opinion: 'should protect investment in books, music, film, games, and software.',
        antiThesis: 'Protecting investment can give corporations too much control over culture.',
      },
      {
        opinion: 'should last long enough to reward creators and their families.',
        antiThesis: 'Long copyright terms delay public access and can lock culture away for generations.',
      },
      {
        opinion: 'should be shorter so culture enters the public domain sooner.',
        antiThesis: 'Shorter terms may reduce incentives for publishers, studios, and estates to invest in long-term preservation and distribution.',
      },
      {
        opinion: 'should balance creator ownership with public access.',
        antiThesis: 'Balance is desirable, but creators and users often disagree on where the boundary should be.',
      },
      {
        opinion: 'should be simple enough for ordinary people to understand.',
        antiThesis: 'Simplicity is useful, but copyright must cover complex fields such as film, software, music, education, licensing, and international rights.',
      },
      {
        opinion: 'should not criminalise everyday cultural sharing.',
        antiThesis: 'Everyday sharing can still harm creators when it replaces purchases, subscriptions, or licences.',
      },
      {
        opinion: 'should treat piracy as theft of creative labour.',
        antiThesis: 'Piracy is harmful, but treating all infringement like theft can over-punish minor, educational, or non-commercial uses.',
      },
      {
        opinion: 'should protect moral rights such as attribution and integrity.',
        antiThesis: 'Strong moral rights may limit adaptation, parody, remix, and reinterpretation.',
      },
      {
        opinion: 'should serve culture before it serves profit.',
        antiThesis: 'Profit can also serve culture by funding new work, distribution, restoration, and professional creative industries.',
      },
      {
        opinion: 'should be abolished entirely so that all knowledge and culture become free common property.',
        antiThesis: 'Remove copyright and you remove the income that funds expensive creative work; the predictable result is more cheap derivative content and far less film, fiction, and investigative journalism.',
      },
      {
        opinion: 'should last in perpetuity, passing to heirs forever as ordinary inheritable property.',
        antiThesis: 'Perpetual copyright locks culture away indefinitely, blocking scholarship, adaptation, and reuse long after any incentive purpose is served; the public domain exists because ideas must eventually circulate.',
      },
    ],
  },
  {
    category: 'Copyright',
    keyword: 'creators',
    data: [
      {
        opinion: 'should own the work they produce.',
        antiThesis: 'Many works are commissioned, collaborative, or employer-funded, so ownership may reasonably belong to clients, studios, or publishers.',
      },
      {
        opinion: 'should be paid when their work generates commercial value.',
        antiThesis: 'Tracking every commercial use can be impractical and may restrict innovation, commentary, and small-scale reuse.',
      },
      {
        opinion: 'should have stronger bargaining power against platforms.',
        antiThesis: 'Platforms also provide discovery, tools, infrastructure, payment systems, and access to global audiences.',
      },
      {
        opinion: 'should be able to sell or license their rights freely.',
        antiThesis: 'Free licensing can become exploitative when creators have weak bargaining power.',
      },
      {
        opinion: 'should not lose rights through unfair contracts.',
        antiThesis: 'Rights transfers can provide upfront payment, distribution, marketing, and production support.',
      },
      {
        opinion: 'should not control every future interpretation of their work.',
        antiThesis: 'Too little control may allow commercial exploitation, distortion, or reputational harm.',
      },
      {
        opinion: 'should be credited whenever their work is reused.',
        antiThesis: 'Attribution is important, but it can be difficult in collective, automated, archival, or highly transformed uses.',
      },
      {
        opinion: 'should accept that influence and imitation are part of culture.',
        antiThesis: 'Influence is normal, but close imitation can become plagiarism or unfair competition.',
      },
      {
        opinion: 'should have legal tools against plagiarism and piracy.',
        antiThesis: 'Enforcement tools can be abused to silence criticism, parody, or lawful fair use.',
      },
      {
        opinion: 'should not be forced to give work away for visibility.',
        antiThesis: 'Free access can also help unknown creators build audiences, reputation, and future income.',
      },
      {
        opinion: 'should be funded by the public so they no longer depend on selling their work as property.',
        antiThesis: 'Public funding of all creators makes art dependent on committee taste, replacing market gatekeepers with political ones, and cannot scale to millions of independent makers.',
      },
      {
        opinion: 'should hold total control over every copy, remix, and quotation of their work without exception.',
        antiThesis: 'Absolute control would criminalise quotation, criticism, parody, and search itself; culture is cumulative and cannot function if every reference needs permission.',
      },
    ],
  },
  {
    category: 'Copyright',
    keyword: 'public domain',
    data: [
      {
        opinion: 'should be expanded as quickly as possible.',
        antiThesis: 'Expanding it too quickly may weaken incentives for professional creative production.',
      },
      {
        opinion: 'should be treated as shared cultural inheritance.',
        antiThesis: 'Shared inheritance matters, but creators deserve temporary exclusivity before works become common property.',
      },
      {
        opinion: 'should be protected from private re-ownership.',
        antiThesis: 'New editions, restorations, translations, and adaptations may deserve their own limited protection.',
      },
      {
        opinion: 'should not be delayed by repeated term extensions.',
        antiThesis: 'Term extensions may protect families, estates, and commercially valuable works across international markets.',
      },
      {
        opinion: 'should be digitised and made widely accessible.',
        antiThesis: 'Digitisation requires funding, rights clearance, preservation work, and technical infrastructure.',
      },
      {
        opinion: 'should not mean creators are forgotten.',
        antiThesis: 'Once a work is public, some uses may be anonymous, transformed, or detached from original authorship.',
      },
      {
        opinion: 'should allow remix, adaptation, and reinterpretation.',
        antiThesis: 'Adaptations may distort the original or compete with authorised versions while the work is still culturally sensitive.',
      },
      {
        opinion: 'should be easier to identify legally.',
        antiThesis: 'Copyright status is complex across countries, translations, editions, co-authors, and unpublished works.',
      },
      {
        opinion: 'should be accessible without paywalls.',
        antiThesis: 'Archives and publishers may need fees to fund scanning, hosting, restoration, and curation.',
      },
      {
        opinion: 'should coexist with strong creator rights.',
        antiThesis: 'In practice, stronger rights often delay or restrict the growth of the public domain.',
      },
      {
        opinion: 'should absorb every work immediately on publication, ending private ownership of ideas.',
        antiThesis: 'Instant public domain lets anyone monetise a work the moment it appears, so the original maker becomes the only person who can\'t profit from their own creation.',
      },
    ],
  },
  {
    category: 'Copyright',
    keyword: 'fair use',
    data: [
      {
        opinion: 'should protect criticism, commentary, and education.',
        antiThesis: 'Broad fair use can create uncertainty for creators whose work is reused without permission.',
      },
      {
        opinion: 'should allow transformative remix culture.',
        antiThesis: 'The line between transformation and copying can be unclear and commercially contested.',
      },
      {
        opinion: 'should protect parody and satire.',
        antiThesis: 'Parody can still harm reputation, confuse audiences, or become commercial exploitation.',
      },
      {
        opinion: 'should allow teachers and students to use copyrighted material.',
        antiThesis: 'Unlimited educational copying could undermine textbooks, academic publishing, and educational creators.',
      },
      {
        opinion: 'should protect research and scholarship.',
        antiThesis: 'Publishers and rights holders argue that licensing funds editing, peer review, distribution, and archives.',
      },
      {
        opinion: 'should be narrow to prevent unpaid exploitation.',
        antiThesis: 'Narrow fair use may silence criticism, research, accessibility, and cultural participation.',
      },
      {
        opinion: 'should be clearer and less intimidating.',
        antiThesis: 'Flexible standards allow courts to adapt to new technologies and unforeseen uses.',
      },
      {
        opinion: 'should not be used as an excuse for commercial copying.',
        antiThesis: 'Some commercial uses are transformative, critical, or socially valuable.',
      },
      {
        opinion: 'should protect non-commercial creativity.',
        antiThesis: 'Non-commercial use can still spread widely and compete with the original market.',
      },
      {
        opinion: 'should prevent copyright from becoming censorship.',
        antiThesis: 'Copyright enforcement is still necessary to stop unauthorised copying and commercial misuse.',
      },
      {
        opinion: 'should be expanded dramatically so almost any non-commercial reuse is automatically lawful.',
        antiThesis: 'Sweeping \'non-commercial\' exemptions still gut creator income, since unpaid reposting is exactly what destroys paid demand for music, images, and writing.',
      },
      {
        opinion: 'should be abolished, because every use of a work without payment deprives its owner.',
        antiThesis: 'Abolishing fair use would make news reporting, education, and criticism legally impossible; not every use is a lost sale, and many expand a work\'s value.',
      },
    ],
  },
  {
    category: 'Copyright',
    keyword: 'digital platforms',
    data: [
      {
        opinion: 'should pay creators when their work drives engagement.',
        antiThesis: 'Measuring which works create engagement is complex and can be manipulated.',
      },
      {
        opinion: 'should remove pirated material quickly.',
        antiThesis: 'Fast takedowns can remove lawful criticism, parody, education, or fair use by mistake.',
      },
      {
        opinion: 'should protect users from false copyright claims.',
        antiThesis: 'Platforms also need fast enforcement systems to respond to real infringement at scale.',
      },
      {
        opinion: 'should make licensing simple and affordable.',
        antiThesis: 'Licensing prices must still reflect labour, rights, demand, and commercial value.',
      },
      {
        opinion: 'should not let algorithms erase lawful creativity.',
        antiThesis: 'Automated enforcement is imperfect, but manual review alone is impossible at large scale.',
      },
      {
        opinion: 'should give rightsholders stronger enforcement tools.',
        antiThesis: 'Stronger tools may be abused by large companies against small creators and critics.',
      },
      {
        opinion: 'should not profit from copyrighted work without consent.',
        antiThesis: 'Platforms may host user-generated content at scale and cannot always pre-clear every upload.',
      },
      {
        opinion: 'should support open sharing where creators choose it.',
        antiThesis: 'Open sharing can reduce income if audiences expect all creative work to be free.',
      },
      {
        opinion: 'should be transparent about copyright moderation.',
        antiThesis: 'Full transparency may help infringers evade detection systems.',
      },
      {
        opinion: 'should balance creator payment, user rights, and cultural access.',
        antiThesis: 'Balancing all three is difficult because each side often defines fairness differently.',
      },
      {
        opinion: 'should be barred from monetising any creative work without collective licensing controlled by artists.',
        antiThesis: 'Mandatory collective licensing entrenches large rights bodies and shuts out non-members, typically paying the famous well and the obscure almost nothing.',
      },
      {
        opinion: 'should be left entirely free to license content by private contract with no statutory limits.',
        antiThesis: 'Without statutory floors, dominant platforms dictate take-it-or-leave-it terms to creators with no bargaining power—which is exactly why most jurisdictions impose minimum protections.',
      },
    ],
  },
  {
    category: 'Copyright',
    keyword: 'intellectual property',
    data: [
      {
        opinion: 'should be protected as strongly as physical property, with infringement treated as theft.',
        antiThesis: 'Copying isn\'t theft, because the owner still has their copy; treating non-rivalrous ideas like physical goods produces absurd over-enforcement and chills legitimate use.',
      },
    ],
  },
  {
    category: 'Sustainability',
    keyword: 'sustainability',
    data: [
      {
        opinion: 'should be treated as a condition for survival.',
        antiThesis: 'Survival framing can feel apocalyptic and may make sustainability less accessible to ordinary people.',
      },
      {
        opinion: 'should guide every major political and economic decision.',
        antiThesis: 'Sustainability matters, but policy must also consider jobs, affordability, security, health, and social stability.',
      },
      {
        opinion: 'should be built into systems rather than sold as personal virtue.',
        antiThesis: 'Systemic change is essential, but individual behaviour still shapes demand, culture, and political pressure.',
      },
      {
        opinion: 'should include social justice as well as environmental protection.',
        antiThesis: 'Expanding sustainability too widely can make it harder to define, measure, and implement.',
      },
      {
        opinion: 'should challenge endless economic growth.',
        antiThesis: 'Economic growth can fund clean technology, public services, poverty reduction, and adaptation.',
      },
      {
        opinion: 'should be pursued through innovation and better technology.',
        antiThesis: 'Technology alone may not solve overconsumption, inequality, or ecological destruction.',
      },
      {
        opinion: 'should be compatible with prosperity and development.',
        antiThesis: 'Prosperity without ecological limits can reproduce the same environmental damage under greener branding.',
      },
      {
        opinion: 'should rely on incentives rather than moral guilt.',
        antiThesis: 'Incentives help, but markets may not act fast enough without regulation and public pressure.',
      },
      {
        opinion: 'should be practical, affordable, and scalable.',
        antiThesis: 'Practicality matters, but incrementalism may be too slow for ecological crises.',
      },
      {
        opinion: 'should protect future generations without ignoring present needs.',
        antiThesis: 'Present needs are urgent, but using them to delay action can transfer greater costs to the future.',
      },
      {
        opinion: 'should override the economy entirely, halting all growth until the planet is stabilised.',
        antiThesis: 'A deliberate halt to growth would collapse the tax base and investment the clean-energy transition itself requires, and degrowth tends to hit the poor first and hardest.',
      },
      {
        opinion: 'should be pursued only through innovation and markets, never through restrictions on consumers.',
        antiThesis: 'Markets have never priced externalities without regulation, and relying on innovation alone has so far failed to cut absolute emissions fast enough to meet any target.',
      },
    ],
  },
  {
    category: 'Sustainability',
    keyword: 'climate action',
    data: [
      {
        opinion: 'should be treated as an emergency.',
        antiThesis: 'Emergency politics can justify rushed policies without enough democratic debate or social planning.',
      },
      {
        opinion: 'should be led by the countries that polluted the most.',
        antiThesis: 'Historical responsibility matters, but all major current emitters must participate for action to work.',
      },
      {
        opinion: 'should phase out fossil fuels as quickly as possible.',
        antiThesis: 'Rapid phase-out can cause energy shocks, job losses, and affordability problems if poorly managed.',
      },
      {
        opinion: 'should use carbon pricing to make pollution expensive.',
        antiThesis: 'Carbon pricing can be regressive if households and poorer regions are not protected.',
      },
      {
        opinion: 'should invest heavily in renewable energy and public infrastructure.',
        antiThesis: 'Public investment is necessary, but it can be expensive, inefficient, or politically captured if badly managed.',
      },
      {
        opinion: 'should include nuclear energy where it reduces emissions.',
        antiThesis: 'Nuclear can reduce emissions, but it raises concerns about cost, waste, safety, and construction time.',
      },
      {
        opinion: 'should protect workers and communities during transition.',
        antiThesis: 'Transition support is fair, but protecting every existing job can slow necessary structural change.',
      },
      {
        opinion: 'should prioritise adaptation as well as emissions cuts.',
        antiThesis: 'Adaptation is necessary, but overemphasising it may weaken urgency around reducing emissions.',
      },
      {
        opinion: 'should be globally coordinated rather than nationally competitive.',
        antiThesis: 'Global coordination is ideal, but countries still face different capacities, interests, and responsibilities.',
      },
      {
        opinion: 'should be judged by measurable emissions reductions.',
        antiThesis: 'Metrics are important, but some long-term investments take time before emissions impact appears.',
      },
      {
        opinion: 'should include banning private cars, flights, and meat outright within a decade.',
        antiThesis: 'Outright bans on this timetable would strand rural and poorer people who lack alternatives, triggering the backlash that has repeatedly reversed climate policy.',
      },
      {
        opinion: 'should be abandoned where it raises costs, since prosperity matters more than distant risk.',
        antiThesis: 'Treating climate as a \'distant risk\' ignores that its costs—wildfires, floods, crop failure—are already arriving and are far cheaper to prevent than to repair.',
      },
    ],
  },
  {
    category: 'Sustainability',
    keyword: 'consumption',
    data: [
      {
        opinion: 'should be reduced in wealthy societies.',
        antiThesis: 'Consumption also supports jobs, cultural life, comfort, and economic activity.',
      },
      {
        opinion: 'should move from ownership to repair, reuse, and sharing.',
        antiThesis: 'Ownership can provide autonomy, security, hygiene, and long-term value.',
      },
      {
        opinion: 'should stop rewarding disposable products.',
        antiThesis: 'Some disposable products are necessary for medicine, hygiene, safety, or emergencies.',
      },
      {
        opinion: 'should make environmental costs visible to consumers.',
        antiThesis: 'Calculating true environmental costs across supply chains can be complex and contested.',
      },
      {
        opinion: 'should be shaped by need rather than endless desire.',
        antiThesis: 'Desire also drives creativity, identity, pleasure, and cultural expression.',
      },
      {
        opinion: 'should be improved through better product standards.',
        antiThesis: 'Standards can raise quality, but they may also increase prices and burden small producers.',
      },
      {
        opinion: 'should remain a matter of personal freedom.',
        antiThesis: 'Personal freedom can create collective harm when individual choices produce pollution and waste at scale.',
      },
      {
        opinion: 'should be guided by information, not shame.',
        antiThesis: 'Information is useful, but it may be insufficient when prices and systems reward unsustainable choices.',
      },
      {
        opinion: 'should support local and ethical production where possible.',
        antiThesis: 'Local is not always more sustainable, and ethical goods can be less affordable.',
      },
      {
        opinion: 'should be made more sustainable through innovation, not deprivation.',
        antiThesis: 'Innovation helps, but efficiency gains can be cancelled out by rising total consumption.',
      },
      {
        opinion: 'should be rationed by law, with strict personal carbon allowances enforced for everyone.',
        antiThesis: 'Personal carbon rationing demands intrusive tracking of every purchase and trip, is regressive without vast administration, and has never survived democratic consent.',
      },
      {
        opinion: 'should remain entirely a matter of personal choice, with no government interference.',
        antiThesis: 'Individual choice can\'t solve a collective-action problem where one person\'s restraint is meaningless unless coordinated—the textbook case for policy over preference.',
      },
    ],
  },
  {
    category: 'Sustainability',
    keyword: 'corporations',
    data: [
      {
        opinion: 'should prove sustainability claims before advertising them.',
        antiThesis: 'Strong proof protects consumers, but overly strict requirements may discourage companies from communicating genuine progress.',
      },
      {
        opinion: 'should be legally responsible for supply-chain harm.',
        antiThesis: 'Companies may have limited control over distant suppliers, subcontractors, and informal labour networks.',
      },
      {
        opinion: 'should pay for the waste and pollution they create.',
        antiThesis: 'Costs may be passed on to consumers unless policy is carefully designed.',
      },
      {
        opinion: 'should design products to last longer and be repairable.',
        antiThesis: 'Longer-lasting products can be more expensive and may slow adoption of safer or more efficient technologies.',
      },
      {
        opinion: 'should prioritise ecological limits over shareholder value.',
        antiThesis: 'Companies also have obligations to employees, investors, customers, and financial survival.',
      },
      {
        opinion: 'should be rewarded for genuine sustainable innovation.',
        antiThesis: 'Rewards can encourage progress, but they may also become subsidies for companies that would have acted anyway.',
      },
      {
        opinion: 'should disclose environmental impact in standardised ways.',
        antiThesis: 'Disclosure can be costly, uncertain, and difficult for small businesses.',
      },
      {
        opinion: 'should compete to make sustainable products cheaper.',
        antiThesis: 'Competition can reduce prices, but cheap “green” products may still encourage overconsumption.',
      },
      {
        opinion: 'should not be demonised when they improve environmental performance.',
        antiThesis: 'Incremental improvements can be used to distract from deeper harms or avoid stronger regulation.',
      },
      {
        opinion: 'should be free to innovate within clear environmental rules.',
        antiThesis: 'Clear rules help, but if rules are too weak, innovation may still prioritise profit over ecological protection.',
      },
      {
        opinion: 'should be seized and dismantled where their activities damage the climate beyond repair.',
        antiThesis: 'Expropriating major firms destroys the engineering capacity, supply chains, and capital that actually build renewables; nationalised heavy industry has a poor emissions record.',
      },
      {
        opinion: 'should be left free to self-regulate emissions, with no binding state targets at all.',
        antiThesis: 'Voluntary corporate pledges have a long record of being missed, offset with dubious credits, and quietly dropped; without binding targets they function mainly as marketing.',
      },
    ],
  },
  {
    category: 'Sustainability',
    keyword: 'nature',
    data: [
      {
        opinion: 'should have value beyond its usefulness to humans.',
        antiThesis: 'Intrinsic value matters, but policy often needs measurable human benefits to gain funding and public support.',
      },
      {
        opinion: 'should have legal rights against exploitation.',
        antiThesis: 'Legal personhood for nature raises difficult questions about representation, enforcement, and conflicts with human needs.',
      },
      {
        opinion: 'should be restored, not merely protected.',
        antiThesis: 'Restoration is vital, but it can be expensive, slow, and ecologically uncertain.',
      },
      {
        opinion: 'should shape how cities, farms, and industries are planned.',
        antiThesis: 'Planning around nature is important, but societies also need housing, food, jobs, transport, and infrastructure.',
      },
      {
        opinion: 'should be protected from short-term profit.',
        antiThesis: 'Private investment can also fund conservation, sustainable forestry, restoration, and land management.',
      },
      {
        opinion: 'should be used responsibly for human flourishing.',
        antiThesis: '“Responsible use” can become a vague justification for continued extraction.',
      },
      {
        opinion: 'should be conserved through property rights and local stewardship.',
        antiThesis: 'Private stewardship can work, but it may fail when owners profit from degradation or exclusion.',
      },
      {
        opinion: 'should be protected by science-based management.',
        antiThesis: 'Scientific management is useful, but it can ignore Indigenous knowledge, local culture, and moral values.',
      },
      {
        opinion: 'should be accessible to people, not locked away as elite wilderness.',
        antiThesis: 'Public access can damage fragile ecosystems if not carefully managed.',
      },
      {
        opinion: 'should be treated as the foundation of all economies.',
        antiThesis: 'Nature underpins economies, but economic life also depends on labour, technology, institutions, capital, and culture.',
      },
      {
        opinion: 'should be granted legal personhood so ecosystems can sue those who harm them.',
        antiThesis: 'Rights-of-nature laws sound powerful but in practice produce endless litigation, unclear standing, and conflicts with property and development law that courts struggle to resolve.',
      },
      {
        opinion: 'should be valued only for the resources and growth it provides to human beings.',
        antiThesis: 'Valuing nature purely as a resource has driven the fishery collapses and deforestation that destroyed the very resources sought; intact ecosystems are economically enormous.',
      },
    ],
  },
  {
    category: 'Deportations',
    keyword: 'deportations',
    data: [
      {
        opinion: 'should be abolished as a tool of state punishment.',
        antiThesis: 'States argue that deportation is necessary to enforce immigration law and maintain legal borders.',
      },
      {
        opinion: 'should never separate families.',
        antiThesis: 'Family unity matters, but governments may still deport individuals after serious legal violations or criminal convictions.',
      },
      {
        opinion: 'should not be used against people who have built long-term lives in a country.',
        antiThesis: 'Long-term residence should count, but unresolved legal status may still require consequences under immigration law.',
      },
      {
        opinion: 'should be impossible when they place people in danger.',
        antiThesis: 'Protection from danger is essential, but risk assessment can be contested and difficult to verify.',
      },
      {
        opinion: 'should require independent legal review.',
        antiThesis: 'Legal review protects rights, but lengthy appeals can make enforcement slow and administratively difficult.',
      },
      {
        opinion: 'should be used only as a last resort.',
        antiThesis: 'If deportation is always a last resort, some argue immigration rules may become difficult to enforce.',
      },
      {
        opinion: 'should be applied after due process when legal status is exhausted.',
        antiThesis: 'Due process matters, but legal exhaustion does not remove the human cost of removal.',
      },
      {
        opinion: 'should prioritise serious public-safety cases.',
        antiThesis: 'Prioritising only serious cases may leave many immigration violations effectively unenforced.',
      },
      {
        opinion: 'should be carried out humanely and transparently.',
        antiThesis: 'Humane procedure matters, but critics argue deportation itself remains harmful regardless of process.',
      },
      {
        opinion: 'should remain available to states that enforce legal residence rules.',
        antiThesis: 'State authority matters, but deportation power can be abused or applied disproportionately.',
      },
      {
        opinion: 'should be ended completely, since no human being can be illegal on a shared earth.',
        antiThesis: 'A state that can enforce no removal can\'t sustain an asylum system, labour standards, or public consent for immigration; unconditional non-enforcement collapses the legal distinction it relies on.',
      },
      {
        opinion: 'should be carried out swiftly and en masse for everyone present without legal status.',
        antiThesis: 'Removal on this scale is impossible without due-process violations, family separation, and the wrongful deportation of citizens, as every mass attempt has shown.',
      },
    ],
  },
  {
    category: 'Deportations',
    keyword: 'borders',
    data: [
      {
        opinion: 'should not decide who deserves safety.',
        antiThesis: 'Safety is universal, but states need borders to organise asylum, resources, citizenship, and public administration.',
      },
      {
        opinion: 'should be open to people fleeing violence or collapse.',
        antiThesis: 'Protection is necessary, but open access without management can strain housing, services, and political consent.',
      },
      {
        opinion: 'should not turn movement into a crime.',
        antiThesis: 'Movement is human, but states distinguish lawful and unlawful entry to regulate migration.',
      },
      {
        opinion: 'should be governed by solidarity rather than fear.',
        antiThesis: 'Solidarity matters, but governments must also consider security, capacity, and local concerns.',
      },
      {
        opinion: 'should include strong humanitarian exceptions.',
        antiThesis: 'Humanitarian exceptions are important, but if too broad they can become inconsistent or difficult to administer.',
      },
      {
        opinion: 'should be managed through safe and legal routes.',
        antiThesis: 'Safe routes reduce danger, but governments may fear that demand will exceed capacity.',
      },
      {
        opinion: 'should protect rights as well as territory.',
        antiThesis: 'Rights protection matters, but borders also define membership, jurisdiction, and legal authority.',
      },
      {
        opinion: 'should be secure enough to prevent trafficking and exploitation.',
        antiThesis: 'Security can protect migrants, but excessive enforcement can push people into more dangerous routes.',
      },
      {
        opinion: 'should be controlled by democratic states, not smugglers.',
        antiThesis: 'State control is important, but strict borders can increase smuggling markets when legal routes are limited.',
      },
      {
        opinion: 'should be defended as a condition of national sovereignty.',
        antiThesis: 'Sovereignty matters, but border control must still comply with human rights and refugee obligations.',
      },
      {
        opinion: 'should be opened entirely, abolishing immigration enforcement as a form of state violence.',
        antiThesis: 'No welfare state has survived fully open borders; the arithmetic of universal services plus unlimited entry forces the collapse of either the services or the open border.',
      },
      {
        opinion: 'should be sealed completely, with all unauthorised entry treated as a serious crime.',
        antiThesis: 'Criminalising all irregular entry clogs courts and prisons, breaches refugee law by punishing genuine refugees, and has never actually stopped determined migration.',
      },
    ],
  },
  {
    category: 'Deportations',
    keyword: 'asylum seekers',
    data: [
      {
        opinion: 'should never be deported before their claims are fully examined.',
        antiThesis: 'Full examination protects people, but accelerated procedures may be used for clearly unfounded claims.',
      },
      {
        opinion: 'should have access to lawyers before deportation decisions.',
        antiThesis: 'Legal access improves fairness, but universal legal provision can be costly and slow.',
      },
      {
        opinion: 'should be allowed to work while their cases are reviewed.',
        antiThesis: 'Work rights reduce dependency, but critics fear they may incentivise weak claims if decisions are slow.',
      },
      {
        opinion: 'should not be detained unless strictly necessary.',
        antiThesis: 'Detention can be harmful, but states may use it to verify identity, prevent absconding, or manage security risks.',
      },
      {
        opinion: 'should be housed with dignity while awaiting decisions.',
        antiThesis: 'Dignified housing is necessary, but states may face capacity, cost, and local opposition.',
      },
      {
        opinion: 'should have their claims decided quickly and fairly.',
        antiThesis: 'Speed reduces uncertainty, but rapid decisions can increase errors in complex cases.',
      },
      {
        opinion: 'should not be punished for lacking documents.',
        antiThesis: 'People fleeing danger may lack documents, but identity checks are still necessary to prevent fraud and security risks.',
      },
      {
        opinion: 'should be protected from political scapegoating.',
        antiThesis: 'Scapegoating is harmful, but asylum policy, costs, and capacity should still be open to public debate.',
      },
      {
        opinion: 'should be returned when claims are rejected after fair process.',
        antiThesis: 'Fair process matters, but rejected claimants may still face hardship or danger not captured by legal categories.',
      },
      {
        opinion: 'should be discouraged from irregular routes by expanding legal alternatives.',
        antiThesis: 'Legal alternatives help, but deterrence policies can still harm desperate people who have no safe route.',
      },
      {
        opinion: 'should be admitted without limit, because refuge is an absolute and unconditional right.',
        antiThesis: 'Genuine refuge depends on a functioning system; admitting everyone with no screening lets the asylum route bypass all immigration control, eroding the very support refugees need.',
      },
      {
        opinion: 'should be processed entirely offshore and never settled in the destination country.',
        antiThesis: 'Offshore processing has proven extraordinarily expensive, prone to indefinite detention and abuse, and merely displaces rather than resolves the obligation.',
      },
    ],
  },
  {
    category: 'Deportations',
    keyword: 'undocumented migrants',
    data: [
      {
        opinion: 'should be offered pathways to legal status.',
        antiThesis: 'Legalisation can reduce exploitation, but critics argue it may reward rule-breaking and weaken confidence in immigration law.',
      },
      {
        opinion: 'should not live under permanent fear of removal.',
        antiThesis: 'Permanent fear is harmful, but governments argue that removal risk is part of enforcing immigration rules.',
      },
      {
        opinion: 'should have access to essential healthcare.',
        antiThesis: 'Healthcare access protects dignity and public health, but some argue full access may pressure public systems.',
      },
      {
        opinion: 'should be protected when they report abuse.',
        antiThesis: 'Protection encourages reporting, but authorities may still need rules around immigration violations.',
      },
      {
        opinion: 'should not be excluded from children’s education.',
        antiThesis: 'Education protects children, but some argue service access should depend on lawful residence.',
      },
      {
        opinion: 'should be recognised as workers and neighbours.',
        antiThesis: 'Social contribution is real, but it does not automatically resolve legal status.',
      },
      {
        opinion: 'should be regularised after long-term contribution.',
        antiThesis: 'Long-term contribution matters, but some systems prioritise whether residence was lawfully obtained.',
      },
      {
        opinion: 'should face enforcement if they repeatedly violate immigration law.',
        antiThesis: 'Enforcement may be justified, but repeated violations often reflect lack of legal pathways, poverty, or family ties.',
      },
      {
        opinion: 'should not be used as cheap labour while being denied rights.',
        antiThesis: 'Exploitation should be punished, but labour enforcement must target employers as well as immigration systems.',
      },
      {
        opinion: 'should not receive automatic legal status simply by crossing a border.',
        antiThesis: 'Automatic status may be impractical, but rigid exclusion can trap people in permanent vulnerability.',
      },
      {
        opinion: 'should all receive immediate and unconditional citizenship and full equal rights.',
        antiThesis: 'Blanket instant citizenship rewards and incentivises future unauthorised entry, undercuts those following the rules, and removes any leverage to vet or integrate.',
      },
      {
        opinion: 'should be barred from all public services, work, and housing to compel departure.',
        antiThesis: 'Cutting people off from work and shelter doesn\'t make them leave; it pushes them into the black economy and destitution, increasing exploitation and public-health risk.',
      },
    ],
  },
  {
    category: 'Deportations',
    keyword: 'immigration enforcement',
    data: [
      {
        opinion: 'should be limited by compassion.',
        antiThesis: 'Compassion matters, but enforcement also requires predictable rules and consequences.',
      },
      {
        opinion: 'should prioritise due process over speed.',
        antiThesis: 'Due process protects rights, but excessive delays can undermine trust in the system.',
      },
      {
        opinion: 'should focus on employers who exploit migrants.',
        antiThesis: 'Employer accountability is essential, but governments may still enforce individual status rules.',
      },
      {
        opinion: 'should never operate in schools, hospitals, or places of worship.',
        antiThesis: 'Safe spaces protect vulnerable people, but blanket exemptions may obstruct lawful enforcement.',
      },
      {
        opinion: 'should be transparent and publicly accountable.',
        antiThesis: 'Transparency builds trust, but some operational details require confidentiality.',
      },
      {
        opinion: 'should avoid racial profiling.',
        antiThesis: 'Profiling is unjust, but enforcement agencies still need lawful criteria to identify violations.',
      },
      {
        opinion: 'should prioritise serious crime and security risks.',
        antiThesis: 'Prioritisation is practical, but it may leave ordinary status violations unresolved.',
      },
      {
        opinion: 'should communicate consequences clearly to deter irregular migration.',
        antiThesis: 'Deterrence messaging can become fear-based and may not stop people fleeing danger.',
      },
      {
        opinion: 'should measure fairness, not only removal numbers.',
        antiThesis: 'Fairness matters, but removal numbers may indicate whether laws are actually being enforced.',
      },
      {
        opinion: 'should preserve human dignity while maintaining legal order.',
        antiThesis: 'This balance is ideal, but in practice dignity and enforcement often conflict in painful cases.',
      },
      {
        opinion: 'should be reformed to be humane, proportionate, and subject to strict judicial review.',
        antiThesis: 'Layering full judicial review onto every removal can paralyse the system for years—itself inhumane—and fuels the backlash that hardens asylum policy.',
      },
      {
        opinion: 'should be empowered to detain and remove without lengthy appeals or court delay.',
        antiThesis: 'Removing appeal rights guarantees irreversible wrongful deportations; due process exists because the state regularly gets identity and status wrong.',
      },
    ],
  },
  {
    category: 'AI',
    keyword: 'AI',
    data: [
      {
        opinion: 'should be regulated before it becomes impossible to control.',
        antiThesis: 'Premature regulation could slow innovation and give an advantage to less regulated competitors.',
      },
      {
        opinion: 'should be developed quickly to solve major human problems.',
        antiThesis: 'Speed can increase risks if safety, accountability, and social impacts are not addressed.',
      },
      {
        opinion: 'should serve human wellbeing before corporate profit.',
        antiThesis: 'Profit can fund research, infrastructure, talent, and deployment at scale.',
      },
      {
        opinion: 'should remain mostly market-driven to encourage innovation.',
        antiThesis: 'Markets may prioritise profit over safety, fairness, labour rights, and public interest.',
      },
      {
        opinion: 'should never replace human judgement in life-or-death decisions.',
        antiThesis: 'AI can support high-stakes decisions by detecting patterns and reducing human error when supervised.',
      },
      {
        opinion: 'should be used wherever it improves accuracy, speed, or access.',
        antiThesis: 'Accuracy and speed are not enough if systems undermine dignity, rights, or accountability.',
      },
      {
        opinion: 'should be transparent when it affects people’s rights.',
        antiThesis: 'Full transparency may be technically difficult, proprietary, or vulnerable to manipulation.',
      },
      {
        opinion: 'should be open-source whenever public trust is required.',
        antiThesis: 'Open models can also be misused, copied, or adapted for harmful purposes.',
      },
      {
        opinion: 'should be treated as strategic infrastructure.',
        antiThesis: 'Strategic framing can justify surveillance, militarisation, or excessive state control.',
      },
      {
        opinion: 'should be judged by outcomes, not hype or fear.',
        antiThesis: 'Waiting for outcomes may be too slow when harms become visible only after deployment.',
      },
      {
        opinion: 'should be developed only under full public ownership, never left in private corporate hands.',
        antiThesis: 'A state monopoly concentrates the most powerful technology in government hands alone, removing the competition and external scrutiny that check abuse; public ownership has never by itself made a frontier technology safer.',
      },
      {
        opinion: 'should be paused entirely until its risks to humanity are proven manageable.',
        antiThesis: 'A unilateral pause cedes the field to those who won\'t pause, and \'proven safe\' is an unmeetable bar that would also freeze AI\'s large benefits in medicine and science.',
      },
      {
        opinion: 'should be left almost entirely unregulated so innovation can advance as fast as possible.',
        antiThesis: 'Zero regulation invites exactly the high-stakes failures—biased justice and unsafe medical tools—that trigger a far heavier backlash; light, targeted rules protect innovation\'s social licence.',
      },
      {
        opinion: 'should be accelerated as fast as possible, because the first to superintelligence shapes the future.',
        antiThesis: 'A race with safety as the loser is how catastrophic accidents happen; \'move fast\' in a high-consequence domain has repeatedly meant externalising risk onto the public.',
      },
    ],
  },
  {
    category: 'AI',
    keyword: 'automation',
    data: [
      {
        opinion: 'should reduce working hours rather than eliminate livelihoods.',
        antiThesis: 'Automation may create new jobs and industries, but not necessarily shorter hours.',
      },
      {
        opinion: 'should be adopted aggressively to raise productivity.',
        antiThesis: 'Productivity gains can concentrate wealth if workers do not share the benefits.',
      },
      {
        opinion: 'should share productivity gains with workers.',
        antiThesis: 'Companies that invest in automation need returns to justify risk, capital, and maintenance.',
      },
      {
        opinion: 'should not be taxed because it drives competitiveness.',
        antiThesis: 'Without redistribution, automation may deepen inequality and weaken labour bargaining power.',
      },
      {
        opinion: 'should be democratically planned in essential sectors.',
        antiThesis: 'Too much planning may slow adoption and reduce flexibility in fast-moving industries.',
      },
      {
        opinion: 'should be left to firms that understand their own operations.',
        antiThesis: 'Firms may automate in ways that externalise costs onto workers and communities.',
      },
      {
        opinion: 'should remove dangerous and repetitive work first.',
        antiThesis: 'Some dangerous or repetitive jobs still provide income and identity to workers who need transition support.',
      },
      {
        opinion: 'should not be slowed to preserve outdated jobs.',
        antiThesis: 'Rapid job loss can destabilise communities before new opportunities appear.',
      },
      {
        opinion: 'should be paired with lifelong retraining.',
        antiThesis: 'Retraining cannot solve all displacement, especially for older workers or regions with few new jobs.',
      },
      {
        opinion: 'should make leisure more possible for everyone.',
        antiThesis: 'Leisure depends on political distribution; automation alone does not guarantee more free time.',
      },
      {
        opinion: 'should trigger a guaranteed income for all, funded by taxing the machines that replace labour.',
        antiThesis: 'A \'robot tax\' is hard to define—every tool automates something—and risks taxing the productivity gains that fund higher wages, while UBI\'s effects remain unproven at national scale.',
      },
      {
        opinion: 'should be embraced without restriction, even if whole professions vanish in the process.',
        antiThesis: 'Letting whole professions collapse with no transition plan reproduces the regional devastation of past deindustrialisation, whose political costs dwarfed those of managed adjustment.',
      },
    ],
  },
  {
    category: 'AI',
    keyword: 'data',
    data: [
      {
        opinion: 'should belong primarily to the people who generate it.',
        antiThesis: 'Data often gains value through aggregation, analysis, infrastructure, and organisational context.',
      },
      {
        opinion: 'should be freely usable when anonymised for innovation.',
        antiThesis: 'Anonymised data can sometimes be re-identified or used in ways people did not expect.',
      },
      {
        opinion: 'should not be extracted without meaningful consent.',
        antiThesis: 'Consent for every use can overwhelm users and block beneficial research or security work.',
      },
      {
        opinion: 'should be treated as a public resource when it serves health, science, or safety.',
        antiThesis: 'Public-resource framing can weaken individual control and enable state or institutional overreach.',
      },
      {
        opinion: 'should be minimised rather than collected by default.',
        antiThesis: 'Some useful discoveries require broad datasets and exploratory analysis.',
      },
      {
        opinion: 'should be collected widely if it improves services and decision-making.',
        antiThesis: 'Broad collection can normalise surveillance and create future misuse risks.',
      },
      {
        opinion: 'should be protected as an extension of personal freedom.',
        antiThesis: 'Strong restrictions may limit medical research, fraud prevention, accessibility, and public-interest analysis.',
      },
      {
        opinion: 'should be monetisable by individuals.',
        antiThesis: 'Selling personal data may turn privacy into a commodity and disadvantage poorer users.',
      },
      {
        opinion: 'should be transparent when used to make decisions about people.',
        antiThesis: 'Some systems involve trade secrets, security risks, or complex models that cannot be fully explained.',
      },
      {
        opinion: 'should be governed by strong rules for both states and corporations.',
        antiThesis: 'Strong governance can become bureaucratic and slow down useful applications.',
      },
      {
        opinion: 'should belong collectively to the people whose lives produce it, never to the firms that harvest it.',
        antiThesis: 'Collective data ownership is unworkable, since most data is jointly produced; a regime letting no firm use it would halt the medicine, mapping, and safety systems that depend on it.',
      },
      {
        opinion: 'should flow freely to whoever can use it, since restricting information only slows progress.',
        antiThesis: 'Frictionless data flow is precisely how surveillance, stalking, and identity theft scale; some information is a weapon against the person it describes.',
      },
    ],
  },
  {
    category: 'AI',
    keyword: 'algorithms',
    data: [
      {
        opinion: 'should be explainable when they shape human opportunities.',
        antiThesis: 'Some high-performing systems are difficult to explain without reducing accuracy.',
      },
      {
        opinion: 'should be used more often when they outperform human judgement.',
        antiThesis: 'Performance alone does not settle questions of accountability, bias, appeal, or legitimacy.',
      },
      {
        opinion: 'should be audited for bias before deployment.',
        antiThesis: 'Audits can be costly, incomplete, and dependent on imperfect data.',
      },
      {
        opinion: 'should be allowed to innovate before being overburdened by compliance.',
        antiThesis: 'Lack of oversight can allow harmful systems to scale before problems are detected.',
      },
      {
        opinion: 'should not decide alone who gets hired, housed, treated, or punished.',
        antiThesis: 'Algorithms can support fairer decisions if they reduce inconsistency and are properly supervised.',
      },
      {
        opinion: 'should reduce human bias through standardised decision-making.',
        antiThesis: 'Standardisation can encode existing bias and make it harder to challenge.',
      },
      {
        opinion: 'should allow people to appeal automated decisions.',
        antiThesis: 'Large-scale systems may struggle to provide fast, individualised appeals.',
      },
      {
        opinion: 'should be proprietary when companies invest in building them.',
        antiThesis: 'Proprietary systems can hide discrimination, errors, or public-interest harms.',
      },
      {
        opinion: 'should optimise for fairness as well as efficiency.',
        antiThesis: 'Fairness is contested, and different groups may define it differently.',
      },
      {
        opinion: 'should be accountable without making developers liable for every misuse.',
        antiThesis: 'Without meaningful liability, firms may externalise harm onto users and society.',
      },
      {
        opinion: 'should be transparent and auditable by law before any deployment that affects the public.',
        antiThesis: 'Mandatory disclosure of model internals hands adversaries a manipulation manual and is often meaningless, since even developers can\'t fully interpret large models.',
      },
    ],
  },
  {
    category: 'AI',
    keyword: 'AI-generated content',
    data: [
      {
        opinion: 'should always be labelled clearly.',
        antiThesis: 'Mandatory labelling may be difficult for hybrid, edited, translated, or assistive uses.',
      },
      {
        opinion: 'should be normalised as part of creative production.',
        antiThesis: 'Normalisation may devalue human labour and flood culture with low-quality imitation.',
      },
      {
        opinion: 'should not replace human creativity.',
        antiThesis: 'AI can support ideation, accessibility, prototyping, translation, and new artistic forms.',
      },
      {
        opinion: 'should be treated like any other tool when humans direct it.',
        antiThesis: 'AI tools can reproduce hidden labour, training data issues, and platform power even when humans direct them.',
      },
      {
        opinion: 'should not be trained on artists’ work without permission.',
        antiThesis: 'Requiring permission for every training example may be technically and economically difficult and may limit competition.',
      },
      {
        opinion: 'should be allowed to train on public culture under fair-use principles.',
        antiThesis: 'Fair-use training may exploit creators whose work creates value without compensation.',
      },
      {
        opinion: 'should be restricted in elections and politics.',
        antiThesis: 'Restrictions may also limit satire, accessibility, translation, and legitimate campaign communication.',
      },
      {
        opinion: 'should be traceable through provenance systems.',
        antiThesis: 'Traceability can raise privacy issues and may fail once content is copied, compressed, or remixed.',
      },
      {
        opinion: 'should be freely remixable when it does not copy a protected work.',
        antiThesis: 'Free remixing can still harm creators by imitating style, voice, or market position.',
      },
      {
        opinion: 'should expand creativity without exploiting creators.',
        antiThesis: 'This balance is difficult because law has not settled where inspiration, training, copying, and exploitation begin or end.',
      },
      {
        opinion: 'should enjoy the same free-speech protection as any human expression.',
        antiThesis: 'Treating mass-produced synthetic content as protected speech enables industrial-scale fraud and impersonation; the law already distinguishes a person\'s expression from automated output.',
      },
    ],
  },
  {
    category: 'Radicalisation',
    keyword: 'radicalisation',
    data: [
      {
        opinion: 'should be understood as a social process, not a sudden event.',
        antiThesis: 'Some people may radicalise quickly after crisis, humiliation, trauma, or intense online exposure.',
      },
      {
        opinion: 'should be treated as a failure of belonging.',
        antiThesis: 'Belonging matters, but ideology, status, grievance, thrill-seeking, and manipulation can also drive radicalisation.',
      },
      {
        opinion: 'should be prevented before it becomes violence.',
        antiThesis: 'Acting too early can risk policing thoughts rather than harmful behaviour.',
      },
      {
        opinion: 'should not be reduced to religion.',
        antiThesis: 'Religion is not the only driver, but religious ideology can still be relevant in some cases.',
      },
      {
        opinion: 'should be studied without moral panic.',
        antiThesis: 'Calm analysis matters, but underestimating threats can leave communities vulnerable.',
      },
      {
        opinion: 'should be addressed through education and community support.',
        antiThesis: 'Education helps, but some threats require intelligence, policing, or legal intervention.',
      },
      {
        opinion: 'should not be used to stigmatise entire communities.',
        antiThesis: 'Avoiding stigma is vital, but authorities may still need to monitor specific extremist networks.',
      },
      {
        opinion: 'should be seen as reversible.',
        antiThesis: 'Some people disengage, but deradicalisation is difficult and not always successful.',
      },
      {
        opinion: 'should be treated as a security risk when it moves toward violence.',
        antiThesis: 'Security framing can overreach and criminalise people before harm occurs.',
      },
      {
        opinion: 'should be understood as both social and ideological.',
        antiThesis: 'Combining social and ideological causes is useful, but it can make prevention harder to target.',
      },
      {
        opinion: 'should be addressed mainly through social inclusion, jobs, and dialogue rather than policing.',
        antiThesis: 'Socioeconomic explanations are incomplete—many radicals are educated and affluent—so jobs-and-dialogue programmes alone miss ideologically driven recruitment.',
      },
      {
        opinion: 'should be left untouched by the state, since policing belief is itself a path to tyranny.',
        antiThesis: 'Doing nothing ignores that organised networks actively recruit and plan violence; the state has a duty to disrupt operational planning, not merely belief.',
      },
    ],
  },
  {
    category: 'Radicalisation',
    keyword: 'extremism',
    data: [
      {
        opinion: 'should be confronted without criminalising dissent.',
        antiThesis: 'Extremist movements can exploit the language of dissent to normalise intimidation or violence.',
      },
      {
        opinion: 'should not be confused with strong political conviction.',
        antiThesis: 'Strong conviction becomes dangerous when it rejects equal rights, democracy, or the humanity of opponents.',
      },
      {
        opinion: 'should be recognised across all political and ideological sides.',
        antiThesis: 'Equal scrutiny is important, but false equivalence can minimise more organised or immediate threats.',
      },
      {
        opinion: 'should be challenged through open debate where possible.',
        antiThesis: 'Debate can give extremist actors visibility, legitimacy, and recruitment opportunities.',
      },
      {
        opinion: 'should not be allowed to hide behind free speech.',
        antiThesis: 'Vague definitions of extremism can be abused to silence unpopular but lawful opinions.',
      },
      {
        opinion: 'should be separated from ordinary anger at injustice.',
        antiThesis: 'Anger can be legitimate, but it can also be manipulated into scapegoating or violence.',
      },
      {
        opinion: 'should be disrupted before it becomes organised power.',
        antiThesis: 'Early disruption can damage civil liberties if lawful groups are surveilled too broadly.',
      },
      {
        opinion: 'should be resisted without creating authoritarian tools.',
        antiThesis: 'Democratic societies still need legal tools to prevent violence and organised intimidation.',
      },
      {
        opinion: 'should be understood through causes, not only condemned.',
        antiThesis: 'Explanation helps prevention, but it should not become excuse-making for harm.',
      },
      {
        opinion: 'should be punished firmly when it crosses into violence.',
        antiThesis: 'Punishment may be necessary, but it does not address recruitment, ideology, or underlying grievance.',
      },
      {
        opinion: 'should be defined broadly so that the state can intervene before violence ever occurs.',
        antiThesis: 'A broad definition is exactly what lets governments brand peaceful protest as extremism; pre-crime intervention punishes people for what they might do.',
      },
      {
        opinion: 'should never be a legal category, because today\'s extremism is often tomorrow\'s mainstream.',
        antiThesis: 'Without any legal category the state cannot proscribe groups that organise terror; the cure for vague laws is precise ones, not the absence of all law.',
      },
    ],
  },
  {
    category: 'Radicalisation',
    keyword: 'online radicalisation',
    data: [
      {
        opinion: 'should be treated as a platform design problem.',
        antiThesis: 'Platform design matters, but users, families, schools, influencers, and politics also shape radicalisation.',
      },
      {
        opinion: 'should not be amplified by engagement algorithms.',
        antiThesis: 'Identifying radicalising content at scale is difficult and risks over-removal.',
      },
      {
        opinion: 'should be interrupted before echo chambers harden.',
        antiThesis: 'Too much intervention may push groups into encrypted or underground spaces.',
      },
      {
        opinion: 'should be countered with credible alternative narratives.',
        antiThesis: 'Official counter-narratives may be distrusted if they seem artificial or moralising.',
      },
      {
        opinion: 'should not be monetised through outrage.',
        antiThesis: 'Outrage is not always illegitimate; it can also expose real injustice.',
      },
      {
        opinion: 'should be recognised in memes, irony, and coded language.',
        antiThesis: 'Overinterpreting jokes or subcultures can wrongly label ordinary online behaviour as extremist.',
      },
      {
        opinion: 'should be addressed through platform transparency.',
        antiThesis: 'Full transparency may help extremist recruiters evade detection systems.',
      },
      {
        opinion: 'should not be left to automated moderation alone.',
        antiThesis: 'Human review at scale is expensive, slow, and psychologically demanding.',
      },
      {
        opinion: 'should include support for people leaving extremist communities.',
        antiThesis: 'Exit support is valuable, but public trust may require accountability for past harm.',
      },
      {
        opinion: 'should be aggressively removed when it recruits for violence.',
        antiThesis: 'Aggressive removal can affect journalism, research, satire, or documentation of extremist activity.',
      },
      {
        opinion: 'should be countered by removing radical communities from the internet entirely.',
        antiThesis: 'Deplatforming scatters groups into encrypted spaces that are harder to study and counter, while doing nothing about the grievances that draw recruits.',
      },
      {
        opinion: 'should be tolerated as the price of an open internet that no state may filter.',
        antiThesis: 'An \'open internet\' that hosts industrial recruitment for terror isn\'t free—it\'s a recruiting ground; removing operational content is not the same as censoring ideas.',
      },
    ],
  },
  {
    category: 'Radicalisation',
    keyword: 'ideology',
    data: [
      {
        opinion: 'should be analysed as a source of meaning and identity.',
        antiThesis: 'Ideology can provide meaning, but not every strong ideology is radicalising or harmful.',
      },
      {
        opinion: 'should not be dismissed as irrational.',
        antiThesis: 'Some ideological claims are false, conspiratorial, or deliberately manipulative.',
      },
      {
        opinion: 'should be challenged when it dehumanises others.',
        antiThesis: 'The boundary between harsh criticism and dehumanisation must be defined carefully.',
      },
      {
        opinion: 'should be debated before it hardens into dogma.',
        antiThesis: 'Some ideologies use debate strategically to recruit, provoke, or gain legitimacy.',
      },
      {
        opinion: 'should be separated from identity so people can change.',
        antiThesis: 'Beliefs often become deeply tied to community, status, and personal history.',
      },
      {
        opinion: 'should be confronted when it justifies violence.',
        antiThesis: 'Confrontation is necessary, but some societies also recognise resistance against oppression as morally complex.',
      },
      {
        opinion: 'should be examined alongside material conditions.',
        antiThesis: 'Privileged individuals can also radicalise through status anxiety, grievance, or identity politics.',
      },
      {
        opinion: 'should not be treated as destiny.',
        antiThesis: 'Deeply embedded ideological networks can be difficult to leave without long-term support.',
      },
      {
        opinion: 'should be disrupted when it depends on conspiracy thinking.',
        antiThesis: 'Distrust should not automatically be pathologised, because institutions have sometimes lied or failed.',
      },
      {
        opinion: 'should be judged by its attitude toward pluralism and violence.',
        antiThesis: 'Pluralism and non-violence are vital, but ideologies may still disagree sharply about justice and power.',
      },
      {
        opinion: 'should be screened in schools, with teachers reporting students who express extreme views.',
        antiThesis: 'Turning teachers into informants destroys the trust that lets young people voice and have challenged dangerous ideas, driving those views underground rather than out.',
      },
      {
        opinion: 'should be entirely beyond government reach, however repugnant the belief may be.',
        antiThesis: 'Even liberal states limit incitement and material support for terrorism; an \'untouchable\' ideology would protect active recruitment for mass violence.',
      },
    ],
  },
  {
    category: 'Radicalisation',
    keyword: 'prevention',
    data: [
      {
        opinion: 'should focus on belonging, education, and early support.',
        antiThesis: 'Some threats require targeted monitoring, legal restrictions, or police intervention.',
      },
      {
        opinion: 'should protect civil liberties while reducing harm.',
        antiThesis: 'In urgent threat situations, authorities may need temporary restrictions.',
      },
      {
        opinion: 'should involve families, schools, and communities.',
        antiThesis: 'Community involvement can create suspicion, fear, or unfair pressure to report people.',
      },
      {
        opinion: 'should avoid racial, religious, or political profiling.',
        antiThesis: 'Prevention still needs evidence-based risk indicators and targeted responses.',
      },
      {
        opinion: 'should include mental health support without blaming mental illness.',
        antiThesis: 'Mental health support helps, but most people with mental illness are not violent or extremist.',
      },
      {
        opinion: 'should address loneliness and social isolation.',
        antiThesis: 'Many isolated people never radicalise, and many radicals are socially embedded in groups.',
      },
      {
        opinion: 'should create exit pathways from extremist movements.',
        antiThesis: 'Exit pathways matter, but serious crimes still require accountability.',
      },
      {
        opinion: 'should be measured by reduced harm, not only arrests.',
        antiThesis: 'Arrests may still be necessary when credible threats or crimes occur.',
      },
      {
        opinion: 'should include intelligence work when violence is plausible.',
        antiThesis: 'Intelligence work can become intrusive and damage trust if oversight is weak.',
      },
      {
        opinion: 'should defend democracy without becoming authoritarian.',
        antiThesis: 'This balance is difficult when anti-democratic movements exploit democratic freedoms.',
      },
      {
        opinion: 'should justify intensive state monitoring of anyone showing early signs of extreme belief.',
        antiThesis: 'Monitoring belief rather than action criminalises thought, sweeps up the merely angry or curious, and—by alienating whole communities—has been shown to deepen the radicalisation it claims to prevent.',
      },
      {
        opinion: 'should be abolished, as pre-emptive programmes punish thought rather than action.',
        antiThesis: 'Well-designed prevention targets behaviour and offers off-ramps, not thought-policing; abolishing it removes the main non-coercive alternative to arrest.',
      },
    ],
  },
  {
    category: 'Nuclearisation',
    keyword: 'nuclearisation',
    data: [
      {
        opinion: 'should be treated as a threat to global survival.',
        antiThesis: 'Nuclear capability may also deter major wars by making direct conflict between nuclear powers too costly.',
      },
      {
        opinion: 'should never be normalised as ordinary state policy.',
        antiThesis: 'States facing existential threats may see nuclearisation as a rational security strategy.',
      },
      {
        opinion: 'should be resisted wherever it appears.',
        antiThesis: 'Unequal enforcement can seem hypocritical when existing nuclear powers keep their own arsenals.',
      },
      {
        opinion: 'should be understood as a failure of diplomacy.',
        antiThesis: 'Some states pursue nuclearisation because they believe diplomacy alone cannot guarantee survival.',
      },
      {
        opinion: 'should be prevented through treaties and verification.',
        antiThesis: 'Treaties only work when states trust verification and believe others are also complying.',
      },
      {
        opinion: 'should be accepted only as an extreme last resort.',
        antiThesis: 'Even last-resort nuclearisation can trigger arms races and regional instability.',
      },
      {
        opinion: 'should be seen as a symptom of global insecurity.',
        antiThesis: 'Insecurity matters, but leadership ambition, prestige, and domestic politics can also drive nuclearisation.',
      },
      {
        opinion: 'should be judged differently for weapons and peaceful energy.',
        antiThesis: 'Civilian nuclear programmes can still create dual-use knowledge and proliferation risk.',
      },
      {
        opinion: 'should be constrained by international law.',
        antiThesis: 'International law is only as strong as enforcement, and powerful states may ignore it.',
      },
      {
        opinion: 'should not become a privilege reserved for powerful countries.',
        antiThesis: 'Equal access to nuclear capability would increase proliferation risks and global instability.',
      },
      {
        opinion: 'should be reversed through a global authority empowered to seize all fissile material.',
        antiThesis: 'No state will surrender its deterrent to a supranational body it can\'t control; the proposal assumes a trust whose absence is the entire reason weapons exist.',
      },
      {
        opinion: 'should be accepted as natural, since proliferation stabilises regional balances of power.',
        antiThesis: 'The \'stability\' claim ignores volatile regions, command-and-control failures, and the risk of non-state theft; each new arsenal is a new path to catastrophe.',
      },
    ],
  },
  {
    category: 'Nuclearisation',
    keyword: 'nuclear weapons',
    data: [
      {
        opinion: 'should be abolished everywhere.',
        antiThesis: 'Abolition may be unsafe without reliable verification, trust, and protection against cheating.',
      },
      {
        opinion: 'should never be treated as legitimate instruments of power.',
        antiThesis: 'Some governments argue that nuclear weapons prevent war precisely because their use would be catastrophic.',
      },
      {
        opinion: 'should be banned before they are ever used again.',
        antiThesis: 'States under nuclear umbrellas may fear losing protection without credible alternatives.',
      },
      {
        opinion: 'should be maintained only to deter nuclear attack.',
        antiThesis: 'Even defensive arsenals can escalate crises and normalise permanent nuclear danger.',
      },
      {
        opinion: 'should remain part of strategy while rival powers possess them.',
        antiThesis: 'This logic can trap states in endless arms races and make disarmament impossible.',
      },
      {
        opinion: 'should not be modernised beyond basic safety needs.',
        antiThesis: 'Supporters argue modernisation is necessary to keep arsenals credible, secure, and reliable.',
      },
      {
        opinion: 'should be controlled by strong checks and institutions.',
        antiThesis: 'Nuclear command systems often prioritise speed and certainty in crisis conditions.',
      },
      {
        opinion: 'should not give any country diplomatic privilege.',
        antiThesis: 'Nuclear capability undeniably affects bargaining power and strategic calculations.',
      },
      {
        opinion: 'should be reduced gradually through reciprocal agreements.',
        antiThesis: 'Gradualism may be too slow given the scale of catastrophic risk.',
      },
      {
        opinion: 'should remain under civilian democratic oversight.',
        antiThesis: 'Civilian oversight matters, but democratic politics can also be unstable, polarised, or short-termist.',
      },
      {
        opinion: 'should be banned by binding treaty and their possession treated as a crime against humanity.',
        antiThesis: 'A ban treaty the armed states refuse to join changes nothing on the ground; criminalising possession without enforcement power is symbolic.',
      },
      {
        opinion: 'should be acquired by any sovereign state that judges them necessary for survival.',
        antiThesis: 'Unrestricted proliferation multiplies the chance of accident, theft, and use; every additional nuclear actor is a new crisis in which deterrence can fail.',
      },
    ],
  },
  {
    category: 'Nuclearisation',
    keyword: 'deterrence',
    data: [
      {
        opinion: 'should not be trusted with human survival.',
        antiThesis: 'Deterrence has arguably helped prevent direct war between major nuclear powers for decades.',
      },
      {
        opinion: 'should be replaced by collective security.',
        antiThesis: 'Collective security depends on cooperation and enforcement that may fail during major conflicts.',
      },
      {
        opinion: 'should be seen as organised hostage-taking.',
        antiThesis: 'Defenders argue deterrence threatens destruction precisely to prevent destruction from happening.',
      },
      {
        opinion: 'should be maintained until disarmament is verifiable.',
        antiThesis: 'Maintaining deterrence while waiting for perfect verification may postpone disarmament indefinitely.',
      },
      {
        opinion: 'should be credible to prevent aggression.',
        antiThesis: 'Credibility may require threatening mass destruction, which creates severe moral and escalation risks.',
      },
      {
        opinion: 'should not justify endless nuclear spending.',
        antiThesis: 'Supporters argue deterrence requires maintenance, command systems, and technological reliability.',
      },
      {
        opinion: 'should include no-first-use commitments.',
        antiThesis: 'Some states believe ambiguity strengthens deterrence and prevents adversaries from exploiting restraint.',
      },
      {
        opinion: 'should be temporary rather than permanent doctrine.',
        antiThesis: 'Geopolitical rivalry may keep states relying on deterrence for the foreseeable future.',
      },
      {
        opinion: 'should be stabilised through communication between rivals.',
        antiThesis: 'Communication reduces risk, but it does not remove the underlying threat of nuclear violence.',
      },
      {
        opinion: 'should be judged by both peace preserved and risk created.',
        antiThesis: 'Measuring “wars prevented” is difficult because deterrence successes are invisible and counterfactual.',
      },
      {
        opinion: 'should be maintained only at the minimum level needed to prevent attack, and no more.',
        antiThesis: '\'Minimum deterrence\' is unstable because adversaries probe the floor; what looks sufficient in peacetime can lose credibility in a crisis.',
      },
      {
        opinion: 'should be expanded, because a larger arsenal makes great-power war less likely.',
        antiThesis: 'Beyond a survivable second strike, more warheads add no security and fuel arms races that raise cost and accident risk without improving deterrence.',
      },
    ],
  },
  {
    category: 'Nuclearisation',
    keyword: 'nuclear energy',
    data: [
      {
        opinion: 'should not be confused with nuclear weapons.',
        antiThesis: 'Civilian nuclear technology can still raise proliferation concerns because expertise and materials may overlap.',
      },
      {
        opinion: 'should be considered a serious low-carbon energy source.',
        antiThesis: 'Nuclear energy faces concerns over cost, waste, accidents, construction delays, and public trust.',
      },
      {
        opinion: 'should be part of climate policy where it reduces fossil dependence.',
        antiThesis: 'Renewables, storage, efficiency, and grid reform may be cheaper and faster in many contexts.',
      },
      {
        opinion: 'should not be expanded without long-term waste solutions.',
        antiThesis: 'Demanding perfect waste solutions may block a low-carbon source that could reduce fossil-fuel harm.',
      },
      {
        opinion: 'should be publicly accountable and transparent.',
        antiThesis: 'Some technical and security information must remain confidential.',
      },
      {
        opinion: 'should not be imposed on communities without consent.',
        antiThesis: 'National energy planning sometimes requires infrastructure that faces local opposition.',
      },
      {
        opinion: 'should be publicly owned or tightly regulated.',
        antiThesis: 'Private firms can contribute investment, expertise, and innovation under proper regulation.',
      },
      {
        opinion: 'should be rejected because of accident and waste risks.',
        antiThesis: 'Fossil fuels also cause ongoing health, climate, and pollution harms at massive scale.',
      },
      {
        opinion: 'should be assessed case by case, not ideologically.',
        antiThesis: 'Case-by-case assessment can become slow and indecisive when urgent energy choices are needed.',
      },
      {
        opinion: 'should serve public need rather than prestige politics.',
        antiThesis: 'Prestige and strategic independence may still influence national energy decisions.',
      },
      {
        opinion: 'should be abandoned entirely in favour of renewables, regardless of cost.',
        antiThesis: 'Removing the largest reliable low-carbon source forces reliance on fossil backup, raising emissions; modern reactors have one of the best safety records per unit of energy.',
      },
      {
        opinion: 'should be built rapidly at massive scale as the only realistic path to clean power.',
        antiThesis: 'Massive rapid buildout faces real limits—cost overruns, waste, decade-long timelines—so nuclear can complement but not alone deliver a fast transition.',
      },
    ],
  },
  {
    category: 'Nuclearisation',
    keyword: 'disarmament',
    data: [
      {
        opinion: 'should be the only acceptable nuclear future.',
        antiThesis: 'Disarmament may be unrealistic while major powers distrust each other and conflicts remain unresolved.',
      },
      {
        opinion: 'should begin with the most powerful nuclear states.',
        antiThesis: 'Major powers may refuse reductions if rivals or emerging nuclear states do not commit too.',
      },
      {
        opinion: 'should be verified by international inspectors.',
        antiThesis: 'States may fear espionage, security leaks, or unequal enforcement.',
      },
      {
        opinion: 'should move gradually through reciprocal reductions.',
        antiThesis: 'Gradual reductions may not be enough to address catastrophic risk.',
      },
      {
        opinion: 'should include reparations for nuclear testing victims.',
        antiThesis: 'Governments may dispute responsibility, eligibility, evidence, and financial liability.',
      },
      {
        opinion: 'should be connected to broader demilitarisation.',
        antiThesis: 'States may still face conventional threats requiring strong defence systems.',
      },
      {
        opinion: 'should not weaken countries facing nuclear-armed adversaries.',
        antiThesis: 'This concern can be used to justify indefinite nuclear possession.',
      },
      {
        opinion: 'should be demanded by citizens, not only negotiated by elites.',
        antiThesis: 'Nuclear negotiations require technical expertise, secrecy, and state-level bargaining.',
      },
      {
        opinion: 'should redirect nuclear knowledge toward medicine, energy, and science.',
        antiThesis: 'Dual-use risks mean some nuclear knowledge must remain controlled.',
      },
      {
        opinion: 'should turn nuclear fear into international cooperation.',
        antiThesis: 'Fear can also drive mistrust, arms races, secrecy, and resistance to transparency.',
      },
      {
        opinion: 'should be total and immediate, with every nuclear weapon dismantled unconditionally.',
        antiThesis: 'Rapid total disarmament removes deterrence while rivals may retain or hide weapons—historically an invitation to aggression—and verifying a true \'zero\' remains the unsolved problem.',
      },
      {
        opinion: 'should be rejected outright, as unilateral weakness invites aggression.',
        antiThesis: 'Branding all arms control as weakness forecloses the verified mutual reductions that have demonstrably lowered risk between rivals without sacrificing security.',
      },
    ],
  },
  {
    category: 'Privacy',
    keyword: 'privacy',
    data: [
      {
        opinion: 'should be treated as a basic human right.',
        antiThesis: 'Privacy matters, but it must sometimes be balanced with safety, public health, law enforcement, and transparency.',
      },
      {
        opinion: 'should not be sacrificed for convenience.',
        antiThesis: 'Convenience can improve accessibility, security, and quality of life when users knowingly choose data-enabled services.',
      },
      {
        opinion: 'should belong to individuals, not corporations.',
        antiThesis: 'Companies need some data to provide, secure, personalise, and improve services.',
      },
      {
        opinion: 'should be protected by default.',
        antiThesis: 'Restrictive defaults may reduce functionality, personalisation, and beneficial data use.',
      },
      {
        opinion: 'should not depend on technical literacy.',
        antiThesis: 'Users still benefit from digital literacy to understand trade-offs and make informed choices.',
      },
      {
        opinion: 'should be balanced with public accountability.',
        antiThesis: 'Accountability can become a justification for unnecessary exposure or surveillance.',
      },
      {
        opinion: 'should not become a luxury product.',
        antiThesis: 'Paid privacy-focused services may be viable precisely because they do not rely on advertising revenue.',
      },
      {
        opinion: 'should allow people to control how visible they are.',
        antiThesis: 'Full control is difficult when visibility affects public safety, journalism, transparency, or legal records.',
      },
      {
        opinion: 'should adapt to technological change.',
        antiThesis: 'Constant adaptation may create uncertainty for companies, users, and regulators.',
      },
      {
        opinion: 'should protect ordinary life from permanent observation.',
        antiThesis: 'Some records, logs, and monitoring systems are necessary for security, fraud prevention, and accountability.',
      },
      {
        opinion: 'should be balanced against security through warrants and strict independent oversight.',
        antiThesis: 'Warrant regimes are only as good as their oversight, which is frequently captured or rubber-stamped, so \'balance\' can quietly normalise expanding surveillance.',
      },
      {
        opinion: 'should yield to security, with the state permitted broad monitoring to prevent serious crime.',
        antiThesis: 'Mass monitoring has a weak record against serious crime while chilling lawful association; \'nothing to hide\' ignores that the same data enables blackmail, error, and abuse.',
      },
    ],
  },
  {
    category: 'Privacy',
    keyword: 'personal data',
    data: [
      {
        opinion: 'should never be collected without meaningful consent.',
        antiThesis: 'Requiring explicit consent for every data use can overwhelm users and block useful services.',
      },
      {
        opinion: 'should be collected only when necessary.',
        antiThesis: 'Some valuable insights only emerge from broader or exploratory data analysis.',
      },
      {
        opinion: 'should be treated as personal property.',
        antiThesis: 'Treating data as property may commodify privacy and disadvantage poorer users who feel pressured to sell it.',
      },
      {
        opinion: 'should be usable for research when properly anonymised.',
        antiThesis: 'Anonymised data can sometimes be re-identified or used in ways people did not expect.',
      },
      {
        opinion: 'should be deleted when it no longer has a legitimate purpose.',
        antiThesis: 'Retention may be necessary for audits, fraud prevention, legal compliance, security, or research integrity.',
      },
      {
        opinion: 'should be portable between services.',
        antiThesis: 'Portability can create security risks if data is transferred to unsafe providers.',
      },
      {
        opinion: 'should not be sold without explicit permission.',
        antiThesis: 'Some data-sharing arrangements involve aggregated, anonymised, or operational data rather than direct sale of personal profiles.',
      },
      {
        opinion: 'should support innovation when safeguards are strong.',
        antiThesis: 'Safeguards can fail, and once data is misused the damage may be hard to reverse.',
      },
      {
        opinion: 'should not be used to predict people into fixed categories.',
        antiThesis: 'Predictive systems can also support fraud detection, accessibility, medical risk detection, and service improvement.',
      },
      {
        opinion: 'should be governed by clear rules rather than endless consent pop-ups.',
        antiThesis: 'Rules help, but consent remains important when data use affects autonomy, identity, or risk.',
      },
      {
        opinion: 'should be owned solely by the individual and never sold or shared without explicit payment.',
        antiThesis: 'A pay-per-use data regime can\'t handle the public-good uses—epidemiology, fraud detection, safety recalls—that depend on aggregate data no individual can meaningfully price.',
      },
      {
        opinion: 'should flow freely to firms and governments alike, as openness drives services and safety.',
        antiThesis: 'Free flow of personal data is the precondition for both surveillance capitalism and state social control, with the harms falling hardest on dissidents and minorities.',
      },
    ],
  },
  {
    category: 'Privacy',
    keyword: 'surveillance',
    data: [
      {
        opinion: 'should be treated as a form of power.',
        antiThesis: 'Surveillance can create power imbalances, but not all monitoring is oppressive or abusive.',
      },
      {
        opinion: 'should be limited by democratic oversight.',
        antiThesis: 'Oversight matters, but some investigations require confidentiality to remain effective.',
      },
      {
        opinion: 'should not be normalised in everyday life.',
        antiThesis: 'Everyday monitoring can protect public spaces, infrastructure, vulnerable people, and digital systems.',
      },
      {
        opinion: 'should be proportionate to actual risk.',
        antiThesis: 'Risk is often difficult to measure before harm occurs.',
      },
      {
        opinion: 'should not be expanded permanently after crises.',
        antiThesis: 'Emergencies may require temporary tools, and some tools may remain useful after the crisis.',
      },
      {
        opinion: 'should be available for serious crime and national security.',
        antiThesis: 'Security powers can be abused if oversight, warrants, and limits are weak.',
      },
      {
        opinion: 'should not target vulnerable communities disproportionately.',
        antiThesis: 'Enforcement agencies may argue that deployment follows risk patterns, crime reports, or operational data.',
      },
      {
        opinion: 'should be transparent where possible.',
        antiThesis: 'Full transparency may reveal methods to criminals, hostile states, or abusers.',
      },
      {
        opinion: 'should be dismantled when it cannot prove public benefit.',
        antiThesis: 'Preventive benefits are hard to prove because success often means harm did not happen.',
      },
      {
        opinion: 'should protect people without treating everyone as suspicious.',
        antiThesis: 'Broad systems may still be used to detect patterns that individual suspicion would miss.',
      },
      {
        opinion: 'should be outlawed entirely, with mass data collection treated as a fundamental rights violation.',
        antiThesis: 'A blanket ban would void lawful, warranted investigation of terrorism and child exploitation; the remedy for mass surveillance is oversight, not abolishing all investigative capability.',
      },
      {
        opinion: 'should be expanded in public spaces, because the law-abiding have nothing to fear.',
        antiThesis: 'Pervasive surveillance changes even innocent behaviour, deters protest, and builds a record of everyone\'s movements that no future government can be trusted to hold.',
      },
    ],
  },
  {
    category: 'Privacy',
    keyword: 'digital platforms',
    data: [
      {
        opinion: 'should not track users across the internet.',
        antiThesis: 'Cross-site tracking can fund free services, support advertising, and help small businesses reach customers.',
      },
      {
        opinion: 'should make privacy settings simple and visible.',
        antiThesis: 'Privacy choices are complex because data uses involve different risks, benefits, and legal obligations.',
      },
      {
        opinion: 'should stop using dark patterns to push consent.',
        antiThesis: 'Platforms still need practical ways to explain options and ask for permissions.',
      },
      {
        opinion: 'should be allowed to personalise services with clear consent.',
        antiThesis: 'Consent can be pressured, confusing, or meaningless when users depend on the service.',
      },
      {
        opinion: 'should be honest about how data becomes profit.',
        antiThesis: 'Business models can be too complex to explain fully in simple privacy notices.',
      },
      {
        opinion: 'should let users choose between paid privacy and ad-supported access.',
        antiThesis: 'This can make privacy easier for wealthier users while poorer users pay with data.',
      },
      {
        opinion: 'should be liable for reckless data practices.',
        antiThesis: 'Excessive liability may make platforms risk-averse and reduce useful services.',
      },
      {
        opinion: 'should be free to use data responsibly for product improvement.',
        antiThesis: '“Responsible use” can become vague unless rights, audits, and enforcement are clear.',
      },
      {
        opinion: 'should clearly label personalised advertising.',
        antiThesis: 'Many users may ignore labels or misunderstand how personalisation works.',
      },
      {
        opinion: 'should not punish users for refusing non-essential tracking.',
        antiThesis: 'Some features may not work properly without data, making the boundary between essential and non-essential contested.',
      },
      {
        opinion: 'should be forbidden from retaining any user data beyond the moment of a transaction.',
        antiThesis: 'Zero retention breaks fraud detection, dispute resolution, and security forensics; some retention is exactly what protects users from the abuses they fear.',
      },
      {
        opinion: 'should be free to collect whatever data users agree to share by contract.',
        antiThesis: '\'Consent\' via unread terms isn\'t meaningful agreement, and take-it-or-leave-it contracts for essential services aren\'t a free choice—which is why baseline data rights exist.',
      },
    ],
  },
  {
    category: 'Privacy',
    keyword: 'encryption',
    data: [
      {
        opinion: 'should be protected as a condition for privacy.',
        antiThesis: 'Encryption can also make serious criminal investigations and child-safety work more difficult.',
      },
      {
        opinion: 'should not have government backdoors.',
        antiThesis: 'Governments argue that lawful access is needed in serious crime and national security cases.',
      },
      {
        opinion: 'should be available to ordinary people, not only experts.',
        antiThesis: 'Easy-to-use encryption can also be used by criminals, extremists, or abusers.',
      },
      {
        opinion: 'should protect journalists, activists, and vulnerable groups.',
        antiThesis: 'Encrypted spaces can also shield harmful networks from accountability.',
      },
      {
        opinion: 'should allow targeted lawful access under strict judicial control.',
        antiThesis: 'Any access mechanism can weaken security for everyone if it creates vulnerabilities or backdoors.',
      },
      {
        opinion: 'should not be weakened for convenience.',
        antiThesis: 'If encryption is too hard to use, people may avoid secure tools or make unsafe choices.',
      },
      {
        opinion: 'should defend private communication from mass surveillance.',
        antiThesis: 'Targeted surveillance may still be justified in serious, evidence-based investigations.',
      },
      {
        opinion: 'should be paired with safeguards against abuse.',
        antiThesis: 'Safeguards may be difficult to implement without undermining the privacy encryption is meant to protect.',
      },
      {
        opinion: 'should not be criminalised because it can hide wrongdoing.',
        antiThesis: 'Authorities still need lawful tools to investigate wrongdoing that uses encrypted channels.',
      },
      {
        opinion: 'should become stronger as more life moves online.',
        antiThesis: 'Stronger encryption must be paired with education, recovery systems, and protections for victims of abuse.',
      },
      {
        opinion: 'should be absolute and unbreakable, with any government backdoor banned by constitution.',
        antiThesis: 'Absolute encryption also shields the gravest crimes from any lawful access; the real question is how to preserve security while allowing narrow, warranted exceptions, not to foreclose them forever.',
      },
      {
        opinion: 'should include lawful access for the state, since absolute secrecy shields the worst offenders.',
        antiThesis: 'Any backdoor is a vulnerability for everyone, not just the guilty—once it exists, hostile states and criminals find it—which is why technologists overwhelmingly oppose it.',
      },
    ],
  },
  {
    category: 'Reparations',
    keyword: 'reparations',
    data: [
      {
        opinion: 'should be treated as justice, not charity.',
        antiThesis: 'Critics argue present generations should not be held personally responsible for historical wrongs they did not commit.',
      },
      {
        opinion: 'should include material compensation for historical harm.',
        antiThesis: 'Material compensation may be difficult to calculate fairly across generations, groups, and institutions.',
      },
      {
        opinion: 'should include public investment, not only individual payments.',
        antiThesis: 'Broad public investment may be more practical, but it can dilute the specific recognition of historical victims.',
      },
      {
        opinion: 'should be symbolic where material repair is impossible.',
        antiThesis: 'Symbolic gestures can feel insufficient if they are not paired with structural or material change.',
      },
      {
        opinion: 'should focus on present disadvantage rather than inherited guilt.',
        antiThesis: 'Present disadvantage is important, but ignoring historical causation can erase responsibility for accumulated harm.',
      },
      {
        opinion: 'should be designed with affected communities.',
        antiThesis: 'Affected communities may disagree internally about what repair should look like.',
      },
      {
        opinion: 'should be legally enforceable when harm can be proven.',
        antiThesis: 'Courts may struggle with evidence, jurisdiction, limitation periods, and collective historical liability.',
      },
      {
        opinion: 'should not become unlimited liability for the past.',
        antiThesis: 'Limiting liability too strictly can protect institutions that clearly benefited from historical exploitation.',
      },
      {
        opinion: 'should build future equality rather than only settle old accounts.',
        antiThesis: 'Future equality matters, but treating reparations only as future policy may avoid accountability for past wrongs.',
      },
      {
        opinion: 'should be pursued carefully to avoid new resentment.',
        antiThesis: 'Avoiding resentment is important, but justice should not depend entirely on the comfort of those who benefited.',
      },
      {
        opinion: 'should involve a full transfer of wealth from former colonial powers to those they exploited.',
        antiThesis: 'Tracing exact beneficiaries and victims across centuries is intractable; a blanket transfer would tax citizens with no connection to the wrongs and risks entrenching dependency over development.',
      },
      {
        opinion: 'should be refused entirely, since the living owe nothing for acts they did not commit.',
        antiThesis: 'The claim isn\'t inherited guilt but inherited benefit and ongoing disadvantage: institutions and wealth built on past wrongs persist, so \'the past is past\' ignores present effects.',
      },
    ],
  },
  {
    category: 'Reparations',
    keyword: 'historical injustice',
    data: [
      {
        opinion: 'should remain visible in public memory.',
        antiThesis: 'Constant focus on historical injustice may be seen by some as preventing shared identity or reconciliation.',
      },
      {
        opinion: 'should be taught honestly in schools.',
        antiThesis: 'Honest teaching must avoid guilt-based simplification or partisan storytelling.',
      },
      {
        opinion: 'should shape how institutions understand present inequality.',
        antiThesis: 'Not every present inequality can be traced directly to one historical cause.',
      },
      {
        opinion: 'should not be used to assign inherited personal guilt.',
        antiThesis: 'Rejecting inherited guilt should not prevent institutional accountability or collective repair.',
      },
      {
        opinion: 'should be acknowledged without freezing societies in the past.',
        antiThesis: 'Moving forward without repair can feel like asking victims’ descendants to absorb the cost of injustice.',
      },
      {
        opinion: 'should be measured by present consequences.',
        antiThesis: 'Measuring consequences across centuries is complex and politically contested.',
      },
      {
        opinion: 'should be addressed through universal anti-poverty policy.',
        antiThesis: 'Universal policy can help, but it may fail to address group-specific harms and inherited disadvantage.',
      },
      {
        opinion: 'should not override individual responsibility today.',
        antiThesis: 'Individual responsibility matters, but people do not start from equal historical or structural conditions.',
      },
      {
        opinion: 'should be recognised by institutions that benefited from it.',
        antiThesis: 'Modern institutions may have changed ownership, purpose, membership, or legal identity over time.',
      },
      {
        opinion: 'should be remembered without turning history into permanent blame.',
        antiThesis: 'Avoiding blame can become a way to avoid responsibility and material repair.',
      },
      {
        opinion: 'should be acknowledged and addressed through targeted investment rather than blanket payments.',
        antiThesis: 'Targeted programmes can become diluted and unaccountable, reaching neither the intended communities nor the scale the original harm demands.',
      },
      {
        opinion: 'should be left in the past, as endless accounting only deepens division.',
        antiThesis: 'Suppressing acknowledgement doesn\'t heal division; unaddressed injustice has repeatedly resurfaced more bitterly, which is what truth-and-reconciliation processes were built to prevent.',
      },
    ],
  },
  {
    category: 'Reparations',
    keyword: 'colonialism',
    data: [
      {
        opinion: 'should require reparative justice from former imperial powers.',
        antiThesis: 'Determining precise obligations is complex because empires involved many actors, periods, and successor states.',
      },
      {
        opinion: 'should be connected to present global inequality.',
        antiThesis: 'Current inequality is also shaped by governance, trade, technology, conflict, and domestic policy.',
      },
      {
        opinion: 'should lead to the return of stolen cultural objects.',
        antiThesis: 'Some objects have complex histories of ownership, preservation, research, and public access.',
      },
      {
        opinion: 'should be addressed through debt relief and development investment.',
        antiThesis: 'Debt relief and investment must avoid dependency, corruption, or new forms of foreign control.',
      },
      {
        opinion: 'should be taught as extraction, not discovery.',
        antiThesis: 'Historical language should still allow nuance because colonial encounters varied across regions and periods.',
      },
      {
        opinion: 'should not define all relationships between former colonies and former empires.',
        antiThesis: 'Minimising colonial legacy can erase how deeply extraction shaped modern wealth and institutions.',
      },
      {
        opinion: 'should be addressed through partnership rather than guilt.',
        antiThesis: 'Partnership may sound equal while leaving historic advantage and responsibility untouched.',
      },
      {
        opinion: 'should not make today’s citizens automatically liable for empire.',
        antiThesis: 'Citizens may not be personally guilty, but states and institutions can inherit benefits and obligations.',
      },
      {
        opinion: 'should require cultural, economic, and legal restitution where evidence is clear.',
        antiThesis: 'Evidence-based restitution is fair, but many harms were systemic and may not leave simple records.',
      },
      {
        opinion: 'should be treated as a living legacy without denying post-independence agency.',
        antiThesis: 'Emphasising local agency can be misused to minimise external extraction and inherited disadvantage.',
      },
      {
        opinion: 'should be reversed by returning all looted land, artefacts, and resources unconditionally.',
        antiThesis: '\'Unconditional\' return ignores genuine disputes over provenance, conservation, and successor states; many cases need negotiation precisely because ownership and capacity to preserve are contested.',
      },
      {
        opinion: 'should be judged by the standards of its own time, not condemned retrospectively.',
        antiThesis: 'Many of colonialism\'s harms were condemned as wrong even at the time, by the colonised and by contemporaries; \'standards of the day\' is selective and ignores the lasting material legacy.',
      },
    ],
  },
  {
    category: 'Reparations',
    keyword: 'slavery',
    data: [
      {
        opinion: 'should require material reparations for descendants.',
        antiThesis: 'Identifying eligible recipients and calculating compensation can be legally and politically difficult.',
      },
      {
        opinion: 'should be recognised as an economic crime as well as a moral atrocity.',
        antiThesis: 'Assigning modern financial liability across centuries can be contested.',
      },
      {
        opinion: 'should not be separated from the wealth it created.',
        antiThesis: 'Tracing exact benefits through modern families, firms, and institutions is complex.',
      },
      {
        opinion: 'should be addressed through education, compensation, and institutional reform.',
        antiThesis: 'Universal anti-poverty and anti-discrimination policies may be more administratively practical.',
      },
      {
        opinion: 'should be commemorated honestly even where compensation is disputed.',
        antiThesis: 'Commemoration without compensation can feel hollow or performative.',
      },
      {
        opinion: 'should not make people today guilty by ancestry alone.',
        antiThesis: 'Rejecting inherited guilt should not erase inherited privilege or institutional benefit.',
      },
      {
        opinion: 'should inform policies that address racial wealth gaps.',
        antiThesis: 'Wealth gaps have multiple causes, including later policy, labour markets, education, housing, and discrimination.',
      },
      {
        opinion: 'should be linked to land, labour, and capital redistribution.',
        antiThesis: 'Broad redistribution may face legal, political, and constitutional challenges.',
      },
      {
        opinion: 'should be treated as a historical debt where institutions directly profited.',
        antiThesis: 'Many institutions may dispute continuity, evidence, or responsibility for past profit.',
      },
      {
        opinion: 'should be remembered as history that demands repair, not revenge.',
        antiThesis: 'Even repair can be perceived as punishment if the public does not understand the basis for responsibility.',
      },
      {
        opinion: 'should be repaid through direct cash payments to all descendants of the enslaved.',
        antiThesis: 'Defining eligibility by descent is administratively fraught and divisive, and one-off cash transfers have a poor record of closing structural gaps compared with sustained investment in education and assets.',
      },
      {
        opinion: 'should be addressed only through equal opportunity today, never through group-based payment.',
        antiThesis: 'Formal equal opportunity doesn\'t neutralise the compounding gaps in wealth, health, and housing that descend directly from past exclusion; identical rules on unequal starts preserve the gap.',
      },
    ],
  },
  {
    category: 'Reparations',
    keyword: 'restitution',
    data: [
      {
        opinion: 'should return stolen land and cultural objects where possible.',
        antiThesis: 'Some cases involve competing claims, changed borders, preservation concerns, or current communities.',
      },
      {
        opinion: 'should prioritise communities from whom wealth or heritage was taken.',
        antiThesis: 'Those communities may not be unified or easy to define legally.',
      },
      {
        opinion: 'should include land-back movements in appropriate cases.',
        antiThesis: 'Land-back raises complex questions about current residents, sovereignty, governance, and property rights.',
      },
      {
        opinion: 'should repair cultural loss as well as economic loss.',
        antiThesis: 'Cultural repair is harder to quantify than financial compensation.',
      },
      {
        opinion: 'should require museums to return clearly stolen heritage.',
        antiThesis: 'Museums may argue they preserve, research, and display objects for broad publics.',
      },
      {
        opinion: 'should be negotiated rather than imposed whenever possible.',
        antiThesis: 'Negotiation can favour powerful institutions and delay justice indefinitely.',
      },
      {
        opinion: 'should include archives, names, language, and memory.',
        antiThesis: 'Symbolic restitution may not address material inequality.',
      },
      {
        opinion: 'should not erase complex histories of exchange, gift, trade, and preservation.',
        antiThesis: 'Complexity should not be used to obscure theft, coercion, or colonial extraction.',
      },
      {
        opinion: 'should be public, visible, and accountable.',
        antiThesis: 'Some forms of restitution may require privacy, diplomacy, or quiet negotiation.',
      },
      {
        opinion: 'should transform institutions that inherited stolen wealth.',
        antiThesis: 'Transformation may be resisted if obligations are vague, unlimited, or disconnected from clear evidence.',
      },
      {
        opinion: 'should be mandatory and enforced internationally against every state that profited from injustice.',
        antiThesis: 'No enforcement mechanism exists, and creating one would override sovereignty; the attempt would collapse into selective, politicised claims rather than justice.',
      },
      {
        opinion: 'should never cross generations, because guilt and debt cannot be inherited.',
        antiThesis: 'Property, national debt, and inheritance already cross generations routinely; if benefits descend down the line, it is inconsistent to insist obligations cannot.',
      },
    ],
  },
  {
    category: 'Transhumanism',
    keyword: 'transhumanism',
    data: [
      {
        opinion: 'should expand human possibility beyond biological limits.',
        antiThesis: 'Biological limits also shape vulnerability, meaning, equality, and human experience.',
      },
      {
        opinion: 'should be guided by human dignity, not technological obsession.',
        antiThesis: 'Technological ambition is not necessarily anti-human; many technologies already improve dignity and autonomy.',
      },
      {
        opinion: 'should be treated as a path to reduce suffering.',
        antiThesis: 'Reducing suffering is valuable, but enhancement can also deepen inequality and social pressure.',
      },
      {
        opinion: 'should be democratically debated before becoming normal.',
        antiThesis: 'Public debate matters, but public opinion may be shaped by fear or misunderstanding of complex science.',
      },
      {
        opinion: 'should be protected as individual freedom.',
        antiThesis: 'Individual choice can create collective consequences, especially if enhancement becomes social pressure.',
      },
      {
        opinion: 'should be limited before it turns the body into an upgrade market.',
        antiThesis: 'People already modify bodies through medicine, prosthetics, surgery, fitness, and pharmaceuticals.',
      },
      {
        opinion: 'should be developed through public science, not only private billionaires.',
        antiThesis: 'Private funding can accelerate expensive, risky research that public institutions may not support.',
      },
      {
        opinion: 'should be allowed to evolve through markets and consumer choice.',
        antiThesis: 'Markets may distribute enhancement unfairly and prioritise profitable upgrades over urgent medical needs.',
      },
      {
        opinion: 'should be limited by ethics before capability.',
        antiThesis: 'Excessive caution can delay therapies that prevent pain, disability, illness, or death.',
      },
      {
        opinion: 'should be judged by whom it empowers and whom it excludes.',
        antiThesis: 'Early technologies are often unequal before becoming cheaper and more widely available.',
      },
      {
        opinion: 'should advance cautiously, with enhancements allowed only once proven safe and equitable.',
        antiThesis: 'Even \'cautious and equitable\' enhancement may entrench a biological class divide once the wealthy adopt first, and equity guarantees are easy to promise and hard to enforce.',
      },
      {
        opinion: 'should be rejected entirely, since the pursuit of perfection always ends in dehumanisation.',
        antiThesis: 'Medicine has always altered the human condition; treating all enhancement as dehumanising would, on the same logic, have rejected anaesthesia and antibiotics.',
      },
    ],
  },
  {
    category: 'Transhumanism',
    keyword: 'human enhancement',
    data: [
      {
        opinion: 'should be available when it improves wellbeing.',
        antiThesis: 'Wellbeing is subjective; people may define improvement through beauty, performance, endurance, or intelligence.',
      },
      {
        opinion: 'should not create a biological class system.',
        antiThesis: 'Banning enhancement may deny beneficial tools because society failed to distribute them fairly.',
      },
      {
        opinion: 'should remain optional, never socially mandatory.',
        antiThesis: 'In competitive contexts, “optional” enhancement can become indirect pressure.',
      },
      {
        opinion: 'should be regulated before it becomes competitive coercion.',
        antiThesis: 'Too much restriction may drive enhancement markets underground or abroad.',
      },
      {
        opinion: 'should prioritise disability access over elite performance.',
        antiThesis: 'Performance research can produce technologies later used in rehabilitation and medicine.',
      },
      {
        opinion: 'should be freely chosen by adults.',
        antiThesis: 'Adult choice still requires safety standards, informed consent, and protection from exploitation.',
      },
      {
        opinion: 'should not make ordinary bodies feel obsolete.',
        antiThesis: 'Enhancement can also help people feel more capable, independent, and comfortable in their bodies.',
      },
      {
        opinion: 'should be accepted as part of human evolution.',
        antiThesis: 'Treating enhancement as inevitable may ignore ethical limits and social consequences.',
      },
      {
        opinion: 'should be separated from eugenic fantasies.',
        antiThesis: 'Some critics argue enhancement inevitably revives ideas about “better” and “worse” humans.',
      },
      {
        opinion: 'should be judged by consent, safety, and social impact.',
        antiThesis: 'Long-term consequences may remain unknown until technologies are widely used.',
      },
      {
        opinion: 'should be a universal public right, with every citizen given access to radical augmentation.',
        antiThesis: 'Guaranteeing radical, unproven augmentation as a universal entitlement commits public funds to experimental enhancement over basic care and treats irreversible bodily change as a right before its safety is shown.',
      },
      {
        opinion: 'should be banned outright as a violation of the natural and sacred human form.',
        antiThesis: '\'Natural and sacred\' has no operational meaning and, taken seriously, would ban vaccines, prosthetics, and IVF; the line between therapy and enhancement is not fixed.',
      },
      {
        opinion: 'should be left wholly to private choice and the market, with no state involvement at all.',
        antiThesis: 'A pure market in enhancement guarantees the wealthy buy capabilities the rest cannot, converting money directly into biological advantage with no public check.',
      },
    ],
  },
  {
    category: 'Transhumanism',
    keyword: 'longevity',
    data: [
      {
        opinion: 'should be pursued as freedom from unnecessary suffering.',
        antiThesis: 'Longevity research may divert resources from people suffering from poverty, disease, or unequal healthcare today.',
      },
      {
        opinion: 'should not become immortality for the rich.',
        antiThesis: 'Early medical advances often begin expensive and later become more affordable.',
      },
      {
        opinion: 'should focus on healthspan, not endless lifespan.',
        antiThesis: 'Even extending life with some decline may be meaningful to people and families.',
      },
      {
        opinion: 'should be treated as a legitimate scientific goal.',
        antiThesis: 'Treating ageing as a technical problem may neglect social, ecological, and existential questions.',
      },
      {
        opinion: 'should be public health before private luxury.',
        antiThesis: 'Private investment may fund early research that public systems cannot afford.',
      },
      {
        opinion: 'should not make death seem like a market failure.',
        antiThesis: 'Medicine has always treated many causes of death as preventable or delayable.',
      },
      {
        opinion: 'should be available through fair access, not only wealth.',
        antiThesis: 'Fair access is ideal, but expensive therapies may need private markets before broad public provision.',
      },
      {
        opinion: 'should be debated for its ecological and generational effects.',
        antiThesis: 'Longer healthy lives could preserve knowledge, caregiving, mentorship, and social contribution.',
      },
      {
        opinion: 'should respect people who find meaning in mortality.',
        antiThesis: 'Many people would still choose more healthy time for love, work, family, and experience.',
      },
      {
        opinion: 'should not distract from preventable death today.',
        antiThesis: 'Present public health and long-term longevity research can be pursued together.',
      },
      {
        opinion: 'should be pursued until death itself becomes optional for everyone, not just the rich.',
        antiThesis: 'Indefinite life extension, even if achievable, would strain resources, pensions, and political renewal, and \'for everyone\' ignores that access would almost certainly track wealth first.',
      },
      {
        opinion: 'should not be extended artificially, because mortality gives human life its meaning.',
        antiThesis: 'Meaning-from-mortality is a personal philosophy, not a basis to deny others treatments that reduce suffering and extend healthy life.',
      },
    ],
  },
  {
    category: 'Transhumanism',
    keyword: 'artificial intelligence',
    data: [
      {
        opinion: 'should augment human agency rather than replace it.',
        antiThesis: 'Replacement may be beneficial in dangerous, repetitive, or highly technical tasks.',
      },
      {
        opinion: 'should not merge with consciousness without ethical limits.',
        antiThesis: 'Brain-computer interfaces and AI assistance may restore communication, mobility, or independence.',
      },
      {
        opinion: 'should be embedded in bodies only with strong accountability.',
        antiThesis: 'Accountability is complex when users, clinicians, manufacturers, software, and data systems all interact.',
      },
      {
        opinion: 'should be used to expand cognitive accessibility.',
        antiThesis: 'Accessibility should not become a path toward competitive cognitive enhancement for the privileged.',
      },
      {
        opinion: 'should not turn thought into extractable data.',
        antiThesis: 'Neural data may be necessary to operate therapeutic brain-computer interfaces.',
      },
      {
        opinion: 'should support cognitive enhancement where adults consent.',
        antiThesis: 'Consent may be pressured if cognitive enhancement becomes necessary for work or education.',
      },
      {
        opinion: 'should not make identity dependent on machine integration.',
        antiThesis: 'Assistive and cognitive technologies can become meaningful parts of selfhood for some people.',
      },
      {
        opinion: 'should be developed boldly for human augmentation.',
        antiThesis: 'Bold development can create safety, inequality, privacy, and responsibility risks.',
      },
      {
        opinion: 'should remain transparent when integrated into human decisions.',
        antiThesis: 'Invisible assistance may sometimes feel more natural, accessible, and effective.',
      },
      {
        opinion: 'should not blur responsibility between humans and machines.',
        antiThesis: 'Many complex systems already involve shared responsibility between people, tools, institutions, and technology.',
      },
      {
        opinion: 'should be merged with human minds to create a new and superior form of being.',
        antiThesis: 'Brain-computer merging at this level is speculative and raises unresolved questions of autonomy, hacking, and identity; calling the result \'superior\' smuggles in a value judgment many reject.',
      },
    ],
  },
  {
    category: 'Transhumanism',
    keyword: 'biotechnology',
    data: [
      {
        opinion: 'should heal before it enhances.',
        antiThesis: 'The line between healing and enhancement is often unclear in ageing, fertility, mental health, and prevention.',
      },
      {
        opinion: 'should be allowed to prevent serious inherited disease.',
        antiThesis: 'Germline intervention raises ethical concerns about consent, inheritance, and future generations.',
      },
      {
        opinion: 'should not edit future generations without democratic consent.',
        antiThesis: 'Democratic control over reproduction and medicine can threaten individual freedom.',
      },
      {
        opinion: 'should be governed internationally.',
        antiThesis: 'Countries differ in values, risk tolerance, health systems, and innovation priorities.',
      },
      {
        opinion: 'should not make genetic advantage purchasable.',
        antiThesis: 'Banning all genetic intervention could block prevention of severe disease.',
      },
      {
        opinion: 'should protect genetic privacy.',
        antiThesis: 'Genetic data can support diagnosis, family health knowledge, research, and public health.',
      },
      {
        opinion: 'should be market-driven where it accelerates cures.',
        antiThesis: 'Market incentives may prioritise profitable therapies over neglected diseases and fair access.',
      },
      {
        opinion: 'should not reduce people to genetic potential.',
        antiThesis: 'Genetic knowledge can still help prevent disease and personalise treatment.',
      },
      {
        opinion: 'should be publicly accountable when it changes human inheritance.',
        antiThesis: 'Excessive public control may slow research and restrict reproductive autonomy.',
      },
      {
        opinion: 'should never separate scientific possibility from moral responsibility.',
        antiThesis: 'Moral disagreement should not automatically prevent research that could save or improve lives.',
      },
      {
        opinion: 'should be used to redesign the human species and end disease, ageing, and suffering.',
        antiThesis: '\'Redesigning the species\' assumes a consensus on what to optimise that doesn\'t exist, and germline-scale engineering risks irreversible errors propagated to all descendants.',
      },
      {
        opinion: 'should never alter the human germline, which must be preserved unchanged for all descendants.',
        antiThesis: 'An absolute germline ban would block correcting devastating heritable disease; the case for caution is strong, but \'never under any circumstance\' forecloses real medical good.',
      },
    ],
  },
  {
    category: 'Productivity',
    keyword: 'productivity',
    data: [
      {
        opinion: 'should serve life, not consume it.',
        antiThesis: 'Productivity can improve life by reducing waste, raising incomes, and creating more resources.',
      },
      {
        opinion: 'should not be treated as the highest measure of human worth.',
        antiThesis: 'Human worth is not productivity, but productivity remains important for organisations, economies, and services.',
      },
      {
        opinion: 'should be judged by meaningful outcomes, not constant activity.',
        antiThesis: 'Activity and process can still build discipline, reliability, and long-term results.',
      },
      {
        opinion: 'should be increased to raise prosperity and living standards.',
        antiThesis: 'Higher productivity does not automatically improve lives if gains are not fairly distributed.',
      },
      {
        opinion: 'should be measured alongside wellbeing.',
        antiThesis: 'Some roles still require clear output metrics to maintain accountability and performance.',
      },
      {
        opinion: 'should reward speed when speed improves service and access.',
        antiThesis: 'Speed can create mistakes and reduce care when it becomes the dominant value.',
      },
      {
        opinion: 'should not turn every moment into optimisation.',
        antiThesis: 'Optimisation can also reduce stress, clarify priorities, and help people use time intentionally.',
      },
      {
        opinion: 'should be encouraged as a form of discipline and responsibility.',
        antiThesis: 'Discipline matters, but productivity should not become moral superiority or self-exploitation.',
      },
      {
        opinion: 'should be designed around human limits.',
        antiThesis: 'Ambitious goals sometimes require intense effort, sacrifice, and temporary pressure.',
      },
      {
        opinion: 'should create more freedom through better systems.',
        antiThesis: 'Productivity only creates freedom if institutions share gains through time, pay, autonomy, or conditions.',
      },
      {
        opinion: 'should no longer be the measure of human worth, with output decoupled from dignity.',
        antiThesis: 'Severing reward from output weakens the incentive to contribute, yet societies still depend on someone producing the goods and services everyone consumes.',
      },
      {
        opinion: 'should be maximised relentlessly, because a society\'s wealth depends on how hard it works.',
        antiThesis: 'Relentless maximisation produces burnout, error, and turnover that ultimately cut output; rested workers are measurably more productive, not less.',
      },
      {
        opinion: 'should be driven by competition alone, with no state limits on hours or intensity.',
        antiThesis: 'Unlimited hours create a race to the bottom where everyone works more for no collective gain; hour limits exist because individual \'choice\' is coerced by competition.',
      },
    ],
  },
  {
    category: 'Productivity',
    keyword: 'work',
    data: [
      {
        opinion: 'should be organised around dignity rather than extraction.',
        antiThesis: 'Work should be dignified, but organisations also need efficiency, performance, and financial sustainability.',
      },
      {
        opinion: 'should not demand permanent availability.',
        antiThesis: 'Some professions, clients, emergencies, and leadership roles require availability beyond standard hours.',
      },
      {
        opinion: 'should make space for rest, learning, and recovery.',
        antiThesis: 'Excessive flexibility can create coordination problems and uneven workloads.',
      },
      {
        opinion: 'should be evaluated by impact rather than hours.',
        antiThesis: 'Hours remain relevant in roles requiring presence, coverage, or service time.',
      },
      {
        opinion: 'should reward commitment, reliability, and effort.',
        antiThesis: 'Effort matters, but rewarding effort alone can confuse busyness with value.',
      },
      {
        opinion: 'should not punish people for having lives outside it.',
        antiThesis: 'Organisations may still require deadlines, commitment, and reliability.',
      },
      {
        opinion: 'should allow people to do fewer things better.',
        antiThesis: 'Some jobs require multitasking, responsiveness, and handling many small responsibilities.',
      },
      {
        opinion: 'should be structured to prevent burnout.',
        antiThesis: 'Burnout prevention matters, but individuals, teams, and leaders all share responsibility.',
      },
      {
        opinion: 'should recognise that intense periods can be necessary.',
        antiThesis: 'Intensity can become exploitative when it is normalised as permanent commitment.',
      },
      {
        opinion: 'should balance clarity, cooperation, care, and measurable delivery.',
        antiThesis: 'Balancing all four is difficult when commercial pressure rewards speed and output.',
      },
      {
        opinion: 'should be drastically reduced, with a four-day or three-day week guaranteed to all by law.',
        antiThesis: 'Mandating a short week across all sectors ignores that care, emergency, and agricultural work can\'t simply compress, and the gains that fund shorter hours vary enormously by industry.',
      },
      {
        opinion: 'should remain central to life, since idleness erodes both character and community.',
        antiThesis: 'Equating worth with paid work devalues caregivers, retirees, and the jobless, and ignores how much human value is created outside the labour market.',
      },
    ],
  },
  {
    category: 'Productivity',
    keyword: 'efficiency',
    data: [
      {
        opinion: 'should eliminate waste without eliminating humanity.',
        antiThesis: 'Efficiency can feel dehumanising, but it can reduce frustration, cost, duplication, and unnecessary labour.',
      },
      {
        opinion: 'should not be used as an excuse for understaffing.',
        antiThesis: 'Efficiency improvements can sometimes allow teams to do more with fewer resources.',
      },
      {
        opinion: 'should be pursued aggressively when it lowers costs.',
        antiThesis: 'Lower costs can come at the expense of quality, dignity, security, or resilience.',
      },
      {
        opinion: 'should simplify systems rather than intensify surveillance.',
        antiThesis: 'Some monitoring may be necessary for safety, compliance, quality, or coordination.',
      },
      {
        opinion: 'should not sacrifice quality for speed.',
        antiThesis: 'Speed can also be part of quality when users need fast answers, delivery, or support.',
      },
      {
        opinion: 'should support creativity through better systems.',
        antiThesis: 'Standards and processes can also reduce errors and make creative work easier to scale.',
      },
      {
        opinion: 'should remove friction where reflection is unnecessary.',
        antiThesis: 'Too much friction-removal can reduce thoughtfulness and make people reactive.',
      },
      {
        opinion: 'should be ethical before it is profitable.',
        antiThesis: 'Profitability keeps organisations alive and able to employ people.',
      },
      {
        opinion: 'should not make workers feel replaceable.',
        antiThesis: 'Efficiency often involves changing roles, tools, and expectations over time.',
      },
      {
        opinion: 'should be measured by what it improves, not only what it cuts.',
        antiThesis: 'Cost-cutting can itself improve access, affordability, and long-term survival.',
      },
      {
        opinion: 'should serve human flourishing, not endless growth, even at the cost of slower output.',
        antiThesis: 'Slower output isn\'t free: it means fewer resources for health, research, and the safety net that flourishing depends on—growth and wellbeing aren\'t simple opposites.',
      },
      {
        opinion: 'should override comfort, because every wasted hour is a cost borne by everyone.',
        antiThesis: 'Treating rest as waste is self-defeating: recovery, slack, and redundancy are exactly what make people and systems resilient to shocks.',
      },
    ],
  },
  {
    category: 'Productivity',
    keyword: 'time management',
    data: [
      {
        opinion: 'should protect attention from constant interruption.',
        antiThesis: 'Collaboration, responsiveness, and availability also matter in many roles.',
      },
      {
        opinion: 'should not turn life into a calendar prison.',
        antiThesis: 'Calendars help people honour priorities, commitments, deadlines, and rest.',
      },
      {
        opinion: 'should include rest as a serious commitment.',
        antiThesis: 'Rigidly scheduling rest may not work for everyone or every type of work.',
      },
      {
        opinion: 'should make priorities visible.',
        antiThesis: 'Life often requires flexibility for unexpected needs, emotions, and opportunities.',
      },
      {
        opinion: 'should respect slowness when slowness creates depth.',
        antiThesis: 'Unnecessary slowness can waste resources and delay important decisions.',
      },
      {
        opinion: 'should help people say no.',
        antiThesis: 'Excessive refusal can damage trust, collaboration, and shared responsibility.',
      },
      {
        opinion: 'should protect creative wandering.',
        antiThesis: 'Without boundaries, creative wandering can become avoidance or inefficiency.',
      },
      {
        opinion: 'should respect different rhythms of energy.',
        antiThesis: 'Teams still need coordination, deadlines, and shared availability.',
      },
      {
        opinion: 'should reduce urgency culture.',
        antiThesis: 'Some situations genuinely require urgent action.',
      },
      {
        opinion: 'should help people act faster when decisions are low-risk.',
        antiThesis: 'Acting too fast can create avoidable mistakes and shallow thinking.',
      },
      {
        opinion: 'should be taught widely so people can balance ambition with rest and meaning.',
        antiThesis: 'Individual time-management advice often shifts systemic overwork onto personal responsibility, blaming workers for pressures they can\'t manage alone.',
      },
    ],
  },
  {
    category: 'Productivity',
    keyword: 'hustle culture',
    data: [
      {
        opinion: 'should be rejected as a model of success.',
        antiThesis: 'Ambition and intense work can help people build skills, businesses, and opportunities.',
      },
      {
        opinion: 'should not make burnout look heroic.',
        antiThesis: 'Resilience and perseverance remain valuable when not pushed to destructive extremes.',
      },
      {
        opinion: 'should be replaced by sustainable ambition.',
        antiThesis: 'Some goals require exceptional effort for limited periods.',
      },
      {
        opinion: 'should not shame rest as laziness.',
        antiThesis: 'Rest matters, but discipline and effort are still necessary for mastery and reliability.',
      },
      {
        opinion: 'should recognise ambition as legitimate.',
        antiThesis: 'Ambition becomes harmful when it turns insecurity into constant self-exploitation.',
      },
      {
        opinion: 'should not turn self-worth into output.',
        antiThesis: 'Achievement can still be a meaningful source of confidence, identity, and purpose.',
      },
      {
        opinion: 'should stop romanticising sacrifice.',
        antiThesis: 'Freely chosen sacrifice can be part of love, ambition, entrepreneurship, art, or service.',
      },
      {
        opinion: 'should be understood differently for founders, artists, and employees.',
        antiThesis: 'Context matters, but hustle narratives can still normalise exhaustion across all groups.',
      },
      {
        opinion: 'should be challenged in schools, workplaces, and media.',
        antiThesis: 'Young people also need to learn effort, persistence, and responsibility.',
      },
      {
        opinion: 'should make success compatible with health.',
        antiThesis: 'Society may still reward exceptional output in competitive fields.',
      },
      {
        opinion: 'should be dismantled as a system that extracts the most from workers for the least reward.',
        antiThesis: 'Not all drive is extraction; for many, intense effort is how they build skills, businesses, and mobility, and a blanket cultural verdict erases that agency.',
      },
      {
        opinion: 'should be celebrated as the engine of innovation and personal advancement.',
        antiThesis: 'Most innovation comes from focused, well-resourced effort, not glorified overwork; the hustle ideal often dresses precarity and exploitation up as aspiration.',
      },
    ],
  },
  {
    category: 'Tariffs',
    keyword: 'tariffs',
    data: [
      {
        opinion: 'should protect domestic industries from unfair foreign competition.',
        antiThesis: 'Tariffs may protect some firms, but they can raise consumer prices and reduce choice.',
      },
      {
        opinion: 'should be used when other countries subsidise exports.',
        antiThesis: 'Retaliatory tariffs can escalate into trade wars that harm both economies.',
      },
      {
        opinion: 'should defend national economic sovereignty.',
        antiThesis: 'Excessive tariffs can isolate economies and reduce the benefits of global trade.',
      },
      {
        opinion: 'should be targeted rather than applied broadly.',
        antiThesis: 'Targeted tariffs can still create loopholes, lobbying battles, and administrative complexity.',
      },
      {
        opinion: 'should protect strategic sectors such as food, energy, and technology.',
        antiThesis: 'Shielding sectors too much can reduce competitiveness, innovation, and efficiency.',
      },
      {
        opinion: 'should be temporary tools, not permanent walls.',
        antiThesis: 'Temporary measures often become permanent because protected industries lobby to keep them.',
      },
      {
        opinion: 'should be avoided because they act like hidden taxes on consumers.',
        antiThesis: 'Consumers may accept higher prices if tariffs protect jobs, security, or ethical production.',
      },
      {
        opinion: 'should only be used after diplomatic remedies fail.',
        antiThesis: 'Diplomacy can be too slow when unfair practices are causing immediate industrial harm.',
      },
      {
        opinion: 'should be designed with workers and consumers in mind.',
        antiThesis: 'Worker and consumer interests can conflict when protection raises prices.',
      },
      {
        opinion: 'should not replace serious industrial policy.',
        antiThesis: 'Tariffs can still be one useful tool alongside investment, training, infrastructure, and innovation.',
      },
      {
        opinion: 'should be imposed heavily on all imports to protect national workers from foreign competition.',
        antiThesis: 'Across-the-board tariffs are a regressive tax that hits the poorest consumers hardest, protecting a few jobs at high cost per job while raising prices for everyone.',
      },
      {
        opinion: 'should be used selectively and temporarily to cushion industries during transition.',
        antiThesis: '\'Temporary\' tariffs notoriously become permanent as protected industries lobby to keep them, so transition support via tariffs invites capture.',
      },
      {
        opinion: 'should be eliminated entirely, since they are simply a tax on a nation\'s own citizens.',
        antiThesis: 'Tariffs do tax one\'s own consumers, but eliminating all trade defence leaves no recourse against subsidised dumping that can wipe out otherwise viable producers.',
      },
    ],
  },
  {
    category: 'Tariffs',
    keyword: 'free trade',
    data: [
      {
        opinion: 'should be defended because it lowers prices and expands choice.',
        antiThesis: 'Low prices may depend on exploitation, weak labour standards, or environmental damage abroad.',
      },
      {
        opinion: 'should not override national labour standards.',
        antiThesis: 'Trade can also raise incomes and create jobs in poorer countries.',
      },
      {
        opinion: 'should be conditioned on environmental responsibility.',
        antiThesis: 'Strict environmental conditions may disadvantage developing economies with fewer resources.',
      },
      {
        opinion: 'should support global development rather than only rich economies.',
        antiThesis: 'Global trade can still create dependency and unequal bargaining power.',
      },
      {
        opinion: 'should be governed by predictable international rules.',
        antiThesis: 'Rules can protect stability, but they may also constrain national industrial strategy.',
      },
      {
        opinion: 'should be judged by workers’ lives, not only GDP.',
        antiThesis: 'GDP and productivity still help measure whether economies generate resources and opportunity.',
      },
      {
        opinion: 'should allow countries to specialise in what they do best.',
        antiThesis: 'Specialisation can create dangerous dependency during crises or geopolitical disruption.',
      },
      {
        opinion: 'should be fair before it is open.',
        antiThesis: 'Countries may disagree strongly about what “fair” means, making trade harder to manage.',
      },
      {
        opinion: 'should not let corporations chase the cheapest labour.',
        antiThesis: 'International production can also create employment and development opportunities.',
      },
      {
        opinion: 'should be redesigned around resilience, not just efficiency.',
        antiThesis: 'Too much self-sufficiency can make economies more expensive and less competitive.',
      },
      {
        opinion: 'should be subordinated to national self-sufficiency in food, energy, and defence.',
        antiThesis: 'Full self-sufficiency in food, energy, and defence is enormously costly and often impossible; autarky historically yields shortages and low quality, not security.',
      },
      {
        opinion: 'should be total and unrestricted, abolishing every tariff and quota worldwide.',
        antiThesis: 'Pure free trade ignores legitimate concerns—dumping, strategic goods, labour and environmental standards—that even committed free-traders address with targeted measures.',
      },
    ],
  },
  {
    category: 'Tariffs',
    keyword: 'protectionism',
    data: [
      {
        opinion: 'should rebuild weakened domestic industries.',
        antiThesis: 'Protection can protect inefficient firms and delay necessary adaptation.',
      },
      {
        opinion: 'should defend workers from global wage competition.',
        antiThesis: 'Protection can raise costs and harm workers in export industries or import-dependent sectors.',
      },
      {
        opinion: 'should be democratic rather than nationalist.',
        antiThesis: 'Even democratic protectionism can provoke retaliation from trading partners.',
      },
      {
        opinion: 'should not be dismissed as irrational.',
        antiThesis: 'Protectionism can become politically popular even when economically damaging.',
      },
      {
        opinion: 'should support essential production capacity.',
        antiThesis: 'Not every product can or should be produced domestically at any cost.',
      },
      {
        opinion: 'should be rejected when it protects inefficient corporations.',
        antiThesis: 'Deciding which firms are inefficient and which are strategically important can be difficult.',
      },
      {
        opinion: 'should be paired with skills, technology, and investment.',
        antiThesis: 'Governments may fail to enforce performance conditions on protected industries.',
      },
      {
        opinion: 'should be limited because competition drives innovation.',
        antiThesis: 'Open competition can destroy important industries before they have time to modernise.',
      },
      {
        opinion: 'should protect communities from sudden deindustrialisation.',
        antiThesis: 'Preserving declining industries can delay transition to future sectors.',
      },
      {
        opinion: 'should be accountable to measurable social goals.',
        antiThesis: 'Protectionist measures are often hard to remove once politically entrenched.',
      },
      {
        opinion: 'should be used aggressively to rebuild domestic industry whatever the cost to consumers.',
        antiThesis: 'Heavy protection raises input costs across the whole economy and invites retaliation that destroys export jobs, while sheltered industries tend to stagnate rather than modernise.',
      },
      {
        opinion: 'should be rejected outright as a relic that makes everyone poorer over time.',
        antiThesis: 'Protectionism\'s costs are real, but \'everyone poorer\' glosses over the concentrated, lasting harm to communities when industries vanish faster than workers can adjust.',
      },
    ],
  },
  {
    category: 'Tariffs',
    keyword: 'consumers',
    data: [
      {
        opinion: 'should not pay hidden taxes through tariffs.',
        antiThesis: 'Higher prices may be justified if they protect jobs, security, or ethical production.',
      },
      {
        opinion: 'should know when tariffs increase prices.',
        antiThesis: 'Price changes also reflect exchange rates, transport, margins, shortages, and supply shocks.',
      },
      {
        opinion: 'should not be sacrificed for corporate protection.',
        antiThesis: 'Domestic firms may need protection when foreign competitors benefit from subsidies or weak standards.',
      },
      {
        opinion: 'should benefit from open competition.',
        antiThesis: 'Completely open competition can expose domestic firms to unfairly subsidised imports.',
      },
      {
        opinion: 'should not carry the cost of symbolic trade politics.',
        antiThesis: 'Tariffs may sometimes be used as bargaining tools to negotiate better trade terms.',
      },
      {
        opinion: 'should have access to affordable essential goods.',
        antiThesis: 'Relying on cheap imports for essentials can create vulnerability during crises.',
      },
      {
        opinion: 'should not be misled into thinking tariffs are free.',
        antiThesis: 'Tariff costs may still be politically justified if they preserve strategic capacity.',
      },
      {
        opinion: 'should be protected from price spikes caused by trade wars.',
        antiThesis: 'Avoiding all trade conflict may allow unfair practices to continue unchecked.',
      },
      {
        opinion: 'should not be the only priority in trade policy.',
        antiThesis: 'Ignoring consumers can make policy regressive, especially for low-income households.',
      },
      {
        opinion: 'should benefit from supply chains that are fair and affordable.',
        antiThesis: 'Fair and affordable supply chains are difficult when ethical production raises costs.',
      },
      {
        opinion: 'should always come first, with trade policy judged only by the lowest possible prices.',
        antiThesis: 'Lowest price ignores resilience and distribution: the cheapest supply chain can be the most fragile, as recent shortages of chips and medicines showed.',
      },
    ],
  },
  {
    category: 'Tariffs',
    keyword: 'supply chains',
    data: [
      {
        opinion: 'should be more resilient than merely cheap.',
        antiThesis: 'Cost efficiency keeps goods affordable and businesses competitive.',
      },
      {
        opinion: 'should not depend on forced labour or exploitation.',
        antiThesis: 'Verifying labour conditions across complex global supply chains is difficult.',
      },
      {
        opinion: 'should be diversified to reduce geopolitical risk.',
        antiThesis: 'Diversification can increase costs and reduce economies of scale.',
      },
      {
        opinion: 'should prioritise essential goods during crises.',
        antiThesis: 'Governments must avoid overcorrecting into permanent inefficiency.',
      },
      {
        opinion: 'should be transparent enough to reveal hidden harm.',
        antiThesis: 'Full disclosure may expose trade secrets or sensitive supplier relationships.',
      },
      {
        opinion: 'should include regional production where possible.',
        antiThesis: 'Some regions lack the resources, skills, or scale to produce everything efficiently.',
      },
      {
        opinion: 'should not be designed only around lowest cost.',
        antiThesis: 'Cost still matters for affordability, access, and competitiveness.',
      },
      {
        opinion: 'should remain global because interdependence can reduce conflict.',
        antiThesis: 'Interdependence can also become a source of coercion when states weaponise trade.',
      },
      {
        opinion: 'should be protected from monopolistic control.',
        antiThesis: 'Large suppliers can sometimes provide reliability, scale, and lower prices.',
      },
      {
        opinion: 'should make trade ethical, profitable, and resilient at the same time.',
        antiThesis: 'Achieving all three is difficult because ethics, profit, and resilience often require trade-offs.',
      },
      {
        opinion: 'should be reshored entirely, even if prices rise sharply, to end dependence on rivals.',
        antiThesis: 'Total reshoring sacrifices the gains from specialisation; some dependence is cheaper and can be managed through diversification rather than blanket relocation.',
      },
      {
        opinion: 'should follow pure comparative advantage wherever in the world it leads.',
        antiThesis: 'Comparative advantage assumes away adjustment costs, strategic vulnerability, and market power; pure adherence can leave a country dependent on a rival for essentials.',
      },
    ],
  },
  {
    category: 'Migration',
    keyword: 'migration',
    data: [
      {
        opinion: 'should be understood as a normal part of human history.',
        antiThesis: 'Migration is historically normal, but modern states still need legal systems to manage entry, residence, work, and citizenship.',
      },
      {
        opinion: 'should be treated as an opportunity, not automatically as a crisis.',
        antiThesis: 'Sudden large-scale migration can create real pressure on housing, schools, healthcare, and public administration.',
      },
      {
        opinion: 'should be governed by dignity rather than fear.',
        antiThesis: 'Dignity matters, but governments must also consider security, infrastructure, public consent, and integration capacity.',
      },
      {
        opinion: 'should be easier for people fleeing poverty, violence, or climate collapse.',
        antiThesis: 'Broad eligibility may be difficult to manage without clear criteria and international coordination.',
      },
      {
        opinion: 'should be organised through safe and legal routes.',
        antiThesis: 'Safe routes reduce exploitation, but governments may fear that demand will exceed capacity.',
      },
      {
        opinion: 'should be managed according to labour-market needs.',
        antiThesis: 'Labour-market logic can reduce migrants to economic utility and ignore humanitarian obligations.',
      },
      {
        opinion: 'should benefit both newcomers and host societies.',
        antiThesis: 'Benefits may be unevenly distributed across regions, sectors, and income groups.',
      },
      {
        opinion: 'should not be used as a political scapegoat.',
        antiThesis: 'Migration should not be scapegoated, but communities should still be allowed to debate real pressures and policy failures.',
      },
      {
        opinion: 'should be limited when institutions cannot absorb rapid change.',
        antiThesis: 'Capacity problems often reflect underinvestment, not migration itself.',
      },
      {
        opinion: 'should be judged by human lives, social cohesion, and institutional capacity together.',
        antiThesis: 'Balancing all three is difficult because humanitarian urgency and political capacity often conflict.',
      },
      {
        opinion: 'should be unlimited, with every person free to live and work wherever they choose.',
        antiThesis: 'Absorption capacity—housing, schools, infrastructure—is real and finite; ignoring it produces the strain and backlash that ultimately close borders harder.',
      },
      {
        opinion: 'should be managed by points and quotas balancing economic need with social capacity.',
        antiThesis: 'Points systems can be gamed and slow, and \'capacity\' judgments are easily politicised to justify whatever number is wanted.',
      },
      {
        opinion: 'should be halted almost entirely to preserve national identity and social trust.',
        antiThesis: 'National identity has repeatedly absorbed and been enriched by migration; treating it as fixed ignores history, and near-zero migration carries severe demographic and economic costs.',
      },
    ],
  },
  {
    category: 'Migration',
    keyword: 'borders',
    data: [
      {
        opinion: 'should protect rights as much as territory.',
        antiThesis: 'Borders also exist to regulate entry, enforce laws, and define political membership.',
      },
      {
        opinion: 'should not decide whose suffering deserves compassion.',
        antiThesis: 'Compassion may be universal, but states usually prioritise citizens, residents, and legally recognised protection claims.',
      },
      {
        opinion: 'should be open to people fleeing serious danger.',
        antiThesis: 'Protection is necessary, but open access without processing can strain asylum systems and resources.',
      },
      {
        opinion: 'should never be militarised against vulnerable people.',
        antiThesis: 'States may argue that enforcement is needed to prevent trafficking, smuggling, and uncontrolled crossings.',
      },
      {
        opinion: 'should be managed transparently and humanely.',
        antiThesis: 'Some border operations may require confidentiality for safety and security reasons.',
      },
      {
        opinion: 'should include humanitarian exceptions.',
        antiThesis: 'If exceptions are too broad or vague, they can become difficult to apply consistently.',
      },
      {
        opinion: 'should be secure enough to prevent trafficking and exploitation.',
        antiThesis: 'Excessive border enforcement can push migrants into more dangerous routes and increase dependence on smugglers.',
      },
      {
        opinion: 'should be controlled by democratic states, not criminal networks.',
        antiThesis: 'Strict border control can strengthen criminal networks when legal alternatives are too limited.',
      },
      {
        opinion: 'should be defended as part of national sovereignty.',
        antiThesis: 'Sovereignty matters, but border control must still respect human rights and refugee obligations.',
      },
      {
        opinion: 'should separate security from cruelty.',
        antiThesis: 'The line between firm enforcement and cruelty is often politically contested.',
      },
      {
        opinion: 'should be abolished entirely, since free movement is a basic human right.',
        antiThesis: 'No welfare state or labour standard survives unlimited entry; abolishing borders would either collapse public services or force their dismantling, harming the poorest most.',
      },
      {
        opinion: 'should be tightly controlled, with migration cut to the minimum a nation requires.',
        antiThesis: 'Cutting migration to the bare minimum starves care, agriculture, and tech of workers, accelerating the ageing crises that strain public finances.',
      },
    ],
  },
  {
    category: 'Migration',
    keyword: 'immigrants',
    data: [
      {
        opinion: 'should be treated as future neighbours, not permanent outsiders.',
        antiThesis: 'Inclusion supports cohesion, but legal status, language, work, and civic adaptation still matter.',
      },
      {
        opinion: 'should have access to basic rights regardless of status.',
        antiThesis: 'Some argue that full access to public services should depend on lawful residence and contribution.',
      },
      {
        opinion: 'should not be blamed for problems caused by policy failure.',
        antiThesis: 'Migration can still interact with housing, wages, schools, and services in ways that require planning.',
      },
      {
        opinion: 'should be protected from labour exploitation.',
        antiThesis: 'Protection requires enforcing labour law against employers, not only changing immigration policy.',
      },
      {
        opinion: 'should be recognised for their economic and cultural contributions.',
        antiThesis: 'Contributions are real, but policy should also acknowledge integration costs and uneven local impacts.',
      },
      {
        opinion: 'should not be forced to erase their culture to belong.',
        antiThesis: 'Cultural preservation matters, but shared civic norms and language access are also important.',
      },
      {
        opinion: 'should learn the language and laws of the country they join.',
        antiThesis: 'Language and civic knowledge help integration, but access to classes, time, and support is not always equal.',
      },
      {
        opinion: 'should have pathways to permanent residence when they contribute long-term.',
        antiThesis: 'Pathways must also consider legal entry, background checks, civic requirements, and public confidence.',
      },
      {
        opinion: 'should not live under permanent suspicion.',
        antiThesis: 'Governments may still need identity checks, legal verification, and security screening.',
      },
      {
        opinion: 'should be welcomed, but integration should be mutual and realistic.',
        antiThesis: '“Realistic integration” can sometimes become a vague excuse for exclusion or cultural pressure.',
      },
      {
        opinion: 'should be admitted only where they bring clear skills the country specifically lacks.',
        antiThesis: 'A purely skills-gated system ignores family ties, refugee obligations, and the lower-paid essential work that economies actually depend on.',
      },
    ],
  },
  {
    category: 'Migration',
    keyword: 'refugees',
    data: [
      {
        opinion: 'should never be returned to places where they face danger.',
        antiThesis: 'States may disagree about what counts as danger and what evidence is required.',
      },
      {
        opinion: 'should be given safe routes before they risk deadly journeys.',
        antiThesis: 'Governments may worry that demand for safe routes will exceed available resettlement capacity.',
      },
      {
        opinion: 'should be welcomed with dignity rather than suspicion.',
        antiThesis: 'Dignity is essential, but states still need to verify identity, assess claims, and manage limited resources.',
      },
      {
        opinion: 'should have the right to work while rebuilding their lives.',
        antiThesis: 'Work rights support independence, but critics argue they may incentivise weak claims if decision systems are slow.',
      },
      {
        opinion: 'should be housed in communities rather than isolated camps.',
        antiThesis: 'Community housing supports integration, but capacity, cost, and local acceptance can make it difficult.',
      },
      {
        opinion: 'should have access to education from the moment they arrive.',
        antiThesis: 'Education is vital, but schools may need language support, trauma services, and extra resources.',
      },
      {
        opinion: 'should be supported through international responsibility-sharing.',
        antiThesis: 'Countries often disagree about quotas, funding, enforcement, and fairness.',
      },
      {
        opinion: 'should not be treated as temporary burdens.',
        antiThesis: 'Refugees can contribute, but rapid arrivals can create short-term pressure on housing and services.',
      },
      {
        opinion: 'should receive protection, but asylum systems should process claims efficiently.',
        antiThesis: 'Efficiency reduces uncertainty, but fast processing can create errors in complex cases.',
      },
      {
        opinion: 'should be protected from political scapegoating while asylum policy remains open to debate.',
        antiThesis: 'Debate is necessary, but public debate can easily become hostile or dehumanising.',
      },
      {
        opinion: 'should be welcomed without cap or condition by every wealthy nation.',
        antiThesis: 'A system with no cap or screening can\'t distinguish refugees from others, eroding the public consent that protects the refugee system itself.',
      },
      {
        opinion: 'should be helped in their own regions rather than resettled in the destination country.',
        antiThesis: 'Regional hosting is underfunded and overwhelmed; \'help them there\' usually means dumping the burden on poorer neighbours and abandoning resettlement duties.',
      },
    ],
  },
  {
    category: 'Migration',
    keyword: 'integration',
    data: [
      {
        opinion: 'should be a two-way process between newcomers and host societies.',
        antiThesis: 'Two-way integration is ideal, but newcomers often carry greater practical responsibility to learn laws, language, and institutions.',
      },
      {
        opinion: 'should include language, work, housing, education, and belonging.',
        antiThesis: 'Providing all of this requires funding, coordination, and long-term political commitment.',
      },
      {
        opinion: 'should not demand cultural erasure.',
        antiThesis: 'Shared civic norms and social trust require some common ground.',
      },
      {
        opinion: 'should be supported by public investment.',
        antiThesis: 'Governments must balance integration spending with other public priorities.',
      },
      {
        opinion: 'should involve employers, schools, councils, and communities.',
        antiThesis: 'Coordination across institutions can be slow, uneven, and difficult to fund.',
      },
      {
        opinion: 'should be measured by dignity, not assimilation.',
        antiThesis: 'Some indicators such as employment, language proficiency, and civic participation are still useful.',
      },
      {
        opinion: 'should protect migrants from isolation.',
        antiThesis: 'Some migrants may choose close-knit communities as a source of safety, culture, and support.',
      },
      {
        opinion: 'should require respect for democratic values and equal rights.',
        antiThesis: 'Civic expectations are legitimate, but they must not become a cover for hostility toward cultural difference.',
      },
      {
        opinion: 'should make societies more open and resilient.',
        antiThesis: 'Rapid demographic change can create anxiety if institutions fail to manage it well.',
      },
      {
        opinion: 'should turn migration into shared belonging.',
        antiThesis: 'Belonging cannot be legislated instantly; it requires time, trust, contact, and mutual responsibility.',
      },
      {
        opinion: 'should be voluntary, with newcomers free to keep their culture entirely unchanged.',
        antiThesis: 'Purely voluntary integration risks low-trust parallel societies; shared language and civic norms are what let diverse populations actually function together.',
      },
      {
        opinion: 'should be compulsory, requiring full adoption of the host nation\'s language and customs.',
        antiThesis: 'Forced assimilation breeds resentment and resistance, and conflates integration—shared civic life—with erasure of identity, which is neither necessary nor effective.',
      },
    ],
  },
  {
    category: 'Urbanisation',
    keyword: 'urbanisation',
    data: [
      {
        opinion: 'should make cities more liveable, not merely larger.',
        antiThesis: 'Larger cities can also offer more jobs, services, culture, education, and mobility.',
      },
      {
        opinion: 'should be planned around human wellbeing.',
        antiThesis: 'Wellbeing matters, but economic growth often funds the infrastructure that makes wellbeing possible.',
      },
      {
        opinion: 'should support density where it improves access and sustainability.',
        antiThesis: 'Density can create overcrowding, noise, stress, and pressure on services if poorly managed.',
      },
      {
        opinion: 'should protect local communities from displacement.',
        antiThesis: 'Strong anti-displacement rules can also slow redevelopment, housing supply, and infrastructure upgrades.',
      },
      {
        opinion: 'should be guided by social need before real estate profit.',
        antiThesis: 'Real estate investment can finance regeneration, housing construction, and urban infrastructure.',
      },
      {
        opinion: 'should allow private development where it increases housing supply.',
        antiThesis: 'Private development may prioritise profit, luxury units, or speculation over affordability.',
      },
      {
        opinion: 'should respect the memory and identity of neighbourhoods.',
        antiThesis: 'Cities also need to evolve as populations, economies, and technologies change.',
      },
      {
        opinion: 'should not turn cities into playgrounds for the wealthy.',
        antiThesis: 'High-end development can generate jobs, taxes, investment, and public-space improvements if regulated.',
      },
      {
        opinion: 'should be democratic, not imposed from above.',
        antiThesis: 'Excessive consultation can delay urgent housing, transit, and climate-resilience projects.',
      },
      {
        opinion: 'should balance growth, affordability, ecology, and social cohesion.',
        antiThesis: 'Balancing all four is difficult because each goal often requires trade-offs.',
      },
      {
        opinion: 'should be planned centrally to build dense, car-free cities at maximum speed.',
        antiThesis: 'Top-down master planning has a poor record—it produced alienating estates and mass displacement; good urbanism is usually incremental and responsive, not imposed at speed.',
      },
      {
        opinion: 'should be resisted in favour of dispersed living, since dense cities erode freedom.',
        antiThesis: 'Dispersed living is land- and carbon-intensive and car-dependent; density is exactly what makes transit, services, and low-emission life economically viable.',
      },
    ],
  },
  {
    category: 'Urbanisation',
    keyword: 'housing',
    data: [
      {
        opinion: 'should be treated as essential infrastructure, not luxury investment.',
        antiThesis: 'Housing is essential, but private ownership and investment can also support construction and wealth-building.',
      },
      {
        opinion: 'should be affordable in every growing city.',
        antiThesis: 'High-demand cities face land scarcity, construction costs, regulation, and population pressure.',
      },
      {
        opinion: 'should not be sacrificed to speculation.',
        antiThesis: 'Investment can also finance new housing, renovation, and regeneration.',
      },
      {
        opinion: 'should include social, cooperative, and public models.',
        antiThesis: 'Private markets may provide more flexibility, speed, variety, and capital.',
      },
      {
        opinion: 'should be built near transport, schools, work, and services.',
        antiThesis: 'Existing urban layouts and land availability can make this difficult.',
      },
      {
        opinion: 'should not force people into endless commuting.',
        antiThesis: 'Not everyone can live near work because of family needs, job distribution, and budget constraints.',
      },
      {
        opinion: 'should be easier to build where demand is high.',
        antiThesis: 'Faster building can still produce unaffordable housing if affordability rules are weak.',
      },
      {
        opinion: 'should protect renters from insecurity.',
        antiThesis: 'Strong tenant protections can reduce landlord flexibility and discourage rental supply.',
      },
      {
        opinion: 'should allow ownership as a path to stability.',
        antiThesis: 'Ownership can create stability for some while excluding those priced out of the market.',
      },
      {
        opinion: 'should be governed by both supply and fairness.',
        antiThesis: 'Supply and fairness often conflict when new development increases prices or changes neighbourhoods.',
      },
      {
        opinion: 'should be fully decommodified, with all homes owned publicly and allocated by need.',
        antiThesis: 'Fully public housing systems have struggled with maintenance, queues, and political allocation; removing all price signals tends to produce the very shortages it aims to end.',
      },
      {
        opinion: 'should be left entirely to the market, with all zoning and rent rules abolished.',
        antiThesis: 'Pure deregulation can boost supply but also enables unsafe, speculative building; fire safety, light, and habitability rules exist for reasons beyond mere restriction.',
      },
      {
        opinion: 'should be a pure investment asset, with owners free to profit without restriction.',
        antiThesis: 'Treating homes mainly as investments inflates prices beyond what residents can pay, hollowing out cities and fuelling the affordability crises that destabilise them.',
      },
    ],
  },
  {
    category: 'Urbanisation',
    keyword: 'transport',
    data: [
      {
        opinion: 'should make city life possible without needing a car.',
        antiThesis: 'Cars remain necessary for some people, especially disabled residents, families, workers, and peripheral communities.',
      },
      {
        opinion: 'should prioritise pedestrians, cyclists, and public transit.',
        antiThesis: 'Deliveries, emergency vehicles, tradespeople, and some residents still need vehicle access.',
      },
      {
        opinion: 'should connect poorer and peripheral areas to opportunity.',
        antiThesis: 'Expanding transport networks is expensive and requires long-term maintenance.',
      },
      {
        opinion: 'should be affordable enough for daily life.',
        antiThesis: 'Transport systems also need revenue for reliability, safety, workers, and infrastructure.',
      },
      {
        opinion: 'should reduce pollution, noise, and wasted time.',
        antiThesis: 'Redesigning transport can be disruptive and politically unpopular during transition.',
      },
      {
        opinion: 'should not make streets hostile to children, elders, or disabled people.',
        antiThesis: 'Street redesign can create conflicts over parking, traffic flow, deliveries, and emergency access.',
      },
      {
        opinion: 'should be integrated across buses, trains, cycling, and walking.',
        antiThesis: 'Integration requires coordination between agencies, budgets, technologies, and jurisdictions.',
      },
      {
        opinion: 'should use pricing to reduce congestion.',
        antiThesis: 'Congestion pricing can be regressive if alternatives are weak or unaffordable.',
      },
      {
        opinion: 'should preserve reasonable car access where alternatives are poor.',
        antiThesis: 'Preserving car access can slow the shift toward cleaner, safer, more efficient mobility.',
      },
      {
        opinion: 'should shape urban growth around proximity.',
        antiThesis: 'People still need regional mobility for specialised jobs, healthcare, education, and family life.',
      },
      {
        opinion: 'should be free and public everywhere, with private cars banned from all cities.',
        antiThesis: 'Banning cars outright strands those beyond transit reach—disabled, shift, and edge-of-city workers—and free transit without funding tends to degrade in quality.',
      },
      {
        opinion: 'should prioritise private vehicles and roads, which give citizens true independence.',
        antiThesis: 'Car-centric design imposes congestion, pollution, and vast public road costs, and actually reduces mobility for the young, old, and poor who can\'t drive.',
      },
    ],
  },
  {
    category: 'Urbanisation',
    keyword: 'public space',
    data: [
      {
        opinion: 'should belong to everyone, not only consumers.',
        antiThesis: 'Commercial activity can also make streets lively, maintained, safer, and economically viable.',
      },
      {
        opinion: 'should protect the right to gather, rest, and protest.',
        antiThesis: 'Cities must also manage safety, sanitation, accessibility, and conflicting uses.',
      },
      {
        opinion: 'should not be designed to exclude homeless people.',
        antiThesis: 'Cities also face pressure to manage safety, maintenance, and competing public-space needs.',
      },
      {
        opinion: 'should include shade, benches, toilets, trees, and water.',
        antiThesis: 'These amenities require funding, cleaning, security, and maintenance.',
      },
      {
        opinion: 'should make urban life less lonely.',
        antiThesis: 'Loneliness also depends on work patterns, housing, culture, technology, and mental health.',
      },
      {
        opinion: 'should be protected from over-policing.',
        antiThesis: 'Some public spaces need safety measures to prevent violence, harassment, vandalism, or intimidation.',
      },
      {
        opinion: 'should celebrate local culture rather than erase it.',
        antiThesis: 'Cities are also shaped by newcomers, hybridity, experimentation, and change.',
      },
      {
        opinion: 'should allow private partnerships when they improve maintenance.',
        antiThesis: 'Private partnerships can introduce branding, exclusion, surveillance, or commercial priorities.',
      },
      {
        opinion: 'should make democracy physically visible.',
        antiThesis: 'Democratic participation also happens through institutions, media, digital spaces, and private associations.',
      },
      {
        opinion: 'should balance openness, safety, and shared responsibility.',
        antiThesis: 'Openness, safety, and shared responsibility often conflict in crowded urban environments.',
      },
      {
        opinion: 'should be expanded by seizing private land for parks, transit, and the commons.',
        antiThesis: 'Large-scale expropriation chills investment and faces legitimate property claims; cities expand green space far more durably through planning and purchase than seizure.',
      },
      {
        opinion: 'should be minimised in favour of private development that generates tax revenue.',
        antiThesis: 'Selling public space for short-term revenue degrades the shared amenity that underpins property values and public health in the first place.',
      },
    ],
  },
  {
    category: 'Urbanisation',
    keyword: 'green cities',
    data: [
      {
        opinion: 'should make nature part of everyday urban life.',
        antiThesis: 'Cities also need space for housing, transport, jobs, and infrastructure.',
      },
      {
        opinion: 'should treat trees as essential infrastructure.',
        antiThesis: 'Trees require water, maintenance, careful species selection, and coordination with utilities.',
      },
      {
        opinion: 'should protect people from heat, flooding, and pollution.',
        antiThesis: 'Adaptation projects can be expensive and may raise rents if not paired with anti-displacement measures.',
      },
      {
        opinion: 'should not use sustainability as a luxury aesthetic.',
        antiThesis: 'High-quality sustainable design can initially cost more and attract investment.',
      },
      {
        opinion: 'should include parks within walking distance of every neighbourhood.',
        antiThesis: 'Dense cities may struggle to find land without displacing housing or services.',
      },
      {
        opinion: 'should prioritise biodiversity, not only decoration.',
        antiThesis: 'Urban landscapes must also be safe, accessible, manageable, and compatible with daily use.',
      },
      {
        opinion: 'should reduce car dependence through design.',
        antiThesis: 'Some residents and businesses still depend on vehicles for logistics, accessibility, and work.',
      },
      {
        opinion: 'should be financed through public investment.',
        antiThesis: 'Public budgets are limited, and private capital may accelerate delivery.',
      },
      {
        opinion: 'should connect environmental planning with housing justice.',
        antiThesis: 'Combining both goals can make projects more complex, expensive, and slower to deliver.',
      },
      {
        opinion: 'should prove that urban life can regenerate rather than consume nature.',
        antiThesis: 'Cities will always consume resources and depend on wider regional and global systems.',
      },
      {
        opinion: 'should be designed around walkability, mixed use, and abundant shared green space.',
        antiThesis: 'Even excellent design can lift land values and displace existing residents through green gentrification unless paired with affordability measures it doesn\'t itself guarantee.',
      },
    ],
  },
  {
    category: 'Surveillance',
    keyword: 'surveillance',
    data: [
      {
        opinion: 'should be treated as a form of power.',
        antiThesis: 'Surveillance can create power imbalances, but some monitoring is necessary for safety, fraud prevention, and public services.',
      },
      {
        opinion: 'should never become normal in everyday life.',
        antiThesis: 'Some everyday monitoring, such as CCTV or cybersecurity logs, can protect people and infrastructure.',
      },
      {
        opinion: 'should be limited by law, not corporate convenience.',
        antiThesis: 'Companies may also need internal monitoring to prevent abuse, fraud, and security breaches.',
      },
      {
        opinion: 'should not be accepted as the price of security.',
        antiThesis: 'Societies may accept limited surveillance when it helps prevent serious threats or violence.',
      },
      {
        opinion: 'should require public justification wherever possible.',
        antiThesis: 'Some investigations require confidentiality to remain effective.',
      },
      {
        opinion: 'should be proportionate to real risk.',
        antiThesis: 'Risk is often difficult to measure before harm occurs.',
      },
      {
        opinion: 'should not expand permanently after every crisis.',
        antiThesis: 'Temporary surveillance may remain useful after a crisis if the threat persists.',
      },
      {
        opinion: 'should be dismantled when it cannot prove public benefit.',
        antiThesis: 'Preventive benefits can be hard to prove because success often means harm did not happen.',
      },
      {
        opinion: 'should not turn suspicion into governance.',
        antiThesis: 'Some oversight is needed to detect fraud, crime, corruption, and institutional abuse.',
      },
      {
        opinion: 'should balance freedom, safety, privacy, and accountability.',
        antiThesis: 'Balancing these values is difficult because each can conflict with the others in practice.',
      },
      {
        opinion: 'should be permitted only with a warrant, narrow scope, and strict judicial oversight.',
        antiThesis: 'Warrant systems are routinely under-scrutinised and expanded by exception, so \'narrow and overseen\' can quietly become broad and rubber-stamped.',
      },
      {
        opinion: 'should be embraced as the foundation of a safe and orderly society.',
        antiThesis: 'A society whose order rests on total observation is not safe but controlled; the apparatus that catches criminals catches critics just as easily.',
      },
    ],
  },
  {
    category: 'Surveillance',
    keyword: 'state surveillance',
    data: [
      {
        opinion: 'should be strictly controlled by democratic oversight.',
        antiThesis: 'Too much disclosure can weaken intelligence operations and criminal investigations.',
      },
      {
        opinion: 'should never target people for beliefs alone.',
        antiThesis: 'Authorities may still monitor credible threats linked to organised violence or extremism.',
      },
      {
        opinion: 'should require warrants for invasive monitoring.',
        antiThesis: 'Urgent cases may require fast action before formal approval is possible.',
      },
      {
        opinion: 'should not be justified by vague national-security claims.',
        antiThesis: 'Some national-security risks cannot be fully disclosed publicly without compromising safety.',
      },
      {
        opinion: 'should protect citizens without treating them as suspects.',
        antiThesis: 'Broad systems may sometimes detect patterns that individual suspicion would miss.',
      },
      {
        opinion: 'should be available for serious crime and terrorism investigations.',
        antiThesis: 'Security powers can be abused if oversight, warrants, and limits are weak.',
      },
      {
        opinion: 'should not be used against journalists or activists.',
        antiThesis: 'Journalists and activists are not automatically exempt from investigation if credible criminal evidence exists.',
      },
      {
        opinion: 'should be audited by independent institutions.',
        antiThesis: 'Auditors may lack full access, technical expertise, or political independence.',
      },
      {
        opinion: 'should expire automatically unless renewed publicly.',
        antiThesis: 'Frequent renewal processes can slow necessary security work.',
      },
      {
        opinion: 'should preserve social trust rather than replace it.',
        antiThesis: 'Trust alone cannot prevent organised crime, corruption, terrorism, or foreign interference.',
      },
      {
        opinion: 'should be abolished entirely, with mass monitoring banned as incompatible with freedom.',
        antiThesis: 'Targeted, warranted surveillance is essential to disrupting terrorism and organised crime; the remedy for mass surveillance is strict limits, not eliminating investigative power.',
      },
      {
        opinion: 'should be expanded widely, because pervasive monitoring prevents crime and terror.',
        antiThesis: 'Broad surveillance has a weak preventive record and a strong chilling effect on dissent; the safety gains are usually marginal against the rights cost.',
      },
    ],
  },
  {
    category: 'Surveillance',
    keyword: 'corporate surveillance',
    data: [
      {
        opinion: 'should not turn users into products.',
        antiThesis: 'Data-driven business models can fund free or low-cost digital services.',
      },
      {
        opinion: 'should require meaningful consent.',
        antiThesis: 'Constant consent requests can overwhelm users and reduce genuine understanding.',
      },
      {
        opinion: 'should not hide behind unreadable privacy policies.',
        antiThesis: 'Data practices can be technically and legally complex, making simplification difficult.',
      },
      {
        opinion: 'should not track people across the internet.',
        antiThesis: 'Cross-site tracking can support advertising, analytics, and small-business marketing.',
      },
      {
        opinion: 'should be limited by data minimisation.',
        antiThesis: 'Broader datasets can reveal useful patterns and improve services.',
      },
      {
        opinion: 'should be allowed when users knowingly exchange data for services.',
        antiThesis: 'Consent may be pressured when users depend on platforms for work, communication, or social life.',
      },
      {
        opinion: 'should make profit impossible without accountability.',
        antiThesis: 'Excessive compliance burdens may disadvantage small firms more than large platforms.',
      },
      {
        opinion: 'should not use dark patterns to obtain consent.',
        antiThesis: 'Companies still need practical ways to explain options and collect permissions.',
      },
      {
        opinion: 'should be punishable when it exposes people to harm.',
        antiThesis: 'Liability must be clear, evidence-based, and proportionate to avoid arbitrary punishment.',
      },
      {
        opinion: 'should be replaced by privacy-first business models where possible.',
        antiThesis: 'Privacy-first models may require subscriptions or higher prices that not everyone can afford.',
      },
      {
        opinion: 'should be outlawed, ending all tracking and profiling of private individuals.',
        antiThesis: 'A total ban would break fraud prevention, security, and many valued free services; the workable answer is consent and limits, not prohibiting all data use.',
      },
      {
        opinion: 'should be free to operate, as users consent in exchange for free services.',
        antiThesis: '\'Consent\' buried in terms isn\'t real agreement; the asymmetry between users and platforms is exactly why baseline data protections exist.',
      },
    ],
  },
  {
    category: 'Surveillance',
    keyword: 'workplace surveillance',
    data: [
      {
        opinion: 'should not treat employees like machines.',
        antiThesis: 'Some monitoring can support safety, coordination, compliance, and quality control.',
      },
      {
        opinion: 'should require worker consent and representation.',
        antiThesis: 'Employers may need monitoring systems to meet legal, operational, or safety obligations.',
      },
      {
        opinion: 'should not measure every click, pause, or movement.',
        antiThesis: 'Activity data can reveal workload problems, bottlenecks, or unfair expectations.',
      },
      {
        opinion: 'should be banned when it creates fear.',
        antiThesis: 'Some necessary monitoring may still feel uncomfortable to employees.',
      },
      {
        opinion: 'should protect safety rather than enforce obedience.',
        antiThesis: 'Workplaces also need accountability, performance standards, and reliability.',
      },
      {
        opinion: 'should not replace human management.',
        antiThesis: 'Automated systems can improve consistency and reduce arbitrary decisions.',
      },
      {
        opinion: 'should be transparent to every worker affected by it.',
        antiThesis: 'Too much detail may allow manipulation of metrics or security systems.',
      },
      {
        opinion: 'should not punish natural rhythms of work.',
        antiThesis: 'Organisations still need deadlines, availability, and measurable delivery.',
      },
      {
        opinion: 'should be negotiated, not imposed.',
        antiThesis: 'Urgent compliance or safety needs may require faster implementation.',
      },
      {
        opinion: 'should never make dignity conditional on productivity.',
        antiThesis: 'Workplaces still need to evaluate productivity to survive and pay people.',
      },
      {
        opinion: 'should be prohibited completely, as monitoring workers is a violation of dignity.',
        antiThesis: 'Some monitoring is legitimate for safety, security, and accountability; an absolute ban ignores genuine employer interests and the law\'s existing proportionality tests.',
      },
      {
        opinion: 'should be normal, since employers have every right to monitor what they pay for.',
        antiThesis: 'Pervasive monitoring erodes trust, autonomy, and mental health, and frequently reduces the very productivity it claims to protect.',
      },
    ],
  },
  {
    category: 'Surveillance',
    keyword: 'digital privacy',
    data: [
      {
        opinion: 'should protect people from permanent observation.',
        antiThesis: 'Some records and logs are necessary for security, fraud prevention, and accountability.',
      },
      {
        opinion: 'should include the right to be forgotten.',
        antiThesis: 'Some records must remain for legal, historical, financial, or public-interest reasons.',
      },
      {
        opinion: 'should not depend on technical expertise.',
        antiThesis: 'Users still benefit from basic digital literacy to understand risks and trade-offs.',
      },
      {
        opinion: 'should be built into platforms by default.',
        antiThesis: 'Restrictive defaults may reduce functionality, convenience, and personalisation.',
      },
      {
        opinion: 'should prevent data from becoming destiny.',
        antiThesis: 'Historical data can help improve services, detect risks, and prevent fraud.',
      },
      {
        opinion: 'should not be traded away through forced consent.',
        antiThesis: 'Some services genuinely require data to function safely and effectively.',
      },
      {
        opinion: 'should protect intimate life from exposure.',
        antiThesis: 'Technology alone cannot prevent coercion, screenshots, leaks, malware, or social pressure.',
      },
      {
        opinion: 'should make anonymous participation possible.',
        antiThesis: 'Anonymity can also enable harassment, scams, fraud, and abuse.',
      },
      {
        opinion: 'should survive innovation.',
        antiThesis: 'Overly rigid privacy rules may slow beneficial research, accessibility, and technology.',
      },
      {
        opinion: 'should be stronger than convenience culture.',
        antiThesis: 'Convenience can improve accessibility, efficiency, safety, and quality of life.',
      },
      {
        opinion: 'should be an absolute right that overrides every commercial and security interest.',
        antiThesis: 'An absolute right overriding every safety interest would shield serious crime; rights are balanced in every legal system precisely because none is truly absolute.',
      },
      {
        opinion: 'should yield wherever it conflicts with public safety or commercial efficiency.',
        antiThesis: 'Trading privacy for efficiency builds infrastructure of control that outlasts the emergency that justified it; convenience is a poor reason to surrender it.',
      },
    ],
  },
  {
    category: 'Populism',
    keyword: 'populism',
    data: [
      {
        opinion: 'should be understood as a symptom of democratic failure.',
        antiThesis: 'Populism can signal democratic frustration, but it can also mobilise citizens who feel ignored by elites.',
      },
      {
        opinion: 'should not be dismissed as ignorance.',
        antiThesis: 'Populist support may reflect real grievances, but populist movements can also spread simplistic or misleading narratives.',
      },
      {
        opinion: 'should be taken seriously without being romanticised.',
        antiThesis: 'Excessive focus on populist grievances may normalise anti-democratic or exclusionary rhetoric.',
      },
      {
        opinion: 'should expose the distance between institutions and citizens.',
        antiThesis: 'Populism may reveal disconnection, but it often exaggerates the conflict between “the people” and “the elite.”',
      },
      {
        opinion: 'should not replace complexity with slogans.',
        antiThesis: 'Slogans can oversimplify, but they can also make politics accessible and emotionally resonant.',
      },
      {
        opinion: 'should challenge elites when they ignore ordinary people.',
        antiThesis: 'Challenging elites is legitimate, but populism can turn accountability into conspiracy thinking.',
      },
      {
        opinion: 'should be resisted when it attacks pluralism.',
        antiThesis: 'Populist movements may argue that pluralism is often used by elites to block majority demands.',
      },
      {
        opinion: 'should be analysed across both left and right.',
        antiThesis: 'Left and right populisms can differ greatly in targets, methods, and democratic risks.',
      },
      {
        opinion: 'should not be confused with popular democracy.',
        antiThesis: 'Popular democracy needs mass participation, and not all populist energy is anti-democratic.',
      },
      {
        opinion: 'should remind democracies to listen before resentment becomes rage.',
        antiThesis: 'Listening matters, but democracies should not reward intimidation, scapegoating, or misinformation.',
      },
      {
        opinion: 'should be embraced as the only authentic voice of the ordinary majority against the few.',
        antiThesis: 'Claiming to be the sole \'authentic\' voice delegitimises all opposition as illegitimate; that move, not the grievances behind it, is what corrodes democracy.',
      },
      {
        opinion: 'should be tempered by strong institutions that protect minorities from the majority.',
        antiThesis: 'Strong counter-majoritarian institutions can themselves entrench unaccountable elites and frustrate legitimate reform; \'protecting minorities\' can shield privilege.',
      },
      {
        opinion: 'should be rejected outright as a path that always ends in authoritarian rule.',
        antiThesis: 'Not all popular mobilisation is authoritarian; movements elites once called \'populist\' expanded suffrage and rights, so the blanket warning proves too much.',
      },
    ],
  },
  {
    category: 'Populism',
    keyword: 'the people',
    data: [
      {
        opinion: 'should never be used as a weapon against minorities.',
        antiThesis: 'Majorities matter in democracy, but rights exist precisely to protect minorities from majoritarian abuse.',
      },
      {
        opinion: 'should include disagreement, not only unity.',
        antiThesis: 'Shared identity and collective purpose can strengthen democracy and political action.',
      },
      {
        opinion: 'should not be reduced to one leader’s voice.',
        antiThesis: 'Charismatic leaders can sometimes articulate demands that institutions have ignored.',
      },
      {
        opinion: 'should be represented without being mythologised.',
        antiThesis: 'Political myths can distort reality, but they can also create solidarity and civic energy.',
      },
      {
        opinion: 'should not be defined by exclusion.',
        antiThesis: 'Every political community has boundaries of membership, citizenship, and belonging.',
      },
      {
        opinion: 'should be trusted with democratic power.',
        antiThesis: 'Democratic power also requires institutions, rights, expertise, and checks.',
      },
      {
        opinion: 'should not be manipulated through fear.',
        antiThesis: 'Fear may be manipulated, but it can also reflect real insecurity, crime, poverty, or cultural displacement.',
      },
      {
        opinion: 'should be heard beyond election season.',
        antiThesis: 'Constant mobilisation can exhaust citizens and destabilise governance.',
      },
      {
        opinion: 'should not be treated as a single moral bloc.',
        antiThesis: 'Political movements often need simplified collective identities to organise action.',
      },
      {
        opinion: 'should have more direct influence over major decisions.',
        antiThesis: 'Direct democracy can be vulnerable to misinformation, short-term emotion, and majority pressure.',
      },
      {
        opinion: 'should rule directly through referendums, bypassing parliaments and parties entirely.',
        antiThesis: 'Government by continuous referendum is vulnerable to manipulation, low information, and the tyranny of transient majorities; representative bodies exist to deliberate and protect minorities.',
      },
      {
        opinion: 'should be guided by an educated and expert class better equipped to govern wisely.',
        antiThesis: 'Rule by experts lacks democratic legitimacy and has its own blind spots and capture; technocracy that ignores consent breeds the very populist backlash it fears.',
      },
    ],
  },
  {
    category: 'Populism',
    keyword: 'elites',
    data: [
      {
        opinion: 'should be held accountable without becoming conspiracy villains.',
        antiThesis: 'Elite accountability is necessary, but conspiracy thinking can replace evidence with suspicion.',
      },
      {
        opinion: 'should not control democracy from above.',
        antiThesis: 'Expertise and institutional experience can support effective governance in complex societies.',
      },
      {
        opinion: 'should be challenged when they ignore ordinary life.',
        antiThesis: 'Not every expert or institutional decision that is unpopular is anti-democratic.',
      },
      {
        opinion: 'should not hide behind complexity to avoid accountability.',
        antiThesis: 'Many policy issues are genuinely difficult and require technical knowledge.',
      },
      {
        opinion: 'should not treat public anger as irrational.',
        antiThesis: 'Public anger can be meaningful, but it can also be misdirected, manipulated, or based on false claims.',
      },
      {
        opinion: 'should earn trust rather than demand it.',
        antiThesis: 'Constant distrust can make institutions unable to function.',
      },
      {
        opinion: 'should not use respectability to silence dissent.',
        antiThesis: 'Norms of civility can also prevent intimidation, degradation, and political violence.',
      },
      {
        opinion: 'should be replaced when they become insulated from consequences.',
        antiThesis: 'Abruptly replacing experienced institutions can create instability and incompetence.',
      },
      {
        opinion: 'should not confuse technocracy with democracy.',
        antiThesis: 'Evidence-based decision-making is necessary for complex societies.',
      },
      {
        opinion: 'should be made answerable to the communities they affect.',
        antiThesis: 'National policy must also balance competing interests across regions and groups.',
      },
      {
        opinion: 'should be stripped of their disproportionate power over media, finance, and politics.',
        antiThesis: '\'Elite\' is elastic enough to target the judges, journalists, and scientists whose independence checks power, and concentrating that decision in one leader is how democracies decay.',
      },
      {
        opinion: 'should be defended, since complex societies require trained leadership, not mob rule.',
        antiThesis: 'Defending elites wholesale ignores real, justified grievances about unaccountable power; dismissing them as mere ignorance is exactly what fuels populism.',
      },
    ],
  },
  {
    category: 'Populism',
    keyword: 'demagoguery',
    data: [
      {
        opinion: 'should be recognised before it captures institutions.',
        antiThesis: 'Accusing opponents of demagoguery can itself become a way to delegitimise dissent.',
      },
      {
        opinion: 'should not be rewarded with media spectacle.',
        antiThesis: 'Ignoring demagogues may leave their claims unchallenged and their audiences uncontested.',
      },
      {
        opinion: 'should be challenged through facts and moral clarity.',
        antiThesis: 'Demagoguery often works through emotion, identity, grievance, and distrust of fact-checkers.',
      },
      {
        opinion: 'should not turn politics into permanent enemies.',
        antiThesis: 'Some political movements do promote real threats that must be named clearly.',
      },
      {
        opinion: 'should be exposed when it manufactures crisis.',
        antiThesis: 'Some crises are real and deserve urgent political response.',
      },
      {
        opinion: 'should not replace policy with performance.',
        antiThesis: 'Political communication must also inspire, persuade, and mobilise citizens.',
      },
      {
        opinion: 'should be resisted when it attacks truth itself.',
        antiThesis: 'Public distrust often grows when institutions have previously misled or failed people.',
      },
      {
        opinion: 'should not make cruelty feel like strength.',
        antiThesis: 'Voters may interpret toughness as protection when they feel insecure.',
      },
      {
        opinion: 'should be confronted without censoring political debate.',
        antiThesis: 'Platforms and institutions may still limit incitement, threats, and targeted harassment.',
      },
      {
        opinion: 'should lose power through stronger democratic culture.',
        antiThesis: 'Demagogues can thrive even in democracies when inequality, distrust, or fear is high.',
      },
      {
        opinion: 'should be guarded against by entrenched constitutional limits on majority power.',
        antiThesis: 'Entrenched limits can freeze a constitution against needed change and hand unelected courts the final word over democratic majorities.',
      },
    ],
  },
  {
    category: 'Populism',
    keyword: 'democracy',
    data: [
      {
        opinion: 'should answer populist anger with real reform.',
        antiThesis: 'Not every populist demand is democratic, feasible, or rights-respecting.',
      },
      {
        opinion: 'should protect institutions without ignoring public frustration.',
        antiThesis: 'Defending institutions without reform can look like protecting the status quo.',
      },
      {
        opinion: 'should make participation meaningful between elections.',
        antiThesis: 'Too many participatory processes can slow decision-making and favour the most vocal groups.',
      },
      {
        opinion: 'should not allow majorities to erase minority rights.',
        antiThesis: 'Democratic systems also need to respect majority decision-making within constitutional limits.',
      },
      {
        opinion: 'should rebuild trust through transparency and accountability.',
        antiThesis: 'Transparency without context can fuel cynicism and conspiracy thinking.',
      },
      {
        opinion: 'should be protected from leaders who attack checks and balances.',
        antiThesis: 'Checks and balances can also become gridlock if institutions refuse necessary change.',
      },
      {
        opinion: 'should address inequality before populism weaponises it.',
        antiThesis: 'Populism is also driven by cultural identity, status anxiety, media ecosystems, and distrust.',
      },
      {
        opinion: 'should not mistake elite stability for justice.',
        antiThesis: 'Stability can protect institutions, rights, and social peace.',
      },
      {
        opinion: 'should make disagreement safer and more productive.',
        antiThesis: 'Deep moral conflicts cannot always be softened through dialogue.',
      },
      {
        opinion: 'should defeat populism by becoming more responsive.',
        antiThesis: 'Democracies must not become hostage to every wave of anger, misinformation, or anti-pluralist pressure.',
      },
      {
        opinion: 'should be radically direct, with citizens deciding all major questions themselves.',
        antiThesis: 'Most major questions require sustained expertise and trade-offs that snap votes handle badly, so deciding everything directly tends to produce incoherent or captured outcomes.',
      },
      {
        opinion: 'should be constrained by independent courts and experts insulated from popular passion.',
        antiThesis: 'Insulating too much from the electorate hollows out democracy itself, since legitimacy requires that the people\'s choices actually shape outcomes.',
      },
    ],
  },
  {
    category: 'Automation',
    keyword: 'automation',
    data: [
      {
        opinion: 'should reduce human drudgery, not human dignity.',
        antiThesis: 'Automation can remove repetitive work, but it may also remove jobs that provide income, structure, and identity.',
      },
      {
        opinion: 'should be adopted quickly where it improves safety and efficiency.',
        antiThesis: 'Fast adoption can create displacement, inequality, and accountability problems if poorly managed.',
      },
      {
        opinion: 'should serve people before productivity metrics.',
        antiThesis: 'Productivity metrics matter because they reduce waste, lower costs, and improve service delivery.',
      },
      {
        opinion: 'should be guided by market demand and business needs.',
        antiThesis: 'Market demand may prioritise profit over workers, communities, and public interest.',
      },
      {
        opinion: 'should not make workers economically disposable.',
        antiThesis: 'Automation can also create new roles, industries, and forms of skilled employment.',
      },
      {
        opinion: 'should be introduced with retraining and transition support.',
        antiThesis: 'Too many conditions may slow adoption and make companies less competitive.',
      },
      {
        opinion: 'should be democratically debated when it transforms society.',
        antiThesis: 'Waiting for broad consensus can delay beneficial technologies and create uncertainty.',
      },
      {
        opinion: 'should expand freedom from unnecessary labour.',
        antiThesis: 'Many people still want meaningful work, purpose, routine, and contribution.',
      },
      {
        opinion: 'should be judged by who benefits from it.',
        antiThesis: 'It should also be judged by safety, quality, reliability, productivity, and innovation.',
      },
      {
        opinion: 'should balance innovation, efficiency, dignity, and shared prosperity.',
        antiThesis: 'Balancing these goals is difficult because efficiency gains often create winners and losers.',
      },
      {
        opinion: 'should be pushed to its limit so that human labour is abolished and people are freed.',
        antiThesis: 'A jobless society needs a tested distribution mechanism that doesn\'t yet exist; rushing to abolish labour without it risks mass destitution, not liberation.',
      },
      {
        opinion: 'should be introduced gradually, with retraining and support for every affected worker.',
        antiThesis: 'Retraining has a mixed record and often can\'t move displaced workers into comparable pay; \'gradual\' can mean slow decline rather than real protection.',
      },
      {
        opinion: 'should advance without limit, since blocking technology only entrenches inefficiency.',
        antiThesis: 'Unmanaged automation can devastate regions faster than they adapt, and the resulting political backlash has repeatedly proven costlier than managed transition.',
      },
      {
        opinion: 'should be embraced fully, even if it concentrates wealth, because growth lifts all in time.',
        antiThesis: 'Extreme concentration of automation\'s gains undermines the consumer demand and social stability the economy needs; \'growth lifts all in time\' has often failed the displaced.',
      },
    ],
  },
  {
    category: 'Automation',
    keyword: 'workers',
    data: [
      {
        opinion: 'should share directly in the gains from automation.',
        antiThesis: 'Companies that invest in automation need returns for risk, capital, maintenance, and innovation.',
      },
      {
        opinion: 'should not be replaced without retraining and support.',
        antiThesis: 'Not every displaced worker can or wants to transition into newly created roles.',
      },
      {
        opinion: 'should have a voice in how automation is introduced.',
        antiThesis: 'Management may need speed, confidentiality, and technical flexibility when implementing systems.',
      },
      {
        opinion: 'should not be monitored by automated systems without clear limits.',
        antiThesis: 'Some monitoring may be necessary for safety, compliance, scheduling, quality control, or fraud prevention.',
      },
      {
        opinion: 'should benefit from shorter hours when productivity rises.',
        antiThesis: 'Higher productivity may also be used to raise wages, reduce prices, or invest in growth.',
      },
      {
        opinion: 'should not be protected from every technological change.',
        antiThesis: 'Without protection, technological change can create insecurity, wage pressure, and regional decline.',
      },
      {
        opinion: 'should be treated as partners in technological change.',
        antiThesis: 'Some workers may resist useful automation because of fear, uncertainty, or lack of trust.',
      },
      {
        opinion: 'should not lose bargaining power because machines can replace them.',
        antiThesis: 'Automation naturally changes scarcity and bargaining power in some sectors.',
      },
      {
        opinion: 'should be supported before layoffs become inevitable.',
        antiThesis: 'Companies may not always know which roles will be affected until implementation is advanced.',
      },
      {
        opinion: 'should not be reduced to data points in automated management.',
        antiThesis: 'Workplace data can reveal workload problems, safety risks, bias, and inefficiency.',
      },
      {
        opinion: 'should collectively own the machines that replace them and share fully in the gains.',
        antiThesis: 'Worker ownership of capital is appealing but hard to finance and scale; someone must still bear investment risk, and collective ownership has struggled to do so competitively.',
      },
      {
        opinion: 'should adapt to automation themselves, as no one is owed a particular job forever.',
        antiThesis: '\'Just adapt\' ignores age, location, and capital constraints; treating displacement as purely individual responsibility externalises corporate decisions onto workers.',
      },
    ],
  },
  {
    category: 'Automation',
    keyword: 'jobs',
    data: [
      {
        opinion: 'should be redesigned around human strengths.',
        antiThesis: 'Some tasks may be better performed entirely by machines due to speed, precision, or safety.',
      },
      {
        opinion: 'should not disappear faster than societies can adapt.',
        antiThesis: 'Slowing automation may reduce competitiveness and delay useful innovation.',
      },
      {
        opinion: 'should become more creative, relational, and meaningful.',
        antiThesis: 'Many necessary jobs involve routine, maintenance, logistics, administration, and repetition.',
      },
      {
        opinion: 'should not be preserved only because they exist today.',
        antiThesis: 'Rapid job loss can destabilise families, communities, and local economies.',
      },
      {
        opinion: 'should be transformed with education and reskilling.',
        antiThesis: 'Reskilling cannot solve all displacement, especially for older workers or regions with few alternatives.',
      },
      {
        opinion: 'should be protected when they provide essential social value.',
        antiThesis: 'Social value still requires funding, demand, and organisational sustainability.',
      },
      {
        opinion: 'should be measured by dignity as well as output.',
        antiThesis: 'Output remains necessary for wages, services, competitiveness, and organisational survival.',
      },
      {
        opinion: 'should evolve without abandoning the people who held them.',
        antiThesis: 'Preserving every role may prevent industries from adapting to better tools and methods.',
      },
      {
        opinion: 'should not become more precarious because technology makes labour flexible.',
        antiThesis: 'Flexibility can help people choose when, where, and how they work.',
      },
      {
        opinion: 'should grow in care, education, climate, and public services as routine work is automated.',
        antiThesis: 'Creating public-interest jobs requires funding, political will, and long-term planning.',
      },
      {
        opinion: 'should be guaranteed by the state for all, with full employment as a binding legal duty.',
        antiThesis: 'A universal job guarantee risks vast make-work, fiscal strain, and crowding out the private sector; designing genuinely useful guaranteed jobs at scale is unproven.',
      },
      {
        opinion: 'should be left to the market, which will always create new work to replace the old.',
        antiThesis: 'The reassurance that markets always replace lost jobs is historically uneven; transitions can take a generation and skip the displaced entirely.',
      },
    ],
  },
  {
    category: 'Automation',
    keyword: 'algorithms',
    data: [
      {
        opinion: 'should not manage people without accountability.',
        antiThesis: 'Algorithmic management can improve consistency, scheduling, logistics, and performance tracking.',
      },
      {
        opinion: 'should be explainable when they affect work, pay, or opportunity.',
        antiThesis: 'Some advanced models are hard to explain without reducing accuracy or exposing proprietary systems.',
      },
      {
        opinion: 'should not intensify surveillance in the name of efficiency.',
        antiThesis: 'Limited monitoring may improve safety, compliance, and operational reliability.',
      },
      {
        opinion: 'should be audited before controlling workplace decisions.',
        antiThesis: 'Audits can be expensive, incomplete, and difficult for small companies to implement.',
      },
      {
        opinion: 'should not hide discrimination behind technical language.',
        antiThesis: 'Algorithms can also reveal unfair patterns that human managers overlook.',
      },
      {
        opinion: 'should be allowed to optimise operations where they outperform humans.',
        antiThesis: 'Optimisation alone may ignore dignity, fairness, appeal rights, and workplace trust.',
      },
      {
        opinion: 'should support judgement rather than replace it.',
        antiThesis: 'In some repetitive or data-heavy contexts, algorithms may outperform human judgement.',
      },
      {
        opinion: 'should allow humans to appeal automated decisions.',
        antiThesis: 'Large-scale systems may struggle to review every decision quickly and individually.',
      },
      {
        opinion: 'should be proprietary when firms invest in building them.',
        antiThesis: 'Proprietary systems can hide bias, errors, and harmful incentives from affected workers.',
      },
      {
        opinion: 'should be accountable without making developers liable for every misuse.',
        antiThesis: 'Without meaningful liability, firms may externalise harm onto workers and society.',
      },
    ],
  },
  {
    category: 'Automation',
    keyword: 'machines',
    data: [
      {
        opinion: 'should do dangerous work before humans do.',
        antiThesis: 'Some dangerous tasks still require human judgement, improvisation, and responsibility.',
      },
      {
        opinion: 'should not replace human care where presence matters.',
        antiThesis: 'Machines can assist care by lifting patients, monitoring health, reminding medication, or reducing workload.',
      },
      {
        opinion: 'should extend human capability rather than erase human skill.',
        antiThesis: 'Some skills become obsolete when safer or better technologies emerge.',
      },
      {
        opinion: 'should be built for repair, transparency, and longevity.',
        antiThesis: 'Durable and repairable machines may cost more and slow design innovation.',
      },
      {
        opinion: 'should not make people dependent on systems they cannot understand.',
        antiThesis: 'Modern society already depends on complex systems most people cannot fully understand.',
      },
      {
        opinion: 'should increase accessibility for disabled people.',
        antiThesis: 'Automated systems must be carefully designed so they do not create new forms of exclusion.',
      },
      {
        opinion: 'should not turn human interaction into a luxury good.',
        antiThesis: 'Automated services can provide cheaper, faster, and more consistent access for many people.',
      },
      {
        opinion: 'should be evaluated by social consequences, not only technical performance.',
        antiThesis: 'Technical performance remains essential for safety, reliability, trust, and usefulness.',
      },
      {
        opinion: 'should not be used to avoid responsibility for human decisions.',
        antiThesis: 'Machine-assisted decisions often involve many actors, including designers, operators, users, and institutions.',
      },
      {
        opinion: 'should help build a society with more time, care, and freedom.',
        antiThesis: 'Technology alone cannot guarantee fair distribution, cultural change, or political commitment.',
      },
      {
        opinion: 'should be taxed heavily wherever they displace humans, funding income for the displaced.',
        antiThesis: 'A displacement tax is hard to define and penalises the productivity gains that ultimately raise living standards, locking in obsolete jobs.',
      },
      {
        opinion: 'should never be taxed for replacing labour, because that simply punishes progress.',
        antiThesis: 'If automation concentrates gains while socialising losses, some redistribution isn\'t punishing progress—it\'s the condition for sustaining public support for it.',
      },
    ],
  },
  {
    category: 'Luxury',
    keyword: 'luxury',
    data: [
      {
        opinion: 'should be defined by quality, not excess.',
        antiThesis: 'Excess has historically been part of luxury because abundance, rarity, and spectacle can signal status and desire.',
      },
      {
        opinion: 'should be quiet, precise, and intentional.',
        antiThesis: 'Expressive luxury can also be joyful, theatrical, cultural, and emotionally meaningful.',
      },
      {
        opinion: 'should not depend on visible status symbols.',
        antiThesis: 'Status symbols help people communicate success, identity, aspiration, and belonging.',
      },
      {
        opinion: 'should be rooted in craft rather than marketing.',
        antiThesis: 'Storytelling, branding, and desire are also central to how luxury objects gain meaning.',
      },
      {
        opinion: 'should elevate everyday life rather than escape from it.',
        antiThesis: 'Luxury also thrives on fantasy, distance, exclusivity, and exceptional moments outside ordinary life.',
      },
      {
        opinion: 'should be accessible through beauty and experience, not only price.',
        antiThesis: 'Price remains central to luxury because it shapes rarity, prestige, and perceived value.',
      },
      {
        opinion: 'should be preserved as rare and aspirational.',
        antiThesis: 'Too much exclusivity can reproduce hierarchy and make dignity appear conditional on wealth.',
      },
      {
        opinion: 'should not be morally condemned by default.',
        antiThesis: 'Luxury can still reflect inequality, overconsumption, and social distance from basic needs.',
      },
      {
        opinion: 'should be judged by emotional value as well as material value.',
        antiThesis: 'Emotional value can be manufactured by branding and may hide weak material substance.',
      },
      {
        opinion: 'should balance pleasure, responsibility, beauty, and restraint.',
        antiThesis: 'Balancing these values is difficult because luxury often depends on desire beyond necessity.',
      },
      {
        opinion: 'should be abolished as an obscenity while basic needs go unmet for so many.',
        antiThesis: 'Banning luxury feeds no one; the sector employs millions and funds craftsmanship, and the spending would simply move or vanish rather than reach the poor.',
      },
      {
        opinion: 'should be redirected into public magnificence rather than private hoarding.',
        antiThesis: 'State-directed \'public magnificence\' has produced vanity projects and waste; deciding collectively what is magnificent invites the same excess under political control.',
      },
      {
        opinion: 'should be celebrated as the just reward of success and the engine of aspiration.',
        antiThesis: 'Treating luxury as pure desert ignores inherited advantage and conspicuous waste; aspiration does not require extreme inequality to function.',
      },
      {
        opinion: 'should remain entirely unregulated, because envy is no basis for public policy.',
        antiThesis: 'Concern about concentrated wealth isn\'t mere envy; extreme luxury can distort housing, media, and democracy in ways that are legitimate public concerns.',
      },
    ],
  },
  {
    category: 'Luxury',
    keyword: 'craftsmanship',
    data: [
      {
        opinion: 'should be the soul of luxury.',
        antiThesis: 'Contemporary luxury also includes technology, service, innovation, design systems, and cultural relevance.',
      },
      {
        opinion: 'should protect human skill from mass-production logic.',
        antiThesis: 'Scale can make high-quality design more consistent, accessible, and commercially sustainable.',
      },
      {
        opinion: 'should honour the people who make luxury possible.',
        antiThesis: 'Luxury production often involves collective processes where individual attribution is difficult.',
      },
      {
        opinion: 'should be paid fairly, not romanticised cheaply.',
        antiThesis: 'Higher labour costs can make crafted goods inaccessible to most people.',
      },
      {
        opinion: 'should preserve techniques that industrial speed would erase.',
        antiThesis: 'Craft traditions must evolve to remain alive rather than becoming museum pieces.',
      },
      {
        opinion: 'should allow imperfection to feel human.',
        antiThesis: 'Luxury consumers often expect precision, durability, and flawless finishing.',
      },
      {
        opinion: 'should resist disposable trend culture.',
        antiThesis: 'Luxury also depends on novelty, seasonal desire, and cultural movement.',
      },
      {
        opinion: 'should connect objects to place, history, and material intelligence.',
        antiThesis: 'Global luxury can also be meaningful through hybridity, collaboration, and contemporary design.',
      },
      {
        opinion: 'should matter more than celebrity endorsement.',
        antiThesis: 'Celebrity can introduce craft to wider audiences and shape cultural relevance.',
      },
      {
        opinion: 'should turn luxury into inheritance rather than consumption.',
        antiThesis: 'Not every luxury purchase needs to become an heirloom to be meaningful.',
      },
      {
        opinion: 'should be supported as a public good that preserves skill and beauty for all.',
        antiThesis: 'Public subsidy of craft picks winners and can ossify taste; markets and patrons have sustained craftsmanship for centuries without state direction.',
      },
    ],
  },
  {
    category: 'Luxury',
    keyword: 'exclusivity',
    data: [
      {
        opinion: 'should come from excellence, not exclusion.',
        antiThesis: 'Exclusion is often part of how luxury maintains symbolic value and desirability.',
      },
      {
        opinion: 'should not be built on humiliation or social hierarchy.',
        antiThesis: 'Luxury markets often operate through distinction, aspiration, and selective access.',
      },
      {
        opinion: 'should protect depth, not inflate ego.',
        antiThesis: 'Ego and self-expression are part of why many people desire luxury.',
      },
      {
        opinion: 'should not make dignity conditional on wealth.',
        antiThesis: 'Luxury does not necessarily claim to define human worth; it can simply mark preference and aspiration.',
      },
      {
        opinion: 'should be balanced by cultural generosity.',
        antiThesis: 'Too much accessibility can weaken the aura that makes luxury feel special.',
      },
      {
        opinion: 'should not hide behind artificial scarcity.',
        antiThesis: 'Controlled availability can preserve quality, desirability, and brand identity.',
      },
      {
        opinion: 'should be transparent about why something is rare.',
        antiThesis: 'Some luxury mystique depends on secrecy, mythology, and controlled storytelling.',
      },
      {
        opinion: 'should be defended as part of luxury’s identity.',
        antiThesis: 'Defending exclusivity too strongly can make luxury socially alienating and politically fragile.',
      },
      {
        opinion: 'should invite people into meaning, not lock them out of status.',
        antiThesis: 'Selective access often preserves prestige precisely because not everyone can participate.',
      },
      {
        opinion: 'should balance rarity, fairness, aspiration, and respect.',
        antiThesis: 'These values often conflict because rarity itself creates unequal access.',
      },
      {
        opinion: 'should be ended through heavy taxation that makes extreme luxury practically impossible.',
        antiThesis: 'Punitive luxury taxes are easily avoided, can destroy domestic high-end employment, and have historically raised little while pushing spending offshore.',
      },
      {
        opinion: 'should be protected, since the right to enjoy what one has earned is sacred.',
        antiThesis: '\'Earned\' overstates how much top wealth reflects effort versus rent, inheritance, and market power; sanctifying it shields unearned advantage.',
      },
    ],
  },
  {
    category: 'Luxury',
    keyword: 'sustainability',
    data: [
      {
        opinion: 'should be inseparable from modern luxury.',
        antiThesis: 'Some luxury categories still depend on rare materials, global travel, and energy-intensive production.',
      },
      {
        opinion: 'should make luxury slower, fewer, and better.',
        antiThesis: 'Luxury also survives through novelty, gifting, collections, and repeated desire.',
      },
      {
        opinion: 'should expose fake luxury built on waste.',
        antiThesis: 'Sustainability claims themselves can become another form of branding without substance.',
      },
      {
        opinion: 'should make durability more desirable than novelty.',
        antiThesis: 'Novelty drives creativity, experimentation, fashion, and cultural relevance.',
      },
      {
        opinion: 'should turn repair into a luxury service.',
        antiThesis: 'Some consumers expect newness and may resist visible wear, repair, or restoration.',
      },
      {
        opinion: 'should make provenance part of prestige.',
        antiThesis: 'Tracing every material and process can be complex, costly, and imperfect.',
      },
      {
        opinion: 'should make overconsumption socially unfashionable.',
        antiThesis: 'Luxury brands often depend on aspiration, collection, and desire beyond necessity.',
      },
      {
        opinion: 'should not be used as a costume for expensive products.',
        antiThesis: 'Expensive products can be genuinely sustainable if durable, traceable, repairable, and responsibly made.',
      },
      {
        opinion: 'should be encouraged through innovation and better materials.',
        antiThesis: 'Better materials help, but they may not solve overproduction or status-driven consumption.',
      },
      {
        opinion: 'should redefine luxury around responsibility without removing pleasure.',
        antiThesis: 'Responsibility can conflict with the fantasy, indulgence, and emotional excess that make luxury desirable.',
      },
    ],
  },
  {
    category: 'Luxury',
    keyword: 'taste',
    data: [
      {
        opinion: 'should matter more than wealth in luxury.',
        antiThesis: 'Money still shapes access to materials, spaces, services, travel, and cultural education.',
      },
      {
        opinion: 'should be cultivated, not purchased.',
        antiThesis: 'Objects, travel, art, and exposure often require money and access.',
      },
      {
        opinion: 'should resist loud displays of status.',
        antiThesis: 'Bold display can reflect confidence, cultural identity, joy, and creative self-expression.',
      },
      {
        opinion: 'should be personal rather than dictated by trend.',
        antiThesis: 'Trends help people discover new aesthetics, references, and forms of belonging.',
      },
      {
        opinion: 'should include restraint, proportion, and context.',
        antiThesis: 'Maximalism, contrast, and excess can also be sophisticated when intentional.',
      },
      {
        opinion: 'should not be confused with minimalism.',
        antiThesis: 'Minimalism often communicates discipline, clarity, and timelessness.',
      },
      {
        opinion: 'should respect heritage without becoming nostalgic.',
        antiThesis: 'Nostalgia can be emotionally powerful and commercially meaningful.',
      },
      {
        opinion: 'should make luxury feel intelligent.',
        antiThesis: 'Luxury can also be sensual, instinctive, playful, irrational, and emotional.',
      },
      {
        opinion: 'should not become a coded form of class superiority.',
        antiThesis: 'Taste distinctions can also preserve standards, expertise, and cultural refinement.',
      },
      {
        opinion: 'should turn possession into appreciation.',
        antiThesis: 'Ownership itself can be meaningful through memory, identity, achievement, and personal attachment.',
      },
      {
        opinion: 'should never be policed, as people are free to spend their wealth however they wish.',
        antiThesis: 'No one proposes policing taste, but unrestricted spending has real spillovers—on land, emissions, and politics—that aren\'t purely private.',
      },
    ],
  },
  {
    category: 'Luxury',
    keyword: 'consumption',
    data: [
      {
        opinion: 'should be capped so that no one may consume vastly more than others can ever afford.',
        antiThesis: 'Consumption caps are unenforceable without intrusive monitoring and would criminalise ordinary aspiration; envy is a weak basis for confiscation.',
      },
      {
        opinion: 'should be unlimited for those who can pay, as their spending sustains many jobs.',
        antiThesis: 'The jobs argument proves too much—any spending creates jobs—while ignoring the environmental and opportunity costs of channelling resources into excess.',
      },
    ],
  },
  {
    category: 'Creators',
    keyword: 'creators',
    data: [
      {
        opinion: 'should own the value of what they make.',
        antiThesis: 'Creative value often depends on platforms, collaborators, funders, distributors, and audiences.',
      },
      {
        opinion: 'should not be treated as endless content machines.',
        antiThesis: 'Regular output can be necessary to build audiences, maintain relevance, and sustain income.',
      },
      {
        opinion: 'should be paid fairly for cultural labour.',
        antiThesis: 'Creative markets are uncertain, and not every work generates enough demand to support payment.',
      },
      {
        opinion: 'should control how their work is used.',
        antiThesis: 'Too much control can restrict criticism, education, remix, parody, and cultural exchange.',
      },
      {
        opinion: 'should not sacrifice ownership for visibility.',
        antiThesis: 'Publishers, labels, studios, and platforms can provide reach, funding, marketing, and professional support.',
      },
      {
        opinion: 'should be free to commercialise their personal brand.',
        antiThesis: 'Personal branding can become exhausting and reduce creative work to self-marketing.',
      },
      {
        opinion: 'should not be expected to work for exposure.',
        antiThesis: 'Exposure can sometimes help early creators build reputation, audiences, and future paid opportunities.',
      },
      {
        opinion: 'should be allowed to choose between independence and institutional support.',
        antiThesis: 'Choice may be unequal when institutions control access to money, distribution, and legitimacy.',
      },
      {
        opinion: 'should be recognised as workers, entrepreneurs, and artists at once.',
        antiThesis: 'Combining all three roles can create unrealistic pressure on individual creators.',
      },
      {
        opinion: 'should be protected without making culture impossible to share.',
        antiThesis: 'Balancing creator protection and cultural access is difficult because both can conflict directly.',
      },
      {
        opinion: 'should be guaranteed a public salary so art no longer depends on the market.',
        antiThesis: 'A universal creative salary can\'t scale to millions and would put state committees in charge of who counts as a creator, politicising art.',
      },
      {
        opinion: 'should compete purely on merit in an open market with no subsidy or protection.',
        antiThesis: 'Pure market competition underfunds non-commercial but valuable work—experimental, local, archival—that markets systematically ignore.',
      },
      {
        opinion: 'should expect no public support, since art that cannot sell has no claim on others.',
        antiThesis: 'Much culturally vital work—public-interest journalism, preservation, minority-language art—is never commercially viable yet essential, which is why every developed society subsidises some of it.',
      },
    ],
  },
  {
    category: 'Creators',
    keyword: 'creative labour',
    data: [
      {
        opinion: 'should be valued beyond likes, views, and engagement.',
        antiThesis: 'Engagement is imperfect, but it helps measure audience interest, relevance, and commercial viability.',
      },
      {
        opinion: 'should include planning, research, editing, and emotional work.',
        antiThesis: 'Clients and audiences may find it difficult to price invisible stages of creative production.',
      },
      {
        opinion: 'should not be made precarious by algorithmic platforms.',
        antiThesis: 'Algorithms can also help unknown creators reach audiences without traditional gatekeepers.',
      },
      {
        opinion: 'should be paid even when the final work looks effortless.',
        antiThesis: 'Pricing only by labour time can undervalue impact, originality, and market demand.',
      },
      {
        opinion: 'should not be romanticised as passion instead of work.',
        antiThesis: 'Passion is also one reason many creators choose uncertain creative careers.',
      },
      {
        opinion: 'should be protected from unpaid pitching and speculative work.',
        antiThesis: 'Limited samples or pitches may help clients assess fit before committing.',
      },
      {
        opinion: 'should have minimum standards of pay and credit.',
        antiThesis: 'Creative sectors vary widely by medium, geography, budget, and career stage.',
      },
      {
        opinion: 'should be allowed to compete freely in open markets.',
        antiThesis: 'Open competition can favour creators with existing resources, networks, or platform advantage.',
      },
      {
        opinion: 'should include rest, experimentation, and failure.',
        antiThesis: 'Commercial projects often require deadlines, budgets, and reliable delivery.',
      },
      {
        opinion: 'should be treated as cultural infrastructure.',
        antiThesis: 'Public and private resources are limited and must be balanced with other social needs.',
      },
      {
        opinion: 'should be unionised and protected with the same rights as any other workforce.',
        antiThesis: 'Most creators are independent and project-based, so classic employment rights fit awkwardly and can strip away the flexibility many of them rely on.',
      },
      {
        opinion: 'should be treated as ordinary self-employment with no special protections at all.',
        antiThesis: 'Treating creators as fully self-employed leaves them exposed to non-payment and platform abuse with no recourse, depressing the supply of creative work.',
      },
    ],
  },
  {
    category: 'Creators',
    keyword: 'platforms',
    data: [
      {
        opinion: 'should share revenue fairly with creators.',
        antiThesis: 'Platforms also carry costs for hosting, moderation, tools, infrastructure, and advertising.',
      },
      {
        opinion: 'should not profit from creators while hiding the rules.',
        antiThesis: 'Revealing all ranking and monetisation rules may help bad actors manipulate the system.',
      },
      {
        opinion: 'should give creators more control over monetisation.',
        antiThesis: 'Too many monetisation choices can create complexity and uneven audience experiences.',
      },
      {
        opinion: 'should be free to set rules for the communities they host.',
        antiThesis: 'Platforms shape public culture and should not govern speech, income, and visibility without accountability.',
      },
      {
        opinion: 'should protect creators from harassment and abuse.',
        antiThesis: 'Moderation can become overbroad and may suppress legitimate criticism or debate.',
      },
      {
        opinion: 'should not turn creativity into constant performance.',
        antiThesis: 'Audiences often connect with creators through consistency, personality, and visibility.',
      },
      {
        opinion: 'should make analytics understandable without making creators dependent on them.',
        antiThesis: 'Analytics can help creators make strategic decisions and improve their work.',
      },
      {
        opinion: 'should not own creators’ audiences.',
        antiThesis: 'Platforms build and maintain the networks where audiences gather.',
      },
      {
        opinion: 'should make discovery less dependent on virality.',
        antiThesis: 'Viral distribution allows unknown creators to break through quickly.',
      },
      {
        opinion: 'should balance creator income, user safety, advertiser needs, and open expression.',
        antiThesis: 'These goals often conflict, especially at large scale.',
      },
      {
        opinion: 'should be forced to pay creators the great majority of all revenue they generate.',
        antiThesis: 'Platforms also bear infrastructure, discovery, and moderation costs; a fixed majority cut ignores these and could make some services unviable, hurting the creators they host.',
      },
      {
        opinion: 'should be free to set whatever terms they like, with creators choosing to accept or leave.',
        antiThesis: '\'Just leave\' is hollow when a few platforms control access to audiences; that power asymmetry is exactly why some protections exist.',
      },
    ],
  },
  {
    category: 'Creators',
    keyword: 'audiences',
    data: [
      {
        opinion: 'should respect the labour behind creative work.',
        antiThesis: 'Audiences are not obligated to like, buy, or support every piece of creative work.',
      },
      {
        opinion: 'should not expect unlimited free content.',
        antiThesis: 'Free access allows culture to circulate widely and helps creators build communities.',
      },
      {
        opinion: 'should support creators directly when possible.',
        antiThesis: 'Many audiences have limited disposable income and cannot support every creator they enjoy.',
      },
      {
        opinion: 'should not confuse access with entitlement.',
        antiThesis: 'Paying audiences may have legitimate expectations around quality, consistency, and communication.',
      },
      {
        opinion: 'should be allowed to criticise creators without dehumanising them.',
        antiThesis: 'Even non-dehumanising criticism can become overwhelming when multiplied at scale.',
      },
      {
        opinion: 'should understand that creativity takes time.',
        antiThesis: 'Audiences may reasonably lose interest if creators disappear without communication or consistency.',
      },
      {
        opinion: 'should not demand authenticity as a performance.',
        antiThesis: 'Audiences often seek genuine connection rather than polished corporate messaging.',
      },
      {
        opinion: 'should value depth as much as novelty.',
        antiThesis: 'Novelty helps culture evolve and keeps attention alive.',
      },
      {
        opinion: 'should not punish creators for changing direction.',
        antiThesis: 'Audiences may reasonably disengage when a creator no longer offers what they came for.',
      },
      {
        opinion: 'should participate in culture without owning the creator.',
        antiThesis: 'Fan communities can feel invested because they help create visibility, meaning, and momentum.',
      },
      {
        opinion: 'should fund creators directly through patronage that bypasses extractive platforms.',
        antiThesis: 'Direct patronage rewards the already-famous and the self-promotional, leaving many skilled creators without the audience to sustain them.',
      },
    ],
  },
  {
    category: 'Creators',
    keyword: 'intellectual property',
    data: [
      {
        opinion: 'should protect creators from theft.',
        antiThesis: 'Overly strict intellectual property rules can limit remix, education, parody, and innovation.',
      },
      {
        opinion: 'should not lock culture away from future creators.',
        antiThesis: 'Creators need exclusive rights to earn from their work and prevent exploitation.',
      },
      {
        opinion: 'should make licensing simple and fair.',
        antiThesis: 'Rights can be complex when works involve multiple authors, territories, formats, and contracts.',
      },
      {
        opinion: 'should not be used by corporations to silence small creators.',
        antiThesis: 'Companies also need enforcement tools to prevent counterfeiting, plagiarism, and unauthorised commercial use.',
      },
      {
        opinion: 'should recognise attribution as well as payment.',
        antiThesis: 'Credit alone may not compensate creators when others profit from their work.',
      },
      {
        opinion: 'should allow influence without protecting style too broadly.',
        antiThesis: 'Style imitation can still become exploitative when it copies a creator’s market identity.',
      },
      {
        opinion: 'should hold AI systems accountable when they use creative work.',
        antiThesis: 'Training-data rules are technically and legally complex, and overly strict limits may restrict research and competition.',
      },
      {
        opinion: 'should give creators bargaining power against large companies.',
        antiThesis: 'Large companies may provide funding, legal support, marketing, and distribution that creators cannot access alone.',
      },
      {
        opinion: 'should expire before it becomes cultural enclosure.',
        antiThesis: 'Longer terms can protect creators’ families, estates, and long-term commercial value.',
      },
      {
        opinion: 'should balance ownership, payment, access, and cultural renewal.',
        antiThesis: 'This balance is difficult because creators, platforms, audiences, and institutions define fairness differently.',
      },
      {
        opinion: 'should be held collectively by creator guilds rather than by individual firms.',
        antiThesis: 'Guild control can exclude non-members and entrench insiders, recreating the gatekeeping it claims to abolish.',
      },
      {
        opinion: 'should belong entirely to whoever commissions and pays for the work.',
        antiThesis: 'A default total buyout strips creators of ongoing value from work that later succeeds, handing all the upside to whoever had the most bargaining power.',
      },
    ],
  },
  {
    category: 'Sex Work',
    keyword: 'sex work',
    data: [
      {
        opinion: 'should be fully decriminalised because criminalisation endangers workers.',
        antiThesis: 'Decriminalisation may reduce police harm, but critics argue it can also normalise exploitation.',
      },
      {
        opinion: 'should be recognised as legitimate labour.',
        antiThesis: 'Consent can be shaped by poverty, addiction, coercion, migration status, or lack of alternatives.',
      },
      {
        opinion: 'should be treated like any other service industry.',
        antiThesis: 'Sex work involves intimacy, vulnerability, and power dynamics that make it different from ordinary service work.',
      },
      {
        opinion: 'should be unionised and protected by labour law.',
        antiThesis: 'Formal labour structures may be difficult in a sector shaped by privacy, stigma, and informal arrangements.',
      },
      {
        opinion: 'should be legal only under strict regulation.',
        antiThesis: 'Strict regulation can exclude undocumented, poor, or independent workers and push them underground.',
      },
      {
        opinion: 'should be discouraged but not punished.',
        antiThesis: 'Discouragement may still reinforce stigma and make workers less safe.',
      },
      {
        opinion: 'should be abolished because it commodifies human bodies.',
        antiThesis: 'Abolition can remove workers’ agency and make them more vulnerable to underground markets.',
      },
      {
        opinion: 'should be prohibited because it damages social morality.',
        antiThesis: 'Prohibition often increases stigma, criminal records, police abuse, and unsafe working conditions.',
      },
      {
        opinion: 'should be abolished as part of dismantling capitalist exploitation.',
        antiThesis: 'Capitalism shapes many forms of labour; abolishing only sex work may not solve the underlying inequality.',
      },
      {
        opinion: 'should be impossible in a just society.',
        antiThesis: 'Even in more equal societies, some adults may still choose sexual labour as autonomous work.',
      },
      {
        opinion: 'should be fully decriminalised and recognised as legitimate labour with full rights.',
        antiThesis: 'Full decriminalisation can expand the market in ways critics link to increased trafficking demand, and the evidence on whether it improves safety overall is genuinely mixed.',
      },
      {
        opinion: 'should be abolished completely as inherently exploitative and incompatible with dignity.',
        antiThesis: 'Prohibition has repeatedly failed to end the trade and instead drives it into more dangerous, unpoliceable conditions for the most vulnerable.',
      },
    ],
  },
  {
    category: 'Sex Work',
    keyword: 'sex workers',
    data: [
      {
        opinion: 'should be seen as workers, not victims by default.',
        antiThesis: 'Some people in the industry are victims of coercion, trafficking, or survival conditions and need protection.',
      },
      {
        opinion: 'should be protected from arrest, eviction, and banking exclusion.',
        antiThesis: 'Protections must still account for safeguarding, financial regulation, and potential organised exploitation.',
      },
      {
        opinion: 'should have access to healthcare without moral judgement.',
        antiThesis: 'Healthcare systems also need tools to identify coercion, abuse, and trafficking.',
      },
      {
        opinion: 'should be able to organise, unionise, and bargain collectively.',
        antiThesis: 'Organising can improve safety, but legal stigma and privacy concerns make collective action difficult.',
      },
      {
        opinion: 'should never be forced into rescue programmes.',
        antiThesis: 'Some people may need urgent intervention when coercion or dependency makes free choice impossible.',
      },
      {
        opinion: 'should have funded exit options available at any time.',
        antiThesis: 'Exit services are vital, but assuming everyone wants to exit can be paternalistic.',
      },
      {
        opinion: 'should be treated as survivors of structural violence.',
        antiThesis: 'This may recognise harm, but it can erase the agency of workers who do not identify as victims.',
      },
      {
        opinion: 'should not be allowed to sell sex because consent under poverty is not real consent.',
        antiThesis: 'Poverty affects many forms of work; denying agency only in sex work can be inconsistent.',
      },
      {
        opinion: 'should be listened to first when laws are made.',
        antiThesis: 'Policymakers should also hear survivors of trafficking, healthcare experts, communities, and legal authorities.',
      },
      {
        opinion: 'should be protected even when society disapproves of the work.',
        antiThesis: 'Social disapproval may still shape democratic law, zoning, and public policy.',
      },
      {
        opinion: 'should be unionised and protected by the same employment law as any other workers.',
        antiThesis: 'Standard employment frameworks fit poorly where coercion is hard to detect, and formalisation can legitimise exploitative operators alongside protecting workers.',
      },
    ],
  },
  {
    category: 'Sex Work',
    keyword: 'clients',
    data: [
      {
        opinion: 'should not be criminalised when all adults consent.',
        antiThesis: 'Criminalising demand may be seen as necessary to reduce exploitation and trafficking.',
      },
      {
        opinion: 'should be criminalised to reduce demand.',
        antiThesis: 'Penalising clients may push transactions into hidden spaces and make workers less safe.',
      },
      {
        opinion: 'should face severe penalties when coercion, trafficking, or minors are involved.',
        antiThesis: 'Strong penalties are necessary, but enforcement must avoid misidentifying consenting adults as victims.',
      },
      {
        opinion: 'should be culturally shamed even if not legally punished.',
        antiThesis: 'Shame can also harm workers by increasing stigma, secrecy, and isolation.',
      },
      {
        opinion: 'should be treated as exploiters by default.',
        antiThesis: 'Some consensual adult sex workers reject the idea that all clients are exploiters.',
      },
      {
        opinion: 'should be educated about consent, boundaries, and safety.',
        antiThesis: 'Education may be insufficient where power imbalance or exploitation is present.',
      },
      {
        opinion: 'should be licensed or registered where sex work is legal.',
        antiThesis: 'Registration can invade privacy, create blacklists, and push people into illegal markets.',
      },
      {
        opinion: 'should not be allowed to buy access to people made vulnerable by poverty.',
        antiThesis: 'Poverty also shapes other labour markets; banning one transaction may not fix vulnerability.',
      },
      {
        opinion: 'should be legally accountable without making workers less safe.',
        antiThesis: 'This balance is difficult because enforcement against clients can indirectly reduce worker safety and income.',
      },
      {
        opinion: 'should be ignored by law unless violence or coercion occurs.',
        antiThesis: 'Waiting for violence or coercion may fail to prevent exploitation before harm occurs.',
      },
      {
        opinion: 'should face no legal sanction whatsoever in any consensual adult transaction.',
        antiThesis: 'Where coercion is common and concealed, treating every transaction as freely consensual ignores how trafficking is routinely laundered as \'consensual\' work.',
      },
      {
        opinion: 'should be criminalised entirely under a model that penalises buyers but not sellers.',
        antiThesis: 'The evidence on client-criminalisation is contested; some studies find it pushes the trade underground and reduces workers\' ability to screen clients safely.',
      },
    ],
  },
  {
    category: 'Sex Work',
    keyword: 'trafficking',
    data: [
      {
        opinion: 'should be fought aggressively without criminalising consensual sex work.',
        antiThesis: 'Trafficking can be hidden inside apparently consensual arrangements, making separation difficult.',
      },
      {
        opinion: 'should be the central concern in all sex-work policy.',
        antiThesis: 'Focusing only on trafficking can erase the needs and rights of adults who are not trafficked.',
      },
      {
        opinion: 'should be addressed through migration reform, labour inspection, and victim protection.',
        antiThesis: 'Criminal networks may still require strong policing, prosecution, and cross-border enforcement.',
      },
      {
        opinion: 'should not be used as an excuse for raids that punish workers.',
        antiThesis: 'Authorities may argue that some raids are necessary to identify and rescue victims.',
      },
      {
        opinion: 'should be prosecuted with maximum severity.',
        antiThesis: 'Severe punishment may be justified, but prosecution alone does not address poverty, demand, or migration vulnerability.',
      },
      {
        opinion: 'should be separated from moral panic about sexuality.',
        antiThesis: 'Moral concerns still influence democratic views about what kinds of markets should exist.',
      },
      {
        opinion: 'should be reduced by giving vulnerable people real economic alternatives.',
        antiThesis: 'Economic alternatives help, but trafficking also involves deception, violence, organised crime, and coercion.',
      },
      {
        opinion: 'should justify strong surveillance of the sex industry.',
        antiThesis: 'Heavy surveillance can endanger workers, invade privacy, and push the industry underground.',
      },
      {
        opinion: 'should not be conflated with migration.',
        antiThesis: 'Trafficking and migration can intersect, especially when legal status is used as leverage.',
      },
      {
        opinion: 'should be addressed without denying adult agency.',
        antiThesis: 'Recognising agency must not blind policy to coercion, fear, and constrained choice.',
      },
      {
        opinion: 'should be fought through victim support and labour rights rather than blanket prohibition.',
        antiThesis: 'A support-and-rights approach may under-resource enforcement against the organised networks that drive trafficking, leaving demand intact.',
      },
      {
        opinion: 'should be confronted by ending the entire sex industry that creates demand for it.',
        antiThesis: 'Demand for commercial sex has proven resistant to prohibition across centuries; eliminating the legal industry mainly shifts it into criminal hands.',
      },
    ],
  },
  {
    category: 'Sex Work',
    keyword: 'law',
    data: [
      {
        opinion: 'should fully decriminalise selling and buying sex between adults.',
        antiThesis: 'Full decriminalisation may make it harder to limit expansion of exploitative commercial markets.',
      },
      {
        opinion: 'should criminalise buyers but not sellers.',
        antiThesis: 'Buyer criminalisation may reduce workers’ bargaining power and make screening clients harder.',
      },
      {
        opinion: 'should legalise sex work under licensing, zoning, and health standards.',
        antiThesis: 'Licensing can create a two-tier system where the most vulnerable remain illegal.',
      },
      {
        opinion: 'should prohibit all commercial sex.',
        antiThesis: 'Prohibition tends to push the trade underground, increasing violence, stigma, and police abuse.',
      },
      {
        opinion: 'should protect adult autonomy while punishing coercion severely.',
        antiThesis: 'Coercion can be subtle, economic, emotional, or difficult to prove.',
      },
      {
        opinion: 'should be based on evidence of harm, not moral discomfort.',
        antiThesis: 'Moral values still shape democratic law, especially around sexuality, family, and public order.',
      },
      {
        opinion: 'should remove criminal records for people convicted only for selling sex.',
        antiThesis: 'Some argue that changing the law should not automatically erase every past conviction.',
      },
      {
        opinion: 'should allow communities to restrict sex businesses locally.',
        antiThesis: 'Local restrictions can become exclusionary and push workers into unsafe or isolated areas.',
      },
      {
        opinion: 'should treat commercial sex as violence against women.',
        antiThesis: 'This framing may exclude male, trans, and non-binary workers and deny the agency of consenting adults.',
      },
      {
        opinion: 'should balance autonomy, exploitation prevention, public safety, and dignity.',
        antiThesis: 'These values often conflict because each legal model prioritises a different harm.',
      },
      {
        opinion: 'should remove every penalty surrounding consensual adult sex work entirely.',
        antiThesis: 'Removing every penalty also removes leverage against the pimps and traffickers who hide behind claims of consent that are difficult to verify.',
      },
      {
        opinion: 'should regulate sex work tightly through licensing while keeping it legal and safe.',
        antiThesis: 'Licensing regimes often create a two-tier market in which an unlicensed, more dangerous sector persists alongside the legal one.',
      },
      {
        opinion: 'should ban all forms of paid sex and prosecute those who organise or profit from it.',
        antiThesis: 'Full criminalisation tends to penalise the very workers it claims to protect and deters them from reporting violence for fear of arrest.',
      },
    ],
  },
  {
    category: 'Religion',
    keyword: 'religion',
    data: [
      {
        opinion: 'should be protected as a fundamental human freedom.',
        antiThesis: 'Religious freedom matters, but it should not be used to justify discrimination, coercion, or harm.',
      },
      {
        opinion: 'should remain private and separate from political power.',
        antiThesis: 'Religion is private for some, but for others it shapes moral life, community, and public responsibility.',
      },
      {
        opinion: 'should guide public life because society needs sacred moral foundations.',
        antiThesis: 'Public life in plural societies cannot privilege one sacred framework without excluding others.',
      },
      {
        opinion: 'should be abolished because it sustains irrationality and oppression.',
        antiThesis: 'Abolishing religion would violate freedom of conscience and ignore the meaning, charity, and community it provides.',
      },
      {
        opinion: 'should be free from state control.',
        antiThesis: 'Some regulation may be necessary when religious institutions handle education, money, safeguarding, or public services.',
      },
      {
        opinion: 'should not receive special legal privileges.',
        antiThesis: 'Some accommodations may be necessary to make freedom of religion real rather than merely formal.',
      },
      {
        opinion: 'should be respected even by those who reject belief.',
        antiThesis: 'Respect for believers should not prevent criticism of doctrines, institutions, or harmful practices.',
      },
      {
        opinion: 'should be challenged when it limits individual freedom.',
        antiThesis: 'Religious communities may argue that shared duties and moral limits are part of freely chosen belief.',
      },
      {
        opinion: 'should be treated as culture, identity, and worldview, not only belief.',
        antiThesis: 'Treating religion as identity can make criticism feel like personal attack and complicate debate.',
      },
      {
        opinion: 'should be judged by whether it promotes dignity, peace, and justice.',
        antiThesis: 'Reducing religion to social outcomes may ignore truth claims, ritual, transcendence, and tradition.',
      },
      {
        opinion: 'should be treated as a purely private matter with no presence in schools or the state.',
        antiThesis: 'Excluding religion entirely from education leaves citizens illiterate about a force that shapes history, art, and the lives of billions.',
      },
      {
        opinion: 'should be honoured as the moral foundation of the nation and reflected in its laws.',
        antiThesis: 'Establishing one faith\'s morality in law subordinates citizens of other faiths and none, and history shows religious establishment inviting coercion and conflict.',
      },
      {
        opinion: 'should shape the constitution itself, with the established faith given formal authority.',
        antiThesis: 'Constitutional establishment of a faith makes second-class citizens of dissenters and ties the state\'s legitimacy to contested theology, which liberal democracies abandoned for good reason.',
      },
    ],
  },
  {
    category: 'Religion',
    keyword: 'secularism',
    data: [
      {
        opinion: 'should protect everyone by keeping the state neutral.',
        antiThesis: 'State neutrality can become hostile to religion if it excludes religious expression from public life.',
      },
      {
        opinion: 'should remove religion from public institutions.',
        antiThesis: 'Removing religion too strictly can marginalise believers and erase cultural heritage.',
      },
      {
        opinion: 'should allow religious expression without religious dominance.',
        antiThesis: 'Balancing expression and dominance is difficult when majority religions have cultural power.',
      },
      {
        opinion: 'should prevent religious law from overriding civil law.',
        antiThesis: 'Religious communities may still seek internal rules for marriage, diet, dress, education, or dispute resolution.',
      },
      {
        opinion: 'should not become a weapon against minorities.',
        antiThesis: 'Minority protection matters, but all religious groups should still follow common civic rules.',
      },
      {
        opinion: 'should defend freedom from religion as much as freedom of religion.',
        antiThesis: 'Freedom from religion should not become pressure to hide religious identity in public.',
      },
      {
        opinion: 'should allow criticism, satire, and debate about religion.',
        antiThesis: 'Criticism should not become harassment, incitement, or dehumanisation of religious communities.',
      },
      {
        opinion: 'should be flexible enough to accommodate conscience.',
        antiThesis: 'Too many exemptions can weaken equality before the law.',
      },
      {
        opinion: 'should be defended against theocracy.',
        antiThesis: 'Some religious citizens see secularism as moral emptiness or elite hostility to faith.',
      },
      {
        opinion: 'should balance neutrality, expression, equality, and public order.',
        antiThesis: 'These values often conflict in schools, courts, workplaces, and public ceremonies.',
      },
      {
        opinion: 'should be enforced strictly, removing all religion entirely from public and political life.',
        antiThesis: 'Aggressive secularism that bans religious expression in public can itself violate freedom of conscience and alienate believers; neutrality means not favouring a faith, not erasing faith.',
      },
      {
        opinion: 'should be rejected as a hollow creed that strips public life of meaning.',
        antiThesis: 'Secularism doesn\'t dictate meaning; it leaves meaning to individuals and communities while stopping the state from imposing one answer on everyone.',
      },
    ],
  },
  {
    category: 'Religion',
    keyword: 'faith',
    data: [
      {
        opinion: 'should be understood as a source of meaning and resilience.',
        antiThesis: 'Faith can provide meaning, but it can also discourage questioning or keep people inside harmful communities.',
      },
      {
        opinion: 'should not be mocked simply because it cannot be empirically proven.',
        antiThesis: 'Beliefs that affect public policy should still be open to reasoned criticism and evidence-based debate.',
      },
      {
        opinion: 'should remain personal rather than imposed.',
        antiThesis: 'Many religions include public duties, evangelisation, or communal obligations as part of faith itself.',
      },
      {
        opinion: 'should be taught as one possible path, not the only truth.',
        antiThesis: 'Some traditions claim exclusive truth and may see relativism as incompatible with doctrine.',
      },
      {
        opinion: 'should guide moral choices where law is silent.',
        antiThesis: 'Personal faith may guide individuals, but public morality must remain negotiable in diverse societies.',
      },
      {
        opinion: 'should not be used to deny science.',
        antiThesis: 'Science answers empirical questions, but it does not settle every moral, existential, or spiritual question.',
      },
      {
        opinion: 'should be protected from commercialisation and political exploitation.',
        antiThesis: 'Religion inevitably interacts with politics, markets, media, and culture.',
      },
      {
        opinion: 'should be questioned when it demands obedience without accountability.',
        antiThesis: 'Obedience can be understood by believers as humility, discipline, or devotion rather than oppression.',
      },
      {
        opinion: 'should inspire service to others.',
        antiThesis: 'Religious service can be generous, but charity should not replace rights, welfare, or structural justice.',
      },
      {
        opinion: 'should remain free even when others consider it irrational.',
        antiThesis: 'Freedom of belief does not automatically justify every practice carried out in the name of belief.',
      },
      {
        opinion: 'should never influence law, which must rest on reason and evidence alone.',
        antiThesis: 'Most citizens\' moral reasoning is partly faith-shaped; demanding they bracket it from politics entirely is neither realistic nor neutral between worldviews.',
      },
      {
        opinion: 'should guide public life, since a society without shared belief loses its cohesion.',
        antiThesis: 'Shared civic values need not be religious; pluralist societies cohere around constitutional norms precisely because imposed belief fractures rather than unites.',
      },
    ],
  },
  {
    category: 'Religion',
    keyword: 'religious institutions',
    data: [
      {
        opinion: 'should be accountable for abuse, corruption, and cover-ups.',
        antiThesis: 'Accountability is essential, but entire religious communities should not be blamed for institutional failures.',
      },
      {
        opinion: 'should not control education, healthcare, or law.',
        antiThesis: 'Faith-based institutions often provide schools, hospitals, charity, and social support where states fail.',
      },
      {
        opinion: 'should be allowed to run schools if they respect civic standards.',
        antiThesis: 'Religious schools may reproduce segregation, doctrine-based teaching, or pressure on children.',
      },
      {
        opinion: 'should pay taxes like other powerful organisations.',
        antiThesis: 'Tax exemptions may be justified when institutions provide public benefit, charity, and community services.',
      },
      {
        opinion: 'should preserve tradition against moral relativism.',
        antiThesis: 'Tradition can preserve meaning, but it can also protect hierarchy, exclusion, or outdated norms.',
      },
      {
        opinion: 'should reform when traditions harm women, children, or minorities.',
        antiThesis: 'Some believers see external reform demands as attacks on doctrine and religious autonomy.',
      },
      {
        opinion: 'should not be treated as above democratic law.',
        antiThesis: 'Religious autonomy is also a democratic value when it protects conscience and minority communities.',
      },
      {
        opinion: 'should be able to define their own doctrines.',
        antiThesis: 'Doctrinal autonomy must still be limited when practices violate civil rights or public safety.',
      },
      {
        opinion: 'should not accumulate unchecked political power.',
        antiThesis: 'Religious groups, like other civil-society groups, have a right to advocate for their values.',
      },
      {
        opinion: 'should serve people before protecting their authority.',
        antiThesis: 'Institutional continuity can also preserve community, ritual, memory, and care.',
      },
      {
        opinion: 'should lose every tax privilege and legal exemption they currently hold.',
        antiThesis: 'Many religious bodies run schools, hospitals, and charities the state would otherwise have to fund; removing all exemptions could collapse services and single out belief unfairly.',
      },
      {
        opinion: 'should hold a privileged role in education, welfare, and national identity.',
        antiThesis: 'Privileging religious bodies in public functions discriminates against the non-religious who fund them and can entrench one group\'s power over shared institutions.',
      },
    ],
  },
  {
    category: 'Religion',
    keyword: 'religious pluralism',
    data: [
      {
        opinion: 'should allow many faiths and no faith to coexist equally.',
        antiThesis: 'Equal coexistence is ideal, but conflicting doctrines and practices can create real social tensions.',
      },
      {
        opinion: 'should be taught in schools to reduce prejudice.',
        antiThesis: 'Teaching pluralism must avoid flattening real theological differences into vague sameness.',
      },
      {
        opinion: 'should protect minority religions from suspicion.',
        antiThesis: 'Protection from suspicion should not prevent scrutiny of harmful practices or extremist networks.',
      },
      {
        opinion: 'should not require people to pretend all beliefs are equally true.',
        antiThesis: 'Pluralism requires equal civic respect, not agreement that all beliefs are true.',
      },
      {
        opinion: 'should include atheists, agnostics, and non-religious people.',
        antiThesis: 'Religious communities may fear that secular inclusion weakens the sacred character of public life.',
      },
      {
        opinion: 'should not excuse segregation or parallel societies.',
        antiThesis: 'Strong religious communities can also provide belonging, mutual aid, and moral formation.',
      },
      {
        opinion: 'should protect conversion, leaving religion, and changing belief.',
        antiThesis: 'Some communities view conversion or apostasy as a threat to family, tradition, or communal continuity.',
      },
      {
        opinion: 'should allow public religious symbols.',
        antiThesis: 'Public symbols can feel exclusionary where one religion dominates state or civic space.',
      },
      {
        opinion: 'should prevent both religious domination and anti-religious hostility.',
        antiThesis: 'Balancing both is difficult because each side may see the other as the real threat.',
      },
      {
        opinion: 'should make disagreement peaceful rather than invisible.',
        antiThesis: 'Open disagreement can still inflame tension if communities lack trust or equal power.',
      },
      {
        opinion: 'should be protected through a neutral state that favours no belief over another.',
        antiThesis: 'Strict neutrality can still disadvantage minority faiths whose needs differ from the secular default, so \'neutral\' treatment isn\'t always equal treatment.',
      },
    ],
  },
  {
    category: 'Secession',
    keyword: 'secession',
    data: [
      {
        opinion: 'should be recognised as a democratic possibility.',
        antiThesis: 'Secession can destabilise states, weaken institutions, and create new minority problems.',
      },
      {
        opinion: 'should be allowed when a clear majority freely supports it.',
        antiThesis: 'A simple majority may be insufficient for an irreversible constitutional rupture.',
      },
      {
        opinion: 'should be legal only through constitutional procedures.',
        antiThesis: 'Constitutions may be designed to block secession even when political grievances are legitimate.',
      },
      {
        opinion: 'should be resisted when it threatens peace and stability.',
        antiThesis: 'Stability should not be used to deny communities the right to decide their political future.',
      },
      {
        opinion: 'should be negotiated rather than imposed unilaterally.',
        antiThesis: 'Negotiation may be impossible if the central state refuses to recognise the claim.',
      },
      {
        opinion: 'should be available to colonised or oppressed peoples.',
        antiThesis: 'Not every secessionist movement is oppressed; some are driven by wealth, identity, or elite interest.',
      },
      {
        opinion: 'should not be used by wealthy regions to abandon poorer ones.',
        antiThesis: 'Regions may argue they should not be permanently bound to fiscal systems they see as unfair.',
      },
      {
        opinion: 'should require a serious plan for borders, debt, currency, and rights.',
        antiThesis: 'Requiring detailed plans can become a barrier used to delegitimise political self-determination.',
      },
      {
        opinion: 'should protect minorities inside the seceding territory.',
        antiThesis: 'Minority protection is essential, but it can complicate or weaken a majority independence claim.',
      },
      {
        opinion: 'should be judged by whether it expands democracy and human dignity.',
        antiThesis: 'Democracy and dignity are interpreted differently by unionists, separatists, minorities, and neighbouring states.',
      },
      {
        opinion: 'should be a guaranteed right exercisable by simple majority at any time.',
        antiThesis: 'A 50%-plus-one threshold for an irreversible act invites repeated destabilising votes and can trap large dissenting minorities; major constitutional change usually requires supermajorities for a reason.',
      },
      {
        opinion: 'should be prohibited entirely, as fragmentation breeds conflict and weakness.',
        antiThesis: 'Absolute prohibition denies a real remedy to genuinely oppressed peoples and can entrench domination, which is itself a source of conflict.',
      },
    ],
  },
  {
    category: 'Secession',
    keyword: 'self-determination',
    data: [
      {
        opinion: 'should belong to peoples, not only existing states.',
        antiThesis: 'Defining “a people” is politically contested and can exclude internal minorities.',
      },
      {
        opinion: 'should include the right to form a new state.',
        antiThesis: 'Autonomy, federalism, or decentralisation may satisfy self-determination without breaking the state.',
      },
      {
        opinion: 'should not be denied by constitutional rigidity.',
        antiThesis: 'Constitutional rigidity can protect stability, rights, and the interests of the whole population.',
      },
      {
        opinion: 'should be exercised through peaceful procedures.',
        antiThesis: 'Oppressed peoples may lack access to peaceful procedures if the state refuses recognition.',
      },
      {
        opinion: 'should not erase the rights of those who oppose secession.',
        antiThesis: 'Opponents matter, but majority decisions often create outcomes some citizens reject.',
      },
      {
        opinion: 'should be informed by history without being trapped by it.',
        antiThesis: 'Historical claims can be powerful, but present consent should remain central.',
      },
      {
        opinion: 'should include cultural autonomy even without independence.',
        antiThesis: 'Cultural autonomy may be insufficient when people want full control over law, taxes, and diplomacy.',
      },
      {
        opinion: 'should not become ethnic exclusion.',
        antiThesis: 'National movements often rely on shared identity, language, memory, or culture.',
      },
      {
        opinion: 'should be linked to human rights and democratic consent.',
        antiThesis: 'International law does not always clearly support secession outside colonial or extreme oppression contexts.',
      },
      {
        opinion: 'should offer more than symbolic independence.',
        antiThesis: 'Symbolic independence can still matter deeply for identity, dignity, and historical recognition.',
      },
      {
        opinion: 'should allow any community that wishes to leave a state to do so unconditionally.',
        antiThesis: 'Unconditional secession on demand makes stable states impossible and ignores the minorities within the seceding region who may want to stay.',
      },
      {
        opinion: 'should be balanced against minority rights and economic ties through negotiation.',
        antiThesis: 'Open-ended negotiation can become an indefinite veto that frustrates a clear democratic majority for independence, denying self-determination in practice.',
      },
    ],
  },
  {
    category: 'Secession',
    keyword: 'statehood',
    data: [
      {
        opinion: 'should require viable institutions.',
        antiThesis: 'Many states build institutions after independence rather than before it.',
      },
      {
        opinion: 'should not be recognised without democratic legitimacy.',
        antiThesis: 'International recognition often depends on geopolitics as much as democratic legitimacy.',
      },
      {
        opinion: 'should include fiscal and administrative capacity.',
        antiThesis: 'Lack of full capacity should not automatically deny people political freedom.',
      },
      {
        opinion: 'should protect citizenship for all residents.',
        antiThesis: 'Citizenship transitions can be legally complex, especially for dual citizens, minorities, and migrants.',
      },
      {
        opinion: 'should not create statelessness.',
        antiThesis: 'Avoiding statelessness is essential, but border and citizenship disputes can still arise.',
      },
      {
        opinion: 'should be recognised through lawful agreements.',
        antiThesis: 'Lawful agreements may be blocked by states that refuse to negotiate.',
      },
      {
        opinion: 'should not be built on revenge against the former state.',
        antiThesis: 'Grievances often fuel independence movements and cannot simply be set aside.',
      },
      {
        opinion: 'should include clear international obligations.',
        antiThesis: 'New states may need time to negotiate obligations, treaties, and institutional membership.',
      },
      {
        opinion: 'should not rely only on romantic nationalism.',
        antiThesis: 'National feeling can sustain institutions, sacrifice, and collective purpose.',
      },
      {
        opinion: 'should serve people better than the previous arrangement.',
        antiThesis: 'Future outcomes are uncertain and cannot always be proven before independence.',
      },
      {
        opinion: 'should be open to any people with a distinct identity who vote to govern themselves.',
        antiThesis: '\'Distinct identity\' is infinitely divisible; taken literally it licenses endless fragmentation and the ethnic gerrymandering that fuels conflict.',
      },
      {
        opinion: 'should require the consent of the whole nation, not merely one region within it.',
        antiThesis: 'Requiring the consent of the very majority a region seeks to leave gives the larger party a permanent veto, making self-determination meaningless.',
      },
    ],
  },
  {
    category: 'Secession',
    keyword: 'unity',
    data: [
      {
        opinion: 'should be earned, not enforced by fear.',
        antiThesis: 'States still need legal authority to preserve constitutional order.',
      },
      {
        opinion: 'should respect regional difference.',
        antiThesis: 'Too much decentralisation can weaken national capacity and shared standards.',
      },
      {
        opinion: 'should not silence autonomy or independence claims.',
        antiThesis: 'Endless constitutional debate can paralyse government and polarise society.',
      },
      {
        opinion: 'should be built through justice, not coercion.',
        antiThesis: 'Groups disagree about what justice requires, especially around fiscal transfers and language rights.',
      },
      {
        opinion: 'should not require cultural uniformity.',
        antiThesis: 'Shared identity can strengthen solidarity, trust, and democratic cooperation.',
      },
      {
        opinion: 'should be renewed through democratic consent.',
        antiThesis: 'Constantly testing consent through referendums can create instability.',
      },
      {
        opinion: 'should protect interdependence between regions.',
        antiThesis: 'Interdependence can also feel like dependency or domination.',
      },
      {
        opinion: 'should not dismiss secessionists as irrational.',
        antiThesis: 'Secessionist grievances may be real, but their proposed solutions can still be impractical.',
      },
      {
        opinion: 'should include fair resource sharing.',
        antiThesis: 'Resource sharing can be seen as unfair by regions that contribute more than they receive.',
      },
      {
        opinion: 'should be a relationship rather than a cage.',
        antiThesis: 'A state cannot function if membership is treated as entirely optional at every moment.',
      },
      {
        opinion: 'should be preserved firmly, since states have the right to defend their territorial integrity.',
        antiThesis: 'Rigid defence of integrity against a genuine, sustained majority is exactly what turns peaceful independence movements violent.',
      },
      {
        opinion: 'should be enforced even against the will of a region, because order outranks separation.',
        antiThesis: 'Coercing a region to remain against a settled democratic majority is precisely the path to repression and insurgency that wrecks states.',
      },
    ],
  },
  {
    category: 'Secession',
    keyword: 'referendum',
    data: [
      {
        opinion: 'should be required before any legitimate secession.',
        antiThesis: 'Referendums can oversimplify complex constitutional, economic, and minority-rights questions.',
      },
      {
        opinion: 'should require a clear question and clear consequences.',
        antiThesis: 'Consequences often depend on negotiations that can only happen after a vote.',
      },
      {
        opinion: 'should require a supermajority for independence.',
        antiThesis: 'Supermajority rules can allow a minority to block the will of a clear majority.',
      },
      {
        opinion: 'should include all residents most affected by secession.',
        antiThesis: 'Defining who is “most affected” is difficult, especially for diaspora, border regions, and the wider state.',
      },
      {
        opinion: 'should not be held under fear, war, or coercion.',
        antiThesis: 'Political campaigns often involve strong emotions, pressure, and uncertainty even in peaceful contexts.',
      },
      {
        opinion: 'should include impartial information.',
        antiThesis: 'Perfect neutrality is difficult because institutions, media, and experts also have interests.',
      },
      {
        opinion: 'should not be repeated endlessly until separatists win.',
        antiThesis: 'Democratic preferences can change, and refusing future votes may deepen resentment.',
      },
      {
        opinion: 'should be internationally observed where conflict is likely.',
        antiThesis: 'External observers may be seen as interference in domestic constitutional affairs.',
      },
      {
        opinion: 'should settle legitimacy without ending democratic debate.',
        antiThesis: 'If debate never ends, society may remain trapped in permanent constitutional conflict.',
      },
      {
        opinion: 'should balance majority will, minority rights, legality, and stability.',
        antiThesis: 'These values often conflict because democratic mandates do not automatically solve legal or social consequences.',
      },
      {
        opinion: 'should be sufficient on its own to dissolve a union, with no central veto permitted.',
        antiThesis: 'Dissolving a shared state affects everyone in it, not just one region; letting one part decide unilaterally ignores obligations over common debts, defence, and citizens.',
      },
      {
        opinion: 'should never override the constitution, which binds all parts of the state together.',
        antiThesis: 'Constitutions can be unjust or frozen against legitimate aspirations; treating them as inviolable can lock peoples into states they never consented to join.',
      },
    ],
  },
  {
    category: 'Transparency',
    keyword: 'transparency',
    data: [
      {
        opinion: 'should be the default wherever power affects people.',
        antiThesis: 'Transparency matters, but privacy, security, diplomacy, and negotiation sometimes require confidentiality.',
      },
      {
        opinion: 'should reveal decisions, interests, and consequences.',
        antiThesis: 'Too much information can overwhelm citizens and make accountability harder rather than easier.',
      },
      {
        opinion: 'should not be used as a substitute for accountability.',
        antiThesis: 'Transparency is often the first condition that makes accountability possible.',
      },
      {
        opinion: 'should make hidden power visible.',
        antiThesis: 'Some informal power is difficult to document, measure, or disclose.',
      },
      {
        opinion: 'should be clear enough for ordinary people.',
        antiThesis: 'Simplifying complex decisions can distort uncertainty, trade-offs, and technical detail.',
      },
      {
        opinion: 'should include what is uncertain, not only what is decided.',
        antiThesis: 'Too much visible uncertainty can weaken confidence and make institutions look indecisive.',
      },
      {
        opinion: 'should expose conflicts of interest.',
        antiThesis: 'Not every conflict of interest implies corruption or improper influence.',
      },
      {
        opinion: 'should not become performative openness without real change.',
        antiThesis: 'Symbolic disclosure can still shift norms and create pressure for deeper reform.',
      },
      {
        opinion: 'should be designed, not dumped.',
        antiThesis: 'Raw data can still be valuable because it allows independent scrutiny and alternative analysis.',
      },
      {
        opinion: 'should balance openness, privacy, trust, and institutional effectiveness.',
        antiThesis: 'These values often conflict, especially during crises, investigations, or negotiations.',
      },
      {
        opinion: 'should be absolute, abolishing official secrecy in all but the narrowest security cases.',
        antiThesis: 'Even \'narrow\' security exceptions are where most genuinely sensitive material lives, and legitimate confidentiality also covers diplomacy, commercial bids, and personal privacy.',
      },
      {
        opinion: 'should yield to confidentiality, since constant disclosure paralyses effective governance.',
        antiThesis: 'Defaulting to secrecy is how corruption and abuse hide; the burden should fall on withholding, not on the public to pry information loose.',
      },
    ],
  },
  {
    category: 'Transparency',
    keyword: 'government',
    data: [
      {
        opinion: 'should disclose how public decisions are made.',
        antiThesis: 'Some policy formation requires confidential deliberation before decisions are ready for public release.',
      },
      {
        opinion: 'should make budgets understandable to citizens.',
        antiThesis: 'Public budgets are inherently complex and cannot always be reduced to simple summaries.',
      },
      {
        opinion: 'should reveal lobbying influence.',
        antiThesis: 'Stakeholders, companies, unions, and NGOs also need legitimate ways to communicate expertise.',
      },
      {
        opinion: 'should publish public data in accessible formats.',
        antiThesis: 'Open data can create privacy risks or be misused when context is missing.',
      },
      {
        opinion: 'should explain policy trade-offs honestly.',
        antiThesis: 'Too much emphasis on trade-offs can make governments seem weak or unable to act.',
      },
      {
        opinion: 'should not hide failure behind bureaucracy.',
        antiThesis: 'Public blame can discourage experimentation, innovation, and honest internal reporting.',
      },
      {
        opinion: 'should make procurement traceable.',
        antiThesis: 'Full traceability can expose sensitive commercial information or slow urgent procurement.',
      },
      {
        opinion: 'should protect whistleblowers who reveal public harm.',
        antiThesis: 'Leaks can also endanger privacy, national security, diplomatic relations, or active investigations.',
      },
      {
        opinion: 'should make emergency powers visible and time-limited.',
        antiThesis: 'Emergencies sometimes require rapid action before full public explanation is possible.',
      },
      {
        opinion: 'should answer citizens in plain language.',
        antiThesis: 'Legal precision and technical detail are sometimes necessary to avoid ambiguity.',
      },
      {
        opinion: 'should operate in total openness, with every document and meeting public by default.',
        antiThesis: 'Total openness would chill candid advice, expose ongoing investigations and personal data, and push real decisions into unrecorded back channels.',
      },
      {
        opinion: 'should retain broad secrecy, because security and diplomacy require discretion.',
        antiThesis: 'Broad secrecy is routinely used to bury embarrassment and wrongdoing under a security label; the cure is narrow, justified classification, not broad discretion.',
      },
    ],
  },
  {
    category: 'Transparency',
    keyword: 'corporations',
    data: [
      {
        opinion: 'should disclose environmental and social impact.',
        antiThesis: 'Full impact measurement can be costly, uncertain, and difficult across complex supply chains.',
      },
      {
        opinion: 'should make pricing less opaque.',
        antiThesis: 'Pricing often reflects fluctuating costs, risk, demand, logistics, and commercial strategy.',
      },
      {
        opinion: 'should reveal supply-chain risks.',
        antiThesis: 'Full disclosure may expose trade secrets, supplier relationships, or security-sensitive information.',
      },
      {
        opinion: 'should not hide behind branding.',
        antiThesis: 'Branding can also help communicate quality, identity, values, and differentiation.',
      },
      {
        opinion: 'should disclose data practices clearly.',
        antiThesis: 'Data systems are often technically complex and hard to explain fully in simple language.',
      },
      {
        opinion: 'should be honest about sustainability claims.',
        antiThesis: 'Overly strict claim standards may discourage companies from communicating genuine progress.',
      },
      {
        opinion: 'should explain algorithmic decisions that affect users.',
        antiThesis: 'Some explanations may be technically difficult or may reveal proprietary systems.',
      },
      {
        opinion: 'should publish meaningful pay and diversity data.',
        antiThesis: 'Such data may create privacy concerns, misinterpretation, or reputational harm without context.',
      },
      {
        opinion: 'should disclose political spending.',
        antiThesis: 'Companies and associations also have rights to advocate for policies that affect them.',
      },
      {
        opinion: 'should report harm before scandal forces it.',
        antiThesis: 'Early disclosure can create legal, financial, and reputational risks even before facts are fully established.',
      },
      {
        opinion: 'should be forced to disclose every contract, tax arrangement, and lobbying contact.',
        antiThesis: 'Total disclosure of commercial terms destroys competitive position and trade secrets, deterring the very investment and bidding that disclosure is meant to discipline.',
      },
      {
        opinion: 'should keep commercial information private, as forced disclosure destroys competitiveness.',
        antiThesis: 'Blanket commercial confidentiality conceals tax avoidance, safety records, and lobbying that the public has a legitimate interest in scrutinising.',
      },
    ],
  },
  {
    category: 'Transparency',
    keyword: 'data',
    data: [
      {
        opinion: 'should be open when it serves the public interest.',
        antiThesis: 'Open data can enable misuse, privacy violations, commercial extraction, or security risks.',
      },
      {
        opinion: 'should be traceable to reliable sources.',
        antiThesis: 'Source chains can be incomplete, contested, or difficult to verify.',
      },
      {
        opinion: 'should not be manipulated through selective presentation.',
        antiThesis: 'Every presentation requires selection, framing, and interpretation.',
      },
      {
        opinion: 'should include methodology and limitations.',
        antiThesis: 'Many audiences may ignore methodology or find it inaccessible.',
      },
      {
        opinion: 'should be available for independent review.',
        antiThesis: 'Sensitive data may require controlled access to protect privacy or safety.',
      },
      {
        opinion: 'should not hide uncertainty behind false precision.',
        antiThesis: 'Decision-makers often need clear estimates even when uncertainty remains.',
      },
      {
        opinion: 'should be interpretable, not merely available.',
        antiThesis: 'Raw availability still matters because experts and journalists can interpret it independently.',
      },
      {
        opinion: 'should protect privacy while enabling accountability.',
        antiThesis: 'Privacy and accountability can conflict when disclosure identifies individuals or groups.',
      },
      {
        opinion: 'should make public claims auditable.',
        antiThesis: 'Audits can be costly, slow, and dependent on specialised expertise.',
      },
      {
        opinion: 'should not become decorative dashboards.',
        antiThesis: 'Good dashboards can still improve public understanding and organisational decision-making.',
      },
      {
        opinion: 'should be open by default, with public information freely available to all citizens.',
        antiThesis: 'Default-open data exposes personal, medical, and security information; openness must be balanced against the privacy of the people that data describes.',
      },
      {
        opinion: 'should be tightly held, since open information is easily misused by hostile actors.',
        antiThesis: 'Hoarding public data also blocks accountability, research, and innovation; the misuse risk is managed by anonymisation and rules, not blanket secrecy.',
      },
    ],
  },
  {
    category: 'Transparency',
    keyword: 'institutions',
    data: [
      {
        opinion: 'should normalise admitting mistakes.',
        antiThesis: 'Repeated public admissions without visible improvement can reduce confidence.',
      },
      {
        opinion: 'should not humiliate people for uncertainty.',
        antiThesis: 'Leaders still need to make decisions even when information is incomplete.',
      },
      {
        opinion: 'should reward honesty before perfection.',
        antiThesis: 'Competence still matters; honesty alone cannot substitute for performance.',
      },
      {
        opinion: 'should make silence harder when harm occurs.',
        antiThesis: 'Premature disclosure can spread false accusations or compromise investigations.',
      },
      {
        opinion: 'should include listening, not only publishing.',
        antiThesis: 'Not every demand can be met, even when citizens or stakeholders are heard.',
      },
      {
        opinion: 'should prevent secrecy from becoming privilege.',
        antiThesis: 'Confidentiality can protect vulnerable people, negotiations, and sensitive work.',
      },
      {
        opinion: 'should make complexity easier to share.',
        antiThesis: 'Some audiences may prefer clear guidance over detailed complexity.',
      },
      {
        opinion: 'should build accountability into everyday practice.',
        antiThesis: 'Routine accountability can create administrative burden and slow work.',
      },
      {
        opinion: 'should not weaponise transparency to shame individuals.',
        antiThesis: 'Individual accountability may still be necessary when people misuse power.',
      },
      {
        opinion: 'should turn openness into responsibility.',
        antiThesis: 'Openness alone cannot guarantee ethical action, competence, or justice.',
      },
      {
        opinion: 'should publish their decisions and reasoning so the public can hold them to account.',
        antiThesis: 'Publishing every internal deliberation makes officials risk-averse and performative, degrading the candour that good decisions require.',
      },
      {
        opinion: 'should be trusted to act privately, as endless scrutiny only breeds dysfunction.',
        antiThesis: 'Unscrutinised institutions reliably drift toward self-interest and error; scrutiny is uncomfortable precisely because it works.',
      },
    ],
  },
  {
    category: 'Sanctions',
    keyword: 'sanctions',
    data: [
      {
        opinion: 'should be used to pressure regimes that violate human rights.',
        antiThesis: 'Sanctions can pressure abusive regimes, but they may also harm ordinary citizens more than political elites.',
      },
      {
        opinion: 'should be targeted at leaders, not entire populations.',
        antiThesis: 'Targeted sanctions are more ethical, but they may be less powerful than broad economic pressure.',
      },
      {
        opinion: 'should be avoided because they often punish civilians.',
        antiThesis: 'Avoiding sanctions entirely may leave democracies with few tools short of military force.',
      },
      {
        opinion: 'should be used only after diplomacy fails.',
        antiThesis: 'Waiting too long may allow aggression, repression, or illegal activity to continue unchecked.',
      },
      {
        opinion: 'should be multilateral to be legitimate and effective.',
        antiThesis: 'Multilateral agreement can be slow or impossible when powerful states have conflicting interests.',
      },
      {
        opinion: 'should be temporary and linked to clear conditions.',
        antiThesis: 'Clear conditions help, but regimes may manipulate partial compliance without changing core behaviour.',
      },
      {
        opinion: 'should be escalated when states threaten international security.',
        antiThesis: 'Escalation can provoke retaliation, deepen conflict, or close diplomatic channels.',
      },
      {
        opinion: 'should not be used as economic warfare by powerful countries.',
        antiThesis: 'Powerful states may argue sanctions are necessary to respond to aggression or rights abuses without war.',
      },
      {
        opinion: 'should be judged by results, not moral signalling.',
        antiThesis: 'Results are difficult to measure because deterrence, pressure, and prevention are often indirect.',
      },
      {
        opinion: 'should balance pressure, legality, humanitarian impact, and diplomacy.',
        antiThesis: 'Balancing these aims is difficult because pressure often creates humanitarian and diplomatic costs.',
      },
      {
        opinion: 'should be abolished entirely, since they punish ordinary people for the acts of rulers.',
        antiThesis: 'Removing sanctions entirely leaves only war or inaction against aggression; targeted measures exist precisely to pressure regimes while sparing civilians more than force would.',
      },
      {
        opinion: 'should be imposed aggressively to cripple hostile regimes whatever the civilian cost.',
        antiThesis: 'Sweeping sanctions that devastate civilians tend to rally the population behind the regime and rarely achieve their political aim, as decades of cases show.',
      },
      {
        opinion: 'should be expanded into full blockades when a regime defies the international order.',
        antiThesis: 'A blockade is widely treated as an act of war and can trigger the conflict it was meant to avoid, while inflicting mass civilian suffering.',
      },
    ],
  },
  {
    category: 'Sanctions',
    keyword: 'economic sanctions',
    data: [
      {
        opinion: 'should restrict access to money used for aggression or repression.',
        antiThesis: 'Financial restrictions can also affect banks, businesses, workers, and civilians far from decision-makers.',
      },
      {
        opinion: 'should target oligarchs, state companies, and military-linked industries.',
        antiThesis: 'Elites may evade sanctions through proxies, offshore networks, or alternative markets.',
      },
      {
        opinion: 'should not block medicine, food, or humanitarian goods.',
        antiThesis: 'Exemptions exist in theory, but banks and suppliers may still avoid transactions because of compliance risk.',
      },
      {
        opinion: 'should be broad when targeted measures fail.',
        antiThesis: 'Broad sanctions can create inflation, shortages, unemployment, and resentment among civilians.',
      },
      {
        opinion: 'should avoid collective punishment.',
        antiThesis: 'Critics of targeted-only approaches argue that regimes may ignore pressure unless the whole economy is affected.',
      },
      {
        opinion: 'should include humanitarian carve-outs.',
        antiThesis: 'Carve-outs can be exploited by sanctioned actors or undermined by over-compliance from companies.',
      },
      {
        opinion: 'should be coordinated through international institutions.',
        antiThesis: 'International institutions may be paralysed by vetoes, alliances, or geopolitical bargaining.',
      },
      {
        opinion: 'should not become permanent punishment.',
        antiThesis: 'Long-term sanctions may be necessary if the sanctioned behaviour continues.',
      },
      {
        opinion: 'should include monitoring of civilian harm.',
        antiThesis: 'Monitoring harm is difficult in closed regimes or conflict zones.',
      },
      {
        opinion: 'should be lifted when conditions are met.',
        antiThesis: 'Lifting sanctions too quickly can reward superficial compliance and weaken leverage.',
      },
      {
        opinion: 'should never be used, because collective punishment of civilians is unjust.',
        antiThesis: 'Without economic tools, states face a binary of doing nothing or using force; well-designed targeted sanctions are an alternative to war, not a form of it.',
      },
      {
        opinion: 'should be maximal, since only overwhelming pressure changes a regime\'s behaviour.',
        antiThesis: 'Maximum-pressure campaigns frequently harden adversaries and splinter international coalitions, reducing rather than increasing leverage.',
      },
    ],
  },
  {
    category: 'Sanctions',
    keyword: 'trade sanctions',
    data: [
      {
        opinion: 'should restrict goods that support military aggression.',
        antiThesis: 'Dual-use goods are difficult to classify because many civilian technologies can have military uses.',
      },
      {
        opinion: 'should not disrupt essential supply chains.',
        antiThesis: 'Some disruption may be unavoidable if sanctioned sectors are tied to security threats.',
      },
      {
        opinion: 'should protect domestic industries from hostile-state dependence.',
        antiThesis: 'Reducing dependence can raise costs and reduce consumer choice.',
      },
      {
        opinion: 'should not become disguised protectionism.',
        antiThesis: 'Security and human-rights concerns may require restrictions even when they affect trade.',
      },
      {
        opinion: 'should be used against forced labour and severe exploitation.',
        antiThesis: 'Trade restrictions can also harm workers in poor countries if alternatives are not provided.',
      },
      {
        opinion: 'should be transparent about which goods are restricted and why.',
        antiThesis: 'Too much transparency may help sanctioned actors find loopholes.',
      },
      {
        opinion: 'should be limited when they harm global food or energy security.',
        antiThesis: 'Food and energy revenues may fund regimes or conflicts, making exemptions politically difficult.',
      },
      {
        opinion: 'should be paired with alternative supply strategies.',
        antiThesis: 'Building alternatives can be expensive, slow, and inefficient.',
      },
      {
        opinion: 'should not isolate entire societies from cultural and educational exchange.',
        antiThesis: 'Cultural exchange can be exploited for propaganda, influence operations, or elite privilege.',
      },
      {
        opinion: 'should pressure governments without closing all channels of contact.',
        antiThesis: 'Maintaining channels may be seen as weakness or normalisation of unacceptable behaviour.',
      },
      {
        opinion: 'should be lifted wherever they cause humanitarian harm, regardless of politics.',
        antiThesis: 'Lifting sanctions unconditionally rewards the regime that caused the harm and removes the leverage to change its behaviour; humanitarian carve-outs are the better fix.',
      },
      {
        opinion: 'should be used as a primary weapon short of war against adversaries.',
        antiThesis: 'Over-reliance on broad trade bans accelerates rival payment systems and supply chains that erode the sanctioning power\'s long-term leverage.',
      },
    ],
  },
  {
    category: 'Sanctions',
    keyword: 'targeted sanctions',
    data: [
      {
        opinion: 'should focus on officials, oligarchs, military leaders, and human-rights abusers.',
        antiThesis: 'Targeted sanctions can be symbolically powerful but may not change state behaviour.',
      },
      {
        opinion: 'should include asset freezes and travel bans.',
        antiThesis: 'Asset freezes and travel bans can be evaded through family members, shell companies, or allied states.',
      },
      {
        opinion: 'should protect ordinary people from collective punishment.',
        antiThesis: 'Narrow sanctions may not create enough pressure to change policy.',
      },
      {
        opinion: 'should require strong evidence and due process.',
        antiThesis: 'Due process can be slow and may expose sensitive intelligence.',
      },
      {
        opinion: 'should be appealable.',
        antiThesis: 'Appeals can be exploited by powerful actors to delay enforcement.',
      },
      {
        opinion: 'should expose corrupt wealth hidden abroad.',
        antiThesis: 'Public exposure must still protect privacy, evidence standards, and legal rights.',
      },
      {
        opinion: 'should not be based on political convenience.',
        antiThesis: 'Foreign policy inevitably involves priorities, alliances, and strategic judgement.',
      },
      {
        opinion: 'should be coordinated across financial centres.',
        antiThesis: 'Coordination is difficult when countries benefit from sanctioned money or disagree politically.',
      },
      {
        opinion: 'should include technology restrictions when surveillance or repression is involved.',
        antiThesis: 'Technology restrictions can also block civilians, journalists, researchers, and NGOs from useful tools.',
      },
      {
        opinion: 'should be strong enough to change elite incentives.',
        antiThesis: 'Elites may rally around the regime if sanctions are framed as foreign attack.',
      },
      {
        opinion: 'should be used narrowly against individuals rather than whole populations.',
        antiThesis: 'Targeted sanctions are easily evaded through proxies and shell companies, and against entrenched regimes they often prove too weak to alter conduct.',
      },
    ],
  },
  {
    category: 'Sanctions',
    keyword: 'diplomacy',
    data: [
      {
        opinion: 'should remain open even when sanctions are imposed.',
        antiThesis: 'Maintaining diplomacy may allow regimes to stall while sanctions lose momentum.',
      },
      {
        opinion: 'should use sanctions as leverage, not as an end in themselves.',
        antiThesis: 'Some sanctions are imposed for punishment or moral condemnation, not only negotiation.',
      },
      {
        opinion: 'should offer clear off-ramps for sanctioned states.',
        antiThesis: 'Off-ramps can be interpreted as weakness if the original harm was severe.',
      },
      {
        opinion: 'should not reward bad actors simply for stopping harm they caused.',
        antiThesis: 'Without incentives, leaders may have no reason to change course.',
      },
      {
        opinion: 'should include humanitarian dialogue regardless of politics.',
        antiThesis: 'Humanitarian dialogue can be manipulated for propaganda or access control.',
      },
      {
        opinion: 'should coordinate sanctions with allies.',
        antiThesis: 'Alliance coordination can dilute measures and produce lowest-common-denominator policy.',
      },
      {
        opinion: 'should avoid sanctions that make future peace harder.',
        antiThesis: 'Some conflicts require pressure before meaningful peace talks become possible.',
      },
      {
        opinion: 'should combine pressure with communication.',
        antiThesis: 'Communication can fail when regimes use talks to buy time.',
      },
      {
        opinion: 'should measure whether sanctions change behaviour.',
        antiThesis: 'Behaviour change may take years and may be hard to separate from other factors.',
      },
      {
        opinion: 'should use sanctions carefully because coercion can outlast its purpose.',
        antiThesis: 'If sanctions are too easily lifted, they may lose credibility as a deterrent.',
      },
      {
        opinion: 'should replace sanctions completely, with engagement preferred over economic coercion.',
        antiThesis: 'Engagement without leverage often fails against determined aggressors; diplomacy and sanctions are usually complements, not substitutes.',
      },
      {
        opinion: 'should be backed by the constant threat of crushing economic isolation.',
        antiThesis: 'Constant threats of total isolation can foreclose the off-ramps diplomacy needs, locking both sides into escalation.',
      },
    ],
  },
  {
    category: 'Minimalism',
    keyword: 'minimalism',
    data: [
      {
        opinion: 'should be about clarity, not emptiness.',
        antiThesis: 'Emptiness itself can create calm, focus, and visual relief.',
      },
      {
        opinion: 'should reduce noise without removing warmth.',
        antiThesis: 'Austere minimalism can express discipline, silence, and restraint.',
      },
      {
        opinion: 'should make life easier rather than merely more aesthetic.',
        antiThesis: 'Aesthetics can shape mood, identity, attention, and behaviour.',
      },
      {
        opinion: 'should challenge overconsumption.',
        antiThesis: 'Consumption also supports comfort, livelihoods, creativity, and cultural expression.',
      },
      {
        opinion: 'should not become another form of elite status.',
        antiThesis: 'High-quality simple objects can cost more because they depend on craft, materials, and durability.',
      },
      {
        opinion: 'should be voluntary, not moral superiority.',
        antiThesis: 'Values-based lifestyles often carry moral claims about waste, excess, and responsibility.',
      },
      {
        opinion: 'should not shame people who need or love many things.',
        antiThesis: 'Questioning accumulation can reveal anxiety, waste, and unsustainable habits.',
      },
      {
        opinion: 'should create space for attention and presence.',
        antiThesis: 'Some people feel more alive, creative, and grounded in rich, layered environments.',
      },
      {
        opinion: 'should not erase personality.',
        antiThesis: 'Personality can also appear through restraint, proportion, and careful selection.',
      },
      {
        opinion: 'should balance simplicity, function, beauty, and humanity.',
        antiThesis: 'These values often conflict because radical simplicity can remove comfort, memory, or expressive detail.',
      },
      {
        opinion: 'should become a public norm, with advertising and excess actively discouraged by law.',
        antiThesis: 'Using the state to enforce frugal norms and suppress advertising is paternalistic and censorious, substituting official taste for personal choice.',
      },
      {
        opinion: 'should remain a personal choice, never a value the state imposes on anyone.',
        antiThesis: 'Consumption-led prosperity has genuine ecological limits; treating ever-rising consumption as the goal ignores the externalities it imposes on the climate and the future.',
      },
      {
        opinion: 'should be rejected as a privileged aesthetic that ignores how most people actually live.',
        antiThesis: 'Unrestricted marketing to children and the vulnerable is widely regulated for good reason; \'they can ignore it\' underestimates engineered persuasion.',
      },
    ],
  },
  {
    category: 'Minimalism',
    keyword: 'simplicity',
    data: [
      {
        opinion: 'should make systems easier to use.',
        antiThesis: 'Some systems need complexity to remain accurate, fair, or powerful.',
      },
      {
        opinion: 'should remove unnecessary friction.',
        antiThesis: 'Some friction protects consent, reflection, safety, and deliberate decision-making.',
      },
      {
        opinion: 'should not erase nuance.',
        antiThesis: 'Too much nuance can paralyse action and make communication inaccessible.',
      },
      {
        opinion: 'should be designed around human limits.',
        antiThesis: 'Advanced users may still need detail, customisation, and complexity.',
      },
      {
        opinion: 'should make beauty feel effortless.',
        antiThesis: 'Visible craft, ornament, and complexity can also be beautiful.',
      },
      {
        opinion: 'should not become simplistic thinking.',
        antiThesis: 'Simplification is often necessary to communicate, teach, and decide.',
      },
      {
        opinion: 'should reduce decision fatigue.',
        antiThesis: 'Choice can also express freedom, identity, and individuality.',
      },
      {
        opinion: 'should support calm rather than control.',
        antiThesis: 'Structure and control can help people manage disorder and stress.',
      },
      {
        opinion: 'should reveal what matters most.',
        antiThesis: 'What matters changes with context, relationships, and life stage.',
      },
      {
        opinion: 'should be a method, not an identity.',
        antiThesis: 'Identity can motivate people to sustain a meaningful practice.',
      },
      {
        opinion: 'should be promoted as the path to both ecological survival and human contentment.',
        antiThesis: 'Simplicity as policy can romanticise scarcity; for the billions still lacking basics, more consumption—not less—is what improves lives.',
      },
      {
        opinion: 'should not be romanticised, as material abundance is what frees people from hardship.',
        antiThesis: 'Revealed preference is shaped by advertising and status competition; treating all consumption as pure free choice overstates how autonomous it is.',
      },
    ],
  },
  {
    category: 'Minimalism',
    keyword: 'consumption',
    data: [
      {
        opinion: 'should be reduced to what supports life and meaning.',
        antiThesis: 'Pleasure, experimentation, and abundance can also enrich life.',
      },
      {
        opinion: 'should not define personal success.',
        antiThesis: 'Objects can mark memory, achievement, care, and self-expression.',
      },
      {
        opinion: 'should move from quantity to quality.',
        antiThesis: 'Low-cost quantity may be necessary for people with limited budgets.',
      },
      {
        opinion: 'should not be driven by endless novelty.',
        antiThesis: 'Novelty drives creativity, cultural movement, innovation, and joy.',
      },
      {
        opinion: 'should include repair, reuse, and patience.',
        antiThesis: 'New products can improve safety, hygiene, efficiency, and accessibility.',
      },
      {
        opinion: 'should not hide emotional insecurity.',
        antiThesis: 'Buying can also be joyful, practical, creative, or socially meaningful.',
      },
      {
        opinion: 'should be shaped by ecological responsibility.',
        antiThesis: 'Strict limits can feel unfair when applied equally across unequal incomes.',
      },
      {
        opinion: 'should not turn identity into shopping.',
        antiThesis: 'Style and objects can help people express belonging, taste, and identity.',
      },
      {
        opinion: 'should resist impulse.',
        antiThesis: 'Spontaneity can bring delight, discovery, and emotional richness.',
      },
      {
        opinion: 'should make “enough” feel possible.',
        antiThesis: 'Ambition, desire, and aspiration can complicate what “enough” means.',
      },
      {
        opinion: 'should be radically reduced, with society organised around sufficiency rather than growth.',
        antiThesis: 'Engineering economy-wide \'sufficiency\' by design would slash the output that funds healthcare, pensions, and the green transition; \'enough\' decided centrally tends to mean shortage.',
      },
      {
        opinion: 'should be celebrated, since spending drives the prosperity that lifts living standards.',
        antiThesis: 'A purely individual framing ignores that aggregate consumption choices have collective consequences—on emissions, land, and waste—that aren\'t fully private.',
      },
    ],
  },
  {
    category: 'Minimalism',
    keyword: 'design',
    data: [
      {
        opinion: 'should remove everything that does not serve the experience.',
        antiThesis: 'Decorative elements can carry emotion, culture, memory, and delight.',
      },
      {
        opinion: 'should prioritise proportion, rhythm, and restraint.',
        antiThesis: 'Expressive, maximalist design can be equally sophisticated when intentional.',
      },
      {
        opinion: 'should make function feel beautiful.',
        antiThesis: 'Beauty sometimes exceeds function and has value beyond practical use.',
      },
      {
        opinion: 'should not confuse blank space with meaning.',
        antiThesis: 'Empty space can create hierarchy, breathing room, and focus.',
      },
      {
        opinion: 'should reveal material honesty.',
        antiThesis: 'Illusion, transformation, and theatricality are also legitimate design traditions.',
      },
      {
        opinion: 'should make complexity feel manageable.',
        antiThesis: 'Some complexity should remain visible for transparency and control.',
      },
      {
        opinion: 'should not erase local character.',
        antiThesis: 'Minimal forms can travel across cultures and create universal clarity.',
      },
      {
        opinion: 'should use fewer elements with greater care.',
        antiThesis: 'Abundance can create richness, narrative, and emotional depth.',
      },
      {
        opinion: 'should be timeless before it is trendy.',
        antiThesis: 'Trends keep design responsive, alive, and culturally relevant.',
      },
      {
        opinion: 'should make absence feel intentional.',
        antiThesis: 'Too much absence can feel cold, empty, or impersonal.',
      },
      {
        opinion: 'should favour durability and restraint over novelty and disposability.',
        antiThesis: 'Durability sometimes conflicts with efficiency gains from newer models, and demand for novelty isn\'t simply manufactured—it reflects real preference.',
      },
    ],
  },
  {
    category: 'Minimalism',
    keyword: 'lifestyle',
    data: [
      {
        opinion: 'should create more time for what matters.',
        antiThesis: 'Removing possessions alone cannot solve work pressure, inequality, or emotional stress.',
      },
      {
        opinion: 'should not become a rigid identity.',
        antiThesis: 'A clear lifestyle identity can help people maintain habits and values.',
      },
      {
        opinion: 'should support mental lightness.',
        antiThesis: 'Some people find comfort, memory, and security in collections and abundance.',
      },
      {
        opinion: 'should not demand perfection.',
        antiThesis: 'Standards and rituals can help maintain clarity and calm.',
      },
      {
        opinion: 'should be adapted to different lives and budgets.',
        antiThesis: 'Adaptation matters, but minimalism still requires real choices and trade-offs.',
      },
      {
        opinion: 'should protect people from constant accumulation.',
        antiThesis: 'Accumulation can also reflect preparedness, care, family life, or cultural tradition.',
      },
      {
        opinion: 'should not romanticise having less when poverty is forced.',
        antiThesis: 'Voluntary simplicity can still be meaningful for people who have real choice.',
      },
      {
        opinion: 'should make maintenance easier.',
        antiThesis: 'Some meaningful things require care, repair, and ongoing attention.',
      },
      {
        opinion: 'should be about freedom, not deprivation.',
        antiThesis: 'Limits can sometimes feel like deprivation, especially when framed as moral duty.',
      },
      {
        opinion: 'should help people live deliberately.',
        antiThesis: 'Not every life decision needs to become conscious optimisation.',
      },
      {
        opinion: 'should be reoriented away from ownership toward sharing, repair, and reuse.',
        antiThesis: 'Sharing economies have their own waste and rebound effects, and mandating reuse can raise costs and lower the quality and safety markets deliver.',
      },
      {
        opinion: 'should be left entirely to the individual, with no judgement of how people live.',
        antiThesis: 'Abundance has freed many from hardship, but undirected abundance also produces waste and ecological harm that constrain future freedom.',
      },
    ],
  },
  {
    category: 'Consumerism',
    keyword: 'consumerism',
    data: [
      {
        opinion: 'should be abolished because it turns human desire into corporate profit.',
        antiThesis: 'Consumerism can be manipulative, but markets also give people choice, comfort, convenience, and access to goods.',
      },
      {
        opinion: 'should be defended as an expression of personal freedom.',
        antiThesis: 'Choice is not fully free when advertising, debt, inequality, and social pressure shape desire.',
      },
      {
        opinion: 'should be treated as a form of psychological control.',
        antiThesis: 'People are not passive victims; they often use consumption creatively to express identity, taste, and belonging.',
      },
      {
        opinion: 'should be celebrated because it drives innovation and prosperity.',
        antiThesis: 'Growth through consumption can produce waste, exploitation, debt, and ecological destruction.',
      },
      {
        opinion: 'should be reduced to protect the planet.',
        antiThesis: 'Reducing consumption too aggressively can harm jobs, businesses, public revenue, and developing economies.',
      },
      {
        opinion: 'should be intensified because demand creates progress.',
        antiThesis: 'More demand does not automatically create meaningful progress; it can also create overproduction and artificial needs.',
      },
      {
        opinion: 'should be replaced by a culture of enough.',
        antiThesis: '“Enough” is subjective and can become moralistic, restrictive, or blind to aspiration.',
      },
      {
        opinion: 'should not be morally judged because people deserve pleasure.',
        antiThesis: 'Pleasure matters, but pleasure built on extraction, waste, or debt carries social consequences.',
      },
      {
        opinion: 'should be seen as spiritual emptiness disguised as abundance.',
        antiThesis: 'Material goods can carry memory, care, beauty, ritual, and genuine emotional meaning.',
      },
      {
        opinion: 'should be judged by whether it expands freedom or manufactures dependency.',
        antiThesis: 'Freedom and dependency often coexist because the same products can empower some people and trap others.',
      },
      {
        opinion: 'should be dismantled as a system that manufactures false needs to enrich corporations.',
        antiThesis: 'The \'false needs\' thesis assumes someone can objectively rank real versus false desires; in practice that judgment, made by the state, is paternalism that overrides people\'s own choices.',
      },
      {
        opinion: 'should be embraced as the free expression of preference in a prosperous society.',
        antiThesis: 'Calling all consumption free expression ignores manufactured demand, debt, and the environmental costs that fall on others.',
      },
    ],
  },
  {
    category: 'Consumerism',
    keyword: 'advertising',
    data: [
      {
        opinion: 'should be banned because it manufactures artificial desire.',
        antiThesis: 'Advertising can manipulate, but it also informs people about products, services, opportunities, and culture.',
      },
      {
        opinion: 'should be protected as commercial free speech.',
        antiThesis: 'Commercial speech deserves protection, but it should not be allowed to deceive, exploit insecurity, or target vulnerability.',
      },
      {
        opinion: 'should not target children under any circumstances.',
        antiThesis: 'Children need protection, but families and media systems also rely on advertising-funded content.',
      },
      {
        opinion: 'should be allowed to create fantasy, aspiration, and desire.',
        antiThesis: 'Fantasy can inspire, but it can also produce insecurity, comparison, and dissatisfaction.',
      },
      {
        opinion: 'should be heavily restricted when it promotes harmful products.',
        antiThesis: 'Harm-based restrictions can expand too far and become paternalistic.',
      },
      {
        opinion: 'should be more personalised because relevance reduces noise.',
        antiThesis: 'Personalisation can become surveillance, manipulation, and behavioural targeting.',
      },
      {
        opinion: 'should be stripped from public space.',
        antiThesis: 'Public advertising can fund transport, events, media, and cultural activity.',
      },
      {
        opinion: 'should be celebrated as a creative industry.',
        antiThesis: 'Creativity does not erase the fact that advertising’s purpose is often to increase consumption.',
      },
      {
        opinion: 'should expose its own persuasive techniques.',
        antiThesis: 'Too much disclosure may be ignored or make communication cluttered and ineffective.',
      },
      {
        opinion: 'should balance persuasion, truth, creativity, and responsibility.',
        antiThesis: 'These values conflict because the most persuasive campaigns are not always the most responsible.',
      },
      {
        opinion: 'should be banned almost entirely, as it manipulates people against their own interests.',
        antiThesis: 'A near-total ad ban would defund free media and search, entrench incumbents who don\'t need to advertise, and restrict legitimate commercial speech.',
      },
      {
        opinion: 'should remain unrestricted, since it is simply information that consumers may ignore.',
        antiThesis: 'Advertising is engineered persuasion, not neutral information; the evidence on its effect on children and addictive products is why even free-market states regulate it.',
      },
    ],
  },
  {
    category: 'Consumerism',
    keyword: 'overconsumption',
    data: [
      {
        opinion: 'should be treated as ecological violence.',
        antiThesis: 'Calling overconsumption violence may alienate people and ignore differences between survival consumption and luxury excess.',
      },
      {
        opinion: 'should be left to individual choice.',
        antiThesis: 'Individual choices create collective harms when multiplied through waste, emissions, and resource extraction.',
      },
      {
        opinion: 'should become socially shameful.',
        antiThesis: 'Shame can be classist, punitive, and ineffective if sustainable alternatives are unaffordable.',
      },
      {
        opinion: 'should be solved through better technology, not guilt.',
        antiThesis: 'Efficiency gains can be cancelled out if total consumption keeps rising.',
      },
      {
        opinion: 'should be taxed when it involves luxury emissions and waste.',
        antiThesis: 'Luxury taxes can be symbolic, hard to define, and may affect jobs in luxury sectors.',
      },
      {
        opinion: 'should not be blamed on individuals when systems reward excess.',
        antiThesis: 'Systems matter, but individual habits and cultural norms still shape demand.',
      },
      {
        opinion: 'should be embraced as abundance after centuries of scarcity.',
        antiThesis: 'Abundance can improve life, but endless abundance can become wasteful and spiritually empty.',
      },
      {
        opinion: 'should be replaced by repair, sharing, and reuse.',
        antiThesis: 'Repair and reuse help, but new production can improve safety, hygiene, accessibility, and efficiency.',
      },
      {
        opinion: 'should be distinguished from ordinary people wanting comfort.',
        antiThesis: 'Comfort is legitimate, but comfort can still be marketed into unnecessary accumulation.',
      },
      {
        opinion: 'should be reduced first among the richest households and countries.',
        antiThesis: 'Targeting the rich is fair, but ecological transition requires broader cultural and infrastructural change.',
      },
      {
        opinion: 'should be taxed heavily until wasteful consumption becomes socially unacceptable.',
        antiThesis: 'Defining and taxing \'overconsumption\' is arbitrary and tends to hit aspirational middle earners harder than the truly wealthy.',
      },
      {
        opinion: 'should not be policed, as people have every right to spend what they earn.',
        antiThesis: 'No one need police private taste, but the aggregate ecological footprint of overconsumption is a legitimate public concern, not mere moralising.',
      },
    ],
  },
  {
    category: 'Consumerism',
    keyword: 'brands',
    data: [
      {
        opinion: 'should be dismantled because they turn identity into purchase.',
        antiThesis: 'Brands can also help people navigate quality, trust, aesthetics, values, and community.',
      },
      {
        opinion: 'should be celebrated as cultural symbols.',
        antiThesis: 'Brands can create culture, but they can also commodify belonging and flatten identity.',
      },
      {
        opinion: 'should be forced to prove every ethical claim.',
        antiThesis: 'Strict proof protects consumers, but it may discourage brands from communicating genuine progress.',
      },
      {
        opinion: 'should be free to create desire without moral policing.',
        antiThesis: 'Desire-making becomes harmful when it exploits insecurity, youth, body image, or social anxiety.',
      },
      {
        opinion: 'should not replace real community.',
        antiThesis: 'Brand communities can still create real connection, shared taste, and cultural participation.',
      },
      {
        opinion: 'should be punished when they use activism as marketing.',
        antiThesis: 'Brands can also use their visibility to support social causes and shift norms.',
      },
      {
        opinion: 'should make consumption feel more meaningful.',
        antiThesis: 'Meaning should not have to be purchased, and branding can disguise ordinary products as emotional necessity.',
      },
      {
        opinion: 'should be transparent about production, labour, and margins.',
        antiThesis: 'Full transparency can expose trade secrets and overwhelm consumers with information.',
      },
      {
        opinion: 'should compete to make better, longer-lasting products.',
        antiThesis: 'Competition can also push faster trends, lower prices, and disposable production.',
      },
      {
        opinion: 'should balance beauty, honesty, profit, and social responsibility.',
        antiThesis: 'Profit and responsibility often conflict when responsible production costs more.',
      },
      {
        opinion: 'should lose their power through strict limits on marketing to children and the vulnerable.',
        antiThesis: 'Targeted limits on marketing to children are defensible, but broad \'brand power\' restrictions shade into controlling ordinary commercial information.',
      },
      {
        opinion: 'should be free to market however they wish in an open and competitive economy.',
        antiThesis: 'Open competition still needs rules against deceptive and predatory marketing; an \'open economy\' doesn\'t mean no consumer protection.',
      },
    ],
  },
  {
    category: 'Consumerism',
    keyword: 'shopping',
    data: [
      {
        opinion: 'should be seen as a symptom of emotional emptiness.',
        antiThesis: 'Shopping can also be practical, joyful, social, creative, and culturally meaningful.',
      },
      {
        opinion: 'should be defended as a harmless pleasure.',
        antiThesis: 'Shopping is not harmless when it depends on debt, waste, exploitation, or compulsive behaviour.',
      },
      {
        opinion: 'should be replaced by experiences, relationships, and care.',
        antiThesis: 'Experiences can also be commodified, expensive, status-driven, and environmentally damaging.',
      },
      {
        opinion: 'should remain a private choice without moral judgement.',
        antiThesis: 'Private choices have public consequences when they shape labour, waste, emissions, and inequality.',
      },
      {
        opinion: 'should be slowed down through repair, waiting periods, and reflection.',
        antiThesis: 'Delaying purchases can be impractical, paternalistic, or hostile to convenience.',
      },
      {
        opinion: 'should be made frictionless through technology.',
        antiThesis: 'Frictionless shopping can encourage impulse buying, debt, and unconscious consumption.',
      },
      {
        opinion: 'should support local businesses before global platforms.',
        antiThesis: 'Global platforms can provide lower prices, wider access, and convenience for consumers.',
      },
      {
        opinion: 'should be used politically through boycotts and ethical buying.',
        antiThesis: 'Ethical shopping can shift responsibility from governments and corporations onto individuals.',
      },
      {
        opinion: 'should not define leisure.',
        antiThesis: 'Retail spaces can also provide social life, discovery, entertainment, and urban vitality.',
      },
      {
        opinion: 'should balance need, pleasure, affordability, and ecological responsibility.',
        antiThesis: 'These values often conflict because the most affordable or pleasurable option is not always the most responsible.',
      },
      {
        opinion: 'should be reframed as a civic act, with consumers steered toward ethical choices.',
        antiThesis: 'Official \'steering\' of consumer choices is soft coercion that assumes the state knows best; ethical consumption is better driven by information than direction.',
      },
      {
        opinion: 'should be entirely a private matter beyond any moral or political judgement.',
        antiThesis: 'Consumption has real external effects—on climate, labour conditions, and waste—so treating it as purely private ignores who bears those costs.',
      },
    ],
  },
  {
    category: 'Algorithms',
    keyword: 'algorithms',
    data: [
      {
        opinion: 'should make decisions more objective than humans can.',
        antiThesis: 'Algorithms can reproduce bias from data, design choices, and institutional assumptions.',
      },
      {
        opinion: 'should never replace human judgement in important decisions.',
        antiThesis: 'Human judgement is also biased, inconsistent, slow, and vulnerable to emotion or prejudice.',
      },
      {
        opinion: 'should be used wherever they improve speed, accuracy, and efficiency.',
        antiThesis: 'Speed and accuracy are not enough if people cannot appeal, understand, or challenge decisions.',
      },
      {
        opinion: 'should be restricted when they affect rights, work, credit, housing, or healthcare.',
        antiThesis: 'Over-restriction may block useful tools that improve access, consistency, and service quality.',
      },
      {
        opinion: 'should be trusted more than human intuition when evidence supports them.',
        antiThesis: 'Evidence can be incomplete, and algorithmic success in one context may fail in another.',
      },
      {
        opinion: 'should be treated as political systems, not neutral tools.',
        antiThesis: 'Algorithms are shaped by politics, but they can still be useful technical tools when properly governed.',
      },
      {
        opinion: 'should be free to evolve through market competition.',
        antiThesis: 'Market competition may prioritise profit, engagement, and dominance over fairness or public interest.',
      },
      {
        opinion: 'should be democratically controlled when they shape public life.',
        antiThesis: 'Democratic control can be slow, politicised, and technically underinformed.',
      },
      {
        opinion: 'should be open-source by default.',
        antiThesis: 'Full openness may expose systems to gaming, security risks, or commercial theft.',
      },
      {
        opinion: 'should balance innovation, accountability, fairness, and usefulness.',
        antiThesis: 'These goals often conflict because the most efficient system is not always the most explainable or fair.',
      },
      {
        opinion: 'should be publicly owned and open-source wherever they govern access to essential services.',
        antiThesis: 'Open-sourcing decision systems for essential services exposes them to gaming and adversarial manipulation, and public ownership doesn\'t by itself make them fairer or more competent.',
      },
      {
        opinion: 'should be left to private innovation, since regulation only entrenches incumbents.',
        antiThesis: 'Unregulated algorithmic decisions have already produced documented discrimination in credit and policing; some rules exist precisely because self-correction didn\'t happen.',
      },
    ],
  },
  {
    category: 'Algorithms',
    keyword: 'algorithmic bias',
    data: [
      {
        opinion: 'should be treated as discrimination when it harms people.',
        antiThesis: 'Harmful outcomes matter, but not every unequal result proves discrimination.',
      },
      {
        opinion: 'should be audited before systems are deployed.',
        antiThesis: 'Audits can be expensive, incomplete, and difficult to standardise across contexts.',
      },
      {
        opinion: 'should not be hidden behind technical language.',
        antiThesis: 'Technical language can obscure harm, but some technical detail is necessary for accurate evaluation.',
      },
      {
        opinion: 'should be corrected even if accuracy decreases slightly.',
        antiThesis: 'Lower accuracy can harm everyone, including the groups the correction intends to protect.',
      },
      {
        opinion: 'should be reduced by using better and more representative data.',
        antiThesis: 'Better data helps, but biased institutions can still produce biased outcomes even with improved datasets.',
      },
      {
        opinion: 'should not be exaggerated to block technological progress.',
        antiThesis: 'Minimising bias can allow discriminatory systems to scale quickly.',
      },
      {
        opinion: 'should be compared against human bias, not perfection.',
        antiThesis: '“Better than humans” may still be unacceptable if the system creates opaque or large-scale harm.',
      },
      {
        opinion: 'should be handled through transparency, testing, and appeal rights.',
        antiThesis: 'Procedural safeguards may be too weak if the underlying system remains harmful.',
      },
      {
        opinion: 'should make society question the institutions behind the data.',
        antiThesis: 'Structural critique matters, but immediate technical fixes may still reduce harm.',
      },
      {
        opinion: 'should never be accepted as the cost of efficiency.',
        antiThesis: 'Some trade-offs may be unavoidable when designing large-scale public or commercial systems.',
      },
      {
        opinion: 'should be eliminated through mandatory audits enforced by an independent regulator.',
        antiThesis: '\'Eliminating\' bias is unattainable—every model encodes trade-offs—and a single regulator defining acceptable bias concentrates enormous, contestable power.',
      },
      {
        opinion: 'should be accepted as inevitable, since no system can ever be perfectly neutral.',
        antiThesis: 'That perfect neutrality is impossible doesn\'t mean all biases are equal or acceptable; measurable, reducible discrimination still demands correction.',
      },
    ],
  },
  {
    category: 'Algorithms',
    keyword: 'recommendation systems',
    data: [
      {
        opinion: 'should not decide what people think, watch, or desire.',
        antiThesis: 'Recommendation systems can help users navigate overwhelming amounts of information.',
      },
      {
        opinion: 'should be optimised for user wellbeing, not engagement.',
        antiThesis: 'Wellbeing is difficult to define and may become paternalistic if platforms decide what is “good” for users.',
      },
      {
        opinion: 'should maximise relevance and personalisation.',
        antiThesis: 'Hyper-personalisation can create filter bubbles, addiction, and behavioural manipulation.',
      },
      {
        opinion: 'should be turned off by default for children.',
        antiThesis: 'Recommendations can also help children find educational, creative, and age-appropriate content.',
      },
      {
        opinion: 'should be transparent about why content is shown.',
        antiThesis: 'Full explanations may be too complex or may help bad actors manipulate rankings.',
      },
      {
        opinion: 'should be regulated like media power.',
        antiThesis: 'Heavy regulation may restrict innovation, speech diversity, and platform experimentation.',
      },
      {
        opinion: 'should expose people to opposing views.',
        antiThesis: 'Forced exposure can backfire, annoy users, or amplify harmful content in the name of balance.',
      },
      {
        opinion: 'should let users control their own ranking rules.',
        antiThesis: 'Most users may not want or understand complex ranking settings.',
      },
      {
        opinion: 'should be allowed to optimise for entertainment.',
        antiThesis: 'Entertainment optimisation can reward outrage, addiction, misinformation, or shallow attention.',
      },
      {
        opinion: 'should be judged by what they amplify at scale.',
        antiThesis: 'Amplification is important, but users, creators, advertisers, and culture also shape outcomes.',
      },
      {
        opinion: 'should be regulated to protect users from manipulation and addiction.',
        antiThesis: '\'Manipulation\' and \'addiction\' are slippery to define in law, and heavy regulation risks freezing product design and entrenching the largest platforms.',
      },
      {
        opinion: 'should be free to optimise engagement, as users choose to use them.',
        antiThesis: 'Pure engagement optimisation has demonstrably amplified misinformation and harmful content because outrage is engaging; \'users consent\' ignores designed compulsion.',
      },
    ],
  },
  {
    category: 'Algorithms',
    keyword: 'automated decisions',
    data: [
      {
        opinion: 'should always include a human appeal.',
        antiThesis: 'Human appeals can be slow, costly, inconsistent, and difficult to provide at scale.',
      },
      {
        opinion: 'should replace human discretion where discretion creates unfairness.',
        antiThesis: 'Removing discretion can make systems rigid and unable to recognise individual context.',
      },
      {
        opinion: 'should never decide punishment, welfare, hiring, or healthcare alone.',
        antiThesis: 'Automated tools can support these decisions by reducing error, delay, and inconsistency.',
      },
      {
        opinion: 'should be allowed when they are demonstrably more accurate than humans.',
        antiThesis: 'Accuracy alone does not settle questions of dignity, legitimacy, accountability, and appeal.',
      },
      {
        opinion: 'should disclose when a machine is involved.',
        antiThesis: 'Disclosure may not help if people cannot understand or meaningfully challenge the decision.',
      },
      {
        opinion: 'should be banned in high-stakes public services.',
        antiThesis: 'A ban may prevent governments from improving speed, consistency, and access.',
      },
      {
        opinion: 'should be used to reduce bureaucracy.',
        antiThesis: 'Automation can also create new bureaucracy through error correction, appeals, and compliance.',
      },
      {
        opinion: 'should be explainable in plain language.',
        antiThesis: 'Some complex models cannot be fully explained without oversimplifying or reducing performance.',
      },
      {
        opinion: 'should make institutions more accountable, not less.',
        antiThesis: 'Institutions may use automation to shift blame onto systems, vendors, or technical complexity.',
      },
      {
        opinion: 'should be judged by outcomes, not by whether humans or machines made them.',
        antiThesis: 'Process matters because people deserve to know who or what has power over them.',
      },
      {
        opinion: 'should be banned in justice, welfare, and hiring without a human making the final call.',
        antiThesis: 'A mandatory human in the loop can be a rubber stamp that adds cost without accountability, and humans are often more biased than the systems they oversee.',
      },
      {
        opinion: 'should be embraced widely, as machines are often fairer than biased humans.',
        antiThesis: 'Machines trained on biased data reproduce and scale that bias behind a false veneer of objectivity, which can be harder to challenge than a human decision.',
      },
    ],
  },
  {
    category: 'Algorithms',
    keyword: 'algorithmic governance',
    data: [
      {
        opinion: 'should be rejected because society cannot be run by code.',
        antiThesis: 'Code already helps manage transport, finance, healthcare, logistics, and public administration.',
      },
      {
        opinion: 'should make public services faster and more consistent.',
        antiThesis: 'Faster and more consistent services can still be unjust if rules are flawed or opaque.',
      },
      {
        opinion: 'should be democratically audited.',
        antiThesis: 'Democratic audits require technical expertise that elected bodies may lack.',
      },
      {
        opinion: 'should not turn citizens into data profiles.',
        antiThesis: 'Data profiles can help identify needs, allocate resources, and prevent fraud.',
      },
      {
        opinion: 'should be used to fight corruption and inefficiency.',
        antiThesis: 'Automated anti-corruption systems can create false accusations or miss sophisticated abuse.',
      },
      {
        opinion: 'should never replace political judgement.',
        antiThesis: 'Political judgement can be biased, populist, corrupt, or poorly informed.',
      },
      {
        opinion: 'should be built as public infrastructure.',
        antiThesis: 'Public infrastructure can become bureaucratic, slow, and vulnerable to political misuse.',
      },
      {
        opinion: 'should be limited because it expands surveillance capacity.',
        antiThesis: 'Limits are necessary, but too little data can weaken service delivery and public planning.',
      },
      {
        opinion: 'should make rules visible and testable.',
        antiThesis: 'Rules that are too visible may be gamed by people trying to exploit the system.',
      },
      {
        opinion: 'should balance efficiency, rights, legitimacy, and human judgement.',
        antiThesis: 'These values often conflict because the most efficient systems can be the least contestable.',
      },
      {
        opinion: 'should be rejected entirely where it removes accountable human judgement.',
        antiThesis: 'Blanket rejection forgoes real gains in consistency and speed; the answer is accountable design, not refusing automation in administration.',
      },
      {
        opinion: 'should expand, because data-driven systems govern more efficiently than people.',
        antiThesis: 'Efficiency without contestability is dangerous in governance; opaque automated systems make errors at scale and strip citizens of meaningful appeal.',
      },
    ],
  },
  {
    category: 'Feminism',
    keyword: 'feminism',
    data: [
      {
        opinion: 'should dismantle patriarchy in every institution.',
        antiThesis: 'Patriarchy critique can reveal structural power, but treating every institution as patriarchal may oversimplify complex social systems.',
      },
      {
        opinion: 'should focus on equal rights, equal opportunity, and legal equality.',
        antiThesis: 'Legal equality is important, but formal rights may not remove deeper economic, cultural, or bodily inequalities.',
      },
      {
        opinion: 'should be abolished because it has become hostile to men.',
        antiThesis: 'Some feminist rhetoric can be hostile, but feminism has also expanded rights, safety, and opportunity for women.',
      },
      {
        opinion: 'should be anti-capitalist because women’s oppression is tied to economic exploitation.',
        antiThesis: 'Capitalism can exploit women, but women have also gained autonomy through paid work, entrepreneurship, and property rights.',
      },
      {
        opinion: 'should reject all traditional gender roles.',
        antiThesis: 'Some people freely choose traditional roles and may experience them as meaningful rather than oppressive.',
      },
      {
        opinion: 'should defend women’s sex-based rights above all other claims.',
        antiThesis: 'Sex-based rights matter in some contexts, but excluding gender identity entirely may harm transgender and non-binary people.',
      },
      {
        opinion: 'should include all people harmed by gender hierarchy.',
        antiThesis: 'A very broad definition may make feminism less focused on women’s specific experiences and legal protections.',
      },
      {
        opinion: 'should be unnecessary because individual merit should matter more than gender.',
        antiThesis: 'Merit is important, but gendered barriers can shape who gets recognised as “meritorious” in the first place.',
      },
      {
        opinion: 'should be revolutionary, not polite.',
        antiThesis: 'Confrontational politics can expose injustice, but it can also alienate potential allies and harden opposition.',
      },
      {
        opinion: 'should balance equality, freedom, safety, and plural life choices.',
        antiThesis: 'These values often conflict because one person’s liberation framework may feel restrictive to another.',
      },
      {
        opinion: 'should pursue full structural revolution rather than mere equality within current systems.',
        antiThesis: 'Revolutionary overhaul risks the instability and unintended harms that incremental, durable reform avoids; most rights have been won through reform, not rupture.',
      },
      {
        opinion: 'should focus narrowly on concrete legal equality rather than broader cultural transformation.',
        antiThesis: 'Legal equality alone leaves intact the cultural and economic structures—caregiving burdens, pay gaps—that formal rights don\'t reach.',
      },
      {
        opinion: 'should be rejected where it denies real and meaningful differences between the sexes.',
        antiThesis: 'Acknowledging average differences doesn\'t justify unequal rights or opportunity; \'real differences\' has historically been the excuse for exclusion.',
      },
    ],
  },
  {
    category: 'Feminism',
    keyword: 'patriarchy',
    data: [
      {
        opinion: 'should be treated as the root structure of women’s oppression.',
        antiThesis: 'Patriarchy is a powerful lens, but class, race, religion, sexuality, geography, and state power also shape oppression.',
      },
      {
        opinion: 'should be destroyed, not reformed.',
        antiThesis: 'Destruction language can inspire change, but reform may achieve concrete protections faster and with broader support.',
      },
      {
        opinion: 'should be understood as harmful to men as well as women.',
        antiThesis: 'Men may be harmed by rigid masculinity, but women often face different and more systemic forms of gendered power.',
      },
      {
        opinion: 'should not be used to blame every man for social inequality.',
        antiThesis: 'Structural critique is not necessarily personal blame; individuals can benefit from systems they did not create.',
      },
      {
        opinion: 'should be challenged in religion, family, work, law, and culture.',
        antiThesis: 'Some traditions argue that family, religion, or gender roles can provide stability, care, and meaning.',
      },
      {
        opinion: 'should be replaced by women-led institutions.',
        antiThesis: 'Women-led institutions may correct imbalance, but leadership by women does not automatically guarantee justice or equality.',
      },
      {
        opinion: 'should be seen as a myth used to justify resentment.',
        antiThesis: 'Dismissing patriarchy entirely can ignore documented inequalities in violence, pay, care work, and political representation.',
      },
      {
        opinion: 'should be fought through cultural change, not only law.',
        antiThesis: 'Culture matters, but legal rights and enforcement remain essential for protection and equality.',
      },
      {
        opinion: 'should be analysed without turning men into enemies.',
        antiThesis: 'Avoiding hostility may help dialogue, but some feminists argue anger is justified by violence and oppression.',
      },
      {
        opinion: 'should be confronted wherever power makes women smaller.',
        antiThesis: 'This is morally strong, but “making women smaller” can be subjective and contested in practice.',
      },
      {
        opinion: 'should be dismantled completely, root and branch, as the foundation of all oppression.',
        antiThesis: 'Treating one system as the root of all oppression oversimplifies; class, race, and other axes operate independently, and monocausal theories produce poor remedies.',
      },
    ],
  },
  {
    category: 'Feminism',
    keyword: 'equality',
    data: [
      {
        opinion: 'should mean equal rights under the law, not equal outcomes.',
        antiThesis: 'Equal rights do not guarantee fair outcomes when starting conditions and social expectations remain unequal.',
      },
      {
        opinion: 'should require equal outcomes in power, pay, safety, and representation.',
        antiThesis: 'Equal outcomes may require coercive measures that limit freedom, preference, or institutional autonomy.',
      },
      {
        opinion: 'should include reproductive autonomy.',
        antiThesis: 'Reproductive autonomy is central for many feminists, but some moral or religious views contest where autonomy begins and ends.',
      },
      {
        opinion: 'should include recognising unpaid care as essential labour.',
        antiThesis: 'Care work matters, but monetising or formalising care may alter intimate family relationships.',
      },
      {
        opinion: 'should not erase biological differences.',
        antiThesis: 'Biological differences may matter in some contexts, but they have often been exaggerated to justify inequality.',
      },
      {
        opinion: 'should abolish gendered expectations in childhood.',
        antiThesis: 'Challenging stereotypes is good, but children should also be free to enjoy traditional toys, styles, or roles.',
      },
      {
        opinion: 'should protect women from male violence as a political priority.',
        antiThesis: 'Violence prevention is essential, but policy must avoid treating all men as threats by default.',
      },
      {
        opinion: 'should include men’s struggles with suicide, custody, education, and loneliness.',
        antiThesis: 'Men’s issues matter, but they should not be used to dismiss or minimise women’s inequality.',
      },
      {
        opinion: 'should allow women to choose ambition, motherhood, neither, or both.',
        antiThesis: 'Choice is important, but choices are shaped by money, culture, childcare, and workplace structures.',
      },
      {
        opinion: 'should be measured by freedom from domination, not sameness.',
        antiThesis: 'Freedom from domination is valuable, but it can be hard to measure or translate into policy.',
      },
      {
        opinion: 'should mean equal outcomes enforced by law, not merely equal opportunity.',
        antiThesis: 'Enforcing identical outcomes overrides individual choice and difference; equality of opportunity, not mandated outcomes, is what most rights frameworks protect.',
      },
      {
        opinion: 'should mean identical treatment, with no group given special preference of any kind.',
        antiThesis: 'Identical treatment of unequal starting points preserves inequality; targeted measures exist because neutral rules don\'t undo entrenched disadvantage.',
      },
    ],
  },
  {
    category: 'Feminism',
    keyword: 'womanhood',
    data: [
      {
        opinion: 'should be defined by biological sex.',
        antiThesis: 'Biological sex matters to some protections, but womanhood is also lived socially and personally by transgender women.',
      },
      {
        opinion: 'should include everyone who identifies and lives as a woman.',
        antiThesis: 'Inclusion matters, but some feminists worry it may complicate sex-based spaces, data, and protections.',
      },
      {
        opinion: 'should not be reduced to biology, beauty, motherhood, or femininity.',
        antiThesis: 'Rejecting reductionism is important, but biology, beauty, motherhood, and femininity can still be meaningful to many women.',
      },
      {
        opinion: 'should be celebrated as distinct and powerful.',
        antiThesis: 'Celebrating womanhood can empower, but it can also risk essentialising women or excluding those who do not identify with traditional femininity.',
      },
      {
        opinion: 'should be abolished as a political category.',
        antiThesis: 'Abolishing the category may ignore the material realities of sexism, reproductive politics, and sex-based violence.',
      },
      {
        opinion: 'should be protected from commercial beauty standards.',
        antiThesis: 'Beauty practices can be oppressive, but they can also be creative, pleasurable, cultural, and self-directed.',
      },
      {
        opinion: 'should not be treated as victimhood.',
        antiThesis: 'Avoiding victimhood is useful, but naming victimisation is necessary when real harm occurs.',
      },
      {
        opinion: 'should include rage, softness, ambition, care, sexuality, and refusal.',
        antiThesis: 'A broad definition is inclusive, but it can become so expansive that it loses political clarity.',
      },
      {
        opinion: 'should be defended against misogyny from any political side.',
        antiThesis: 'Misogyny can appear across ideologies, but different groups disagree over what counts as misogyny.',
      },
      {
        opinion: 'should be self-defined without forcing one model of femininity.',
        antiThesis: 'Self-definition matters, but collective politics often requires shared categories.',
      },
      {
        opinion: 'should be defined expansively to include all who identify with it without condition.',
        antiThesis: 'An entirely self-defined category can collide with sex-based protections and data, which is why many feminists argue some contexts still require reference to sex.',
      },
      {
        opinion: 'should be defined by biological sex alone for the purpose of sex-based rights.',
        antiThesis: 'A sex-only definition denies recognition to trans women and ignores that \'woman\' functions socially and legally in ways biology alone doesn\'t capture.',
      },
    ],
  },
  {
    category: 'Feminism',
    keyword: 'sexuality',
    data: [
      {
        opinion: 'should be liberated from shame and patriarchal control.',
        antiThesis: 'Sexual liberation can empower, but it can also be commercialised or shaped by male desire and market pressure.',
      },
      {
        opinion: 'should be protected from pornography, prostitution, and commercial exploitation.',
        antiThesis: 'Some adults defend sex work and pornography as chosen labour or expression, not exploitation by default.',
      },
      {
        opinion: 'should include women’s pleasure as politically important.',
        antiThesis: 'Pleasure matters, but centring sexuality can feel reductive or uncomfortable for some feminists.',
      },
      {
        opinion: 'should not be commodified under the language of empowerment.',
        antiThesis: 'Commodification can exploit empowerment language, but commercial sexual expression may still be freely chosen.',
      },
      {
        opinion: 'should be governed by consent rather than purity.',
        antiThesis: 'Consent is essential, but some argue consent alone cannot address power, trauma, poverty, or cultural pressure.',
      },
      {
        opinion: 'should reject all male entitlement to women’s bodies.',
        antiThesis: 'Rejecting entitlement is essential, but policies must distinguish between desire, attraction, persuasion, and coercion.',
      },
      {
        opinion: 'should be private and not politicised.',
        antiThesis: 'Sexuality becomes political when law, violence, healthcare, education, and rights are involved.',
      },
      {
        opinion: 'should be taught openly to prevent shame and abuse.',
        antiThesis: 'Sex education must be age-appropriate and respect family, cultural, and religious concerns.',
      },
      {
        opinion: 'should not be used to judge women’s moral worth.',
        antiThesis: 'Reducing sexual judgement is important, but communities may still hold moral norms around sexuality.',
      },
      {
        opinion: 'should balance autonomy, dignity, consent, safety, and freedom from exploitation.',
        antiThesis: 'These values often conflict because one person’s freedom may be seen by another',
      },
      {
        opinion: 'should be wholly liberated from every traditional moral and social constraint.',
        antiThesis: '\'All constraint\' includes protections against exploitation and coercion, so total deregulation can harm the very people it claims to free.',
      },
    ],
  },
  {
    category: 'Feminism',
    keyword: 'gender roles',
    data: [
      {
        opinion: 'should be respected where freely chosen, not condemned as inherently oppressive.',
        antiThesis: 'Choices are made within social pressures, so calling traditional roles \'freely chosen\' can obscure the constraints that still shape women\'s options.',
      },
    ],
  },
  {
    category: 'Patriarchy',
    keyword: 'patriarchy',
    data: [
      {
        opinion: 'should be destroyed because it is the root system of women’s oppression.',
        antiThesis: 'Patriarchy is a powerful concept, but treating it as the root of all oppression may oversimplify class, race, religion, sexuality, and state power.',
      },
      {
        opinion: 'should be abolished in family, religion, law, work, and culture.',
        antiThesis: 'Total abolition may sound transformative, but institutions often contain mixed forms of care, stability, harm, and hierarchy.',
      },
      {
        opinion: 'should be dismantled through law, education, and economic redistribution.',
        antiThesis: 'Legal and economic reform can reduce inequality, but cultural attitudes may not change through policy alone.',
      },
      {
        opinion: 'should be understood as a myth used to make men feel guilty.',
        antiThesis: 'Some rhetoric may overgeneralise men, but dismissing patriarchy entirely can ignore real patterns of gendered violence, pay gaps, and power imbalance.',
      },
      {
        opinion: 'should be preserved because traditional gender order protects society.',
        antiThesis: 'Traditional order can provide meaning for some, but it can also restrict freedom, especially for women and gender-nonconforming people.',
      },
      {
        opinion: 'should be replaced by matriarchal institutions.',
        antiThesis: 'Women-led systems may correct male dominance, but women in power can also reproduce hierarchy, exclusion, or abuse.',
      },
      {
        opinion: 'should be exposed as a structure that harms men too.',
        antiThesis: 'Men may be harmed by rigid masculinity, but women often experience more direct and systemic gendered subordination.',
      },
      {
        opinion: 'should not be blamed for every personal failure or social problem.',
        antiThesis: 'Not everything is caused by patriarchy, but personal problems often unfold within gendered expectations and power structures.',
      },
      {
        opinion: 'should be treated as inseparable from capitalism, colonialism, and religion.',
        antiThesis: 'These systems intersect, but collapsing them into one structure may obscure their different causes and solutions.',
      },
      {
        opinion: 'should be analysed without turning every man into an enemy.',
        antiThesis: 'Avoiding collective blame may help dialogue, but anger toward male dominance can be politically understandable.',
      },
      {
        opinion: 'should be abolished entirely as an illegitimate system of male domination.',
        antiThesis: 'Framing every male-associated structure as illegitimate domination ignores that institutions serve functions beyond power, and that men too are constrained by gender norms.',
      },
      {
        opinion: 'should be defended where it reflects enduring and functional differences between the sexes.',
        antiThesis: 'Differences in averages don\'t justify systemic power imbalances; \'functional\' usually means functional for those it privileges.',
      },
    ],
  },
  {
    category: 'Patriarchy',
    keyword: 'male power',
    data: [
      {
        opinion: 'should be radically reduced in politics, business, religion, and media.',
        antiThesis: 'Reducing male dominance may improve representation, but quotas or exclusions can raise concerns about merit, fairness, and backlash.',
      },
      {
        opinion: 'should be redistributed through mandatory gender parity.',
        antiThesis: 'Gender parity can correct exclusion, but it may treat demographic balance as more important than individual qualification or preference.',
      },
      {
        opinion: 'should be considered inherently dangerous when unchecked.',
        antiThesis: 'Concentrated power is dangerous generally, but treating male power as uniquely dangerous may essentialise men.',
      },
      {
        opinion: 'should be challenged, not demonised.',
        antiThesis: 'Challenge without demonisation is constructive, but some argue polite reform protects the powerful.',
      },
      {
        opinion: 'should be defended as natural leadership.',
        antiThesis: 'Leadership ability is not biologically exclusive to men, and “natural leadership” has often justified exclusion.',
      },
      {
        opinion: 'should be replaced by female leadership wherever women were historically excluded.',
        antiThesis: 'Corrective leadership can repair imbalance, but replacing one dominance model with another may not create justice.',
      },
      {
        opinion: 'should be understood through class, not only gender.',
        antiThesis: 'Class matters, but wealthy and poor women can both experience misogyny and gendered violence.',
      },
      {
        opinion: 'should not be confused with individual men’s personal lives.',
        antiThesis: 'Structural power can benefit men even when individual men feel powerless.',
      },
      {
        opinion: 'should be dismantled first in institutions that control women’s bodies.',
        antiThesis: 'Bodily autonomy matters, but institutions also claim roles in healthcare, safeguarding, family law, and ethics.',
      },
      {
        opinion: 'should be made accountable without assuming women are morally superior.',
        antiThesis: 'Accountability is essential, but some feminist traditions argue women’s lived experience gives them distinct political insight.',
      },
      {
        opinion: 'should be actively dismantled across politics, family, and the economy alike.',
        antiThesis: 'Targeting \'male power\' as a bloc treats men as a uniform class and can overlook the class and other inequalities that cut across sex.',
      },
      {
        opinion: 'should be understood as responsibility and protection rather than mere domination.',
        antiThesis: 'Reframing dominance as benevolent protection still denies women equal agency and assumes a hierarchy the \'protected\' never consented to.',
      },
    ],
  },
  {
    category: 'Patriarchy',
    keyword: 'gender roles',
    data: [
      {
        opinion: 'should be abolished completely.',
        antiThesis: 'Abolishing gender roles may expand freedom, but some people freely find meaning in traditional roles.',
      },
      {
        opinion: 'should be preserved because they give society order.',
        antiThesis: 'Order can become constraint when roles are imposed rather than chosen.',
      },
      {
        opinion: 'should be made optional for everyone.',
        antiThesis: 'Choice is important, but “choice” is shaped by money, family expectations, religion, and social pressure.',
      },
      {
        opinion: 'should be taught as oppressive myths.',
        antiThesis: 'Teaching roles as only oppressive can shame people who genuinely enjoy traditional femininity or masculinity.',
      },
      {
        opinion: 'should be celebrated as complementary differences.',
        antiThesis: 'Complementarity can sound respectful, but it has often justified unequal authority and restricted opportunity.',
      },
      {
        opinion: 'should be deconstructed from early childhood.',
        antiThesis: 'Deconstruction can free children, but parents may object if schools appear to undermine family or religious values.',
      },
      {
        opinion: 'should not determine work, parenting, sexuality, or status.',
        antiThesis: 'Roles should not determine destiny, but patterns of preference may still emerge freely.',
      },
      {
        opinion: 'should be protected from ideological experiments.',
        antiThesis: 'Calling equality an “experiment” can preserve harmful stereotypes and unequal expectations.',
      },
      {
        opinion: 'should be replaced by individual personality and capacity.',
        antiThesis: 'Individualism can ignore how social structures shape personality, confidence, and ambition.',
      },
      {
        opinion: 'should be debated without humiliating people who live traditionally.',
        antiThesis: 'Respecting traditional lives is important, but tradition should not be used to limit others.',
      },
      {
        opinion: 'should be erased completely so that sex predicts nothing about a person\'s life.',
        antiThesis: 'Some sex-linked differences in preference persist even in the most egalitarian societies; \'predicts nothing\' overstates what policy can or should erase.',
      },
      {
        opinion: 'should be respected as natural complements that have ordered societies for millennia.',
        antiThesis: '\'Natural complement\' has historically justified excluding women from rights and work; appeals to nature have a poor record as a basis for fixing roles.',
      },
    ],
  },
  {
    category: 'Patriarchy',
    keyword: 'family',
    data: [
      {
        opinion: 'should be liberated from patriarchal authority.',
        antiThesis: 'Liberation from domination matters, but family authority can also provide care, continuity, and responsibility.',
      },
      {
        opinion: 'should be led by fathers as moral heads of households.',
        antiThesis: 'Father-led hierarchy can undermine women’s autonomy and children’s freedom.',
      },
      {
        opinion: 'should be reorganised around equal care and equal authority.',
        antiThesis: 'Equality in principle may still be difficult when income, pregnancy, childcare, and work patterns differ.',
      },
      {
        opinion: 'should not be treated as private when abuse is hidden inside it.',
        antiThesis: 'State intervention can protect victims, but excessive intervention can also invade family privacy.',
      },
      {
        opinion: 'should be abolished as a patriarchal ownership structure.',
        antiThesis: 'The family can reproduce hierarchy, but it also provides love, care, belonging, and intergenerational support.',
      },
      {
        opinion: 'should be protected from feminist attacks on motherhood and marriage.',
        antiThesis: 'Feminism does not necessarily attack motherhood or marriage; it often seeks to make them freely chosen and equal.',
      },
      {
        opinion: 'should recognise unpaid care as real labour.',
        antiThesis: 'Care work is labour, but monetising every intimate act may change the nature of family relationships.',
      },
      {
        opinion: 'should not make women economically dependent.',
        antiThesis: 'Dependency can be risky, but some families freely choose single-earner or caregiving arrangements.',
      },
      {
        opinion: 'should be redesigned beyond the male breadwinner model.',
        antiThesis: 'The breadwinner model can be restrictive, but it may still work for some households by choice.',
      },
      {
        opinion: 'should balance care, autonomy, commitment, and equality.',
        antiThesis: 'These values often conflict when love, money, children, and tradition intersect.',
      },
      {
        opinion: 'should be reorganised around full equality, with care work shared and valued equally.',
        antiThesis: 'Mandating an equal split of care underestimates genuine preference variation and the practical trade-offs couples make; equality of opportunity differs from enforced symmetry.',
      },
      {
        opinion: 'should be anchored in traditional structure as the stable foundation of society.',
        antiThesis: 'Defining one family form as the foundation marginalises the many functional families that differ from it, with no evidence they fail society.',
      },
    ],
  },
  {
    category: 'Patriarchy',
    keyword: 'women’s liberation',
    data: [
      {
        opinion: 'should require total freedom from male control.',
        antiThesis: 'Freedom from control is essential, but defining liberation primarily against men may narrow women’s possibilities.',
      },
      {
        opinion: 'should mean equal opportunity within existing institutions.',
        antiThesis: 'Existing institutions may be built around male norms, making inclusion insufficient.',
      },
      {
        opinion: 'should require economic independence for every woman.',
        antiThesis: 'Economic independence matters, but some people freely choose interdependence in family or community life.',
      },
      {
        opinion: 'should reject beauty standards, marriage, and motherhood as patriarchal traps.',
        antiThesis: 'These can be oppressive when imposed, but they can also be chosen, meaningful, and empowering.',
      },
      {
        opinion: 'should include the right to reject feminism entirely.',
        antiThesis: 'Rejecting feminism is a personal right, but anti-feminist politics may weaken rights other women rely on.',
      },
      {
        opinion: 'should prioritise protection from male violence above all else.',
        antiThesis: 'Safety is urgent, but making it the sole priority may reduce freedom, pluralism, or due process.',
      },
      {
        opinion: 'should include men as allies, not enemies.',
        antiThesis: 'Allyship can help, but some feminists argue male-centred inclusion can dilute women’s political focus.',
      },
      {
        opinion: 'should be intersectional or it is incomplete.',
        antiThesis: 'Intersectionality reveals layered inequality, but critics argue it can fragment feminist politics.',
      },
      {
        opinion: 'should move beyond the category of woman altogether.',
        antiThesis: 'Moving beyond the category may erase sex-based realities such as pregnancy, violence, and discrimination.',
      },
      {
        opinion: 'should balance autonomy, safety, equality, care, and plural choices.',
        antiThesis: 'These goals often conflict because one model of liberation can feel like oppression to someone else.',
      },
    ],
  },
  {
    category: 'Patriarchy',
    keyword: 'women\'s liberation',
    data: [
      {
        opinion: 'should be total, freeing women from every traditional expectation and constraint.',
        antiThesis: 'Liberation from all expectation is incoherent—every society has norms—and many women freely embrace roles this framing dismisses as imposed.',
      },
      {
        opinion: 'should not require abolishing the family or the distinct roles many freely choose.',
        antiThesis: 'True that liberation needn\'t abolish the family, but invoking \'choice\' can mask the social and economic pressures that still steer those choices unequally.',
      },
    ],
  },
  {
    category: 'Sports',
    keyword: 'sports',
    data: [
      {
        opinion: 'should include transgender athletes according to their gender identity.',
        antiThesis: 'Inclusion matters, but gender identity alone may not address physiological advantages in some competitive categories.',
      },
      {
        opinion: 'should be separated strictly by biological sex.',
        antiThesis: 'Sex-based categories may protect fairness, but they can exclude transgender athletes from meaningful participation.',
      },
      {
        opinion: 'should prioritise inclusion over competitive purity.',
        antiThesis: 'If fairness is weakened too much, women’s categories may lose their purpose and legitimacy.',
      },
      {
        opinion: 'should prioritise fairness over inclusion in elite competition.',
        antiThesis: 'Fairness matters, but exclusion from elite pathways can damage dignity, opportunity, and social recognition.',
      },
      {
        opinion: 'should create open categories for anyone to compete.',
        antiThesis: 'Open categories may solve some conflicts, but they may attract too few athletes to be viable.',
      },
      {
        opinion: 'should abolish gender categories entirely.',
        antiThesis: 'Abolishing categories could erase competitive opportunities for many female athletes.',
      },
      {
        opinion: 'should treat transgender exclusion as discrimination.',
        antiThesis: 'Some exclusions may be defended as category protection rather than prejudice.',
      },
      {
        opinion: 'should treat unrestricted transgender inclusion as unfair to women.',
        antiThesis: 'Unrestricted inclusion is contested, but blanket exclusion can be unfair to transgender women with varied bodies and histories.',
      },
      {
        opinion: 'should use evidence-based rules rather than ideology.',
        antiThesis: 'Evidence is often incomplete, sport-specific, and interpreted through competing values.',
      },
      {
        opinion: 'should balance dignity, safety, fairness, participation, and category integrity.',
        antiThesis: 'These values often conflict because one athlete’s inclusion may be seen as another athlete’s unfairness.',
      },
      {
        opinion: 'should abolish rigid sex categories in favour of more flexible classification systems.',
        antiThesis: 'Flexible classification by performance or hormones is hard to administer fairly and can still disadvantage female athletes; no workable replacement for sex categories has been shown at scale.',
      },
      {
        opinion: 'should keep two protected sex categories without exception for elite competition.',
        antiThesis: '\'No exception\' can\'t handle intersex and post-transition cases that don\'t fit cleanly, and forecloses evidence-based accommodation.',
      },
    ],
  },
  {
    category: 'Sports',
    keyword: 'women’s categories',
    data: [
      {
        opinion: 'should exist to protect female athletes from male physiological advantage.',
        antiThesis: 'Female categories matter, but not every transgender woman has the same physiological profile or competitive history.',
      },
      {
        opinion: 'should be open to transgender women who meet sport-specific criteria.',
        antiThesis: 'Criteria may still fail to remove advantages from male puberty in some sports.',
      },
      {
        opinion: 'should never include athletes who experienced male puberty.',
        antiThesis: 'This rule may be clear, but it can exclude athletes who have medically transitioned and lived as women for years.',
      },
      {
        opinion: 'should not be policed in ways that humiliate or inspect bodies.',
        antiThesis: 'Verification rules may be necessary, but they must avoid invasive or degrading procedures.',
      },
      {
        opinion: 'should not be sacrificed for political correctness.',
        antiThesis: 'Calling inclusion “political correctness” may dismiss genuine human-rights concerns.',
      },
      {
        opinion: 'should evolve as science and society evolve.',
        antiThesis: 'Constantly changing rules can create uncertainty for athletes and federations.',
      },
      {
        opinion: 'should be protected most strictly in strength, speed, and contact sports.',
        antiThesis: 'Sport-specific rules are more nuanced, but they can be complex and inconsistent.',
      },
      {
        opinion: 'should include social recognition as well as physiology.',
        antiThesis: 'Social recognition matters, but sport categories exist partly because bodies affect outcomes.',
      },
      {
        opinion: 'should be decided by female athletes themselves.',
        antiThesis: 'Female athletes’ views are important, but they are not unanimous and may conflict with legal or medical frameworks.',
      },
      {
        opinion: 'should preserve fairness without turning trans women into scapegoats.',
        antiThesis: 'Avoiding scapegoating is essential, but fairness concerns should still be openly discussable.',
      },
    ],
  },
  {
    category: 'Sports',
    keyword: 'transgender athletes',
    data: [
      {
        opinion: 'should have the same right to compete as everyone else.',
        antiThesis: 'Equal right to compete does not necessarily mean equal right to enter every category.',
      },
      {
        opinion: 'should compete in categories aligned with biological sex.',
        antiThesis: 'This may preserve category rules, but it can force athletes into categories that conflict with their lived identity.',
      },
      {
        opinion: 'should be included at grassroots level wherever possible.',
        antiThesis: 'Grassroots inclusion is easier, but safety and fairness may still matter in some local competitions.',
      },
      {
        opinion: 'should face stricter rules at elite level.',
        antiThesis: 'Different rules by level may feel inconsistent or discriminatory to athletes moving through pathways.',
      },
      {
        opinion: 'should not be used as symbols in culture wars.',
        antiThesis: 'The issue is politically charged because it touches sex, gender, fairness, law, and women’s rights.',
      },
      {
        opinion: 'should never be banned categorically.',
        antiThesis: 'Categorical rules may be defended where sports bodies believe no fair eligibility criteria can be created.',
      },
      {
        opinion: 'should compete only after meeting medical eligibility standards.',
        antiThesis: 'Medical eligibility can become invasive, expensive, and burdensome.',
      },
      {
        opinion: 'should not have to disclose private medical details publicly.',
        antiThesis: 'Some medical information may be required confidentially for eligibility decisions.',
      },
      {
        opinion: 'should be supported even when rules restrict certain categories.',
        antiThesis: 'Support may not compensate for exclusion from meaningful competition.',
      },
      {
        opinion: 'should be protected from harassment regardless of policy position.',
        antiThesis: 'Protection from harassment must coexist with the right to debate rules and categories.',
      },
      {
        opinion: 'should compete in the category matching their identity as a matter of basic inclusion.',
        antiThesis: 'Inclusion in elite sport collides with fairness where physiological advantages persist, which is why most governing bodies adopted criteria rather than pure identity-based entry.',
      },
      {
        opinion: 'should be eligible subject to clear, evidence-based hormone and timing criteria.',
        antiThesis: 'Evidence suggests some advantages from male puberty persist after hormone suppression, so even criteria-based eligibility may not fully restore parity.',
      },
      {
        opinion: 'should compete only in an open category to preserve women\'s sport.',
        antiThesis: 'An open category can stigmatise and effectively bar trans athletes from meaningful competition, raising real questions of dignity and participation.',
      },
    ],
  },
  {
    category: 'Sports',
    keyword: 'puberty',
    data: [
      {
        opinion: 'should be the central criterion in eligibility rules.',
        antiThesis: 'Puberty matters, but performance depends on many factors, including training, hormones, genetics, and sport type.',
      },
      {
        opinion: 'should not permanently define an athlete’s eligibility.',
        antiThesis: 'Some effects of puberty may remain relevant even after hormone therapy.',
      },
      {
        opinion: 'creates advantages that hormone suppression cannot fully erase.',
        antiThesis: 'The scale and relevance of retained advantage varies by sport and is still debated.',
      },
      {
        opinion: 'should be considered differently in contact sports than in precision sports.',
        antiThesis: 'Differentiation is fairer, but it makes rules harder to understand and enforce.',
      },
      {
        opinion: 'should not be used to stigmatise bodies as unfair by nature.',
        antiThesis: 'Sport already classifies bodies because physical traits can create competitive advantage.',
      },
      {
        opinion: 'should determine access to women’s elite categories.',
        antiThesis: 'This approach may exclude some athletes whose current physiology falls within female competitive ranges.',
      },
      {
        opinion: 'should be one factor, not the whole policy.',
        antiThesis: 'Too many factors can make rules opaque, inconsistent, and legally vulnerable.',
      },
      {
        opinion: 'should be discussed openly without accusations of bigotry.',
        antiThesis: 'Open discussion must avoid language that dehumanises or targets transgender people.',
      },
      {
        opinion: 'should be assessed through confidential medical processes.',
        antiThesis: 'Medicalised assessment can burden athletes and create intrusive eligibility systems.',
      },
      {
        opinion: 'should inform policy while preserving athlete dignity.',
        antiThesis: 'Preserving dignity is difficult when eligibility depends on intimate bodily criteria.',
      },
      {
        opinion: 'should be treated as the decisive factor, with male puberty barring entry to women\'s events.',
        antiThesis: 'Puberty as a bright line is supported by some performance data but disputed elsewhere, and applies awkwardly to those who transition before puberty.',
      },
    ],
  },
  {
    category: 'Sports',
    keyword: 'fairness',
    data: [
      {
        opinion: 'should be the highest value in competitive sport.',
        antiThesis: 'Sport also values participation, inclusion, health, identity, and community.',
      },
      {
        opinion: 'should include the right of trans people to participate fully.',
        antiThesis: 'Full participation may conflict with fairness for female athletes in some categories.',
      },
      {
        opinion: 'should mean no athlete competes with male-puberty advantage in women’s sport.',
        antiThesis: 'This may be clear, but it can treat all transgender women as categorically unfair regardless of individual circumstances.',
      },
      {
        opinion: 'should be judged sport by sport.',
        antiThesis: 'Sport-by-sport rules can become inconsistent, confusing, and politically contested.',
      },
      {
        opinion: 'should not be confused with discomfort about transgender people.',
        antiThesis: 'Some discomfort may be prejudice, but some concerns are genuinely about competition and safety.',
      },
      {
        opinion: 'should include safety in contact and combat sports.',
        antiThesis: 'Safety matters, but risk exists across all sport and cannot be eliminated completely.',
      },
      {
        opinion: 'should not erase compassion.',
        antiThesis: 'Compassion should not override category rules if competition becomes meaningfully unfair.',
      },
      {
        opinion: 'should be protected even if policies feel harsh.',
        antiThesis: 'Harsh policies can harm vulnerable athletes and reduce trust in sport institutions.',
      },
      {
        opinion: 'should be measured with data, not slogans.',
        antiThesis: 'Data does not answer every ethical question about identity, rights, and recognition.',
      },
      {
        opinion: 'should balance sex, gender identity, safety, evidence, and dignity.',
        antiThesis: 'This balance may be impossible to satisfy fully because the underlying values are in tension.',
      },
      {
        opinion: 'should be redefined to prioritise inclusion over narrow biological advantage.',
        antiThesis: 'Sport\'s categories exist because biology affects outcomes; redefining fairness to ignore that empties the categories of meaning.',
      },
      {
        opinion: 'should rest on biology, with eligibility determined by sex observed at birth.',
        antiThesis: 'Birth-sex testing has a troubled history of humiliating and wrongly excluding women, including intersex athletes; biology in sport is less binary than the rule assumes.',
      },
    ],
  },
  {
    category: 'Sports',
    keyword: 'women\'s categories',
    data: [
      {
        opinion: 'should be opened fully to all who identify as women without any restriction.',
        antiThesis: 'Removing all eligibility criteria ignores the measured performance gaps linked to male puberty; with no rules, the women\'s category loses the fairness it exists to protect.',
      },
      {
        opinion: 'should be reserved strictly for those born female to protect fair competition.',
        antiThesis: 'A strict birth-sex rule excludes trans women entirely, can force invasive verification, and struggles to classify intersex athletes fairly.',
      },
    ],
  },
  {
    category: 'Affordability',
    keyword: 'affordability',
    data: [
      {
        opinion: 'should be treated as a basic condition of dignity.',
        antiThesis: 'Dignity matters, but affordability must still be balanced with quality, sustainability, and economic viability.',
      },
      {
        opinion: 'should override profit in essential goods and services.',
        antiThesis: 'Removing profit may reduce investment, innovation, supply, and service quality.',
      },
      {
        opinion: 'should be left to market competition.',
        antiThesis: 'Markets can lower prices, but they may fail where necessities are scarce, monopolised, or inelastic.',
      },
      {
        opinion: 'should be guaranteed by the state for housing, food, healthcare, energy, and education.',
        antiThesis: 'Universal guarantees require high taxation, strong institutions, and long-term public funding.',
      },
      {
        opinion: 'should not become an excuse for low-quality products or services.',
        antiThesis: 'Higher quality often costs more, making affordability harder to achieve.',
      },
      {
        opinion: 'should be achieved by reducing regulation and letting supply grow.',
        antiThesis: 'Deregulation can increase supply, but it may also reduce safety, labour standards, and environmental protections.',
      },
      {
        opinion: 'should be achieved by controlling prices in essential sectors.',
        antiThesis: 'Price controls can create shortages, black markets, or reduced investment if prices fall below costs.',
      },
      {
        opinion: 'should not be solved through debt and instalment culture.',
        antiThesis: 'Credit can help people access necessary goods when income is irregular or costs are high.',
      },
      {
        opinion: 'should be measured by what ordinary households can actually pay.',
        antiThesis: 'Household budgets vary widely, so universal affordability metrics can oversimplify.',
      },
      {
        opinion: 'should balance access, quality, supply, wages, and long-term sustainability.',
        antiThesis: 'These goals often conflict because making something cheaper can reduce quality, wages, or supply.',
      },
      {
        opinion: 'should be addressed by capping prices on essentials like rent, energy, and medicine.',
        antiThesis: 'Price caps reliably reduce supply and investment—rent control is among the most consistent findings in economics—often worsening the shortage they target.',
      },
      {
        opinion: 'should be solved by deregulation and supply, not subsidies that only raise prices further.',
        antiThesis: 'Supply-side reform helps but is slow and uneven, so the absence of any support leaves the poorest exposed in the interim, and health doesn\'t behave like an ordinary market.',
      },
    ],
  },
  {
    category: 'Affordability',
    keyword: 'housing',
    data: [
      {
        opinion: 'should never be unaffordable because shelter is a human right.',
        antiThesis: 'Housing is essential, but construction, land, maintenance, and financing all carry real costs.',
      },
      {
        opinion: 'should be removed from speculative markets.',
        antiThesis: 'Speculation can distort prices, but private investment can also finance new housing and renovation.',
      },
      {
        opinion: 'should be made affordable by building much more of it.',
        antiThesis: 'More supply helps, but new construction may still be expensive, slow, or targeted at higher-income buyers.',
      },
      {
        opinion: 'should be rent-controlled wherever people are being priced out.',
        antiThesis: 'Rent control can protect current tenants, but it may reduce rental supply or discourage maintenance.',
      },
      {
        opinion: 'should remain a private asset and investment vehicle.',
        antiThesis: 'Treating housing primarily as an asset can conflict with the need for stable, affordable shelter.',
      },
      {
        opinion: 'should be publicly owned at scale.',
        antiThesis: 'Public housing can expand access, but it requires strong management, funding, and maintenance.',
      },
      {
        opinion: 'should not allow landlords to profit from scarcity.',
        antiThesis: 'Landlords can provide housing flexibility, maintenance, and capital when regulated properly.',
      },
      {
        opinion: 'should become affordable through deregulated construction and zoning reform.',
        antiThesis: 'Zoning reform can help, but without affordability rules it may still produce expensive housing.',
      },
      {
        opinion: 'should protect owners as well as renters.',
        antiThesis: 'Owner protection matters, but policies can favour owners while leaving renters insecure.',
      },
      {
        opinion: 'should balance tenant security, property rights, supply, and neighbourhood stability.',
        antiThesis: 'Balancing these aims is difficult because each group experiences the housing crisis differently.',
      },
      {
        opinion: 'should be guaranteed as a right, with the state building and allocating homes to all in need.',
        antiThesis: 'State-built-and-allocated housing at scale has often produced shortages, poor maintenance, and queue-jumping; allocation by need still requires the supply that is the actual bottleneck.',
      },
      {
        opinion: 'should be made cheap by abolishing zoning and letting the market build freely.',
        antiThesis: 'Pure deregulation can lift supply but also drives unsafe, speculative building and ignores infrastructure; some planning exists for genuine safety and amenity reasons.',
      },
    ],
  },
  {
    category: 'Affordability',
    keyword: 'healthcare',
    data: [
      {
        opinion: 'should be free at the point of use.',
        antiThesis: 'Free access improves equity, but healthcare still requires sustainable funding and capacity management.',
      },
      {
        opinion: 'should never depend on income, employment, or insurance status.',
        antiThesis: 'Universal access is important, but systems must manage costs, waiting times, and resource limits.',
      },
      {
        opinion: 'should include private options to expand choice and reduce pressure.',
        antiThesis: 'Private options can create two-tier access and pull staff away from public systems.',
      },
      {
        opinion: 'should be fully nationalised.',
        antiThesis: 'Nationalisation can improve equity, but centralised systems may become bureaucratic or underfunded.',
      },
      {
        opinion: 'should be market-priced to avoid waste and overuse.',
        antiThesis: 'Market pricing can stop overuse, but it can also make people delay or avoid necessary care.',
      },
      {
        opinion: 'should include medicines, diagnostics, prevention, and mental health.',
        antiThesis: 'Broad coverage is ideal, but every expansion increases funding and workforce demands.',
      },
      {
        opinion: 'should not allow companies to profit from illness.',
        antiThesis: 'Profit can fund pharmaceutical innovation, medical devices, clinics, and research.',
      },
      {
        opinion: 'should use price transparency and competition to lower costs.',
        antiThesis: 'Patients often cannot shop rationally during illness, emergencies, or complex treatment decisions.',
      },
      {
        opinion: 'should protect people from medical debt completely.',
        antiThesis: 'Debt protection is humane, but providers and systems still need revenue to function.',
      },
      {
        opinion: 'should balance universal access, innovation, fiscal realism, and clinical quality.',
        antiThesis: 'These goals conflict when expensive innovation expands faster than public budgets.',
      },
      {
        opinion: 'should be entirely free at the point of use and fully publicly provided.',
        antiThesis: 'Fully public free-at-point systems still ration via waiting lists and face relentless cost pressure; \'free\' describes the payment, not the real resource constraint.',
      },
      {
        opinion: 'should be driven by competition and private provision to lower costs and raise quality.',
        antiThesis: 'Health markets suffer information asymmetry and emergencies where patients can\'t shop around; pure competition tends to raise costs and exclude the sick and poor.',
      },
    ],
  },
  {
    category: 'Affordability',
    keyword: 'food',
    data: [
      {
        opinion: 'should be affordable because nobody should go hungry.',
        antiThesis: 'Food affordability matters, but farmers, transporters, and retailers also need viable income.',
      },
      {
        opinion: 'should not be controlled by monopolies or global commodity speculation.',
        antiThesis: 'Large-scale food systems can also lower prices, stabilise supply, and reduce waste.',
      },
      {
        opinion: 'should be subsidised when families cannot afford nutrition.',
        antiThesis: 'Subsidies can help, but they can also distort markets or become expensive.',
      },
      {
        opinion: 'should be cheap through free trade and efficient supply chains.',
        antiThesis: 'Cheap food can depend on exploited labour, environmental harm, or fragile global supply chains.',
      },
      {
        opinion: 'should be locally produced even if it costs more.',
        antiThesis: 'Local production can build resilience, but it may increase prices and reduce variety.',
      },
      {
        opinion: 'should not become cheaper by underpaying agricultural workers.',
        antiThesis: 'Better wages are necessary, but they may raise prices unless supported by policy.',
      },
      {
        opinion: 'should be treated as too essential for pure market logic.',
        antiThesis: 'Markets can coordinate production, distribution, and choice more efficiently than central planning.',
      },
      {
        opinion: 'should be protected from excessive taxes on basic goods.',
        antiThesis: 'Lower taxes can help, but governments still need revenue for public services.',
      },
      {
        opinion: 'should be affordable without making unhealthy ultra-processed food the cheapest option.',
        antiThesis: 'Healthier food often costs more because of freshness, storage, labour, and supply constraints.',
      },
      {
        opinion: 'should balance low prices, fair wages, nutrition, sustainability, and farmer survival.',
        antiThesis: 'These values often conflict because one group’s affordability can become another group’s loss.',
      },
      {
        opinion: 'should be subsidised or provided publicly so that no one ever goes hungry.',
        antiThesis: 'Universal food provision is costly and prone to waste; targeted support reaches the hungry far more efficiently than blanket public supply.',
      },
      {
        opinion: 'should be left to the free market, which delivers abundance more cheaply than any state.',
        antiThesis: 'Markets deliver abundant food on average but leave predictable gaps—food deserts, price spikes—that hit the poorest, which is why even market economies keep food safety nets.',
      },
    ],
  },
  {
    category: 'Affordability',
    keyword: 'wages',
    data: [
      {
        opinion: 'should rise until full-time work guarantees a decent life.',
        antiThesis: 'Higher wages can increase costs for employers and may raise prices or reduce hiring.',
      },
      {
        opinion: 'should be set by market demand, not government intervention.',
        antiThesis: 'Labour markets often involve unequal bargaining power, especially for low-income workers.',
      },
      {
        opinion: 'should be indexed to inflation.',
        antiThesis: 'Indexation protects workers, but it can contribute to wage-price spirals in some economies.',
      },
      {
        opinion: 'should not be the only affordability tool.',
        antiThesis: 'Wages matter deeply, but housing, transport, childcare, taxes, and debt also determine affordability.',
      },
      {
        opinion: 'should be compressed to reduce inequality.',
        antiThesis: 'Wage compression may reduce incentives for skill, responsibility, or entrepreneurship.',
      },
      {
        opinion: 'should reward productivity, skill, and scarcity.',
        antiThesis: 'Market wages do not always reflect social value, especially in care, education, and essential work.',
      },
      {
        opinion: 'should be supported by unions and collective bargaining.',
        antiThesis: 'Strong unions can protect workers, but they may also reduce flexibility or protect insiders.',
      },
      {
        opinion: 'should not rise faster than productivity.',
        antiThesis: 'If wages lag behind living costs, work no longer guarantees stability or dignity.',
      },
      {
        opinion: 'should include care work, domestic work, and unpaid labour in economic thinking.',
        antiThesis: 'Recognising unpaid labour is important, but formally pricing all care may be difficult and socially complex.',
      },
      {
        opinion: 'should make affordability possible without destroying business viability.',
        antiThesis: 'This balance is hard because workers experience low wages as survival pressure while firms experience wage rises as cost pressure.',
      },
      {
        opinion: 'should be set by a high statutory minimum tied to the real cost of a decent life.',
        antiThesis: 'Setting wages well above local productivity can cut hiring and hours for the least skilled; the effect depends heavily on the level and the region.',
      },
      {
        opinion: 'should be set by the market alone, since mandated minimums destroy entry-level jobs.',
        antiThesis: 'The evidence that moderate minimum wages destroy jobs is weak, and without any floor, employer power can push wages below subsistence.',
      },
    ],
  },
  {
    category: 'Borders',
    keyword: 'borders',
    data: [
      {
        opinion: 'should be abolished because human beings should be free to move anywhere.',
        antiThesis: 'Free movement may expand freedom, but states still need systems for citizenship, welfare, taxation, housing, and security.',
      },
      {
        opinion: 'should be strictly defended because a country without borders is not a country.',
        antiThesis: 'Strong borders can protect sovereignty, but they can also create cruelty, exclusion, and arbitrary suffering.',
      },
      {
        opinion: 'should protect human rights as much as territory.',
        antiThesis: 'Human rights matter, but borders also exist to regulate entry, jurisdiction, and political membership.',
      },
      {
        opinion: 'should be open to people fleeing war, collapse, or persecution.',
        antiThesis: 'Protection is necessary, but unmanaged arrivals can strain housing, services, and political trust.',
      },
      {
        opinion: 'should be closed when migration threatens national cohesion.',
        antiThesis: '“National cohesion” can be used vaguely to justify xenophobia or exclusion.',
      },
      {
        opinion: 'should be treated as violence against the global poor.',
        antiThesis: 'Borders can be unjust, but they also organise public goods, legal responsibility, and democratic accountability.',
      },
      {
        opinion: 'should be controlled democratically by citizens.',
        antiThesis: 'Citizens matter, but border decisions also affect migrants, refugees, neighbours, and international obligations.',
      },
      {
        opinion: 'should not decide whose life is worth saving.',
        antiThesis: 'Compassion is universal, but states usually prioritise citizens, residents, and legally recognised claims.',
      },
      {
        opinion: 'should be militarised where national security is at risk.',
        antiThesis: 'Militarised borders can endanger vulnerable people and escalate fear, violence, and smuggling.',
      },
      {
        opinion: 'should balance sovereignty, compassion, capacity, and law.',
        antiThesis: 'These values often conflict because humanitarian need can exceed institutional capacity.',
      },
      {
        opinion: 'should be abolished entirely as arbitrary lines that divide a single human family.',
        antiThesis: 'Borders also delimit the political community that funds welfare and enforces rights; abolishing them dissolves the very unit that makes those guarantees possible.',
      },
      {
        opinion: 'should be managed pragmatically to balance openness with security and capacity.',
        antiThesis: 'Pragmatic \'balance\' is a moving target easily captured by whichever pressure is loudest, offering no stable principle.',
      },
      {
        opinion: 'should be hardened completely, with strict control over everyone who enters.',
        antiThesis: 'Hard borders are costly, never fully effective, and can choke the legal movement of workers, students, and trade that economies depend on.',
      },
    ],
  },
  {
    category: 'Borders',
    keyword: 'isolationism',
    data: [
      {
        opinion: 'should protect countries from foreign wars and imperial entanglements.',
        antiThesis: 'Avoiding entanglement may reduce war risk, but it can also abandon allies and victims of aggression.',
      },
      {
        opinion: 'should be rejected because global problems require global cooperation.',
        antiThesis: 'Cooperation matters, but global institutions can be slow, biased, or dominated by powerful states.',
      },
      {
        opinion: 'should preserve national independence from external pressure.',
        antiThesis: 'Independence matters, but total autonomy is unrealistic in trade, climate, security, and technology.',
      },
      {
        opinion: 'should be used to protect domestic workers from global competition.',
        antiThesis: 'Protection may save some jobs, but it can raise prices and reduce innovation or export opportunities.',
      },
      {
        opinion: 'should be treated as selfish in an interconnected world.',
        antiThesis: 'Countries may have legitimate duties to protect their own citizens before taking on global burdens.',
      },
      {
        opinion: 'should keep foreign influence out of national culture.',
        antiThesis: 'Cultural protection can preserve heritage, but it can also become censorship, xenophobia, or stagnation.',
      },
      {
        opinion: 'should never become indifference to suffering elsewhere.',
        antiThesis: 'Moral concern does not always require military, economic, or migration commitments.',
      },
      {
        opinion: 'should protect strategic industries from dependency.',
        antiThesis: 'Too much self-reliance can make goods more expensive and industries less competitive.',
      },
      {
        opinion: 'should be embraced because globalisation has weakened democracy.',
        antiThesis: 'Globalisation can constrain democracy, but it has also expanded trade, knowledge, travel, and cooperation.',
      },
      {
        opinion: 'should be rejected when it becomes fear of the outside world.',
        antiThesis: 'Caution toward external influence can be rational when supply chains, security, or culture are vulnerable.',
      },
      {
        opinion: 'should be embraced, with the nation withdrawing to protect its people and culture.',
        antiThesis: 'Isolation forfeits the trade, alliances, and talent that underpin prosperity and security; closed societies tend to stagnate and weaken.',
      },
    ],
  },
  {
    category: 'Borders',
    keyword: 'sovereignty',
    data: [
      {
        opinion: 'should give nations the right to control who enters and stays.',
        antiThesis: 'Sovereignty is real, but it is limited by refugee law, human rights, and moral responsibility.',
      },
      {
        opinion: 'should not be used to justify cruelty at borders.',
        antiThesis: 'Firm enforcement can feel cruel, but states argue it is necessary to maintain legal order.',
      },
      {
        opinion: 'should include economic self-sufficiency.',
        antiThesis: 'Complete self-sufficiency is costly and often impossible in modern economies.',
      },
      {
        opinion: 'should be shared where problems cross borders.',
        antiThesis: 'Sharing sovereignty can weaken democratic accountability and national control.',
      },
      {
        opinion: 'should protect citizens before non-citizens.',
        antiThesis: 'Prioritising citizens is normal for states, but non-citizens still have basic rights and dignity.',
      },
      {
        opinion: 'should not override universal human rights.',
        antiThesis: 'Universal rights require enforcement, but global enforcement can look like external domination.',
      },
      {
        opinion: 'should mean refusing foreign courts, treaties, and institutions.',
        antiThesis: 'Rejecting international institutions can isolate a country and weaken cooperation.',
      },
      {
        opinion: 'should be practical, not symbolic.',
        antiThesis: 'Symbols matter because flags, borders, and national identity shape belonging and legitimacy.',
      },
      {
        opinion: 'should protect small nations from larger powers.',
        antiThesis: 'Small nations may need alliances and institutions precisely because sovereignty alone is fragile.',
      },
      {
        opinion: 'should balance national control with global responsibility.',
        antiThesis: 'National control and global responsibility often conflict when citizens reject external obligations.',
      },
      {
        opinion: 'should be pooled into global institutions better suited to shared problems.',
        antiThesis: 'Distant global bodies lack democratic accountability; pooling too much sovereignty severs decisions from the publics who must live with them.',
      },
      {
        opinion: 'should be absolute, with no external body permitted any say over national affairs.',
        antiThesis: 'Absolute sovereignty is incompatible with treaties, trade, and collective security; no modern state actually operates without pooling some authority.',
      },
    ],
  },
  {
    category: 'Borders',
    keyword: 'migration control',
    data: [
      {
        opinion: 'should be strict enough to preserve public trust.',
        antiThesis: 'Excessive strictness can violate rights and push people into irregular routes.',
      },
      {
        opinion: 'should be abolished because movement is a human right.',
        antiThesis: 'Movement may be a human interest, but legal residence and citizenship still require governance.',
      },
      {
        opinion: 'should prioritise skills, labour needs, and contribution.',
        antiThesis: 'Merit-based systems can devalue family unity, refugees, care work, and poorer migrants.',
      },
      {
        opinion: 'should prioritise humanitarian need over economic usefulness.',
        antiThesis: 'Humanitarian systems also need capacity, funding, housing, and public consent.',
      },
      {
        opinion: 'should prevent demographic change that citizens did not consent to.',
        antiThesis: 'Demographic anxiety can become racialised or exclusionary and may ignore migrants’ rights.',
      },
      {
        opinion: 'should never be based on ethnicity, religion, or race.',
        antiThesis: 'States may still use nationality, documentation, security screening, or treaty status as legal categories.',
      },
      {
        opinion: 'should use detention and deportation when laws are violated.',
        antiThesis: 'Detention and deportation can cause serious harm, especially to families, refugees, and long-term residents.',
      },
      {
        opinion: 'should avoid detention except in exceptional cases.',
        antiThesis: 'Some detention may be justified to verify identity, prevent absconding, or address security risks.',
      },
      {
        opinion: 'should be transparent, fast, and appealable.',
        antiThesis: 'Appeals can delay enforcement and create pressure on already stretched systems.',
      },
      {
        opinion: 'should balance legality, dignity, integration, and capacity.',
        antiThesis: 'These goals conflict when people have strong humanitarian claims but weak legal status.',
      },
      {
        opinion: 'should be ended, with free movement recognised as a universal right.',
        antiThesis: 'Universal free movement alongside unequal welfare states is fiscally unworkable, which is why the right exists nowhere despite its moral appeal.',
      },
      {
        opinion: 'should be the state\'s highest priority, enforced with maximum firmness.',
        antiThesis: 'Elevating migration control above all else distorts policy and human rights, and maximal enforcement has repeatedly failed to stop determined movement while inflicting serious harm.',
      },
    ],
  },
  {
    category: 'Borders',
    keyword: 'globalisation',
    data: [
      {
        opinion: 'should be resisted because it dissolves national identity.',
        antiThesis: 'National identity can survive global exchange and may become richer through contact.',
      },
      {
        opinion: 'should be embraced because humanity is interdependent.',
        antiThesis: 'Interdependence can create vulnerability, dependency, and loss of local control.',
      },
      {
        opinion: 'should be rebuilt around fairness, not corporate power.',
        antiThesis: 'Corporate power is a problem, but global markets also create jobs, innovation, and lower prices.',
      },
      {
        opinion: 'should be rolled back to protect local economies.',
        antiThesis: 'Rolling back globalisation can raise costs and reduce opportunities for export-driven sectors.',
      },
      {
        opinion: 'should not turn workers into competitors across borders.',
        antiThesis: 'Cross-border labour markets can also reduce poverty and create opportunities in poorer countries.',
      },
      {
        opinion: 'should be governed by stronger international rules.',
        antiThesis: 'International rules can be captured by powerful states or corporations.',
      },
      {
        opinion: 'should be replaced by regional self-sufficiency.',
        antiThesis: 'Regional self-sufficiency can be inefficient and may not work for small or resource-poor countries.',
      },
      {
        opinion: 'should be defended because isolation makes societies poorer.',
        antiThesis: 'Economic openness can create wealth while also producing inequality, precarity, and cultural backlash.',
      },
      {
        opinion: 'should include cultural exchange without cultural domination.',
        antiThesis: 'Cultural domination is difficult to separate from voluntary adoption, admiration, or market popularity.',
      },
      {
        opinion: 'should balance openness, identity, resilience, and justice.',
        antiThesis: 'These values often conflict because openness can weaken the very boundaries that protect identity and resilience.',
      },
      {
        opinion: 'should be deepened until national borders lose all economic and social meaning.',
        antiThesis: 'Hyper-globalisation has concentrated gains and hollowed out communities, fuelling the backlash now straining the open order; some friction protects resilience and consent.',
      },
      {
        opinion: 'should be reversed in favour of national self-reliance and local production.',
        antiThesis: 'Forced self-reliance raises costs and lowers quality, and severing supply chains can create the very vulnerabilities it claims to cure.',
      },
    ],
  },
  {
    category: 'Austerity',
    keyword: 'austerity',
    data: [
      {
        opinion: 'should be abolished because it makes ordinary people pay for elite failure.',
        antiThesis: 'Fiscal crises may require difficult adjustments, especially when debt, deficits, or borrowing costs become unsustainable.',
      },
      {
        opinion: 'should be used when states spend beyond their means.',
        antiThesis: 'Comparing states to households can be misleading because governments can tax, borrow, invest, and manage macroeconomic cycles.',
      },
      {
        opinion: 'should never cut healthcare, education, housing, or care.',
        antiThesis: 'Protecting every major service may make deficit reduction impossible without tax increases or cuts elsewhere.',
      },
      {
        opinion: 'should cut bureaucracy before raising taxes.',
        antiThesis: 'Bureaucracy can be wasteful, but public administration also delivers services, regulation, safety, and accountability.',
      },
      {
        opinion: 'should be rejected during recessions because it deepens economic pain.',
        antiThesis: 'Stimulus can support demand, but borrowing more during crisis may worry markets or increase future debt burdens.',
      },
      {
        opinion: 'should restore investor confidence.',
        antiThesis: 'Investor confidence matters, but prioritising markets can neglect poverty, unemployment, and social damage.',
      },
      {
        opinion: 'should be imposed only on luxury state spending, not basic needs.',
        antiThesis: 'Defining “luxury” spending is politically contested and may not generate enough savings.',
      },
      {
        opinion: 'should include tax increases on wealth before spending cuts.',
        antiThesis: 'Wealth taxes may face avoidance, capital flight, valuation problems, and political resistance.',
      },
      {
        opinion: 'should be temporary, targeted, and democratically accountable.',
        antiThesis: 'Temporary measures often become permanent if fiscal pressure continues.',
      },
      {
        opinion: 'should balance fiscal responsibility, growth, dignity, and social protection.',
        antiThesis: 'These goals often conflict because rapid deficit reduction can damage growth and social protection.',
      },
      {
        opinion: 'should be abandoned entirely, with the state spending freely to guarantee jobs and services.',
        antiThesis: 'Unlimited deficit spending risks inflation, rising debt-service costs, and lost investor confidence; \'spend freely\' assumes a fiscal space not every state has.',
      },
      {
        opinion: 'should be applied selectively, balancing fiscal discipline with protection for the vulnerable.',
        antiThesis: '\'Selective\' austerity in practice still falls hardest on those least able to lobby, and the discipline-versus-protection line is drawn by politics, not principle.',
      },
      {
        opinion: 'should be embraced rigorously to restore balanced budgets and sound public finances.',
        antiThesis: 'Cutting hard into a downturn can deepen the recession and raise the debt ratio by shrinking output—the documented failure of pro-cyclical austerity.',
      },
    ],
  },
  {
    category: 'Austerity',
    keyword: 'public services',
    data: [
      {
        opinion: 'should be protected from austerity at all costs.',
        antiThesis: '“At all costs” can ignore fiscal limits, inefficiency, or the need to prioritise scarce resources.',
      },
      {
        opinion: 'should be cut when they become inefficient or unaffordable.',
        antiThesis: 'Cuts can reduce access and quality, especially for people who depend most on public systems.',
      },
      {
        opinion: 'should be expanded during hardship, not reduced.',
        antiThesis: 'Expansion during hardship requires borrowing, taxation, or reallocating funds from other priorities.',
      },
      {
        opinion: 'should be privatised when the state cannot deliver efficiently.',
        antiThesis: 'Privatisation can create profit incentives, unequal access, lower labour standards, and weaker accountability.',
      },
      {
        opinion: 'should never be sacrificed to satisfy creditors.',
        antiThesis: 'Creditors include pension funds, public institutions, and future lenders whose confidence can affect a country’s stability.',
      },
      {
        opinion: 'should be evaluated by outcomes, not protected by ideology.',
        antiThesis: 'Outcome metrics can miss dignity, prevention, equality, and long-term social value.',
      },
      {
        opinion: 'should be universal because targeting creates stigma and exclusion.',
        antiThesis: 'Universal services can be expensive and may subsidise people who do not need help.',
      },
      {
        opinion: 'should be targeted only at those most in need.',
        antiThesis: 'Targeting can reduce costs, but it can also create bureaucracy, stigma, and gaps in coverage.',
      },
      {
        opinion: 'should protect workers as well as users.',
        antiThesis: 'Protecting public workers should not prevent reform, accountability, or better service delivery.',
      },
      {
        opinion: 'should be funded sustainably rather than defended symbolically.',
        antiThesis: 'Sustainability can be used as a polite justification for permanent underfunding.',
      },
      {
        opinion: 'should be expanded massively and funded by heavy taxation of wealth and capital.',
        antiThesis: 'Wealth and capital taxes raise less than hoped because of avoidance and flight, as several countries that tried and repealed them found, so the funding may fall short.',
      },
      {
        opinion: 'should be cut back sharply, as a smaller state leaves more freedom and wealth with citizens.',
        antiThesis: 'Sharp service cuts often shift costs elsewhere—emergency care, crime, lost productivity—so the headline \'saving\' is partly illusory.',
      },
    ],
  },
  {
    category: 'Austerity',
    keyword: 'debt',
    data: [
      {
        opinion: 'should not be treated as more sacred than human life.',
        antiThesis: 'Debt cannot be ignored because repayments affect borrowing costs, currency stability, and future public spending.',
      },
      {
        opinion: 'should be paid because credibility is the foundation of economic stability.',
        antiThesis: 'Full repayment can become destructive if it forces deep cuts, unemployment, or social collapse.',
      },
      {
        opinion: 'should be cancelled when it traps societies in permanent suffering.',
        antiThesis: 'Debt cancellation may punish lenders, reduce future access to credit, and create moral hazard.',
      },
      {
        opinion: 'should be restructured before austerity destroys public capacity.',
        antiThesis: 'Restructuring can help, but it may trigger market panic or legal disputes.',
      },
      {
        opinion: 'should be reduced through growth, not cuts.',
        antiThesis: 'Growth is not guaranteed, and relying on it can postpone necessary fiscal choices.',
      },
      {
        opinion: 'should be reduced through spending discipline.',
        antiThesis: 'Spending discipline can reduce debt, but excessive cuts may shrink the economy and worsen the debt ratio.',
      },
      {
        opinion: 'should be audited to identify illegitimate obligations.',
        antiThesis: 'Defining illegitimate debt can be legally and politically difficult.',
      },
      {
        opinion: 'should not be used to justify selling public assets cheaply.',
        antiThesis: 'Asset sales can raise funds and improve efficiency if transparent and well-managed.',
      },
      {
        opinion: 'should be understood as a political choice, not only an accounting fact.',
        antiThesis: 'Debt is political, but accounting realities still constrain budgets and policy choices.',
      },
      {
        opinion: 'should be managed without erasing democracy.',
        antiThesis: 'Democratic choice is real, but borrowing creates obligations that last beyond election cycles.',
      },
      {
        opinion: 'should be treated as a tool for investment, not a constraint that justifies cuts.',
        antiThesis: 'Debt is a tool only while markets lend cheaply; high and rising debt eventually raises borrowing costs and crowds out the investment it was meant to fund.',
      },
      {
        opinion: 'should be slashed urgently, since borrowing today is taxation imposed on the young.',
        antiThesis: 'Slashing investment to cut debt leaves the young with worse schools, housing, and infrastructure—a different burden, not a lighter one.',
      },
    ],
  },
  {
    category: 'Austerity',
    keyword: 'taxation',
    data: [
      {
        opinion: 'should rise on wealth, profit, and luxury before austerity touches workers.',
        antiThesis: 'Higher taxes on wealth and profit can reduce investment, encourage avoidance, or move capital abroad.',
      },
      {
        opinion: 'should stay low so the economy can grow out of crisis.',
        antiThesis: 'Low taxes may support growth, but they can also underfund services and increase inequality.',
      },
      {
        opinion: 'should be progressive enough to make austerity unnecessary.',
        antiThesis: 'Progressive taxes help, but they may not raise enough revenue during severe fiscal crises.',
      },
      {
        opinion: 'should not punish success to fund inefficient states.',
        antiThesis: 'Public services, infrastructure, and stability often help create the conditions for private success.',
      },
      {
        opinion: 'should target tax avoidance before cutting public spending.',
        antiThesis: 'Closing loopholes is important, but enforcement takes time and revenue estimates can be uncertain.',
      },
      {
        opinion: 'should include temporary crisis levies on extraordinary profits.',
        antiThesis: 'Windfall taxes may discourage investment or create uncertainty if companies fear retrospective taxation.',
      },
      {
        opinion: 'should be broadened so everyone contributes.',
        antiThesis: 'Broad taxes can be regressive if low-income households are not protected.',
      },
      {
        opinion: 'should shift from labour to land, pollution, and rent extraction.',
        antiThesis: 'Such taxes can be efficient, but they are politically difficult and may affect households indirectly.',
      },
      {
        opinion: 'should be transparent so citizens see what they pay and receive.',
        antiThesis: 'Tax systems are complex, and full transparency may not make trade-offs easier to accept.',
      },
      {
        opinion: 'should balance fairness, incentives, revenue, and trust.',
        antiThesis: 'These values conflict because the fairest taxes are not always the easiest to collect or least distortionary.',
      },
      {
        opinion: 'should rise sharply on the rich to fund a far larger and more generous state.',
        antiThesis: 'Very high marginal rates can reduce work, investment, and reported income, so revenue often disappoints relative to static projections.',
      },
      {
        opinion: 'should be cut deeply, because lower taxes drive the growth that ultimately funds everything.',
        antiThesis: 'Tax cuts rarely pay for themselves; the assumption that growth automatically offsets lost revenue has repeatedly produced widening deficits.',
      },
    ],
  },
  {
    category: 'Austerity',
    keyword: 'workers',
    data: [
      {
        opinion: 'should never lose wages, rights, or jobs because of austerity.',
        antiThesis: 'Protecting all jobs and wages may be impossible if public finances or demand collapse.',
      },
      {
        opinion: 'should accept temporary sacrifice to stabilise the economy.',
        antiThesis: '“Temporary sacrifice” often becomes permanent for workers while elites recover first.',
      },
      {
        opinion: 'should not pay for banking crises, corruption, or elite mismanagement.',
        antiThesis: 'Even when workers are not responsible, the whole economy may still face adjustment after crisis.',
      },
      {
        opinion: 'should be protected through job guarantees during fiscal crises.',
        antiThesis: 'Job guarantees require funding and competent administration, especially when budgets are already strained.',
      },
      {
        opinion: 'should not be trapped in public-sector systems that cannot reform.',
        antiThesis: 'Reform is valid, but anti-worker rhetoric can justify wage cuts and service degradation.',
      },
      {
        opinion: 'should share in recovery if they were asked to sacrifice.',
        antiThesis: 'Recovery may be slow, uneven, or dependent on restoring fiscal capacity first.',
      },
      {
        opinion: 'should be supported through retraining instead of protected from every cut.',
        antiThesis: 'Retraining cannot replace stable wages, especially when new jobs are unavailable or lower paid.',
      },
      {
        opinion: 'should have unions involved in any austerity negotiation.',
        antiThesis: 'Union involvement can protect workers, but it may also slow reforms or protect insiders.',
      },
      {
        opinion: 'should not be told there is no alternative.',
        antiThesis: 'Alternatives exist, but they may involve inflation, tax rises, borrowing, restructuring, or service trade-offs.',
      },
      {
        opinion: 'should be protected while public finances are repaired.',
        antiThesis: 'Repairing public finances while protecting workers is difficult because labour costs are often a major part of budgets.',
      },
      {
        opinion: 'should accept restraint in hard times, since unsustainable spending harms everyone in the end.',
        antiThesis: 'Wage restraint while prices and profits rise suppresses demand and falls unequally; \'shared sacrifice\' is rarely shared.',
      },
    ],
  },
  {
    category: 'Space Exploration',
    keyword: 'space exploration',
    data: [
      {
        opinion: 'should be one of humanity’s greatest collective projects.',
        antiThesis: 'Collective ambition matters, but urgent problems on Earth may deserve priority before expensive space missions.',
      },
      {
        opinion: 'should be paused until poverty, climate change, and war are solved on Earth.',
        antiThesis: 'Waiting until Earth is “fixed” may mean never investing in science, discovery, or long-term survival.',
      },
      {
        opinion: 'should be accelerated because humanity needs a future beyond one planet.',
        antiThesis: 'Multi-planetary survival is inspiring, but it may distract from protecting the only habitable planet we currently have.',
      },
      {
        opinion: 'should remain scientific, not colonial.',
        antiThesis: 'Exploration can be done ethically, but language of settlement, extraction, and conquest risks repeating colonial patterns.',
      },
      {
        opinion: 'should be led by public institutions, not billionaires.',
        antiThesis: 'Private companies can reduce costs, accelerate innovation, and take risks governments avoid.',
      },
      {
        opinion: 'should be opened to private enterprise as much as possible.',
        antiThesis: 'Private enterprise may prioritise profit, prestige, tourism, or resource extraction over public benefit.',
      },
      {
        opinion: 'should inspire humanity beyond national borders.',
        antiThesis: 'Space projects are often funded by nations and shaped by strategic competition.',
      },
      {
        opinion: 'should be treated as a luxury project for rich countries.',
        antiThesis: 'Space technology can generate benefits in climate monitoring, communications, science, and disaster response.',
      },
      {
        opinion: 'should be governed before it becomes a race for ownership.',
        antiThesis: 'Too much governance too early can slow discovery and investment.',
      },
      {
        opinion: 'should balance curiosity, responsibility, survival, and justice.',
        antiThesis: 'These goals often conflict because exploration demands resources while justice demands distribution.',
      },
      {
        opinion: 'should be a fully public and international project for the benefit of all humanity.',
        antiThesis: 'Purely public, consensus-driven programmes move slowly and cost more; the recent surge in capability came largely from the private competition this model would sideline.',
      },
      {
        opinion: 'should be funded only where it yields clear practical returns for taxpayers.',
        antiThesis: 'Demanding near-term returns would have killed foundational research—GPS, weather satellites, materials science—whose payoffs were unforeseeable at the outset.',
      },
    ],
  },
  {
    category: 'Space Exploration',
    keyword: 'colonisation',
    data: [
      {
        opinion: 'should never be the language of humanity’s future in space.',
        antiThesis: 'Some use “colonisation” simply to mean permanent settlement, not domination.',
      },
      {
        opinion: 'should be embraced because humans are destined to expand.',
        antiThesis: 'Destiny language can romanticise conquest and ignore ethical limits.',
      },
      {
        opinion: 'should be rejected because it repeats Earth’s history of extraction.',
        antiThesis: 'Space settlement could also teach new forms of cooperation, sustainability, and shared survival.',
      },
      {
        opinion: 'should be replaced by the idea of stewardship.',
        antiThesis: 'Stewardship sounds ethical, but it may still hide control and ownership claims.',
      },
      {
        opinion: 'should be permitted only under international rules.',
        antiThesis: 'International rules may be weak, slow, or dominated by powerful states.',
      },
      {
        opinion: 'should prioritise scientific bases before permanent settlements.',
        antiThesis: 'Permanent settlements may be necessary to develop long-term knowledge and resilience.',
      },
      {
        opinion: 'should not turn planets, moons, or asteroids into real estate.',
        antiThesis: 'Property rights may be needed to encourage investment, responsibility, and infrastructure.',
      },
      {
        opinion: 'should be a backup plan for civilisation.',
        antiThesis: 'Treating space as backup may reduce urgency to protect Earth.',
      },
      {
        opinion: 'should not export inequality beyond Earth.',
        antiThesis: 'Early space settlement will likely be unequal because only wealthy states and companies can fund it.',
      },
      {
        opinion: 'should be delayed until humanity learns not to exploit its own planet.',
        antiThesis: 'Learning may come partly through the technological and ecological constraints of living beyond Earth.',
      },
      {
        opinion: 'should be pursued urgently as humanity\'s insurance against extinction on a single planet.',
        antiThesis: 'Self-sufficient off-world settlement is far beyond current capability and won\'t arrive in time for any near-term threat; the \'insurance\' is decades away while resources are needed now.',
      },
      {
        opinion: 'should be abandoned as a costly fantasy while urgent problems remain unsolved on earth.',
        antiThesis: 'Space spending is small relative to budgets and yields spin-off technology and earth-observation that directly aid earthly problems; it isn\'t simply a diversion.',
      },
    ],
  },
  {
    category: 'Space Exploration',
    keyword: 'space science',
    data: [
      {
        opinion: 'should be funded because discovery has intrinsic value.',
        antiThesis: 'Discovery matters, but public money should also answer immediate social needs.',
      },
      {
        opinion: 'should focus on knowledge, not flags and prestige.',
        antiThesis: 'Prestige can mobilise funding, talent, and public enthusiasm for science.',
      },
      {
        opinion: 'should help us understand Earth better.',
        antiThesis: 'Earth-focused science is valuable, but space science should not be reduced only to Earth benefits.',
      },
      {
        opinion: 'should search for life beyond Earth.',
        antiThesis: 'Searching for life is profound, but it may produce no practical benefit for generations.',
      },
      {
        opinion: 'should be protected from military and commercial capture.',
        antiThesis: 'Military and commercial funding often provides the infrastructure that science uses.',
      },
      {
        opinion: 'should be open and internationally shared.',
        antiThesis: 'Some knowledge has dual-use risks or strategic value that states may restrict.',
      },
      {
        opinion: 'should not be dismissed as fantasy.',
        antiThesis: 'Space enthusiasm can become fantasy when it ignores cost, risk, and social priorities.',
      },
      {
        opinion: 'should inspire education and imagination.',
        antiThesis: 'Inspiration matters, but symbolic inspiration alone cannot justify unlimited spending.',
      },
      {
        opinion: 'should include ethical reflection before discovery becomes exploitation.',
        antiThesis: 'Too much ethical delay can prevent beneficial research and exploration.',
      },
      {
        opinion: 'should be pursued even when it has no immediate economic return.',
        antiThesis: 'Public funding without practical return can be politically difficult when budgets are limited.',
      },
      {
        opinion: 'should take priority over commerce, with discovery valued above profit.',
        antiThesis: 'Commerce funds and accelerates the very science prioritised here; cheap launch from industry is what made many science missions affordable.',
      },
    ],
  },
  {
    category: 'Space Exploration',
    keyword: 'space industry',
    data: [
      {
        opinion: 'should be publicly owned because space belongs to everyone.',
        antiThesis: 'Public ownership can become slow, bureaucratic, and less innovative.',
      },
      {
        opinion: 'should be driven by competition because markets lower costs.',
        antiThesis: 'Competition can lower costs, but it can also create safety risks, duplication, and profit-driven priorities.',
      },
      {
        opinion: 'should not let billionaires define humanity’s future.',
        antiThesis: 'Billionaire investment can fund ambitious projects that governments may not attempt.',
      },
      {
        opinion: 'should be regulated before extraction begins.',
        antiThesis: 'Excessive regulation can discourage investment before the industry is mature.',
      },
      {
        opinion: 'should create jobs, technology, and economic growth.',
        antiThesis: 'Economic benefits may be concentrated among already powerful companies and countries.',
      },
      {
        opinion: 'should not privatise celestial resources.',
        antiThesis: 'Without resource rights, companies may have little incentive to build costly space infrastructure.',
      },
      {
        opinion: 'should prioritise safety over speed.',
        antiThesis: 'Speed can be necessary to innovate, compete, and learn from experimentation.',
      },
      {
        opinion: 'should be internationally taxed to fund global public goods.',
        antiThesis: 'International taxation may be hard to enforce and could drive activity to less regulated jurisdictions.',
      },
      {
        opinion: 'should be transparent about risks and failures.',
        antiThesis: 'Full transparency may expose proprietary information or national-security concerns.',
      },
      {
        opinion: 'should balance public benefit, private innovation, safety, and fairness.',
        antiThesis: 'These values conflict because the fastest innovators may resist public-interest constraints.',
      },
      {
        opinion: 'should be nationalised so its vast wealth is shared rather than privately captured.',
        antiThesis: 'Nationalising the sector would likely slow the innovation now driving costs down; the wealth to share largely doesn\'t exist yet because private risk-taking created the capability.',
      },
      {
        opinion: 'should be driven entirely by private competition, which advances faster than any state.',
        antiThesis: 'Pure private competition underinvests in basic science, planetary defence, and debris cleanup—public goods with no direct profit.',
      },
      {
        opinion: 'should be free to claim and exploit resources without restriction or shared ownership.',
        antiThesis: 'Unregulated resource claims invite conflict and a tragedy of the commons in orbit; some shared rules are exactly what make exploitation sustainable.',
      },
    ],
  },
  {
    category: 'Space Exploration',
    keyword: 'space militarisation',
    data: [
      {
        opinion: 'should be banned before it creates a new arms race.',
        antiThesis: 'States may argue that space defence is necessary because satellites are critical infrastructure.',
      },
      {
        opinion: 'should be accepted because national security depends on satellites.',
        antiThesis: 'Militarising space can escalate conflict and make civilian systems more vulnerable.',
      },
      {
        opinion: 'should be governed by strong treaties.',
        antiThesis: 'Treaties are difficult to verify and may be ignored by states seeking strategic advantage.',
      },
      {
        opinion: 'should never include weapons in orbit.',
        antiThesis: 'Some states may pursue orbital defence if they believe rivals are doing the same.',
      },
      {
        opinion: 'should protect communication, navigation, and climate-monitoring infrastructure.',
        antiThesis: 'Defensive systems can be perceived as offensive by rivals.',
      },
      {
        opinion: 'should not turn space into another battlefield.',
        antiThesis: 'If conflict on Earth targets satellites, some military planning for space may be unavoidable.',
      },
      {
        opinion: 'should be transparent enough to prevent miscalculation.',
        antiThesis: 'Too much transparency can reveal vulnerabilities to adversaries.',
      },
      {
        opinion: 'should be resisted by global civil society.',
        antiThesis: 'Civil society may have limited influence over national-security decisions.',
      },
      {
        opinion: 'should be treated as a threat to all humanity.',
        antiThesis: 'Some argue deterrence in space may prevent attacks on critical systems.',
      },
      {
        opinion: 'should balance security, restraint, transparency, and peace.',
        antiThesis: 'These goals conflict because security competition rewards secrecy and strategic advantage.',
      },
      {
        opinion: 'should be banned absolutely by treaty to keep space a peaceful commons.',
        antiThesis: 'Treaties without verification or buy-in from major powers are fragile, and dual-use technology makes a clean civilian/military line nearly impossible to police.',
      },
      {
        opinion: 'should be embraced, since whoever controls orbit controls the future of security.',
        antiThesis: 'An orbital arms race risks debris cascades that could deny space to everyone, including the side seeking advantage; weaponising orbit is collectively self-defeating.',
      },
    ],
  },
  {
    category: 'Regulation',
    keyword: 'regulation',
    data: [
      {
        opinion: 'should protect people from corporate abuse.',
        antiThesis: 'Regulation can protect people, but excessive rules can also raise costs, reduce competition, and slow innovation.',
      },
      {
        opinion: 'should be minimised because free markets correct themselves better than governments do.',
        antiThesis: 'Markets can fail when monopolies, pollution, exploitation, or unsafe products create harm before correction happens.',
      },
      {
        opinion: 'should be strong wherever profit creates risk to life, health, or dignity.',
        antiThesis: 'Strong rules may be justified in high-risk sectors, but broad regulation can become bureaucratic and inefficient.',
      },
      {
        opinion: 'should be abolished wherever adults can choose for themselves.',
        antiThesis: 'Choice is not always free when people face information gaps, coercion, poverty, addiction, or unequal bargaining power.',
      },
      {
        opinion: 'should be designed by experts, not political emotion.',
        antiThesis: 'Experts can improve policy, but technocracy can become detached from democratic values and lived experience.',
      },
      {
        opinion: 'should be democratically controlled, not left to unelected agencies.',
        antiThesis: 'Elected politics can be short-term, populist, or technically uninformed in complex areas.',
      },
      {
        opinion: 'should punish companies severely when they knowingly cause harm.',
        antiThesis: 'Severe penalties can deter harm, but if too harsh they may discourage investment or punish workers and consumers indirectly.',
      },
      {
        opinion: 'should be light enough for small businesses to survive.',
        antiThesis: 'Small businesses need flexibility, but weak standards can still harm workers, consumers, and communities.',
      },
      {
        opinion: 'should prevent harm before scandals happen.',
        antiThesis: 'Preventive regulation can become excessive if it blocks activity based on hypothetical risks.',
      },
      {
        opinion: 'should balance safety, freedom, innovation, fairness, and accountability.',
        antiThesis: 'These values often conflict because the safest rule is not always the freest or most innovative.',
      },
      {
        opinion: 'should be expanded sweepingly, since markets harm people wherever they are left unchecked.',
        antiThesis: 'Sweeping regulation imposes compliance costs that fall hardest on small entrants, entrenching the incumbents it targets and slowing the innovation that benefits consumers.',
      },
      {
        opinion: 'should be applied proportionately, targeting genuine harms without stifling enterprise.',
        antiThesis: '\'Proportionate\' is in the eye of the regulator and tends to ratchet upward; without a hard check, targeted rules accumulate into heavy burdens.',
      },
      {
        opinion: 'should be cut drastically, since most rules merely protect incumbents and raise costs.',
        antiThesis: 'Many rules protect consumers, workers, and the environment from real harms self-interest won\'t prevent; deregulation has repeatedly preceded disasters.',
      },
      {
        opinion: 'should be abolished wherever possible, as the free market is the ultimate regulator.',
        antiThesis: 'Markets don\'t price externalities, protect the vulnerable, or prevent fraud on their own; \'the market regulates\' ignores the harms borne by third parties.',
      },
    ],
  },
  {
    category: 'Regulation',
    keyword: 'markets',
    data: [
      {
        opinion: 'should be regulated when they produce monopolies or abuse.',
        antiThesis: 'Monopoly regulation matters, but large firms can also create efficiency, scale, and lower prices.',
      },
      {
        opinion: 'should be left alone unless there is clear evidence of harm.',
        antiThesis: 'Waiting for clear evidence can allow harm to become entrenched before intervention happens.',
      },
      {
        opinion: 'should not be allowed to sell essential goods at exploitative prices.',
        antiThesis: 'Price restrictions can create shortages if suppliers cannot cover costs or respond to demand.',
      },
      {
        opinion: 'should be disciplined by competition, not regulators.',
        antiThesis: 'Competition may fail when consumers lack information, switching costs are high, or firms collude.',
      },
      {
        opinion: 'should be regulated to protect workers and consumers from race-to-the-bottom logic.',
        antiThesis: 'Too much protection can make firms less competitive and reduce job creation.',
      },
      {
        opinion: 'should reward risk without being rescued when risk fails.',
        antiThesis: 'Some failures create systemic risk that can harm ordinary people if governments do not intervene.',
      },
      {
        opinion: 'should not be governed by moral panic.',
        antiThesis: 'Moral concerns can reflect real public values, especially around safety, dignity, environment, and children.',
      },
      {
        opinion: 'should be shaped by democratic values, not only prices.',
        antiThesis: 'Political interference in markets can distort incentives and create corruption or inefficiency.',
      },
      {
        opinion: 'should be deregulated to unlock growth.',
        antiThesis: 'Deregulation can unlock growth, but it can also lead to unsafe products, financial crises, and exploitation.',
      },
      {
        opinion: 'should be regulated only where benefits clearly outweigh costs.',
        antiThesis: 'Some values, such as dignity, health, or ecological survival, are difficult to capture in cost-benefit calculations.',
      },
      {
        opinion: 'should operate only within tight rules that subordinate profit to social goals.',
        antiThesis: 'Subordinating profit by rule removes the signal that allocates resources efficiently, so the result is often shortage, queue, and stagnation.',
      },
      {
        opinion: 'should be left almost entirely free, as competition disciplines firms better than any agency.',
        antiThesis: 'Competition fails to discipline monopolies, externalities, and information asymmetries—exactly the cases regulation exists to address.',
      },
    ],
  },
  {
    category: 'Regulation',
    keyword: 'corporations',
    data: [
      {
        opinion: 'should be tightly regulated because their power exceeds democratic control.',
        antiThesis: 'Corporations are powerful, but they also create jobs, products, innovation, tax revenue, and investment.',
      },
      {
        opinion: 'should regulate themselves through industry standards.',
        antiThesis: 'Self-regulation can become weak or performative when profit conflicts with public interest.',
      },
      {
        opinion: 'should face criminal liability when executives knowingly endanger people.',
        antiThesis: 'Criminal liability can deter misconduct, but proving intent at executive level is difficult.',
      },
      {
        opinion: 'should be free from unnecessary paperwork.',
        antiThesis: 'What companies call paperwork may be the documentation needed for safety, labour rights, and accountability.',
      },
      {
        opinion: 'should disclose risks, emissions, supply chains, and political spending.',
        antiThesis: 'Full disclosure can be costly, complex, and may expose trade secrets or sensitive information.',
      },
      {
        opinion: 'should not be treated as villains simply because they make profit.',
        antiThesis: 'Profit is not inherently wrong, but profit incentives can conflict with public welfare.',
      },
      {
        opinion: 'should be broken up when they become too powerful.',
        antiThesis: 'Breaking up firms can reduce power, but it may also reduce efficiency, integration, and global competitiveness.',
      },
      {
        opinion: 'should be rewarded for compliance rather than only punished for failure.',
        antiThesis: 'Rewards can encourage good behaviour, but they may also subsidise companies for doing what should be required.',
      },
      {
        opinion: 'should not write the rules that govern them.',
        antiThesis: 'Industry input can improve regulation because companies understand technical realities and operational constraints.',
      },
      {
        opinion: 'should operate within clear, simple, enforceable rules.',
        antiThesis: 'Simple rules are easier to follow, but complex sectors often require complex regulation.',
      },
      {
        opinion: 'should face strict licensing and oversight in every sector that affects the public.',
        antiThesis: 'Licensing \'everything\' creates cartels and gatekeeping that raise prices and exclude competitors without proportionate safety gains.',
      },
      {
        opinion: 'should be trusted to self-regulate, with reputation and liability sufficient to deter harm.',
        antiThesis: 'Reputation and liability act too late and too weakly against diffuse harms like pollution; self-regulation has a long record of failure where profit and safety conflict.',
      },
    ],
  },
  {
    category: 'Regulation',
    keyword: 'consumers',
    data: [
      {
        opinion: 'should be protected from unsafe, deceptive, or exploitative products.',
        antiThesis: 'Consumer protection matters, but overprotection can reduce choice and treat adults as incapable.',
      },
      {
        opinion: 'should be free to make risky choices.',
        antiThesis: 'Individual risky choices can create social costs, especially in health, finance, and public safety.',
      },
      {
        opinion: 'should not need legal expertise to understand what they are buying.',
        antiThesis: 'Some products and contracts are inherently complex and cannot be reduced to simple language without losing precision.',
      },
      {
        opinion: 'should be trusted more than regulators.',
        antiThesis: 'Consumers often lack time, information, bargaining power, or technical knowledge.',
      },
      {
        opinion: 'should be protected from dark patterns, hidden fees, and misleading claims.',
        antiThesis: 'Some interface design and pricing complexity reflects genuine business models, not manipulation.',
      },
      {
        opinion: 'should have the right to buy unapproved products if they accept the risk.',
        antiThesis: 'Approval systems exist because people cannot always assess safety risks before harm occurs.',
      },
      {
        opinion: 'should be protected from predatory credit and debt traps.',
        antiThesis: 'Credit restrictions can also reduce access to finance for people who need flexibility.',
      },
      {
        opinion: 'should decide through demand which companies survive.',
        antiThesis: 'Demand can be manipulated through advertising, monopoly power, and information asymmetry.',
      },
      {
        opinion: 'should benefit from regulation that makes trust easier.',
        antiThesis: 'Trust can improve markets, but compliance costs may raise prices.',
      },
      {
        opinion: 'should balance freedom of choice with protection from abuse.',
        antiThesis: 'Freedom and protection often conflict when people knowingly choose risky or harmful products.',
      },
      {
        opinion: 'should be protected by powerful agencies empowered to ban harmful products outright.',
        antiThesis: 'Pre-emptive bans by powerful agencies can be captured or overcautious, denying consumers beneficial products on weak evidence.',
      },
    ],
  },
  {
    category: 'Regulation',
    keyword: 'innovation',
    data: [
      {
        opinion: 'should not be suffocated by regulation.',
        antiThesis: 'Innovation without guardrails can create harms that are difficult to reverse once scaled.',
      },
      {
        opinion: 'should be regulated before dangerous technologies become normal.',
        antiThesis: 'Regulating too early can block unknown benefits and entrench incumbent companies that can afford compliance.',
      },
      {
        opinion: 'should move fast and break outdated rules.',
        antiThesis: 'Moving fast can also break people’s rights, safety, jobs, privacy, and trust.',
      },
      {
        opinion: 'should be slowed where society cannot absorb the consequences.',
        antiThesis: 'Slowing innovation can leave societies less competitive and delay solutions to urgent problems.',
      },
      {
        opinion: 'should be governed by sandboxes rather than bans.',
        antiThesis: 'Sandboxes can help, but they may also normalise risky experimentation on real users.',
      },
      {
        opinion: 'should be public-interest first, profit second.',
        antiThesis: 'Profit incentives can fund research, scale products, and attract talent.',
      },
      {
        opinion: 'should be open to small firms, not captured by compliance giants.',
        antiThesis: 'Smaller firms can innovate, but they can also lack resources for safety, security, and accountability.',
      },
      {
        opinion: 'should be permissionless unless it causes proven harm.',
        antiThesis: 'Proven harm may arrive too late when technologies scale quickly.',
      },
      {
        opinion: 'should include ethical review from the beginning.',
        antiThesis: 'Ethical review can become slow, vague, or politicised if not well designed.',
      },
      {
        opinion: 'should balance speed, safety, creativity, and democratic control.',
        antiThesis: 'These goals are hard to reconcile because innovation often moves faster than democratic institutions.',
      },
      {
        opinion: 'should never be slowed by precaution, because the cost of delay outweighs most risks.',
        antiThesis: 'Some innovations—untested drugs, unsafe structures—carry irreversible harms where precaution is precisely what protects the public.',
      },
    ],
  },
  {
    category: 'Body',
    keyword: 'body',
    data: [
      {
        opinion: 'should belong completely to the individual.',
        antiThesis: 'Individual autonomy matters, but society may still regulate bodies in contexts of public health, safety, reproduction, or harm.',
      },
      {
        opinion: 'should never be treated as public property or social obligation.',
        antiThesis: 'Bodies are personal, but bodies also affect others through care, intimacy, disease, labour, and reproduction.',
      },
      {
        opinion: 'should be disciplined because self-control is a form of dignity.',
        antiThesis: 'Discipline can be empowering, but it can also become shame, obsession, or moral judgement.',
      },
      {
        opinion: 'should be liberated from all beauty standards.',
        antiThesis: 'Beauty standards can be oppressive, but beauty can also be playful, cultural, creative, and self-chosen.',
      },
      {
        opinion: 'should be optimised through science, fitness, and technology.',
        antiThesis: 'Optimisation can improve health, but it can also turn life into permanent self-surveillance.',
      },
      {
        opinion: 'should not be optimised because it is not a machine.',
        antiThesis: 'The body is not a machine, but habits, medicine, training, and technology can reduce suffering and improve function.',
      },
      {
        opinion: 'should be accepted exactly as it is.',
        antiThesis: 'Acceptance can be healing, but it should not prevent people from pursuing health, change, or transformation.',
      },
      {
        opinion: 'should be changed freely if change helps someone feel at home in it.',
        antiThesis: 'Free change matters, but choices can be shaped by insecurity, social pressure, advertising, or trauma.',
      },
      {
        opinion: 'should be sacred and protected from commodification.',
        antiThesis: 'Sacredness can protect dignity, but it can also justify control over sexuality, dress, gender, or reproduction.',
      },
      {
        opinion: 'should balance autonomy, health, dignity, pleasure, and responsibility.',
        antiThesis: 'These values often conflict because one person’s freedom may be seen by another as harm or self-objectification.',
      },
      {
        opinion: 'should be freed entirely from social standards of appearance and worth.',
        antiThesis: 'Some health-linked standards aren\'t mere social judgement; abandoning all of them can normalise genuine harm under the banner of acceptance.',
      },
      {
        opinion: 'should be subject to shared standards where personal choices impose costs on others.',
        antiThesis: 'Defining when private bodily choices \'cost others\' is slippery and easily expanded into policing lifestyles that mainly affect the individual.',
      },
    ],
  },
  {
    category: 'Body',
    keyword: 'appearance',
    data: [
      {
        opinion: 'should never determine someone’s social worth.',
        antiThesis: 'Appearance should not define worth, but it often affects attraction, trust, identity, and first impressions.',
      },
      {
        opinion: 'should be freely shaped through fashion, cosmetics, surgery, or refusal.',
        antiThesis: 'Freedom of appearance can still be constrained by money, gender norms, race, age, and workplace expectations.',
      },
      {
        opinion: 'should be ignored so people are judged only by character.',
        antiThesis: 'Character matters, but appearance is part of culture, communication, identity, and embodiment.',
      },
      {
        opinion: 'should be cultivated because beauty is a social and personal good.',
        antiThesis: 'Beauty can enrich life, but making it a duty can create anxiety and exclusion.',
      },
      {
        opinion: 'should be protected from commercial beauty industries.',
        antiThesis: 'Beauty industries can exploit insecurity, but they also provide creativity, work, ritual, and pleasure.',
      },
      {
        opinion: 'should be radically desexualised in public life.',
        antiThesis: 'Desexualisation can reduce objectification, but it can also shame desire, sensuality, and self-expression.',
      },
      {
        opinion: 'should be sexualised only when the individual chooses it.',
        antiThesis: 'Choice matters, but social pressure can make “choice” difficult to separate from expectation.',
      },
      {
        opinion: 'should not be regulated by schools, workplaces, or states.',
        antiThesis: 'Some dress or appearance rules may be needed for safety, hygiene, professionalism, or identification.',
      },
      {
        opinion: 'should be modest because public culture needs restraint.',
        antiThesis: 'Modesty can be meaningful, but enforced modesty often controls women and gender-nonconforming people.',
      },
      {
        opinion: 'should allow ugliness, ageing, disability, and imperfection to be visible.',
        antiThesis: 'Visibility matters, but people may still personally desire beauty, youthfulness, symmetry, or transformation.',
      },
      {
        opinion: 'should never be judged, with all aesthetic norms treated as forms of oppression.',
        antiThesis: 'Treating every aesthetic preference as oppression is unworkable and ignores that many preferences are benign personal taste, not imposed control.',
      },
      {
        opinion: 'should be a matter of free expression and even free commerce, beyond any criticism.',
        antiThesis: 'A market in appearance can entrench harmful, exploitative beauty standards, especially toward the young; \'beyond criticism\' forecloses legitimate concern.',
      },
    ],
  },
  {
    category: 'Body',
    keyword: 'health',
    data: [
      {
        opinion: 'should be supported without turning bodies into moral projects.',
        antiThesis: 'Health should not be moralised, but personal habits can still affect wellbeing and public systems.',
      },
      {
        opinion: 'should be every individual’s personal responsibility.',
        antiThesis: 'Personal responsibility matters, but health is also shaped by poverty, environment, genetics, trauma, and access to care.',
      },
      {
        opinion: 'should be treated as a collective right.',
        antiThesis: 'Collective health rights require funding, limits, and shared responsibility.',
      },
      {
        opinion: 'should not be used to shame fat, disabled, ageing, or ill bodies.',
        antiThesis: 'Avoiding shame is essential, but health risks and medical needs should still be discussable.',
      },
      {
        opinion: 'should prioritise prevention, discipline, and lifestyle.',
        antiThesis: 'Lifestyle matters, but overemphasis on prevention can blame people for illness.',
      },
      {
        opinion: 'should not be reduced to weight, fitness, or appearance.',
        antiThesis: 'Weight and fitness are incomplete, but they can still be relevant health indicators in some contexts.',
      },
      {
        opinion: 'should be guided by medical evidence, not internet trends.',
        antiThesis: 'Evidence matters, but medical institutions can also be biased, slow, or dismissive of lived experience.',
      },
      {
        opinion: 'should include pleasure, rest, sexuality, and emotional life.',
        antiThesis: 'A broad definition is humane, but it may become too vague for medical policy.',
      },
      {
        opinion: 'should be optimised even beyond normal functioning.',
        antiThesis: 'Enhancement may improve performance, but it can deepen inequality and obsession.',
      },
      {
        opinion: 'should balance care, evidence, freedom, and non-judgement.',
        antiThesis: 'These values often conflict when medical advice feels like stigma or when autonomy creates risk.',
      },
      {
        opinion: 'should be a collective responsibility, with the state ensuring wellbeing for all.',
        antiThesis: 'Full collective responsibility for health invites intrusive control over private choices and can erode the personal agency it claims to support.',
      },
      {
        opinion: 'should be a personal responsibility, with individuals bearing the cost of their own choices.',
        antiThesis: 'Pure individual responsibility ignores that illness is heavily shaped by genetics, poverty, and environment beyond personal control.',
      },
    ],
  },
  {
    category: 'Body',
    keyword: 'bodily autonomy',
    data: [
      {
        opinion: 'should include full freedom over reproduction, transition, sex, and medical choices.',
        antiThesis: 'Full freedom can conflict with safeguarding, medical ethics, public funding, and the rights of others.',
      },
      {
        opinion: 'should have limits where choices harm life, family, or society.',
        antiThesis: 'Limits can protect social values, but they can also become coercive control over private life.',
      },
      {
        opinion: 'should protect people from forced treatment or bodily interference.',
        antiThesis: 'Forced intervention is dangerous, but rare emergencies may require intervention to prevent serious harm.',
      },
      {
        opinion: 'should include the right to refuse beauty, fitness, reproduction, and gender expectations.',
        antiThesis: 'Refusal is important, but some people freely embrace beauty, fitness, parenthood, or gender tradition.',
      },
      {
        opinion: 'should not be sold back to people as consumer choice.',
        antiThesis: 'Markets can commodify autonomy, but products and services can also expand real options.',
      },
      {
        opinion: 'should include the right to extreme body modification.',
        antiThesis: 'Extreme modifications raise questions of consent, regret, medical risk, and professional responsibility.',
      },
      {
        opinion: 'should be protected from religious or state control.',
        antiThesis: 'Religion and state may claim roles in protecting life, morality, children, or public order.',
      },
      {
        opinion: 'should not erase responsibility for shared public health.',
        antiThesis: 'Public health matters, but collective responsibility can be used to justify intrusive control.',
      },
      {
        opinion: 'should mean nobody owes attractiveness, health, fertility, or productivity.',
        antiThesis: 'Nobody owes these things, but relationships, work, and society still involve expectations and interdependence.',
      },
      {
        opinion: 'should balance freedom, consent, safety, and social consequence.',
        antiThesis: 'Balancing these values is difficult because autonomy often becomes contested precisely where consequences are serious.',
      },
      {
        opinion: 'should be absolute, granting every person total control over their own body without limit.',
        antiThesis: 'Even strong autonomy is limited where choices harm others or involve coercion and exploitation; \'no limit\' can\'t address public-health duties or third-party harm.',
      },
      {
        opinion: 'should be balanced against public health duties the community may rightly impose.',
        antiThesis: '\'Balance\' can become a lever for coercion; the threshold for overriding a bodily choice should be high and narrowly defined.',
      },
    ],
  },
  {
    category: 'Body',
    keyword: 'ageing',
    data: [
      {
        opinion: 'should be accepted as a natural and beautiful part of life.',
        antiThesis: 'Acceptance matters, but people may reasonably want to reduce pain, decline, or visible ageing.',
      },
      {
        opinion: 'should be fought aggressively through science and longevity medicine.',
        antiThesis: 'Fighting ageing can reduce suffering, but it can also pathologise normal life and deepen inequality.',
      },
      {
        opinion: 'should not make people socially invisible.',
        antiThesis: 'Visibility matters, but youth culture and novelty often drive fashion, media, and desire.',
      },
      {
        opinion: 'should not be hidden by cosmetic pressure.',
        antiThesis: 'Cosmetic choices can also be personal, empowering, and pleasurable.',
      },
      {
        opinion: 'should be delayed because longer healthspan benefits everyone.',
        antiThesis: 'Longer healthspan is valuable, but longevity research may divert attention from present healthcare inequalities.',
      },
      {
        opinion: 'should be honoured through elders, memory, and intergenerational care.',
        antiThesis: 'Honour is meaningful, but it can become symbolic if older people lack income, care, or autonomy.',
      },
      {
        opinion: 'should not define someone’s desire, sexuality, or ambition.',
        antiThesis: 'Age should not restrict life, but bodies and priorities do change over time.',
      },
      {
        opinion: 'should be resisted as a biological injustice.',
        antiThesis: 'Calling ageing injustice may make mortality feel like failure and ignore existential meaning.',
      },
      {
        opinion: 'should be treated with dignity rather than denial.',
        antiThesis: 'Dignity matters, but denial sometimes reflects fear that deserves compassion rather than judgement.',
      },
      {
        opinion: 'should balance acceptance, care, science, memory, and freedom.',
        antiThesis: 'These values often conflict because accepting ageing and fighting ageing can imply opposite relationships to the body.',
      },
      {
        opinion: 'should be embraced and supported rather than fought or hidden away.',
        antiThesis: 'Supporting ageing is right, but framing all anti-ageing effort as wrong denies people a legitimate desire to extend healthy, active years.',
      },
      {
        opinion: 'should be resisted through every available medical means as a problem to be solved.',
        antiThesis: 'Pouring resources into resisting ageing as a \'problem to solve\' can divert care from immediate needs and pathologise a normal part of life.',
      },
    ],
  },
  {
    category: 'Decentralisation',
    keyword: 'decentralisation',
    data: [
      {
        opinion: 'should return power to communities instead of distant institutions.',
        antiThesis: 'Local power can improve participation, but it can also reproduce local elites, inequality, or exclusion.',
      },
      {
        opinion: 'should be maximised because centralised power always becomes abusive.',
        antiThesis: 'Centralised power can be dangerous, but it can also protect rights, coordinate services, and redistribute resources.',
      },
      {
        opinion: 'should be used to make government closer to citizens.',
        antiThesis: 'Closeness helps, but local governments may lack expertise, funding, or administrative capacity.',
      },
      {
        opinion: 'should be rejected when it fragments national solidarity.',
        antiThesis: 'National solidarity matters, but excessive centralism can ignore local realities and create alienation.',
      },
      {
        opinion: 'should allow regions to experiment with different policies.',
        antiThesis: 'Experimentation can produce innovation, but it can also create unequal rights and services between regions.',
      },
      {
        opinion: 'should dismantle bureaucratic control from the centre.',
        antiThesis: 'Bureaucracy can be frustrating, but central rules can ensure fairness, accountability, and consistency.',
      },
      {
        opinion: 'should not become an excuse for the state to abandon poor areas.',
        antiThesis: 'Local responsibility can encourage initiative, accountability, and tailored solutions.',
      },
      {
        opinion: 'should be pursued only where local capacity exists.',
        antiThesis: 'Waiting for capacity can preserve central domination and prevent communities from building competence.',
      },
      {
        opinion: 'should weaken monopolies of political, economic, and digital power.',
        antiThesis: 'Fragmented systems can be inefficient, harder to regulate, and vulnerable to coordination failure.',
      },
      {
        opinion: 'should balance autonomy, equality, coordination, and accountability.',
        antiThesis: 'These goals often conflict because local autonomy can undermine equal standards and national coordination.',
      },
      {
        opinion: 'should be radical, pushing all possible power down to the smallest local communities.',
        antiThesis: 'Pushing all power to tiny units fragments standards and lets wealthy localities opt out of shared obligations, deepening inequality between places.',
      },
      {
        opinion: 'should be pursued where it improves accountability without fragmenting essential services.',
        antiThesis: 'Even selective decentralisation can fragment accountability—when everyone is responsible, often no one is—and duplicate costs.',
      },
      {
        opinion: 'should be resisted where it lets wealthy areas opt out of shared obligations.',
        antiThesis: 'Centralisation can equally let a captured centre serve narrow interests nationwide; the opt-out problem is solved by redistribution rules, not by denying all local power.',
      },
    ],
  },
  {
    category: 'Decentralisation',
    keyword: 'local government',
    data: [
      {
        opinion: 'should control more decisions about housing, transport, schools, and planning.',
        antiThesis: 'Local control can become obstructionist and block housing, infrastructure, or regional needs.',
      },
      {
        opinion: 'should not be trusted with rights that must be universal.',
        antiThesis: 'Universal rights matter, but local government can still adapt delivery without weakening rights.',
      },
      {
        opinion: 'should have real fiscal power, not only administrative tasks.',
        antiThesis: 'Fiscal autonomy can widen inequality between wealthy and poorer regions.',
      },
      {
        opinion: 'should be able to resist national policies that harm local communities.',
        antiThesis: 'Too much local resistance can make national reform impossible.',
      },
      {
        opinion: 'should not become a playground for local elites.',
        antiThesis: 'Elite capture is a risk, but central governments can also be captured by national elites.',
      },
      {
        opinion: 'should make democracy more tangible and participatory.',
        antiThesis: 'Local politics can be dominated by low turnout, clientelism, or highly organised interest groups.',
      },
      {
        opinion: 'should be funded enough to deliver what it promises.',
        antiThesis: 'More local funding may require higher taxes or transfers from the central state.',
      },
      {
        opinion: 'should compete with other regions to attract people and investment.',
        antiThesis: 'Regional competition can create tax races, inequality, and underinvestment in public goods.',
      },
      {
        opinion: 'should cooperate regionally on issues that cross boundaries.',
        antiThesis: 'Regional cooperation is useful, but it can blur accountability and create new bureaucracies.',
      },
      {
        opinion: 'should balance local voice with national responsibility.',
        antiThesis: 'Local voice and national responsibility often conflict when communities reject infrastructure or housing needed by others.',
      },
      {
        opinion: 'should hold primary authority, with the central state reduced to minimal coordination.',
        antiThesis: 'A minimal centre can\'t guarantee equal rights, redistribute between rich and poor regions, or manage shocks that cross local boundaries.',
      },
      {
        opinion: 'should be subordinate, with uniform national standards overriding local variation.',
        antiThesis: 'Rigid national standards ignore genuine local differences and stifle the policy experimentation that produces better solutions.',
      },
    ],
  },
  {
    category: 'Decentralisation',
    keyword: 'federalism',
    data: [
      {
        opinion: 'should protect diversity inside one country.',
        antiThesis: 'Federalism can protect diversity, but it can also entrench divisions and make national policy harder.',
      },
      {
        opinion: 'should be expanded wherever regions have distinct identities.',
        antiThesis: 'Identity matters, but not every distinct region needs constitutional autonomy.',
      },
      {
        opinion: 'should prevent the centre from dominating the periphery.',
        antiThesis: 'Strong regions can also dominate minorities within their own territory.',
      },
      {
        opinion: 'should preserve unity without uniformity.',
        antiThesis: 'Unity without uniformity is attractive, but disagreements over powers and resources may persist.',
      },
      {
        opinion: 'should be rejected when it creates legal inequality between citizens.',
        antiThesis: 'Some legal variation is the price of self-government and local democratic choice.',
      },
      {
        opinion: 'should allow policy experimentation.',
        antiThesis: 'Experimentation can create progress, but people should not lose basic protections because of where they live.',
      },
      {
        opinion: 'should include solidarity transfers between richer and poorer regions.',
        antiThesis: 'Transfers support equality, but wealthier regions may see them as permanent extraction.',
      },
      {
        opinion: 'should allow regions to leave if union becomes coercive.',
        antiThesis: 'Easy exit rights can destabilise countries and weaken long-term investment.',
      },
      {
        opinion: 'should clearly divide powers to avoid conflict.',
        antiThesis: 'Clear divisions help, but modern problems often require overlapping competences.',
      },
      {
        opinion: 'should balance autonomy, unity, diversity, and equal citizenship.',
        antiThesis: 'These values conflict because autonomy often means accepting unequal rules across territories.',
      },
      {
        opinion: 'should be deepened so regions govern almost everything for themselves.',
        antiThesis: 'Maximal regional autonomy can produce a patchwork of incompatible rules and a race to the bottom on standards and taxes.',
      },
      {
        opinion: 'should be limited, because too much regional autonomy weakens national solidarity.',
        antiThesis: 'Suppressing regional autonomy can stoke the very grievances that threaten national unity; federalism often holds diverse states together.',
      },
    ],
  },
  {
    category: 'Decentralisation',
    keyword: 'centralisation',
    data: [
      {
        opinion: 'should be resisted because it concentrates power dangerously.',
        antiThesis: 'Some centralisation is necessary to coordinate crises, protect rights, and deliver universal services.',
      },
      {
        opinion: 'should be defended when national equality is at stake.',
        antiThesis: 'National equality matters, but centralised systems can become insensitive to local conditions.',
      },
      {
        opinion: 'should be used for healthcare, taxation, defence, and rights.',
        antiThesis: 'Central control can make these systems coherent, but it may also become rigid and remote.',
      },
      {
        opinion: 'should be dismantled wherever communities can govern themselves.',
        antiThesis: 'Local self-government is valuable, but not every community has equal resources or expertise.',
      },
      {
        opinion: 'should be temporary during emergencies.',
        antiThesis: 'Emergency centralisation often becomes permanent if institutions do not set sunset clauses.',
      },
      {
        opinion: 'should prevent local discrimination and unequal treatment.',
        antiThesis: 'Central enforcement protects rights, but it can also override legitimate local democratic preferences.',
      },
      {
        opinion: 'should not be confused with competence.',
        antiThesis: 'Central institutions may have expertise and scale that local bodies cannot match.',
      },
      {
        opinion: 'should reduce duplication and administrative waste.',
        antiThesis: 'Efficiency can improve services, but duplication sometimes creates resilience and local adaptation.',
      },
      {
        opinion: 'should be accountable because distant power is hard to challenge.',
        antiThesis: 'Local power can be just as hard to challenge when communities are small or politically captured.',
      },
      {
        opinion: 'should balance scale with responsiveness.',
        antiThesis: 'Scale and responsiveness often pull in opposite directions.',
      },
      {
        opinion: 'should be strengthened, since only a strong central state can guarantee equal rights for all.',
        antiThesis: 'Over-centralisation distances decisions from local knowledge and need, producing one-size-fits-all policy that fits no one well.',
      },
      {
        opinion: 'should be embraced, as fragmented local power produces inequality and confusion.',
        antiThesis: 'Central uniformity can entrench the errors and biases of the centre across the whole country, with no local check or experimentation.',
      },
    ],
  },
  {
    category: 'Decentralisation',
    keyword: 'digital decentralisation',
    data: [
      {
        opinion: 'should free the internet from platform monopolies.',
        antiThesis: 'Decentralised systems can be harder to moderate, govern, and make user-friendly.',
      },
      {
        opinion: 'should protect users from corporate and state surveillance.',
        antiThesis: 'Decentralisation can protect privacy, but it can also enable fraud, abuse, and illegal activity.',
      },
      {
        opinion: 'should give people ownership of their data and identity.',
        antiThesis: 'User ownership sounds empowering, but it can shift security burdens onto individuals.',
      },
      {
        opinion: 'should replace central platforms with peer-to-peer networks.',
        antiThesis: 'Peer-to-peer systems can struggle with scale, discovery, reliability, and accountability.',
      },
      {
        opinion: 'should not be romanticised as automatically democratic.',
        antiThesis: 'Decentralised systems can still concentrate power through wealth, expertise, governance tokens, or infrastructure control.',
      },
      {
        opinion: 'should make censorship harder.',
        antiThesis: 'Making censorship harder can also make harassment, extremism, and harmful content harder to address.',
      },
      {
        opinion: 'should make finance independent from central banks.',
        antiThesis: 'Central banks exist to stabilise currency, manage crises, and protect financial systems.',
      },
      {
        opinion: 'should be regulated where it affects consumers and money.',
        antiThesis: 'Heavy regulation can undermine the very decentralisation that makes these systems distinctive.',
      },
      {
        opinion: 'should prioritise resilience over convenience.',
        antiThesis: 'If systems are too inconvenient, most people will return to centralised platforms.',
      },
      {
        opinion: 'should balance freedom, safety, usability, and accountability.',
        antiThesis: 'These values conflict because decentralised freedom often reduces central responsibility.',
      },
      {
        opinion: 'should replace centralised platforms with networks no single actor controls.',
        antiThesis: 'Decentralised networks can be slower, harder to moderate, and prone to their own concentrations of power among early holders; decentralisation isn\'t automatically fairer.',
      },
    ],
  },
  {
    category: 'Social Media',
    keyword: 'social media',
    data: [
      {
        opinion: 'should be treated as essential public infrastructure.',
        antiThesis: 'Social media is influential, but most platforms are private services with their own rules, costs, and business models.',
      },
      {
        opinion: 'should be regulated like a public utility.',
        antiThesis: 'Utility-style regulation may reduce innovation, flexibility, and the diversity of online spaces.',
      },
      {
        opinion: 'should remain mostly free from government control.',
        antiThesis: 'Without regulation, platforms may amplify harm, exploit data, manipulate attention, or avoid accountability.',
      },
      {
        opinion: 'should be abolished because it is destroying attention, truth, and community.',
        antiThesis: 'Social media can cause harm, but it also enables connection, activism, education, creativity, and small-business growth.',
      },
      {
        opinion: 'should be defended as one of the greatest tools for free expression.',
        antiThesis: 'Expression is expanded, but attention systems can reward outrage, misinformation, harassment, and manipulation.',
      },
      {
        opinion: 'should be redesigned around wellbeing instead of engagement.',
        antiThesis: 'Wellbeing is difficult to define and may become paternalistic if platforms decide what users should see.',
      },
      {
        opinion: 'should be allowed to evolve through market competition.',
        antiThesis: 'Market competition may not protect users when network effects create monopolies or addictive design.',
      },
      {
        opinion: 'should be publicly owned or cooperatively governed.',
        antiThesis: 'Public or cooperative ownership may become bureaucratic, politicised, or less innovative.',
      },
      {
        opinion: 'should be judged by what it does to democracy, children, and mental health.',
        antiThesis: 'These impacts matter, but social media also has economic, cultural, educational, and personal value.',
      },
      {
        opinion: 'should balance expression, safety, privacy, creativity, and accountability.',
        antiThesis: 'These values often conflict because the freest systems are not always the safest or most accountable.',
      },
      {
        opinion: 'should be nationalised and run as public infrastructure free from the profit motive.',
        antiThesis: 'State ownership of the public square is the classic precondition for propaganda and censorship; it concentrates rather than disperses control over speech.',
      },
      {
        opinion: 'should be barred entirely for children to protect a generation from documented harm.',
        antiThesis: 'Age bans are easily evaded, push minors to lie or migrate to worse spaces, and cut them off from legitimate connection, support, and information.',
      },
      {
        opinion: 'should be left wholly to the market, with users free to choose and leave as they wish.',
        antiThesis: 'Pure market dynamics produced the engagement-maximising harms in the first place, and \'users can leave\' understates network lock-in.',
      },
      {
        opinion: 'should face no special regulation, since it is simply a new medium of communication.',
        antiThesis: 'The scale, speed, and algorithmic curation of these platforms differ in kind from older media, so \'just a new medium\' understates the novel harms.',
      },
    ],
  },
  {
    category: 'Social Media',
    keyword: 'algorithms',
    data: [
      {
        opinion: 'should not decide what billions of people see every day.',
        antiThesis: 'Algorithms help people navigate overwhelming amounts of content and discover relevant information.',
      },
      {
        opinion: 'should maximise relevance, personalisation, and discovery.',
        antiThesis: 'Hyper-personalisation can create filter bubbles, addiction, and behavioural manipulation.',
      },
      {
        opinion: 'should be transparent enough for users to understand their feeds.',
        antiThesis: 'Full transparency may help spammers, extremists, and manipulators game the system.',
      },
      {
        opinion: 'should be turned off by default for minors.',
        antiThesis: 'Recommendation systems can also help young people find education, creativity, and supportive communities.',
      },
      {
        opinion: 'should be regulated when they amplify extremism or disinformation.',
        antiThesis: 'Regulation can become hidden censorship if criteria are vague or politically biased.',
      },
      {
        opinion: 'should be user-controlled rather than platform-controlled.',
        antiThesis: 'Most users may not want or understand complex ranking settings.',
      },
      {
        opinion: 'should prioritise trusted information during crises.',
        antiThesis: '“Trusted information” can be contested, especially when institutions have made mistakes or lost public trust.',
      },
      {
        opinion: 'should not optimise for outrage, envy, or addiction.',
        antiThesis: 'Outrage and emotion sometimes reveal real injustice and urgent social problems.',
      },
      {
        opinion: 'should be proprietary because platforms invest in building them.',
        antiThesis: 'Proprietary algorithms can hide manipulation, bias, and public-interest harms.',
      },
      {
        opinion: 'should balance relevance, autonomy, safety, and plural exposure.',
        antiThesis: 'These goals conflict because users often prefer content that is emotionally rewarding rather than socially healthy.',
      },
      {
        opinion: 'should be banned from optimising for engagement, which deliberately exploits human weakness.',
        antiThesis: '\'Engagement\' is hard to define in law without banning useful relevance ranking, and a blanket prohibition could make platforms unusable and entrench the largest players.',
      },
      {
        opinion: 'should be free to rank content however firms choose, as users consent by using them.',
        antiThesis: 'Unfettered ranking for profit has amplified harmful and false content at scale; \'users consent by using\' ignores designed compulsion and lock-in.',
      },
    ],
  },
  {
    category: 'Social Media',
    keyword: 'free speech',
    data: [
      {
        opinion: 'should be nearly absolute on social media.',
        antiThesis: 'Absolute speech can enable threats, harassment, abuse, scams, extremist recruitment, and targeted intimidation.',
      },
      {
        opinion: 'should protect offensive, unpopular, and controversial views.',
        antiThesis: 'Offensive speech may be protected, but targeted abuse can silence vulnerable people.',
      },
      {
        opinion: 'should not force private platforms to host every opinion.',
        antiThesis: 'Large platforms function like public squares, so exclusion can meaningfully restrict participation.',
      },
      {
        opinion: 'should include the right to criticise governments, corporations, and movements.',
        antiThesis: 'Criticism is essential, but defamation, doxxing, and threats still require limits.',
      },
      {
        opinion: 'should not be weakened by vague misinformation labels.',
        antiThesis: 'Misinformation can cause real harm when it affects elections, public health, or violence.',
      },
      {
        opinion: 'should be balanced with protection from harassment.',
        antiThesis: 'Harassment must be defined carefully so robust criticism is not punished.',
      },
      {
        opinion: 'should include anonymity.',
        antiThesis: 'Anonymity can also enable abuse, fraud, impersonation, and coordinated manipulation.',
      },
      {
        opinion: 'should not protect coordinated intimidation campaigns.',
        antiThesis: 'Coordination is difficult to prove and can also describe legitimate activism or protest.',
      },
      {
        opinion: 'should be defended against both state and corporate censorship.',
        antiThesis: 'Platforms and states still need tools to address illegal and harmful conduct.',
      },
      {
        opinion: 'should balance dissent, safety, truth, and dignity.',
        antiThesis: 'These values often conflict because one group’s dissent may feel like another group’s dehumanisation.',
      },
      {
        opinion: 'should be protected on platforms through clear rules and independent appeals.',
        antiThesis: 'Clear rules and appeals at platform scale are slow and costly, and any rule set still encodes contestable judgments about what stays up.',
      },
      {
        opinion: 'should be near-absolute online, with platforms barred from removing lawful speech.',
        antiThesis: 'Forcing platforms to host all lawful speech makes them unusable—spam, harassment, and gore are often lawful—and overrides their own expression rights.',
      },
    ],
  },
  {
    category: 'Social Media',
    keyword: 'mental health',
    data: [
      {
        opinion: 'should be central to how social media is designed.',
        antiThesis: 'Mental health matters, but platforms cannot be responsible for every psychological outcome.',
      },
      {
        opinion: 'should not be sacrificed for advertising revenue.',
        antiThesis: 'Advertising revenue funds free access, creator monetisation, and platform infrastructure.',
      },
      {
        opinion: 'should be protected through limits on addictive design.',
        antiThesis: '“Addictive design” can be hard to define and may restrict features users genuinely enjoy.',
      },
      {
        opinion: 'should not be used as an excuse for censorship.',
        antiThesis: 'Psychological harm can be real, especially from harassment, self-harm content, or targeted abuse.',
      },
      {
        opinion: 'should be supported by giving users more control over time, feeds, and notifications.',
        antiThesis: 'User controls may not be enough when platform design is built to overcome self-control.',
      },
      {
        opinion: 'should be protected by banning social media for children.',
        antiThesis: 'Bans may reduce exposure, but they can also isolate young people and be hard to enforce.',
      },
      {
        opinion: 'should not be blamed only on social media.',
        antiThesis: 'Social media is not the only cause, but it can intensify comparison, loneliness, anxiety, and social pressure.',
      },
      {
        opinion: 'should be improved by making online life slower and less quantified.',
        antiThesis: 'Metrics can motivate creators, help users navigate relevance, and support businesses.',
      },
      {
        opinion: 'should include protection from body-image and status-comparison content.',
        antiThesis: 'Overprotection can restrict expression, fashion, fitness, beauty, and ordinary aspiration.',
      },
      {
        opinion: 'should balance autonomy, protection, expression, and responsibility.',
        antiThesis: 'These values conflict because harmful use often happens through features people freely choose.',
      },
      {
        opinion: 'should override growth, with platforms forced to redesign around wellbeing by law.',
        antiThesis: 'The evidence linking platform design to harm is real but contested and varies by user; mandating one \'wellbeing\' design risks paternalism and unintended effects.',
      },
      {
        opinion: 'should remain a personal and family responsibility, not a burden placed on platforms.',
        antiThesis: 'When products are engineered to maximise compulsive use, placing all responsibility on families ignores the asymmetry of resources and design intent.',
      },
    ],
  },
  {
    category: 'Social Media',
    keyword: 'creators',
    data: [
      {
        opinion: 'should be fairly paid when platforms profit from their content.',
        antiThesis: 'Platforms also provide hosting, tools, distribution, payments, moderation, and audience access.',
      },
      {
        opinion: 'should not have to become personal brands to survive.',
        antiThesis: 'Personal branding can help creators build independence, recognition, and income.',
      },
      {
        opinion: 'should own their audiences instead of being dependent on platforms.',
        antiThesis: 'Platforms build the networks, discovery systems, and social graphs where audiences gather.',
      },
      {
        opinion: 'should accept that algorithms reward consistency and audience demand.',
        antiThesis: 'Algorithmic demand can pressure creators into burnout, imitation, and shallow engagement.',
      },
      {
        opinion: 'should be protected from harassment, impersonation, and content theft.',
        antiThesis: 'Strong protection systems can be abused to silence criticism, parody, or fair use.',
      },
      {
        opinion: 'should not be rewarded only for virality.',
        antiThesis: 'Virality allows unknown creators to break through without traditional gatekeepers.',
      },
      {
        opinion: 'should disclose sponsorships and AI-generated content.',
        antiThesis: 'Disclosure rules can become burdensome for small creators and hard to apply to hybrid content.',
      },
      {
        opinion: 'should be free to monetise attention without moral judgement.',
        antiThesis: 'Monetising attention can incentivise outrage, exaggeration, parasocial manipulation, or misinformation.',
      },
      {
        opinion: 'should not be turned into unpaid moderators of their communities.',
        antiThesis: 'Community moderation is often necessary to keep creator spaces safe and functional.',
      },
      {
        opinion: 'should balance authenticity, income, responsibility, and audience trust.',
        antiThesis: 'These goals conflict because what earns income may not always build trust or responsibility.',
      },
    ],
  },
  {
    category: 'Influence',
    keyword: 'influence',
    data: [
      {
        opinion: 'should be earned through trust, not engineered through manipulation.',
        antiThesis: 'Influence always involves strategy, framing, timing, and persuasion, even when it is ethical.',
      },
      {
        opinion: 'should be treated as a form of power.',
        antiThesis: 'Influence is power, but not all power is coercive or harmful.',
      },
      {
        opinion: 'should be democratised so ordinary people can shape culture.',
        antiThesis: 'Democratised influence can also amplify misinformation, outrage, and low-quality attention.',
      },
      {
        opinion: 'should be restricted when it exploits psychological vulnerability.',
        antiThesis: 'Restricting persuasion too broadly can limit advertising, politics, art, education, and public advocacy.',
      },
      {
        opinion: 'should be celebrated as leadership when it moves people toward better choices.',
        antiThesis: '“Better choices” is subjective and can become paternalistic.',
      },
      {
        opinion: 'should be rejected because nobody should shape another person’s desires.',
        antiThesis: 'Human life is built on mutual influence through family, friendship, education, culture, and politics.',
      },
      {
        opinion: 'should be monetised freely by anyone who can build attention.',
        antiThesis: 'Monetised influence can create conflicts of interest, hidden advertising, and manipulation.',
      },
      {
        opinion: 'should be transparent whenever money, politics, or institutional interests are involved.',
        antiThesis: 'Full transparency can be burdensome and may not eliminate subtle forms of persuasion.',
      },
      {
        opinion: 'should not be confused with truth.',
        antiThesis: 'Truth often needs influence to become visible, persuasive, and socially effective.',
      },
      {
        opinion: 'should balance persuasion, honesty, responsibility, and freedom.',
        antiThesis: 'These values often conflict because effective persuasion often simplifies, emotionalises, or edits reality.',
      },
      {
        opinion: 'should be democratised so that reach no longer depends on wealth or connection.',
        antiThesis: 'Reach also reflects talent, effort, and resonance, not just wealth; engineering equal reach would require controlling speech in ways incompatible with a free press.',
      },
      {
        opinion: 'should flow naturally to those who earn attention, with no attempt to equalise it.',
        antiThesis: 'Attention is also bought and algorithmically amplified, not purely earned; treating reach as pure merit ignores how it is manufactured.',
      },
    ],
  },
  {
    category: 'Influence',
    keyword: 'influencers',
    data: [
      {
        opinion: 'should be treated as media companies, not just individuals.',
        antiThesis: 'Many influencers are small independent creators and cannot meet the same compliance burden as media companies.',
      },
      {
        opinion: 'should disclose every paid relationship clearly.',
        antiThesis: 'Disclosure is important, but audiences may ignore it or still be influenced by parasocial trust.',
      },
      {
        opinion: 'should be free to monetise their audiences without moral judgement.',
        antiThesis: 'Monetisation can exploit intimacy, insecurity, aspiration, or young audiences.',
      },
      {
        opinion: 'should not sell products they do not genuinely believe in.',
        antiThesis: 'Genuine belief is hard to verify and does not guarantee that a product is good or safe.',
      },
      {
        opinion: 'should be held responsible when they promote harmful products or false claims.',
        antiThesis: 'Excessive liability can discourage small creators from partnerships or public speech.',
      },
      {
        opinion: 'should not exist because they turn personality into advertising.',
        antiThesis: 'Influencers can also educate, entertain, build community, and support independent brands.',
      },
      {
        opinion: 'should be protected as independent workers in the digital economy.',
        antiThesis: 'Influencers can also act as businesses with responsibilities toward audiences and sponsors.',
      },
      {
        opinion: 'should not be role models by default.',
        antiThesis: 'People with large audiences inevitably shape norms, especially for younger followers.',
      },
      {
        opinion: 'should be regulated more strictly when their audiences are children.',
        antiThesis: 'Strong regulation may reduce youth-targeted harm, but it can also limit educational or creative content.',
      },
      {
        opinion: 'should balance authenticity, income, transparency, and audience care.',
        antiThesis: 'These goals conflict when the most profitable content is not the most honest or responsible.',
      },
      {
        opinion: 'should be regulated like advertisers, with every paid message clearly disclosed by law.',
        antiThesis: 'Disclosure rules are sensible but hard to enforce across millions of posts, and over-broad rules can sweep ordinary opinion in as covert advertising.',
      },
      {
        opinion: 'should be free to promote whatever they wish, as audiences can judge for themselves.',
        antiThesis: 'Audiences can\'t judge undisclosed paid promotion of unsafe products; \'buyer beware\' fails where information is hidden or the audience is young.',
      },
    ],
  },
  {
    category: 'Influence',
    keyword: 'persuasion',
    data: [
      {
        opinion: 'should be honest, reversible, and open to questioning.',
        antiThesis: 'Persuasion often works because it creates conviction, emotion, and momentum, not constant doubt.',
      },
      {
        opinion: 'should be used to mobilise people for justice.',
        antiThesis: 'Mobilisation can create positive change, but it can also oversimplify, polarise, or pressure conformity.',
      },
      {
        opinion: 'should be treated as manipulation when it hides its intent.',
        antiThesis: 'Not all persuasive intent is explicit; art, storytelling, and social norms often persuade indirectly.',
      },
      {
        opinion: 'should be protected as free expression.',
        antiThesis: 'Free expression does not protect fraud, coercion, deception, or targeted exploitation.',
      },
      {
        opinion: 'should be limited in advertising, politics, and algorithmic feeds.',
        antiThesis: 'Limits may become censorship or protect established voices from challengers.',
      },
      {
        opinion: 'should be taught as a skill everyone can use.',
        antiThesis: 'Teaching persuasion can empower people, but it can also train more effective manipulators.',
      },
      {
        opinion: 'should not exploit fear, shame, loneliness, or desire.',
        antiThesis: 'Fear, shame, loneliness, and desire are real human emotions that communication often needs to address.',
      },
      {
        opinion: 'should be judged by outcomes, not methods.',
        antiThesis: 'Good outcomes do not automatically justify deceptive or coercive methods.',
      },
      {
        opinion: 'should not be sanitised because emotion is part of human truth.',
        antiThesis: 'Emotion can reveal truth, but it can also bypass reason and accountability.',
      },
      {
        opinion: 'should balance emotion, evidence, consent, and responsibility.',
        antiThesis: 'These values conflict because the most emotionally effective message may not be the most evidence-rich.',
      },
      {
        opinion: 'should be constrained where it exploits psychological weakness for profit or power.',
        antiThesis: '\'Exploiting weakness\' has no clear legal boundary, and since most persuasion appeals to emotion, the rule risks criminalising ordinary communication.',
      },
      {
        opinion: 'should never be regulated, because the line between persuasion and manipulation is arbitrary.',
        antiThesis: 'The line is fuzzy but not meaningless; law already separates fraud and deceptive marketing from legitimate persuasion, and abandoning that protects con artists.',
      },
    ],
  },
  {
    category: 'Influence',
    keyword: 'political influence',
    data: [
      {
        opinion: 'should be transparent wherever money enters democracy.',
        antiThesis: 'Transparency helps, but money can still influence politics indirectly through networks, media, and status.',
      },
      {
        opinion: 'should be limited so wealthy actors cannot buy policy.',
        antiThesis: 'Limits can reduce capture, but citizens and organisations also have rights to advocate for interests.',
      },
      {
        opinion: 'should be open to everyone, including corporations and unions.',
        antiThesis: 'Formal openness does not create equal power when some groups have vastly more money and access.',
      },
      {
        opinion: 'should be protected as democratic participation.',
        antiThesis: 'Participation matters, but lobbying, donations, and media control can distort equal citizenship.',
      },
      {
        opinion: 'should not be concentrated in media owners, donors, or platform algorithms.',
        antiThesis: 'Influence will always concentrate around people or institutions with credibility, reach, or resources.',
      },
      {
        opinion: 'should be restricted for foreign states and hostile actors.',
        antiThesis: 'Foreign influence restrictions can be misused to silence diaspora groups, NGOs, or international solidarity.',
      },
      {
        opinion: 'should be based on evidence and public interest, not emotional manipulation.',
        antiThesis: 'Politics also involves values, identity, emotion, and moral imagination.',
      },
      {
        opinion: 'should be decentralised through citizen assemblies and participatory processes.',
        antiThesis: 'Participatory processes can be slow, unrepresentative, or dominated by organised voices.',
      },
      {
        opinion: 'should never be hidden behind think tanks or front groups.',
        antiThesis: 'Some donors may need privacy to avoid harassment, retaliation, or political intimidation.',
      },
      {
        opinion: 'should balance advocacy, equality, transparency, and freedom of association.',
        antiThesis: 'These goals conflict because transparency can chill association, while secrecy can enable capture.',
      },
      {
        opinion: 'should be capped strictly, with money removed from politics as far as possible.',
        antiThesis: 'Spending on political speech is widely protected as expression; hard caps can entrench incumbents and push money into opaque channels rather than removing it.',
      },
      {
        opinion: 'should be unrestricted, since spending on speech is itself protected expression.',
        antiThesis: 'Unlimited spending lets the wealthiest dominate the megaphone and drown out others; treating money as speech can hollow out political equality.',
      },
      {
        opinion: 'should be open to all who wish to fund causes, as restricting it silences speech.',
        antiThesis: 'Open funding favours those with the most to give, converting wealth into political power and undermining one-person-one-vote in practice.',
      },
    ],
  },
  {
    category: 'Influence',
    keyword: 'social influence',
    data: [
      {
        opinion: 'should help people belong without forcing conformity.',
        antiThesis: 'Belonging often requires shared norms, and total non-conformity can weaken community.',
      },
      {
        opinion: 'should be resisted because it makes people perform identities they do not choose.',
        antiThesis: 'Social influence can also teach empathy, manners, cooperation, and cultural continuity.',
      },
      {
        opinion: 'should preserve tradition and moral order.',
        antiThesis: 'Tradition can provide stability, but it can also enforce hierarchy and punish difference.',
      },
      {
        opinion: 'should challenge oppressive norms.',
        antiThesis: 'Challenging norms can liberate people, but it can also create new forms of pressure and orthodoxy.',
      },
      {
        opinion: 'should not turn every personal choice into a political signal.',
        antiThesis: 'Personal choices often have social meaning whether people intend them politically or not.',
      },
      {
        opinion: 'should be used to make harmful behaviour socially unacceptable.',
        antiThesis: 'Social shame can reduce harm, but it can also become cruel, classist, or exclusionary.',
      },
      {
        opinion: 'should allow people to change without being trapped by past identities.',
        antiThesis: 'Memory and accountability still matter when past actions harmed others.',
      },
      {
        opinion: 'should not be outsourced to algorithms.',
        antiThesis: 'Algorithms can help people discover communities, ideas, and support they would not otherwise find.',
      },
      {
        opinion: 'should be understood as unavoidable, not automatically bad.',
        antiThesis: 'Influence is unavoidable, but that makes ethical limits even more important.',
      },
      {
        opinion: 'should balance belonging, freedom, responsibility, and dissent.',
        antiThesis: 'These values often conflict because belonging usually depends on shared expectations.',
      },
      {
        opinion: 'should be studied and taught so citizens can resist manipulation.',
        antiThesis: 'Education helps but is slow and uneven, and sophisticated manipulation often defeats awareness; literacy alone won\'t neutralise well-funded influence operations.',
      },
    ],
  },
  {
    category: 'Body-surveillance',
    keyword: 'body-surveillance',
    data: [
      {
        opinion: 'should be rejected because the body should never become a monitored object.',
        antiThesis: 'Some bodily monitoring can improve health, safety, accessibility, and emergency response.',
      },
      {
        opinion: 'should be used when it prevents disease, injury, or death.',
        antiThesis: 'Prevention is valuable, but constant monitoring can normalise control and anxiety.',
      },
      {
        opinion: 'should be treated as a new form of bodily control.',
        antiThesis: 'Surveillance can control bodies, but it can also help people understand and care for their bodies.',
      },
      {
        opinion: 'should be expanded through wearables and sensors to optimise health.',
        antiThesis: 'Health optimisation can become obsession, self-policing, or data extraction.',
      },
      {
        opinion: 'should never be imposed by employers, insurers, or governments.',
        antiThesis: 'Some institutions may need limited health or safety data in high-risk contexts.',
      },
      {
        opinion: 'should be mandatory where one person’s body can endanger others.',
        antiThesis: 'Mandatory monitoring can violate privacy, bodily autonomy, and trust.',
      },
      {
        opinion: 'should expose how capitalism turns bodies into data.',
        antiThesis: 'Data markets can exploit bodies, but body data can also support medicine, research, and personalised care.',
      },
      {
        opinion: 'should be chosen freely by individuals seeking self-knowledge.',
        antiThesis: '“Free choice” can be shaped by social pressure, workplace demands, or health anxiety.',
      },
      {
        opinion: 'should be banned unless medically necessary.',
        antiThesis: 'A strict ban could block useful tools for fitness, disability support, elderly care, and preventive health.',
      },
      {
        opinion: 'should balance autonomy, health, privacy, safety, and consent.',
        antiThesis: 'These values often conflict because the same data can empower individuals and control them.',
      },
      {
        opinion: 'should be banned outright as an intolerable intrusion into the most private sphere.',
        antiThesis: 'A total ban would also block the consented medical monitoring that saves lives; the issue is control and consent, not the existence of the technology.',
      },
      {
        opinion: 'should be permitted under strict consent and oversight where it genuinely improves health.',
        antiThesis: 'Even \'consented\' health monitoring can become de facto compulsory—pushed by employers or insurers—turning a health tool into a control mechanism.',
      },
      {
        opinion: 'should be accepted as the natural extension of medicine into daily prevention.',
        antiThesis: 'Framing constant monitoring as natural normalises a level of bodily oversight that can be coerced and is hard to undo once embedded.',
      },
    ],
  },
  {
    category: 'Body-surveillance',
    keyword: 'health data',
    data: [
      {
        opinion: 'should belong entirely to the person whose body produced it.',
        antiThesis: 'Health data often gains value through clinical interpretation, aggregation, and research infrastructure.',
      },
      {
        opinion: 'should be shared for research when it can save lives.',
        antiThesis: 'Research value matters, but anonymised health data can still create privacy and discrimination risks.',
      },
      {
        opinion: 'should never be sold for profit.',
        antiThesis: 'Commercial use can fund drug discovery, diagnostics, devices, and personalised medicine.',
      },
      {
        opinion: 'should be portable between doctors, hospitals, and patients.',
        antiThesis: 'Portability improves care, but it also increases cybersecurity and misuse risks.',
      },
      {
        opinion: 'should not be used by insurers to punish unhealthy bodies.',
        antiThesis: 'Insurers argue risk data is central to pricing, prevention, and financial sustainability.',
      },
      {
        opinion: 'should be used to reward healthy behaviour.',
        antiThesis: 'Rewards can become penalties for people with illness, disability, poverty, or limited choices.',
      },
      {
        opinion: 'should be protected more strictly than ordinary personal data.',
        antiThesis: 'Strong protections are needed, but overrestriction can slow care coordination and research.',
      },
      {
        opinion: 'should be available to public-health authorities during crises.',
        antiThesis: 'Crisis access can become permanent expansion of state data power.',
      },
      {
        opinion: 'should not reduce people to risk scores.',
        antiThesis: 'Risk scores can help detect disease, allocate care, and prevent harm when used carefully.',
      },
      {
        opinion: 'should balance individual control with collective medical benefit.',
        antiThesis: 'This balance is difficult because privacy and research benefit often pull in opposite directions.',
      },
      {
        opinion: 'should belong solely to the individual and never be shared without explicit consent.',
        antiThesis: 'Strict individual control can block the de-identified aggregate data behind medical breakthroughs and outbreak detection that benefit everyone.',
      },
      {
        opinion: 'should flow more freely to researchers, since open data accelerates medical progress.',
        antiThesis: 'Free flow without strict safeguards exposes the most intimate data to breach, discrimination, and re-identification; consent and limits are what sustain public trust.',
      },
    ],
  },
  {
    category: 'Body-surveillance',
    keyword: 'wearables',
    data: [
      {
        opinion: 'should help people know their bodies better.',
        antiThesis: 'Wearables can inform people, but they can also create anxiety and dependence on metrics.',
      },
      {
        opinion: 'should not turn every heartbeat, step, or calorie into a performance score.',
        antiThesis: 'Metrics can motivate healthier habits and make progress visible.',
      },
      {
        opinion: 'should be used aggressively to prevent disease before symptoms appear.',
        antiThesis: 'Early detection can help, but false alarms and overdiagnosis can create harm.',
      },
      {
        opinion: 'should be treated as surveillance devices, not neutral accessories.',
        antiThesis: 'They can surveil, but they can also support autonomy, safety, fitness, and chronic-care management.',
      },
      {
        opinion: 'should be required in high-risk jobs for safety monitoring.',
        antiThesis: 'Safety monitoring can easily become productivity surveillance or disciplinary control.',
      },
      {
        opinion: 'should never be required by employers.',
        antiThesis: 'Some jobs may involve real physical risk where monitoring could prevent injury or death.',
      },
      {
        opinion: 'should be designed with strict privacy by default.',
        antiThesis: 'Strict defaults may limit personalisation, emergency features, or useful health insights.',
      },
      {
        opinion: 'should make fitness more measurable and accountable.',
        antiThesis: 'Accountability can become body shame, comparison, or compulsive self-tracking.',
      },
      {
        opinion: 'should not replace listening to the body.',
        antiThesis: 'Body intuition matters, but subjective feelings can miss silent health risks.',
      },
      {
        opinion: 'should balance insight, privacy, wellbeing, and non-obsession.',
        antiThesis: 'These values conflict because more insight often requires more tracking.',
      },
      {
        opinion: 'should be regulated tightly so that intimate data can never be sold or used against people.',
        antiThesis: 'Tight rules are reasonable, but \'never used\' can foreclose the consented research and personalised care that wearable data enables.',
      },
      {
        opinion: 'should be free to collect and use data that users agree to share for better services.',
        antiThesis: '\'Agreed\' via dense terms isn\'t meaningful consent, and intimate health data can be turned against users by insurers and employers.',
      },
    ],
  },
  {
    category: 'Body-surveillance',
    keyword: 'biometric control',
    data: [
      {
        opinion: 'should be banned from ordinary public life.',
        antiThesis: 'Biometrics can improve security, accessibility, and fraud prevention when limited and regulated.',
      },
      {
        opinion: 'should be used for borders, airports, and high-security spaces.',
        antiThesis: 'Security uses can normalise mass identification and create errors, profiling, or exclusion.',
      },
      {
        opinion: 'should never replace consent.',
        antiThesis: 'Some security and safety contexts do not rely entirely on individual consent.',
      },
      {
        opinion: 'should make identity verification faster and safer.',
        antiThesis: 'Efficiency can come at the cost of privacy, anonymity, and freedom of movement.',
      },
      {
        opinion: 'should be treated as ownership over the face, voice, fingerprints, and body.',
        antiThesis: 'Treating biometrics as property may not fully protect dignity or prevent coercive collection.',
      },
      {
        opinion: 'should be rejected because the body cannot be reset like a password.',
        antiThesis: 'Irreversibility is serious, but strong systems can reduce fraud and identity theft.',
      },
      {
        opinion: 'should be allowed only with strict law and independent oversight.',
        antiThesis: 'Oversight helps, but technical systems can still produce errors and mission creep.',
      },
      {
        opinion: 'should be expanded to prevent crime.',
        antiThesis: 'Expanding biometric policing can disproportionately affect marginalised groups and chill public life.',
      },
      {
        opinion: 'should not be used to predict behaviour or emotion.',
        antiThesis: 'Some argue behavioural signals can support safety in limited, high-risk contexts.',
      },
      {
        opinion: 'should balance security, dignity, accuracy, and freedom from profiling.',
        antiThesis: 'These values conflict because stronger identification often reduces anonymity.',
      },
      {
        opinion: 'should be prohibited entirely, with no body used as a key without free choice.',
        antiThesis: 'Biometrics also secure devices and prevent fraud and identity theft; a blanket ban removes protections people value rather than just the coercive uses.',
      },
      {
        opinion: 'should be embraced for security and convenience, as the body is the most reliable key.',
        antiThesis: 'Biometrics, once compromised, can\'t be reset like a password; building society around them creates permanent, irrevocable vulnerability and surveillance.',
      },
    ],
  },
  {
    category: 'Body-surveillance',
    keyword: 'reproductive surveillance',
    data: [
      {
        opinion: 'should be rejected because reproductive bodies must remain private.',
        antiThesis: 'Some reproductive health data can be necessary for medical care, safeguarding, and maternal health.',
      },
      {
        opinion: 'should never be used to police pregnancy, abortion, fertility, or sexuality.',
        antiThesis: 'States with restrictive moral or legal frameworks may claim authority over reproductive conduct.',
      },
      {
        opinion: 'should be used to protect maternal and infant health.',
        antiThesis: 'Health protection can become coercive when monitoring turns into punishment or control.',
      },
      {
        opinion: 'should be treated as patriarchal control over women’s bodies.',
        antiThesis: 'Reproductive surveillance can be patriarchal, but some monitoring is voluntarily chosen for care and safety.',
      },
      {
        opinion: 'should not be hidden inside period apps or fertility platforms.',
        antiThesis: 'Apps can provide useful knowledge, but they must be transparent about data use and risk.',
      },
      {
        opinion: 'should be allowed when protecting unborn life is the priority.',
        antiThesis: 'Prioritising unborn life through surveillance can violate autonomy, privacy, and medical trust.',
      },
      {
        opinion: 'should protect patients from intimate data extraction.',
        antiThesis: 'Some reproductive data can improve diagnosis, fertility care, and personalised treatment.',
      },
      {
        opinion: 'should be impossible without explicit informed consent.',
        antiThesis: 'Consent may be difficult in emergencies, public-health contexts, or dependent-care situations.',
      },
      {
        opinion: 'should include strong deletion rights.',
        antiThesis: 'Some medical records must be retained for safety, continuity of care, or legal compliance.',
      },
      {
        opinion: 'should balance care, autonomy, privacy, medical need, and freedom from coercion.',
        antiThesis: 'These values conflict because reproductive care often involves intimate data, legal risk, and moral disagreement.',
      },
      {
        opinion: 'should be outlawed completely as a grave violation of bodily autonomy.',
        antiThesis: 'The principle is strong, but some reproductive health data collection is consented and clinically vital; the target should be coercive use, not all monitoring.',
      },
    ],
  },
  {
    category: 'Longevity',
    keyword: 'longevity',
    data: [
      {
        opinion: 'should be pursued as one of humanity’s greatest scientific goals.',
        antiThesis: 'Extending life is inspiring, but it may distract from improving the quality of lives people already have.',
      },
      {
        opinion: 'should focus on healthspan, not endless lifespan.',
        antiThesis: 'Healthspan matters, but many people would still value more time even with some decline.',
      },
      {
        opinion: 'should be rejected when it becomes fear of death disguised as innovation.',
        antiThesis: 'Fear of death may play a role, but reducing suffering and disease is still a legitimate medical aim.',
      },
      {
        opinion: 'should be available to everyone, not only the rich.',
        antiThesis: 'Universal access is ideal, but early technologies often begin expensive before becoming cheaper.',
      },
      {
        opinion: 'should be driven by private biotech because markets accelerate discovery.',
        antiThesis: 'Markets may prioritise profitable anti-ageing treatments over basic healthcare and neglected diseases.',
      },
      {
        opinion: 'should be publicly funded as preventive medicine.',
        antiThesis: 'Public funds are limited and may be needed first for urgent care, poverty, housing, and existing disease.',
      },
      {
        opinion: 'should not become immortality for billionaires.',
        antiThesis: 'Wealthy early adopters may fund the research that later benefits wider society.',
      },
      {
        opinion: 'should be limited because death gives life meaning.',
        antiThesis: 'Meaning can coexist with longer life; more time can deepen love, knowledge, care, and contribution.',
      },
      {
        opinion: 'should be radically accelerated to defeat ageing as a disease.',
        antiThesis: 'Treating ageing as a disease can pathologise normal life and create unrealistic expectations.',
      },
      {
        opinion: 'should balance longer life, dignity, fairness, ecology, and meaning.',
        antiThesis: 'These values often conflict because extending life can raise questions about resources, inequality, and social renewal.',
      },
      {
        opinion: 'should be a universal public right, with life-extension freely available to everyone.',
        antiThesis: 'Guaranteeing unproven, costly life-extension as a universal entitlement is fiscally fantastical and would, in reality, reach the wealthy first.',
      },
      {
        opinion: 'should be advanced carefully so that benefits reach all and do not deepen inequality.',
        antiThesis: 'Equitable access is easy to promise and hard to deliver; first-mover advantage in expensive therapies almost always tracks wealth despite good intentions.',
      },
      {
        opinion: 'should be left to private medicine, with no public duty to fund radical life-extension.',
        antiThesis: 'Leaving it purely private guarantees a biological divide where the rich live far longer, which is exactly the inequality that destabilises societies.',
      },
    ],
  },
  {
    category: 'Longevity',
    keyword: 'ageing',
    data: [
      {
        opinion: 'should be treated as a biological problem to solve.',
        antiThesis: 'Ageing is biological, but it is also existential, social, cultural, and personal.',
      },
      {
        opinion: 'should be accepted as a natural part of human life.',
        antiThesis: 'Natural does not always mean desirable; disease, pain, and decline are also natural.',
      },
      {
        opinion: 'should not be romanticised when it brings suffering.',
        antiThesis: 'Suffering should be reduced, but not every sign of ageing is tragedy or failure.',
      },
      {
        opinion: 'should be honoured through wisdom, memory, and intergenerational care.',
        antiThesis: 'Honour is meaningful, but symbolic respect does not solve illness, loneliness, or lack of care.',
      },
      {
        opinion: 'should be slowed through medicine, nutrition, exercise, and prevention.',
        antiThesis: 'Prevention is useful, but it can become moral pressure on people with illness, poverty, or disability.',
      },
      {
        opinion: 'should not define someone’s ambition, sexuality, or social value.',
        antiThesis: 'Age should not erase dignity, but bodies, capacities, and priorities may change over time.',
      },
      {
        opinion: 'should be fought as an injustice.',
        antiThesis: 'Calling ageing injustice may make mortality feel like personal or political failure.',
      },
      {
        opinion: 'should not be turned into a consumer insecurity.',
        antiThesis: 'Anti-ageing markets can exploit fear, but people may freely choose treatments that help them feel better.',
      },
      {
        opinion: 'should be studied without stigma or denial.',
        antiThesis: 'Scientific study matters, but society also needs cultural acceptance of visible ageing.',
      },
      {
        opinion: 'should balance acceptance, prevention, care, and scientific ambition.',
        antiThesis: 'These goals conflict because accepting ageing and fighting ageing can imply opposite moral attitudes.',
      },
      {
        opinion: 'should be classified as a disease and attacked with the full force of medical science.',
        antiThesis: 'Medicalising ageing risks over-treatment and pathologises normal life; the disease classification is scientifically contested and carries real downsides.',
      },
      {
        opinion: 'should be accepted as natural, with resources spent on living well rather than living longer.',
        antiThesis: 'The two aren\'t opposed: much longevity research targets healthy years through compression of morbidity, which is precisely \'living well.\'',
      },
    ],
  },
  {
    category: 'Longevity',
    keyword: 'medicine',
    data: [
      {
        opinion: 'should extend healthy life as much as possible.',
        antiThesis: 'Medicine should improve life, but unlimited extension may strain systems and shift attention from care to optimisation.',
      },
      {
        opinion: 'should prioritise curing diseases before extending already healthy lives.',
        antiThesis: 'Disease treatment and longevity research can overlap because ageing increases disease risk.',
      },
      {
        opinion: 'should treat ageing-related decline as preventable where possible.',
        antiThesis: 'Prevention is valuable, but not all decline can or should be medicalised.',
      },
      {
        opinion: 'should not promise eternal youth.',
        antiThesis: 'Avoiding hype is important, but ambitious research can still produce major breakthroughs.',
      },
      {
        opinion: 'should make longevity safer before making it desirable.',
        antiThesis: 'Safety is essential, but waiting for perfect certainty can delay useful therapies.',
      },
      {
        opinion: 'should be allowed to enhance bodies beyond normal ageing.',
        antiThesis: 'Enhancement can deepen inequality and create pressure to remain young and productive.',
      },
      {
        opinion: 'should protect people from fraudulent anti-ageing claims.',
        antiThesis: 'Regulation protects consumers, but overly strict rules can limit experimentation and access.',
      },
      {
        opinion: 'should include palliative care as much as life extension.',
        antiThesis: 'Palliative care is essential, but it should not be used to dismiss people who want more time.',
      },
      {
        opinion: 'should be democratically accountable when it changes the meaning of lifespan.',
        antiThesis: 'Democratic debate matters, but medical innovation also needs expertise and scientific freedom.',
      },
      {
        opinion: 'should balance cure, care, enhancement, safety, and access.',
        antiThesis: 'These values conflict because the most innovative treatments are often expensive and uncertain.',
      },
      {
        opinion: 'should be reoriented entirely toward defeating ageing rather than merely treating disease.',
        antiThesis: 'Abandoning the disease focus would leave today\'s patients untreated for a long-shot bet; ageing research can advance without deprioritising present suffering.',
      },
      {
        opinion: 'should prioritise the diseases of the many over the longevity dreams of the few.',
        antiThesis: 'Foundational longevity science often yields broad benefits against age-related disease, so treating it as a niche luxury misreads where the payoffs lie.',
      },
    ],
  },
  {
    category: 'Longevity',
    keyword: 'immortality',
    data: [
      {
        opinion: 'should be humanity’s ultimate technological ambition.',
        antiThesis: 'Immortality could create severe problems of inequality, stagnation, resources, and psychological burden.',
      },
      {
        opinion: 'should be rejected because mortality is essential to being human.',
        antiThesis: 'Mortality may shape human life, but reducing involuntary death has always been part of medicine.',
      },
      {
        opinion: 'should be available only if everyone can access it.',
        antiThesis: 'Requiring universal access before development may prevent the technology from emerging at all.',
      },
      {
        opinion: 'should never be controlled by corporations.',
        antiThesis: 'Corporations may have the resources, labs, and incentives to develop complex therapies.',
      },
      {
        opinion: 'should be pursued even if society is not ready.',
        antiThesis: 'Technology without social readiness can destabilise ethics, law, family, work, and politics.',
      },
      {
        opinion: 'should be banned before it creates permanent ruling elites.',
        antiThesis: 'Banning research may also block therapies that could prevent suffering for ordinary people.',
      },
      {
        opinion: 'should remain a personal choice, not a social duty.',
        antiThesis: 'Personal choice may become social pressure if long life becomes tied to productivity and status.',
      },
      {
        opinion: 'should be understood as myth, not policy.',
        antiThesis: 'Myths can still guide scientific ambition and long-term research.',
      },
      {
        opinion: 'should force society to rethink work, family, inheritance, and power.',
        antiThesis: 'These questions are important, but they may be premature while immortality remains speculative.',
      },
      {
        opinion: 'should balance desire for more life with humility about limits.',
        antiThesis: 'Humility matters, but too much humility can become resignation toward preventable suffering.',
      },
      {
        opinion: 'should be pursued as humanity\'s highest goal, ending death as the ultimate injustice.',
        antiThesis: 'Treating death as the supreme injustice diverts resources from the diseases of the many to the longevity of the few, and assumes a feasibility that remains speculative.',
      },
      {
        opinion: 'should be rejected as a curse that would entrench the powerful and crush the young.',
        antiThesis: 'Rejecting all life-extension also forgoes large gains in healthy lifespan; the fear of entrenchment argues for fair access, not for refusing the science.',
      },
    ],
  },
  {
    category: 'Longevity',
    keyword: 'society',
    data: [
      {
        opinion: 'should prepare for longer lives by redesigning work and retirement.',
        antiThesis: 'Redesign is necessary, but longer working lives may burden people in physically demanding or low-paid jobs.',
      },
      {
        opinion: 'should not extend lifespan without addressing loneliness and care.',
        antiThesis: 'Loneliness and care matter, but longer life can also expand relationships, contribution, and community.',
      },
      {
        opinion: 'should welcome longer lives as a source of wisdom and continuity.',
        antiThesis: 'Longer lives may preserve knowledge, but they can also slow generational renewal and institutional change.',
      },
      {
        opinion: 'should worry that longevity will entrench wealth and power.',
        antiThesis: 'Policy can redesign inheritance, taxation, pensions, and governance to reduce entrenchment.',
      },
      {
        opinion: 'should treat longevity as a climate and resource question.',
        antiThesis: 'Longer healthy lives do not automatically mean unsustainable consumption if systems change.',
      },
      {
        opinion: 'should not make old age economically punishable.',
        antiThesis: 'Supporting longer lives requires sustainable pensions, healthcare, and intergenerational fairness.',
      },
      {
        opinion: 'should allow people to choose shorter lives with dignity if suffering is unbearable.',
        antiThesis: 'End-of-life choice raises safeguarding concerns around pressure, disability, poverty, and medical ethics.',
      },
      {
        opinion: 'should not measure success by lifespan alone.',
        antiThesis: 'Lifespan is incomplete, but longer life remains one meaningful measure of social progress.',
      },
      {
        opinion: 'should distribute longevity gains fairly across class, race, gender, and geography.',
        antiThesis: 'Fair distribution is vital, but unequal access may persist because healthcare systems and wealth differ.',
      },
      {
        opinion: 'should balance longer life with justice between generations.',
        antiThesis: 'Intergenerational justice is difficult because the young, old, present, and future all have competing claims.',
      },
      {
        opinion: 'should not extend life indefinitely, since a world without death would stagnate.',
        antiThesis: 'The stagnation claim is speculative—longer healthy lives could mean more contribution, not less—and \'let people die to refresh society\' is ethically fraught.',
      },
    ],
  },
  {
    category: 'Punishment',
    keyword: 'death penalty',
    data: [
      {
        opinion: 'should be abolished because the state should never have the power to kill.',
        antiThesis: 'Some argue the state already uses force to protect society and that the most extreme crimes deserve the ultimate penalty.',
      },
      {
        opinion: 'should be mandatory for the most extreme crimes.',
        antiThesis: 'Mandatory death sentences remove judicial discretion and increase the risk of irreversible injustice.',
      },
      {
        opinion: 'should be reserved only for crimes where guilt is absolutely certain.',
        antiThesis: '“Absolute certainty” is almost impossible in real legal systems, and wrongful convictions can never be fully eliminated.',
      },
      {
        opinion: 'should never be used because wrongful execution is irreversible.',
        antiThesis: 'Wrongful conviction is a serious risk, but supporters argue that strong safeguards can make errors rare enough.',
      },
      {
        opinion: 'should exist because some crimes permanently forfeit the right to live.',
        antiThesis: 'Human rights frameworks generally reject the idea that dignity can be forfeited completely.',
      },
      {
        opinion: 'should be rejected because it turns justice into revenge.',
        antiThesis: 'Victims’ families may experience severe punishment as justice rather than revenge.',
      },
      {
        opinion: 'should be decided by victims’ families.',
        antiThesis: 'Justice should not depend on grief, rage, forgiveness, or the emotional state of victims’ relatives.',
      },
      {
        opinion: 'should be replaced by life imprisonment without parole.',
        antiThesis: 'Life imprisonment may protect society, but some argue it is too lenient for the most extreme crimes.',
      },
      {
        opinion: 'should be used publicly to deter extreme violence.',
        antiThesis: 'Public punishment can brutalise society and has historically been associated with spectacle, fear, and abuse.',
      },
      {
        opinion: 'should balance justice, deterrence, human dignity, and the risk of error.',
        antiThesis: 'These values may be impossible to balance because execution eliminates any chance of correction.',
      },
      {
        opinion: 'should be abolished everywhere as an irreversible violation of the right to life.',
        antiThesis: 'Retentionists argue that for the gravest crimes only the ultimate sanction is proportionate and that it offers victims finality; on that view abolition refuses justice the worst cases demand.',
      },
      {
        opinion: 'should be restored and used for the gravest crimes as a just and final penalty.',
        antiThesis: 'The decisive objection is irreversibility: innocent people have been executed and no appeal can correct it, while deterrence evidence is weak—so the policy risks killing the wrongly convicted for little measurable gain.',
      },
    ],
  },
  {
    category: 'Punishment',
    keyword: 'punishment',
    data: [
      {
        opinion: 'should focus on rehabilitation, not destruction.',
        antiThesis: 'Some crimes may be so severe that society prioritises incapacitation and accountability over rehabilitation.',
      },
      {
        opinion: 'should make offenders suffer proportionally to the harm they caused.',
        antiThesis: 'Proportional suffering can become cruelty and may not repair harm or improve public safety.',
      },
      {
        opinion: 'should protect society first.',
        antiThesis: 'Public safety matters, but punishment can violate rights if protection becomes the only value.',
      },
      {
        opinion: 'should never include torture, mutilation, or bodily control.',
        antiThesis: 'Some support bodily interventions when they claim these prevent future harm and protect potential victims.',
      },
      {
        opinion: 'should be severe enough to make certain crimes unthinkable.',
        antiThesis: 'Deterrence depends on many factors besides severity, including certainty of detection and fair enforcement.',
      },
      {
        opinion: 'should be restorative wherever possible.',
        antiThesis: 'Restorative approaches may be inappropriate or insufficient for severe violent crimes.',
      },
      {
        opinion: 'should not be softened by excessive concern for offenders.',
        antiThesis: 'Concern for offenders’ rights protects the integrity of justice and prevents state abuse.',
      },
      {
        opinion: 'should never become society’s outlet for rage.',
        antiThesis: 'Public outrage can signal that a crime violated the deepest moral boundaries of a community.',
      },
      {
        opinion: 'should include permanent incapacitation for offenders who remain dangerous.',
        antiThesis: 'Permanent incapacitation may be necessary in some cases, but it should not erase due process or proportionality.',
      },
      {
        opinion: 'should balance accountability, safety, rehabilitation, and restraint.',
        antiThesis: 'These values conflict sharply when a crime is severe and public anger is intense.',
      },
      {
        opinion: 'should be replaced almost entirely by rehabilitation and restorative justice.',
        antiThesis: 'A system that nearly abandons punishment risks under-deterring serious crime and failing victims\' need for accountability, and some offenders require incapacitation rehabilitation alone can\'t guarantee.',
      },
      {
        opinion: 'should balance deterrence and rehabilitation through proportionate, humane sentencing.',
        antiThesis: '\'Balance\' can be a cover for inconsistency; victims and the public may reasonably see proportionate-but-lenient sentencing as failing to reflect the gravity of serious harm.',
      },
      {
        opinion: 'should be made harsher, since certain and severe penalties deter crime most effectively.',
        antiThesis: 'The evidence is that certainty of being caught deters far more than severity; ratcheting up penalties has repeatedly filled prisons at huge cost without the promised fall in crime.',
      },
    ],
  },
  {
    category: 'Punishment',
    keyword: 'chemical castration',
    data: [
      {
        opinion: 'should be banned because the state should not chemically control people’s bodies.',
        antiThesis: 'Supporters argue it can reduce risk in specific cases when used under strict medical and legal oversight.',
      },
      {
        opinion: 'should be mandatory for repeat sexual offenders.',
        antiThesis: 'Mandatory bodily intervention raises major human-rights, medical ethics, consent, and proportionality concerns.',
      },
      {
        opinion: 'should be voluntary and medically supervised.',
        antiThesis: 'Voluntary treatment may be refused by high-risk offenders and may not satisfy public-safety concerns.',
      },
      {
        opinion: 'should be available as an alternative to longer imprisonment.',
        antiThesis: 'Offering it as an alternative may create coercive consent, especially when liberty depends on acceptance.',
      },
      {
        opinion: 'should never be called treatment if it is imposed as punishment.',
        antiThesis: 'Some legal systems combine punishment and treatment, especially where risk reduction is the stated aim.',
      },
      {
        opinion: 'should be used only after individual risk assessment.',
        antiThesis: 'Case-by-case assessment is fairer, but critics worry it may still legitimise coercive bodily control.',
      },
      {
        opinion: 'should be rejected because it does not address violence, power, or coercion.',
        antiThesis: 'Sexual violence is not only biological, but reducing libido may still lower risk for some offenders.',
      },
      {
        opinion: 'should be imposed when it can prevent future victims.',
        antiThesis: 'Preventive logic can justify extreme state power based on predicted future behaviour.',
      },
      {
        opinion: 'should be treated as cruel and degrading punishment.',
        antiThesis: 'Supporters may argue it is less severe than indefinite imprisonment or the death penalty.',
      },
      {
        opinion: 'should balance bodily autonomy, medical ethics, public safety, and evidence.',
        antiThesis: 'These values conflict because the same intervention can be framed as treatment, coercion, punishment, or prevention.',
      },
      {
        opinion: 'should be banned as a degrading and irreversible bodily punishment.',
        antiThesis: 'Where it is voluntary and reduces reoffending risk for specific offenders, some argue it is a justified option rather than a degrading punishment, and a blanket ban removes a tool some offenders themselves request.',
      },
      {
        opinion: 'should be available as a sentencing option for the most serious sexual offenders.',
        antiThesis: 'Imposed as punishment it raises serious medical-ethics and consent problems, has uncertain efficacy where offending isn\'t primarily driven by libido, and can substitute for the supervision that actually reduces risk.',
      },
    ],
  },
  {
    category: 'Punishment',
    keyword: 'sexual offenders',
    data: [
      {
        opinion: 'should be permanently removed from society if they pose ongoing danger.',
        antiThesis: 'Permanent removal may protect the public, but risk assessment must remain evidence-based and reviewable.',
      },
      {
        opinion: 'should have access to treatment, monitoring, and reintegration when possible.',
        antiThesis: 'Reintegration can be difficult when communities fear reoffending and victims feel justice has been weakened.',
      },
      {
        opinion: 'should receive no sympathy after destroying victims’ lives.',
        antiThesis: 'Sympathy is not the same as excuse; humane treatment protects justice from becoming cruelty.',
      },
      {
        opinion: 'should be understood through psychology, power, trauma, and opportunity.',
        antiThesis: 'Explanation can support prevention, but it should not minimise responsibility or harm.',
      },
      {
        opinion: 'should face harsher penalties than almost any other category of offender.',
        antiThesis: 'Severe penalties may be justified, but proportionality and due process must still apply.',
      },
      {
        opinion: 'should not all be treated as identical risks.',
        antiThesis: 'Differentiating risk is important, but the public may distrust systems that appear too lenient.',
      },
      {
        opinion: 'should be monitored after release.',
        antiThesis: 'Monitoring can protect the public, but excessive surveillance can make rehabilitation and housing impossible.',
      },
      {
        opinion: 'should never be released if experts cannot confidently rule out reoffending.',
        antiThesis: 'No expert can confidently rule out all future risk, so this standard could justify indefinite detention.',
      },
      {
        opinion: 'should be prevented through early intervention before crimes occur.',
        antiThesis: 'Prevention is vital, but identifying risk before crime risks stigma, profiling, and false accusation.',
      },
      {
        opinion: 'should be punished firmly while preserving legal and human-rights safeguards.',
        antiThesis: 'Safeguards may feel inadequate to victims, but they protect society from wrongful or excessive punishment.',
      },
      {
        opinion: 'should face the most severe sanctions the law allows, including lifelong supervision.',
        antiThesis: 'Blanket maximal sanctions can be counterproductive—reducing reporting and pushing offences underground—and lifelong measures applied too broadly catch low-risk people while straining supervision of the genuinely dangerous.',
      },
    ],
  },
  {
    category: 'Punishment',
    keyword: 'justice',
    data: [
      {
        opinion: 'should prioritise victims over offenders.',
        antiThesis: 'Victims deserve priority, but justice systems must still protect due process and avoid punishment driven only by anger.',
      },
      {
        opinion: 'should protect even the worst offenders from state cruelty.',
        antiThesis: 'Protecting offenders from cruelty may feel morally intolerable to those harmed by severe crimes.',
      },
      {
        opinion: 'should make certain crimes unforgivable in law.',
        antiThesis: 'Law must punish, but it should be careful about declaring people permanently beyond humanity.',
      },
      {
        opinion: 'should allow the possibility of redemption even after terrible crimes.',
        antiThesis: 'Some harms are so severe that redemption may not satisfy public safety or victims’ needs.',
      },
      {
        opinion: 'should be emotionally satisfying to victims and society.',
        antiThesis: 'Emotional satisfaction can conflict with fairness, proportionality, and evidence.',
      },
      {
        opinion: 'should be deliberately unemotional and procedural.',
        antiThesis: 'Procedure matters, but justice that ignores grief and moral outrage can feel empty.',
      },
      {
        opinion: 'should use the harshest tools only with the strongest safeguards.',
        antiThesis: 'Even strong safeguards may fail when punishment is irreversible or bodily invasive.',
      },
      {
        opinion: 'should never give the state powers it could abuse against the innocent.',
        antiThesis: 'Any justice system has coercive power; the challenge is limiting abuse while protecting the public.',
      },
      {
        opinion: 'should prevent future harm, not only punish past harm.',
        antiThesis: 'Preventive justice can become dangerous when people are punished for predicted behaviour.',
      },
      {
        opinion: 'should balance victims’ rights, due process, public safety, human dignity, and proportionality.',
        antiThesis: 'These values often conflict most painfully in cases involving extreme violence or sexual harm.',
      },
      {
        opinion: 'should focus on the causes of crime rather than on retribution against offenders.',
        antiThesis: 'Addressing causes is vital, but it doesn\'t discharge the state\'s duty to hold offenders accountable and to protect the public from those who remain dangerous.',
      },
      {
        opinion: 'should prioritise the protection of the public over the rehabilitation of the offender.',
        antiThesis: 'Since the overwhelming majority of offenders eventually return to the community, neglecting rehabilitation undermines public protection itself; the two are complements, not a trade-off.',
      },
    ],
  },
  {
    category: 'Geoengineering',
    keyword: 'geoengineering',
    data: [
      {
        opinion: 'should be researched because climate collapse may require emergency tools.',
        antiThesis: 'Research can prepare society, but it may also normalise dangerous interventions before governance is ready.',
      },
      {
        opinion: 'should be rejected because humans should not attempt to control the planet’s systems.',
        antiThesis: 'Humans already alter planetary systems through emissions, agriculture, cities, and industry; intervention may reduce harm.',
      },
      {
        opinion: 'should be treated as a last resort, not a substitute for emissions cuts.',
        antiThesis: 'Last-resort framing may delay research until the risks are already too severe.',
      },
      {
        opinion: 'should be accelerated because slow climate politics has failed.',
        antiThesis: 'Speed can create irreversible consequences if technologies are deployed without consent or testing.',
      },
      {
        opinion: 'should be banned before it becomes climate colonialism.',
        antiThesis: 'A ban may prevent risky deployment, but it may also block tools that could protect vulnerable populations.',
      },
      {
        opinion: 'should be governed globally before any deployment.',
        antiThesis: 'Global governance is ideal, but agreement may be impossible during climate emergencies.',
      },
      {
        opinion: 'should be led by public institutions, not billionaires or corporations.',
        antiThesis: 'Private actors may have the capital and speed to develop tools that governments avoid.',
      },
      {
        opinion: 'should be open to private innovation under strict oversight.',
        antiThesis: 'Private innovation can create conflicts of interest when firms profit from climate risk.',
      },
      {
        opinion: 'should be democratically debated by the people most affected.',
        antiThesis: 'Democratic consent is necessary, but global atmospheric interventions affect everyone and are hard to localise.',
      },
      {
        opinion: 'should balance urgency, humility, science, justice, and restraint.',
        antiThesis: 'These values conflict because climate urgency often pushes against scientific and ethical caution.',
      },
      {
        opinion: 'should be pursued aggressively, since refusing it risks far greater climate harm.',
        antiThesis: 'Aggressive deployment risks moral hazard—easing pressure to cut emissions—and could trigger geopolitical conflict over who controls the planet\'s thermostat.',
      },
      {
        opinion: 'should be researched cautiously and governed internationally before any deployment.',
        antiThesis: 'Even cautious research can build deployment momentum and lock-in, and the international governance for it barely exists, so \'govern first\' may be wishful.',
      },
      {
        opinion: 'should be banned entirely as a dangerous distraction from cutting emissions.',
        antiThesis: 'A total research ban forecloses knowledge that may prove essential if mitigation fails, leaving the world ignorant precisely when it might need options.',
      },
    ],
  },
  {
    category: 'Geoengineering',
    keyword: 'solar radiation management',
    data: [
      {
        opinion: 'should be studied as a temporary cooling measure.',
        antiThesis: 'Temporary cooling may reduce heat risk, but it does not solve ocean acidification or root emissions.',
      },
      {
        opinion: 'should never be deployed because the risks are planetary.',
        antiThesis: 'Avoiding deployment may also carry planetary risks if warming accelerates beyond adaptation capacity.',
      },
      {
        opinion: 'should be used if it prevents mass climate suffering.',
        antiThesis: 'Preventing suffering matters, but uneven regional effects could create new injustice or conflict.',
      },
      {
        opinion: 'should be banned because it could weaken pressure to decarbonise.',
        antiThesis: 'Moral hazard is real, but policy can require emissions cuts alongside any research or deployment.',
      },
      {
        opinion: 'should be controlled by international treaty.',
        antiThesis: 'Treaties may be slow, weak, or ignored by powerful states in crisis.',
      },
      {
        opinion: 'should not be controlled by any one country.',
        antiThesis: 'In an emergency, one country may act unilaterally if it believes its population is at immediate risk.',
      },
      {
        opinion: 'should be reversible before it is considered acceptable.',
        antiThesis: 'Reversibility may be limited because stopping suddenly could cause rapid warming.',
      },
      {
        opinion: 'should be rejected because it treats symptoms rather than causes.',
        antiThesis: 'Treating symptoms can still save lives while societies address causes.',
      },
      {
        opinion: 'should be transparent in research and modelling.',
        antiThesis: 'Full transparency may also help reckless actors imitate or deploy risky methods.',
      },
      {
        opinion: 'should balance heat reduction, ecological risk, governance, and decarbonisation.',
        antiThesis: 'Balancing these goals is difficult because SRM can help some regions while harming or alarming others.',
      },
      {
        opinion: 'should be deployed urgently at scale to buy time against catastrophic warming.',
        antiThesis: 'Solar management doesn\'t touch ocean acidification, risks disrupting regional weather and monsoons, and creates a \'termination shock\' if ever stopped; deploying at scale first is a vast uncontrolled experiment.',
      },
      {
        opinion: 'should be prohibited, since tampering with the climate risks uncontrollable harm.',
        antiThesis: 'Prohibition can\'t be enforced against a single determined actor, so a research-and-governance framework may control the risk better than an unenforceable ban.',
      },
    ],
  },
  {
    category: 'Geoengineering',
    keyword: 'carbon removal',
    data: [
      {
        opinion: 'should be scaled urgently to reverse historical emissions.',
        antiThesis: 'Carbon removal is important, but it cannot replace rapid emissions cuts and may be expensive at scale.',
      },
      {
        opinion: 'should be publicly funded as climate infrastructure.',
        antiThesis: 'Public funding may subsidise technologies that remain uncertain, costly, or politically convenient.',
      },
      {
        opinion: 'should be paid for by fossil fuel companies and high emitters.',
        antiThesis: 'Polluter-pays is fair, but companies may pass costs to consumers or delay compliance through lobbying.',
      },
      {
        opinion: 'should not become an excuse for continued fossil fuel use.',
        antiThesis: 'Offsets can be abused, but some residual emissions may require removal even in serious climate plans.',
      },
      {
        opinion: 'should prioritise natural systems like forests, soils, wetlands, and oceans.',
        antiThesis: 'Nature-based removal is valuable, but permanence, measurement, land use, and fire risk can be difficult.',
      },
      {
        opinion: 'should prioritise engineered methods because they are measurable and scalable.',
        antiThesis: 'Engineered methods may be energy-intensive, expensive, and dependent on infrastructure.',
      },
      {
        opinion: 'should not compete with food, land rights, or biodiversity.',
        antiThesis: 'Avoiding all land conflict may limit the scale of useful climate restoration.',
      },
      {
        opinion: 'should create jobs in regions harmed by fossil decline.',
        antiThesis: 'Job creation matters, but new industries may not replace old jobs in the same places or at the same wages.',
      },
      {
        opinion: 'should be verified independently before credits are sold.',
        antiThesis: 'Verification improves trust, but it can be costly and technically uncertain.',
      },
      {
        opinion: 'should balance permanence, affordability, justice, and emissions reduction.',
        antiThesis: 'These goals conflict because the cheapest removals are not always the most permanent or just.',
      },
      {
        opinion: 'should be funded massively as a public project to draw down past emissions.',
        antiThesis: 'Current carbon removal is expensive, energy-intensive, and unproven at climate-relevant scale; over-reliance can license continued emissions on the promise of a cleanup that may never arrive.',
      },
      {
        opinion: 'should not excuse continued pollution, and must never replace real emission cuts.',
        antiThesis: 'Agreed in principle, but some residual emissions from aviation, cement, and agriculture are genuinely hard to eliminate, so removal is a necessary complement, not merely an excuse.',
      },
    ],
  },
  {
    category: 'Geoengineering',
    keyword: 'climate governance',
    data: [
      {
        opinion: 'should prevent any country from unilaterally altering the atmosphere.',
        antiThesis: 'Preventing unilateralism is important, but enforcement may be impossible if a powerful state acts alone.',
      },
      {
        opinion: 'should give vulnerable countries veto power over risky interventions.',
        antiThesis: 'Veto power protects vulnerable nations, but it may make collective action impossible.',
      },
      {
        opinion: 'should be led by science rather than politics.',
        antiThesis: 'Science can inform decisions, but deployment is political because risks and benefits are distributed unequally.',
      },
      {
        opinion: 'should be democratic rather than technocratic.',
        antiThesis: 'Democratic processes may struggle with technical complexity and urgency.',
      },
      {
        opinion: 'should include Indigenous peoples and frontline communities.',
        antiThesis: 'Inclusion is essential, but representation across diverse communities can be difficult to define.',
      },
      {
        opinion: 'should restrict patents on planetary technologies.',
        antiThesis: 'Patents can encourage investment and innovation in expensive technologies.',
      },
      {
        opinion: 'should punish reckless geoengineering experiments.',
        antiThesis: 'Overly harsh punishment may discourage legitimate small-scale research.',
      },
      {
        opinion: 'should allow controlled experiments under strict review.',
        antiThesis: 'Even controlled experiments may create political legitimacy for later deployment.',
      },
      {
        opinion: 'should treat geoengineering as a security issue.',
        antiThesis: 'Security framing can militarise climate policy and reduce transparency.',
      },
      {
        opinion: 'should balance consent, science, emergency response, and global equity.',
        antiThesis: 'These values conflict because those most at risk may disagree about acceptable interventions.',
      },
      {
        opinion: 'should authorise bold intervention rather than waiting for perfect certainty.',
        antiThesis: 'Bold planetary intervention under uncertainty can cause irreversible, unequally distributed harm; the precautionary case cuts toward caution, not speed, when the system is poorly understood.',
      },
      {
        opinion: 'should refuse all planetary intervention until emissions are first eliminated.',
        antiThesis: 'If emissions aren\'t eliminated in time—the likely case—refusing all intervention may forgo the only tools left to limit catastrophic, irreversible harm.',
      },
    ],
  },
  {
    category: 'Geoengineering',
    keyword: 'climate justice',
    data: [
      {
        opinion: 'should reject geoengineering imposed by wealthy countries.',
        antiThesis: 'Wealthy countries caused much of the problem, but they may also have resources to fund solutions.',
      },
      {
        opinion: 'should require historical emitters to fund risk and compensation mechanisms.',
        antiThesis: 'Compensation is fair, but liability, evidence, and distribution can be politically contested.',
      },
      {
        opinion: 'should prioritise adaptation and emissions cuts before planetary intervention.',
        antiThesis: 'Adaptation and emissions cuts are necessary, but some impacts may outpace them.',
      },
      {
        opinion: 'should not let the rich cool the planet while continuing luxury emissions.',
        antiThesis: 'Elite emissions matter, but climate stabilisation also requires broad systemic transformation.',
      },
      {
        opinion: 'should include countries most vulnerable to heat, drought, flooding, and crop failure.',
        antiThesis: 'Vulnerability should guide policy, but countries may disagree about what risks they are willing to accept.',
      },
      {
        opinion: 'should prevent geoengineering from becoming a new extractive industry.',
        antiThesis: 'Industry involvement can create extraction risks, but it can also build infrastructure and technical capacity.',
      },
      {
        opinion: 'should treat failed geoengineering as a liability issue.',
        antiThesis: 'Liability may be impossible to prove if climate outcomes have many causes.',
      },
      {
        opinion: 'should protect future generations from reckless experiments.',
        antiThesis: 'Future generations may also suffer if current generations refuse to research emergency options.',
      },
      {
        opinion: 'should centre survival over technological prestige.',
        antiThesis: 'Prestige can be problematic, but ambition can mobilise funding and scientific talent.',
      },
      {
        opinion: 'should balance repair, restraint, responsibility, and protection from climate harm.',
        antiThesis: 'These goals conflict because repairing harm may require technologies that also create new risks.',
      },
      {
        opinion: 'should veto geoengineering imposed on vulnerable nations without their consent.',
        antiThesis: 'A consent veto is ethically attractive but could let any one party block a measure a desperate majority sees as necessary, raising hard questions about whose consent governs a shared atmosphere.',
      },
    ],
  },
  {
    category: 'Electrostates',
    keyword: 'electrostates',
    data: [
      {
        opinion: 'should replace petrostates as the dominant energy powers of the future.',
        antiThesis: 'Replacing petrostates may reduce fossil dependence, but it could also create new dependencies around minerals, grids, batteries, and manufacturing.',
      },
      {
        opinion: 'should be celebrated because electricity can decentralise power.',
        antiThesis: 'Electricity can decentralise energy, but control may still concentrate in grid operators, tech firms, battery producers, and mineral-rich states.',
      },
      {
        opinion: 'should be feared because they will create a new form of green imperialism.',
        antiThesis: 'Green power can reproduce domination, but clean energy can also reduce dependence on fossil-fuel coercion.',
      },
      {
        opinion: 'should use clean electricity as a tool of geopolitical influence.',
        antiThesis: 'Using electricity geopolitically may strengthen national power, but it can turn the energy transition into another arena of coercion.',
      },
      {
        opinion: 'should be governed by climate justice, not industrial rivalry.',
        antiThesis: 'Justice matters, but states also compete for jobs, supply chains, technology, and security.',
      },
      {
        opinion: 'should be publicly owned because electricity is too essential for private dominance.',
        antiThesis: 'Public ownership can protect access, but it may also slow innovation, investment, and technical adaptation.',
      },
      {
        opinion: 'should be market-driven because competition will scale clean technology fastest.',
        antiThesis: 'Markets can scale technology, but they may ignore equity, resilience, labour rights, and ecological harm.',
      },
      {
        opinion: 'should not become surveillance states powered by smart grids and data.',
        antiThesis: 'Smart grids need data to balance demand, integrate renewables, and prevent outages.',
      },
      {
        opinion: 'should prioritise energy abundance over energy restraint.',
        antiThesis: 'Abundance can improve lives, but unlimited electricity demand may strain land, minerals, water, and ecosystems.',
      },
      {
        opinion: 'should balance energy security, justice, decarbonisation, and democratic control.',
        antiThesis: 'These goals often conflict because the fastest energy transition is not always the fairest or most democratic.',
      },
      {
        opinion: 'should be built as fully public systems, with energy treated as a universal right.',
        antiThesis: 'State monopolies in power have often meant underinvestment, political pricing, and blackouts; declaring energy a right doesn\'t by itself produce the capital and efficiency to deliver it.',
      },
      {
        opinion: 'should be driven by private enterprise, with the state confined to setting basic rules.',
        antiThesis: 'Leaving strategic energy and minerals mainly to private actors can hand control of critical infrastructure to whoever has capital, including foreign rivals.',
      },
    ],
  },
  {
    category: 'Electrostates',
    keyword: 'electricity',
    data: [
      {
        opinion: 'should become the foundation of a post-fossil civilisation.',
        antiThesis: 'Electrification is central, but not every sector is easy to electrify and some systems may still need fuels, storage, or behavioural change.',
      },
      {
        opinion: 'should be treated as a human right.',
        antiThesis: 'Access is essential, but universal low-cost electricity requires funding, infrastructure, and reliable supply.',
      },
      {
        opinion: 'should be cheap, abundant, and available to everyone.',
        antiThesis: 'Cheap abundance is attractive, but low prices can encourage waste and underfund grid maintenance.',
      },
      {
        opinion: 'should be rationed when demand threatens climate or grid stability.',
        antiThesis: 'Rationing may protect systems, but it can feel authoritarian and punish households with fewer alternatives.',
      },
      {
        opinion: 'should be priced by markets to reflect scarcity and demand.',
        antiThesis: 'Market pricing can improve efficiency, but it can also make essential energy unaffordable during crises.',
      },
      {
        opinion: 'should be shielded from speculative pricing.',
        antiThesis: 'Price controls may protect consumers, but they can reduce investment and distort demand.',
      },
      {
        opinion: 'should be locally produced wherever possible.',
        antiThesis: 'Local production builds resilience, but large grids often reduce costs and balance supply better.',
      },
      {
        opinion: 'should be traded across borders to stabilise regions.',
        antiThesis: 'Cross-border dependence can create vulnerability to political disputes or infrastructure attacks.',
      },
      {
        opinion: 'should not be wasted on luxury consumption while basic needs remain unmet.',
        antiThesis: 'Luxury demand can be wasteful, but high-value consumption can also fund infrastructure and innovation.',
      },
      {
        opinion: 'should balance affordability, reliability, cleanliness, and sovereignty.',
        antiThesis: 'These goals conflict because the cheapest, cleanest, most sovereign, and most reliable options are not always the same.',
      },
      {
        opinion: 'should be nationalised so that power is provided to all at cost rather than for profit.',
        antiThesis: '\'At cost\' pricing can starve the grid of investment for maintenance and expansion, deferring the real costs onto reliability.',
      },
      {
        opinion: 'should be supplied by competitive private markets, which deliver power most cheaply.',
        antiThesis: 'Electricity markets have repeatedly failed—price spikes, blackouts, and gaming—because power is a near-essential with inelastic demand, so pure markets need heavy regulation to work.',
      },
    ],
  },
  {
    category: 'Electrostates',
    keyword: 'critical minerals',
    data: [
      {
        opinion: 'should be treated as the new oil of the energy transition.',
        antiThesis: 'Minerals matter, but unlike oil they are not burned continuously and can often be recycled or substituted.',
      },
      {
        opinion: 'should never become an excuse for new colonial extraction.',
        antiThesis: 'Extraction risks are real, but clean energy infrastructure currently depends on large volumes of mined materials.',
      },
      {
        opinion: 'should be controlled by the countries that possess them.',
        antiThesis: 'Sovereign control can protect value, but it can also create supply shocks, corruption, or geopolitical leverage.',
      },
      {
        opinion: 'should be governed as global commons for the climate transition.',
        antiThesis: 'Commons governance may sound fair, but mineral-rich countries may reject external control over their resources.',
      },
      {
        opinion: 'should be mined quickly to accelerate decarbonisation.',
        antiThesis: 'Fast mining can reduce fossil use, but it can also damage ecosystems, Indigenous lands, and labour rights.',
      },
      {
        opinion: 'should be mined only under strict labour and environmental standards.',
        antiThesis: 'Strict standards protect people and nature, but they may slow deployment and raise costs.',
      },
      {
        opinion: 'should be recycled before new extraction expands.',
        antiThesis: 'Recycling is essential, but current demand may exceed what recycling can supply in the near term.',
      },
      {
        opinion: 'should be stockpiled for national security.',
        antiThesis: 'Stockpiling can improve resilience, but it can also intensify competition and scarcity.',
      },
      {
        opinion: 'should not be monopolised by any one country or bloc.',
        antiThesis: 'Diversification is safer, but it can be expensive, slow, and politically difficult.',
      },
      {
        opinion: 'should balance speed, sovereignty, labour rights, ecology, and recycling.',
        antiThesis: 'These goals conflict because urgent demand often pushes against environmental and social safeguards.',
      },
      {
        opinion: 'should be brought under public or international control to prevent exploitation.',
        antiThesis: 'International control of minerals founders on sovereignty and security—producing states won\'t cede their resources—and supply security usually comes from diversification, not a global authority.',
      },
      {
        opinion: 'should be developed by whoever can extract them most efficiently, without state control.',
        antiThesis: 'Pure efficiency-driven extraction can concentrate supply in a few hands and ignore the strategic and environmental stakes that justify some public oversight.',
      },
    ],
  },
  {
    category: 'Electrostates',
    keyword: 'grids',
    data: [
      {
        opinion: 'should be publicly planned as the backbone of the clean economy.',
        antiThesis: 'Public planning is necessary, but centralised grid projects can become slow, bureaucratic, and politically contested.',
      },
      {
        opinion: 'should be decentralised through community energy and microgrids.',
        antiThesis: 'Decentralised grids improve autonomy, but they may struggle with scale, cost, and reliability.',
      },
      {
        opinion: 'should be expanded aggressively even when local opposition exists.',
        antiThesis: 'Fast expansion matters, but overriding communities can damage trust and local rights.',
      },
      {
        opinion: 'should not be built through land grabs or ecological sacrifice.',
        antiThesis: 'Avoiding harm is vital, but grid delays can prolong fossil-fuel dependence.',
      },
      {
        opinion: 'should be protected as national-security assets.',
        antiThesis: 'Security matters, but excessive securitisation can reduce transparency and democratic oversight.',
      },
      {
        opinion: 'should be open, interoperable, and internationally connected.',
        antiThesis: 'Interconnection improves resilience, but it also creates cross-border vulnerabilities.',
      },
      {
        opinion: 'should use smart data to optimise every watt.',
        antiThesis: 'Optimisation improves efficiency, but it can create surveillance, cybersecurity, and privacy risks.',
      },
      {
        opinion: 'should be resilient before they are cheap.',
        antiThesis: 'Resilience is essential, but higher costs can make energy less affordable.',
      },
      {
        opinion: 'should prioritise rural and poor communities, not only industrial demand.',
        antiThesis: 'Equity matters, but industrial demand often funds grid expansion and economic growth.',
      },
      {
        opinion: 'should balance reliability, democracy, cybersecurity, cost, and speed.',
        antiThesis: 'These values conflict because secure and democratic infrastructure is often slower and more expensive.',
      },
      {
        opinion: 'should be expanded as shared public infrastructure governed in the common interest.',
        antiThesis: 'Public grids still need enormous private capital and competitive suppliers; framing the grid as purely public can deter the investment a rapid transition requires.',
      },
      {
        opinion: 'should be privately owned and operated, with investment guided by price signals alone.',
        antiThesis: 'Private monopoly grids guided only by price can underinvest in resilience and rural service; grids are natural monopolies that nearly always require regulation.',
      },
    ],
  },
  {
    category: 'Electrostates',
    keyword: 'clean-tech industry',
    data: [
      {
        opinion: 'should be treated as strategic national infrastructure.',
        antiThesis: 'Strategic industry can build capacity, but it can also justify subsidies, protectionism, and corporate capture.',
      },
      {
        opinion: 'should be globally traded, not locked inside national blocs.',
        antiThesis: 'Open trade lowers costs, but it can create dangerous dependence on dominant suppliers.',
      },
      {
        opinion: 'should be protected from foreign dumping and unfair subsidies.',
        antiThesis: 'Protection can defend industry, but it may raise prices and slow clean-energy deployment.',
      },
      {
        opinion: 'should be subsidised heavily until fossil fuels lose.',
        antiThesis: 'Subsidies can accelerate transition, but they may waste public money or reward politically connected firms.',
      },
      {
        opinion: 'should compete without permanent state support.',
        antiThesis: 'Competition is healthy, but fossil industries benefited from decades of infrastructure, subsidies, and political support.',
      },
      {
        opinion: 'should not reproduce sweatshop labour under green branding.',
        antiThesis: 'Labour standards are essential, but higher standards may increase costs and slow scale-up.',
      },
      {
        opinion: 'should prioritise domestic jobs over cheap imports.',
        antiThesis: 'Domestic jobs matter, but cheap imports can make decarbonisation faster and more affordable.',
      },
      {
        opinion: 'should be open-source where it serves planetary survival.',
        antiThesis: 'Open technology can accelerate adoption, but companies need intellectual property to fund innovation.',
      },
      {
        opinion: 'should make electrostates less dependent on fossil autocracies.',
        antiThesis: 'Clean-tech supply chains can still depend on authoritarian states, mining chokepoints, and industrial monopolies.',
      },
      {
        opinion: 'should balance national strategy, global access, fair labour, and rapid deployment.',
        antiThesis: 'These goals conflict because national advantage and global climate access often pull in opposite directions.',
      },
      {
        opinion: 'should be state-led and planned to guarantee a rapid and fair energy transition.',
        antiThesis: 'State planning of fast-moving technology risks backing losers and entrenching favoured firms; much of the recent cost collapse in solar and batteries came from competition, not central plans.',
      },
      {
        opinion: 'should be left to the market, since subsidies and planning distort and slow it.',
        antiThesis: 'Early clean-tech needed public support to reach scale; \'subsidies distort\' ignores that fossil incumbents are themselves heavily subsidised and that markets underprice carbon.',
      },
    ],
  },
  {
    category: 'Sovereignty',
    keyword: 'sovereignty',
    data: [
      {
        opinion: 'should mean the absolute right of a nation to govern itself.',
        antiThesis: 'Absolute sovereignty can justify abuse, isolation, or refusal to respect international law and human rights.',
      },
      {
        opinion: 'should be shared when problems cross borders.',
        antiThesis: 'Shared sovereignty can weaken democratic accountability and make citizens feel ruled by distant institutions.',
      },
      {
        opinion: 'should protect people, not just borders.',
        antiThesis: 'Protecting people matters, but borders and territory remain central to legal authority and statehood.',
      },
      {
        opinion: 'should never be used as an excuse for oppression.',
        antiThesis: 'External actors may misuse human-rights language to interfere in weaker states.',
      },
      {
        opinion: 'should be defended against foreign courts, treaties, and institutions.',
        antiThesis: 'Rejecting international rules can isolate countries and weaken cooperation on trade, climate, migration, and security.',
      },
      {
        opinion: 'should be limited by universal human rights.',
        antiThesis: 'Universal rights are important, but enforcement can be selective, politicised, or dominated by powerful states.',
      },
      {
        opinion: 'should be understood as capacity, not symbolism.',
        antiThesis: 'Symbols, flags, borders, and rituals matter because they create belonging and legitimacy.',
      },
      {
        opinion: 'should be abolished because humanity needs planetary governance.',
        antiThesis: 'Planetary governance may solve global problems, but it risks becoming remote, technocratic, or authoritarian.',
      },
      {
        opinion: 'should be reclaimed from global corporations and financial markets.',
        antiThesis: 'Markets and corporations can constrain states, but they also provide investment, jobs, technology, and trade.',
      },
      {
        opinion: 'should balance independence, responsibility, rights, and interdependence.',
        antiThesis: 'These goals often conflict because true independence can reduce cooperation, while cooperation can limit autonomy.',
      },
      {
        opinion: 'should be pooled into international institutions better able to solve shared problems.',
        antiThesis: 'Distant institutions lack democratic accountability and can override local preferences; pooling too much severs decisions from the publics who bear them.',
      },
      {
        opinion: 'should be absolute and indivisible, with no external body permitted any authority over it.',
        antiThesis: 'Absolute sovereignty is a fiction in an interdependent world; every trade deal and alliance involves sharing authority, and refusing all of it means isolation and weakness.',
      },
    ],
  },
  {
    category: 'Sovereignty',
    keyword: 'nation-state',
    data: [
      {
        opinion: 'should remain the main unit of political authority.',
        antiThesis: 'Nation-states provide accountability, but many problems are regional or global and exceed national borders.',
      },
      {
        opinion: 'should be replaced by regional and global institutions.',
        antiThesis: 'Larger institutions may coordinate better, but they can feel distant and culturally detached.',
      },
      {
        opinion: 'should protect cultural continuity.',
        antiThesis: 'Cultural continuity matters, but it can become exclusionary when used against minorities or migrants.',
      },
      {
        opinion: 'should not define belonging through ethnicity.',
        antiThesis: 'Civic belonging is more inclusive, but nations often rely on language, memory, ancestry, or shared culture.',
      },
      {
        opinion: 'should control borders, currency, law, and defence.',
        antiThesis: 'Full control can be unrealistic in integrated economies, alliances, and international legal systems.',
      },
      {
        opinion: 'should share powers where cooperation makes citizens safer.',
        antiThesis: 'Sharing powers can improve safety, but it may reduce citizens’ ability to remove decision-makers.',
      },
      {
        opinion: 'should prioritise citizens before outsiders.',
        antiThesis: 'States have duties to citizens, but outsiders still have dignity, rights, and humanitarian claims.',
      },
      {
        opinion: 'should not become a sacred idol.',
        antiThesis: 'National attachment can still be meaningful, democratic, and protective.',
      },
      {
        opinion: 'should resist cultural and economic homogenisation.',
        antiThesis: 'Resistance to homogenisation can preserve identity, but it can also become protectionism or xenophobia.',
      },
      {
        opinion: 'should balance identity, democracy, openness, and responsibility.',
        antiThesis: 'These values conflict when democratic majorities demand policies that reduce openness or minority protections.',
      },
      {
        opinion: 'should remain the primary unit of politics while cooperating closely with others.',
        antiThesis: 'The nation-state struggles alone with cross-border problems—climate, pandemics, finance—that need the binding cooperation it is reluctant to accept.',
      },
      {
        opinion: 'should reclaim every power surrendered to international and supranational organisations.',
        antiThesis: 'Withdrawing from international arrangements forfeits the influence, market access, and security guarantees membership provides, often at greater cost than the sovereignty regained.',
      },
    ],
  },
  {
    category: 'Sovereignty',
    keyword: 'popular sovereignty',
    data: [
      {
        opinion: 'should mean that the people, not elites, decide the country’s future.',
        antiThesis: 'Popular will matters, but majorities can violate rights or make decisions based on fear and misinformation.',
      },
      {
        opinion: 'should be expressed through referendums on major national decisions.',
        antiThesis: 'Referendums can oversimplify complex questions and be vulnerable to manipulation.',
      },
      {
        opinion: 'should be protected from technocrats.',
        antiThesis: 'Expertise is necessary for complex policy, especially in finance, health, climate, and security.',
      },
      {
        opinion: 'should not be used to silence minorities.',
        antiThesis: 'Minority rights matter, but democracy also requires respecting majority decisions within constitutional limits.',
      },
      {
        opinion: 'should override international pressure.',
        antiThesis: 'International pressure may be justified when governments violate rights or threaten neighbours.',
      },
      {
        opinion: 'should be informed by evidence, not only emotion.',
        antiThesis: 'Evidence matters, but political decisions also involve values, identity, and moral judgement.',
      },
      {
        opinion: 'should include citizens between elections.',
        antiThesis: 'Constant participation can slow government and empower the most organised voices.',
      },
      {
        opinion: 'should not be captured by media owners, donors, or platforms.',
        antiThesis: 'Influence is unequal, but democratic societies also protect free association, media, and advocacy.',
      },
      {
        opinion: 'should allow people to reject supranational rule.',
        antiThesis: 'Rejection of supranational rule can restore control, but it may reduce influence and economic stability.',
      },
      {
        opinion: 'should balance majority power, rights, expertise, and accountability.',
        antiThesis: 'These goals conflict because limits on majority rule can feel undemocratic, while unlimited majority rule can become oppressive.',
      },
      {
        opinion: 'should be supreme, with the people\'s will overriding every institution and treaty.',
        antiThesis: 'Unchecked majority will can trample minorities and tear up the commitments that underpin trade and security; institutions and treaties exist to bind today\'s majority to tomorrow\'s stability.',
      },
      {
        opinion: 'should be constrained by constitutional limits that even the majority cannot breach.',
        antiThesis: 'Entrenched limits can freeze necessary change and empower unelected judges over the electorate, raising their own legitimacy problems.',
      },
    ],
  },
  {
    category: 'Sovereignty',
    keyword: 'economic sovereignty',
    data: [
      {
        opinion: 'should protect countries from dependence on foreign capital and supply chains.',
        antiThesis: 'Reducing dependence can improve resilience, but it can raise prices and reduce efficiency.',
      },
      {
        opinion: 'should mean control over food, energy, housing, and strategic industries.',
        antiThesis: 'State control of strategic sectors can protect essentials, but it may become inefficient or politicised.',
      },
      {
        opinion: 'should reject global markets that discipline democratic choices.',
        antiThesis: 'Global markets constrain states, but they also provide credit, trade, investment, and consumer access.',
      },
      {
        opinion: 'should be achieved through free trade and competitiveness.',
        antiThesis: 'Free trade can build wealth, but it can also create dependency and expose workers to global competition.',
      },
      {
        opinion: 'should include currency sovereignty.',
        antiThesis: 'Currency control can create flexibility, but it can also bring inflation, devaluation, and borrowing risks.',
      },
      {
        opinion: 'should not become protectionism for weak companies.',
        antiThesis: 'Some companies need protection while building strategic capacity or surviving unfair competition.',
      },
      {
        opinion: 'should prioritise workers over investors.',
        antiThesis: 'Worker protection matters, but investment is needed for jobs, infrastructure, and innovation.',
      },
      {
        opinion: 'should reduce exposure to hostile states.',
        antiThesis: 'Reducing exposure improves security, but decoupling can be expensive and destabilising.',
      },
      {
        opinion: 'should not isolate economies from innovation.',
        antiThesis: 'Openness supports innovation, but uncontrolled openness can hollow out domestic capacity.',
      },
      {
        opinion: 'should balance resilience, openness, fairness, and productivity.',
        antiThesis: 'These values conflict because resilience often requires redundancy, while productivity often rewards efficiency.',
      },
      {
        opinion: 'should mean public control of strategic industries, finance, and resources.',
        antiThesis: 'State control of strategic sectors has a mixed record of inefficiency and capture; \'economic sovereignty\' can shade into isolation from the trade and capital that sustain a country.',
      },
      {
        opinion: 'should mean self-sufficiency, with the nation freed from dependence on others.',
        antiThesis: 'Autarky is costly and lowers living standards; well-managed interdependence provides resilience and access that self-sufficiency cannot match.',
      },
    ],
  },
  {
    category: 'Sovereignty',
    keyword: 'Indigenous sovereignty',
    data: [
      {
        opinion: 'should be recognised as prior to the modern state.',
        antiThesis: 'Recognition of prior sovereignty is morally powerful, but it creates complex legal questions about territory, citizenship, and current residents.',
      },
      {
        opinion: 'should include land, language, law, and cultural self-government.',
        antiThesis: 'Self-government matters, but states must also manage shared infrastructure, rights, and jurisdiction.',
      },
      {
        opinion: 'should not be reduced to symbolic recognition.',
        antiThesis: 'Symbolic recognition can be insufficient, but material restitution can be politically and legally contested.',
      },
      {
        opinion: 'should include control over natural resources on ancestral lands.',
        antiThesis: 'Resource control can empower communities, but it may conflict with national energy, mining, or conservation policy.',
      },
      {
        opinion: 'should be respected through treaties and consent.',
        antiThesis: 'Consent processes are essential, but defining legitimate representation can be difficult.',
      },
      {
        opinion: 'should not fragment national unity.',
        antiThesis: 'Unity should not become an excuse to erase prior claims, cultural survival, or historical injustice.',
      },
      {
        opinion: 'should include the right to refuse extractive projects.',
        antiThesis: 'Refusal protects land and culture, but it can also block projects seen as nationally or economically important.',
      },
      {
        opinion: 'should reshape the state itself.',
        antiThesis: 'Reshaping the state may advance justice, but it can create uncertainty over law, property, and governance.',
      },
      {
        opinion: 'should coexist with shared citizenship.',
        antiThesis: 'Coexistence is possible, but shared citizenship and distinct sovereignty can create legal tensions.',
      },
      {
        opinion: 'should balance historical justice, self-rule, shared rights, and practical governance.',
        antiThesis: 'These goals conflict because repairing past dispossession can challenge present legal and political arrangements.',
      },
      {
        opinion: 'should be fully restored, returning land and self-governance unconditionally.',
        antiThesis: 'Unconditional restoration raises complex questions about current inhabitants, overlapping claims, and governance capacity that usually require negotiation rather than blanket reversal.',
      },
      {
        opinion: 'should be honoured within the existing state rather than through full separation.',
        antiThesis: '\'Within the state\' can grant recognition in name while withholding the real self-government and land rights that meaningful sovereignty requires.',
      },
    ],
  },
]
