

```python
# Library dependencies
import pandas as pd
import json
```


```python
#Load json
#purchasedata_jsonpath = "Data/purchase_data.json"
purchasedata2_jsonpath = "Data/purchase_data2.json"
#schools_csvpath = "Data/purchase_data2.json"
```


```python
#Read json into purchase data frame
purchasedata_df = pd.read_json(purchasedata_jsonpath)
purchasedata_df.head()
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>Age</th>
      <th>Gender</th>
      <th>Item ID</th>
      <th>Item Name</th>
      <th>Price</th>
      <th>SN</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>38</td>
      <td>Male</td>
      <td>165</td>
      <td>Bone Crushing Silver Skewer</td>
      <td>3.37</td>
      <td>Aelalis34</td>
    </tr>
    <tr>
      <th>1</th>
      <td>21</td>
      <td>Male</td>
      <td>119</td>
      <td>Stormbringer, Dark Blade of Ending Misery</td>
      <td>2.32</td>
      <td>Eolo46</td>
    </tr>
    <tr>
      <th>2</th>
      <td>34</td>
      <td>Male</td>
      <td>174</td>
      <td>Primitive Blade</td>
      <td>2.46</td>
      <td>Assastnya25</td>
    </tr>
    <tr>
      <th>3</th>
      <td>21</td>
      <td>Male</td>
      <td>92</td>
      <td>Final Critic</td>
      <td>1.36</td>
      <td>Pheusrical25</td>
    </tr>
    <tr>
      <th>4</th>
      <td>23</td>
      <td>Male</td>
      <td>63</td>
      <td>Stormfury Mace</td>
      <td>1.27</td>
      <td>Aela59</td>
    </tr>
    <tr>
      <th>5</th>
      <td>20</td>
      <td>Male</td>
      <td>10</td>
      <td>Sleepwalker</td>
      <td>1.73</td>
      <td>Tanimnya91</td>
    </tr>
    <tr>
      <th>6</th>
      <td>20</td>
      <td>Male</td>
      <td>153</td>
      <td>Mercenary Sabre</td>
      <td>4.57</td>
      <td>Undjaskla97</td>
    </tr>
    <tr>
      <th>7</th>
      <td>29</td>
      <td>Female</td>
      <td>169</td>
      <td>Interrogator, Blood Blade of the Queen</td>
      <td>3.32</td>
      <td>Iathenudil29</td>
    </tr>
    <tr>
      <th>8</th>
      <td>25</td>
      <td>Male</td>
      <td>118</td>
      <td>Ghost Reaver, Longsword of Magic</td>
      <td>2.77</td>
      <td>Sondenasta63</td>
    </tr>
    <tr>
      <th>9</th>
      <td>31</td>
      <td>Male</td>
      <td>99</td>
      <td>Expiration, Warscythe Of Lost Worlds</td>
      <td>4.53</td>
      <td>Hilaerin92</td>
    </tr>
    <tr>
      <th>10</th>
      <td>24</td>
      <td>Male</td>
      <td>57</td>
      <td>Despair, Favor of Due Diligence</td>
      <td>3.81</td>
      <td>Chamosia29</td>
    </tr>
    <tr>
      <th>11</th>
      <td>20</td>
      <td>Male</td>
      <td>47</td>
      <td>Alpha, Reach of Ending Hope</td>
      <td>1.55</td>
      <td>Sally64</td>
    </tr>
    <tr>
      <th>12</th>
      <td>30</td>
      <td>Male</td>
      <td>81</td>
      <td>Dreamkiss</td>
      <td>4.06</td>
      <td>Iskossa88</td>
    </tr>
    <tr>
      <th>13</th>
      <td>23</td>
      <td>Male</td>
      <td>77</td>
      <td>Piety, Guardian of Riddles</td>
      <td>3.68</td>
      <td>Seorithstilis90</td>
    </tr>
    <tr>
      <th>14</th>
      <td>40</td>
      <td>Male</td>
      <td>44</td>
      <td>Bonecarvin Battle Axe</td>
      <td>2.46</td>
      <td>Sundast29</td>
    </tr>
    <tr>
      <th>15</th>
      <td>21</td>
      <td>Male</td>
      <td>96</td>
      <td>Blood-Forged Skeletal Spine</td>
      <td>4.77</td>
      <td>Haellysu29</td>
    </tr>
    <tr>
      <th>16</th>
      <td>22</td>
      <td>Female</td>
      <td>123</td>
      <td>Twilight's Carver</td>
      <td>1.14</td>
      <td>Sundista85</td>
    </tr>
    <tr>
      <th>17</th>
      <td>22</td>
      <td>Female</td>
      <td>59</td>
      <td>Lightning, Etcher of the King</td>
      <td>1.65</td>
      <td>Aenarap34</td>
    </tr>
    <tr>
      <th>18</th>
      <td>28</td>
      <td>Male</td>
      <td>91</td>
      <td>Celeste</td>
      <td>3.71</td>
      <td>Iskista88</td>
    </tr>
    <tr>
      <th>19</th>
      <td>31</td>
      <td>Male</td>
      <td>177</td>
      <td>Winterthorn, Defender of Shifting Worlds</td>
      <td>4.89</td>
      <td>Assossa43</td>
    </tr>
    <tr>
      <th>20</th>
      <td>24</td>
      <td>Male</td>
      <td>78</td>
      <td>Glimmer, Ender of the Moon</td>
      <td>2.33</td>
      <td>Irith83</td>
    </tr>
    <tr>
      <th>21</th>
      <td>15</td>
      <td>Male</td>
      <td>3</td>
      <td>Phantomlight</td>
      <td>1.79</td>
      <td>Iaralrgue74</td>
    </tr>
    <tr>
      <th>22</th>
      <td>11</td>
      <td>Female</td>
      <td>11</td>
      <td>Brimstone</td>
      <td>2.52</td>
      <td>Deural48</td>
    </tr>
    <tr>
      <th>23</th>
      <td>19</td>
      <td>Male</td>
      <td>183</td>
      <td>Dragon's Greatsword</td>
      <td>2.36</td>
      <td>Chanosia65</td>
    </tr>
    <tr>
      <th>24</th>
      <td>11</td>
      <td>Male</td>
      <td>65</td>
      <td>Conqueror Adamantite Mace</td>
      <td>1.96</td>
      <td>Qarwen67</td>
    </tr>
    <tr>
      <th>25</th>
      <td>21</td>
      <td>Male</td>
      <td>63</td>
      <td>Stormfury Mace</td>
      <td>1.27</td>
      <td>Idai61</td>
    </tr>
    <tr>
      <th>26</th>
      <td>29</td>
      <td>Male</td>
      <td>132</td>
      <td>Persuasion</td>
      <td>3.90</td>
      <td>Aerithllora36</td>
    </tr>
    <tr>
      <th>27</th>
      <td>34</td>
      <td>Male</td>
      <td>106</td>
      <td>Crying Steel Sickle</td>
      <td>2.29</td>
      <td>Assastnya25</td>
    </tr>
    <tr>
      <th>28</th>
      <td>15</td>
      <td>Male</td>
      <td>49</td>
      <td>The Oculus, Token of Lost Worlds</td>
      <td>4.23</td>
      <td>Ilariarin45</td>
    </tr>
    <tr>
      <th>29</th>
      <td>16</td>
      <td>Female</td>
      <td>45</td>
      <td>Glinting Glass Edge</td>
      <td>2.46</td>
      <td>Phaedai25</td>
    </tr>
    <tr>
      <th>...</th>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
    </tr>
    <tr>
      <th>170</th>
      <td>9</td>
      <td>Male</td>
      <td>71</td>
      <td>Demise</td>
      <td>4.07</td>
      <td>Reulae52</td>
    </tr>
    <tr>
      <th>171</th>
      <td>21</td>
      <td>Male</td>
      <td>84</td>
      <td>Arcane Gem</td>
      <td>2.23</td>
      <td>Stryanastip77</td>
    </tr>
    <tr>
      <th>172</th>
      <td>21</td>
      <td>Male</td>
      <td>106</td>
      <td>Crying Steel Sickle</td>
      <td>2.29</td>
      <td>Iskirra45</td>
    </tr>
    <tr>
      <th>173</th>
      <td>30</td>
      <td>Male</td>
      <td>0</td>
      <td>Splinter</td>
      <td>1.82</td>
      <td>Chadadarya31</td>
    </tr>
    <tr>
      <th>174</th>
      <td>24</td>
      <td>Male</td>
      <td>182</td>
      <td>Toothpick</td>
      <td>3.48</td>
      <td>Heuli25</td>
    </tr>
    <tr>
      <th>175</th>
      <td>35</td>
      <td>Male</td>
      <td>34</td>
      <td>Retribution Axe</td>
      <td>4.14</td>
      <td>Raillydeu47</td>
    </tr>
    <tr>
      <th>176</th>
      <td>21</td>
      <td>Male</td>
      <td>182</td>
      <td>Toothpick</td>
      <td>3.48</td>
      <td>Chamadar61</td>
    </tr>
    <tr>
      <th>177</th>
      <td>34</td>
      <td>Other / Non-Disclosed</td>
      <td>155</td>
      <td>War-Forged Gold Deflector</td>
      <td>3.73</td>
      <td>Assassa38</td>
    </tr>
    <tr>
      <th>178</th>
      <td>15</td>
      <td>Male</td>
      <td>97</td>
      <td>Swan Song, Gouger Of Terror</td>
      <td>3.58</td>
      <td>Shaidanu32</td>
    </tr>
    <tr>
      <th>179</th>
      <td>40</td>
      <td>Male</td>
      <td>70</td>
      <td>Hope's End</td>
      <td>3.89</td>
      <td>Chanosiaya39</td>
    </tr>
    <tr>
      <th>180</th>
      <td>18</td>
      <td>Female</td>
      <td>89</td>
      <td>Blazefury, Protector of Delusions</td>
      <td>1.50</td>
      <td>Raeri71</td>
    </tr>
    <tr>
      <th>181</th>
      <td>24</td>
      <td>Male</td>
      <td>1</td>
      <td>Crucifer</td>
      <td>2.28</td>
      <td>Hiasri33</td>
    </tr>
    <tr>
      <th>182</th>
      <td>24</td>
      <td>Male</td>
      <td>130</td>
      <td>Alpha</td>
      <td>1.56</td>
      <td>Lisossa25</td>
    </tr>
    <tr>
      <th>183</th>
      <td>23</td>
      <td>Female</td>
      <td>87</td>
      <td>Deluge, Edge of the West</td>
      <td>2.20</td>
      <td>Sundassa93</td>
    </tr>
    <tr>
      <th>184</th>
      <td>11</td>
      <td>Male</td>
      <td>170</td>
      <td>Shadowsteel</td>
      <td>1.98</td>
      <td>Rina82</td>
    </tr>
    <tr>
      <th>185</th>
      <td>22</td>
      <td>Male</td>
      <td>167</td>
      <td>Malice, Legacy of the Queen</td>
      <td>2.38</td>
      <td>Siarinum43</td>
    </tr>
    <tr>
      <th>186</th>
      <td>40</td>
      <td>Male</td>
      <td>144</td>
      <td>Blood Infused Guardian</td>
      <td>2.86</td>
      <td>Chanosiaya39</td>
    </tr>
    <tr>
      <th>187</th>
      <td>20</td>
      <td>Female</td>
      <td>93</td>
      <td>Apocalyptic Battlescythe</td>
      <td>3.91</td>
      <td>Eurallo89</td>
    </tr>
    <tr>
      <th>188</th>
      <td>20</td>
      <td>Male</td>
      <td>78</td>
      <td>Glimmer, Ender of the Moon</td>
      <td>2.33</td>
      <td>Hirirap39</td>
    </tr>
    <tr>
      <th>189</th>
      <td>35</td>
      <td>Male</td>
      <td>179</td>
      <td>Wolf, Promise of the Moonwalker</td>
      <td>1.88</td>
      <td>Raillydeu47</td>
    </tr>
    <tr>
      <th>190</th>
      <td>30</td>
      <td>Male</td>
      <td>36</td>
      <td>Spectral Bone Axe</td>
      <td>2.98</td>
      <td>Frichaya88</td>
    </tr>
    <tr>
      <th>191</th>
      <td>20</td>
      <td>Male</td>
      <td>75</td>
      <td>Brutality Ivory Warmace</td>
      <td>1.72</td>
      <td>Aidaira26</td>
    </tr>
    <tr>
      <th>192</th>
      <td>20</td>
      <td>Male</td>
      <td>91</td>
      <td>Celeste</td>
      <td>3.71</td>
      <td>Zontibe81</td>
    </tr>
    <tr>
      <th>193</th>
      <td>19</td>
      <td>Male</td>
      <td>101</td>
      <td>Final Critic</td>
      <td>4.62</td>
      <td>Farusrian86</td>
    </tr>
    <tr>
      <th>194</th>
      <td>24</td>
      <td>Male</td>
      <td>39</td>
      <td>Betrayal, Whisper of Grieving Widows</td>
      <td>2.35</td>
      <td>Undadarla37</td>
    </tr>
    <tr>
      <th>195</th>
      <td>14</td>
      <td>Male</td>
      <td>160</td>
      <td>Azurewrath</td>
      <td>2.22</td>
      <td>Lirtossa78</td>
    </tr>
    <tr>
      <th>196</th>
      <td>20</td>
      <td>Male</td>
      <td>89</td>
      <td>Blazefury, Protector of Delusions</td>
      <td>1.50</td>
      <td>Chanirra56</td>
    </tr>
    <tr>
      <th>197</th>
      <td>20</td>
      <td>Female</td>
      <td>65</td>
      <td>Conqueror Adamantite Mace</td>
      <td>1.96</td>
      <td>Lassast89</td>
    </tr>
    <tr>
      <th>198</th>
      <td>18</td>
      <td>Male</td>
      <td>44</td>
      <td>Bonecarvin Battle Axe</td>
      <td>2.46</td>
      <td>Lisasi93</td>
    </tr>
    <tr>
      <th>199</th>
      <td>30</td>
      <td>Female</td>
      <td>180</td>
      <td>Stormcaller</td>
      <td>2.78</td>
      <td>Phadai31</td>
    </tr>
  </tbody>
</table>
<p>200 rows × 6 columns</p>
</div>




```python
#Calculate the number of purchases from the most active screen names
sn_counts = purchasedata_df["SN"].value_counts()
sn_counts
```




    Undirrala66        5
    Hailaphos89        4
    Saedue76           4
    Qarwen67           4
    Mindimnya67        4
    Sondastan54        4
    Isurria36          3
    Frichosiala98      3
    Chadossa56         3
    Lirtosia72         3
    Sondim43           3
    Seorithstilis90    3
    Yasriphos60        3
    Lisossa63          3
    Ila44              3
    Frichaya88         3
    Eusri70            3
    Aduephos78         3
    Yadanun74          3
    Mindirra92         3
    Aeduera68          3
    Aerithllora36      3
    Chanastsda67       3
    Tillyrin30         3
    Haellysu29         3
    Isursti83          3
    Chamistast30       3
    Chadjask77         3
    Haerith37          3
    Lisistaya47        3
                      ..
    Iduedru67          1
    Idairin80          1
    Ralonurin90        1
    Iral74             1
    Sundassa93         1
    Frichistast39      1
    Marilsa48          1
    Aerithriaphos45    1
    Phially37          1
    Airidil41          1
    Phainasu47         1
    Aillyriadru65      1
    Inguron55          1
    Eusri26            1
    Undiwinya88        1
    Frichossast75      1
    Eollym91           1
    Heunadil74         1
    Heolo60            1
    Seuthelis34        1
    Lassista97         1
    Yasur35            1
    Chanastnya43       1
    Sundim98           1
    Hirirap39          1
    Minduli80          1
    Siathecal92        1
    Iallyphos37        1
    Chadadarya31       1
    Filrion59          1
    Name: SN, Length: 573, dtype: int64




```python
# Calculate the total number of players
total_players = sn_counts.count()
total_players
```




    573




```python
# Create table to display the Total players
player_count = pd.DataFrame({"Total Players": [total_players]
                               
})
player_count
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>Total Players</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>573</td>
    </tr>
  </tbody>
</table>
</div>




```python
# Create a dataframe for total counts for each Game title
item_counts = purchasedata_df["Item Name"].value_counts()
item_counts
```




    Final Critic                                    14
    Arcane Gem                                      11
    Betrayal, Whisper of Grieving Widows            11
    Stormcaller                                     10
    Retribution Axe                                  9
    Trickster                                        9
    Woeful Adamantite Claymore                       9
    Serenity                                         9
    Crucifer                                         8
    Bonecarvin Battle Axe                            8
    Crying Steel Sickle                              8
    Splitter, Foe Of Subtlety                        8
    Darkheart                                        8
    Conqueror Adamantite Mace                        8
    Persuasion                                       7
    Feral Katana                                     7
    Blade of the Grave                               7
    Alpha                                            7
    Darkheart, Butcher of the Champion               7
    Spectral Diamond Doomblade                       7
    Victor Iron Spikes                               7
    Alpha, Oath of Zeal                              7
    Torchlight, Bond of Storms                       7
    Brimstone                                        7
    Wolf, Promise of the Moonwalker                  7
    Extraction, Quickblade Of Trembling Hands        7
    Amnesia                                          6
    Venom Claymore                                   6
    Alpha, Reach of Ending Hope                      6
    Soul Infused Crystal                             6
                                                    ..
    Oathbreaker, Last Hope of the Breaking Storm     2
    Malice, Legacy of the Queen                      2
    Piece Maker                                      2
    Pursuit, Cudgel of Necromancy                    2
    Winter's Bite                                    2
    Warped Iron Scimitar                             2
    Foul Titanium Battle Axe                         2
    Blood-Forged Skeletal Spine                      2
    Tranquility, Razor of Black Magic                2
    Freak's Bite, Favor of Holy Might                2
    Warped Fetish                                    2
    Worldbreaker                                     2
    Yearning Crusher                                 2
    Dreamsong                                        2
    Thorn, Conqueror of the Corrupted                2
    Blazefury, Protector of Delusions                2
    Bloodlord's Fetish                               1
    Sun Strike, Jaws of Twisted Visions              1
    Lightning, Etcher of the King                    1
    Soul-Forged Steel Shortsword                     1
    Exiled Mithril Longsword                         1
    Splinter                                         1
    Phantomlight                                     1
    Verdict                                          1
    Foul Edge                                        1
    Hellreaver, Heirloom of Inception                1
    Downfall, Scalpel Of The Emperor                 1
    Ghastly Adamantite Protector                     1
    Flux, Destroyer of Due Diligence                 1
    Exiled Doomblade                                 1
    Name: Item Name, Length: 179, dtype: int64




```python
#Calculate the number of unique items
number_of_unique_items = item_counts.count()
number_of_unique_items
```




    179




```python
# Calculate the average purchase price for each game title
average_purchase_price = purchasedata_df["Price"].mean()
average_purchase_price


```




    2.931192307692303




```python
# Calculate the total revenue for all game titles
total_revenue = purchasedata_df["Price"].sum()
total_revenue
```




    2286.3299999999999




```python
# Calculate total number of purchases
number_of_purchases = purchasedata_df["Item ID"].count()
number_of_purchases
```




    780




```python
# Create a new table consolodating above calculations
purchase_analysis = pd.DataFrame({"Number of Unique Items": [number_of_unique_items],
                                   "Average Price": [average_purchase_price],
                                   "Number of Purchases": [number_of_purchases],
                                   "Total Revenue": [total_revenue]
})
purchase_analysis
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>Average Price</th>
      <th>Number of Purchases</th>
      <th>Number of Unique Items</th>
      <th>Total Revenue</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>2.93</td>
      <td>780</td>
      <td>179</td>
      <td>2,286.33</td>
    </tr>
  </tbody>
</table>
</div>




```python
#Arrive at gender counts for Male, Female and Other/Not Specified
gender_counts = purchasedata_df["Gender"].value_counts()
gender_counts.head()
```




    Male                     633
    Female                   136
    Other / Non-Disclosed     11
    Name: Gender, dtype: int64




```python
# Calculate percentage of male gamers
gender_male = purchasedata_df["Gender"].value_counts()['Male']
percent_male = (gender_male)/(total_gender)*100
percent_male
```




    81.15384615384616




```python
# Calculate percentage of female gamers
gender_female = purchasedata_df["Gender"].value_counts()['Female']
percent_female = (gender_female)/(total_gender)*100
percent_female
```




    17.435897435897434




```python
# Calculate percentage of gamers that did not specify gender
gender_other = total_gender - gender_male - gender_female
percent_other = (gender_other)/(total_gender)*100
percent_other
```




    1.4102564102564104




```python
# Arrive at percentages for each gender demographic
gender_percent_count = [percent_male,percent_female,percent_other]
gender_percent_count
```




    [81.15384615384616, 17.435897435897434, 1.4102564102564104]




```python
# Create summary table to display gender demographics
gender_summary_table = pd.DataFrame({
    "Total Count": gender_counts,
    "Percentage of Players": gender_percent_count
})
gender_summary_table.head()
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>Percentage of Players</th>
      <th>Total Count</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Male</th>
      <td>81.15</td>
      <td>633</td>
    </tr>
    <tr>
      <th>Female</th>
      <td>17.44</td>
      <td>136</td>
    </tr>
    <tr>
      <th>Other / Non-Disclosed</th>
      <td>1.41</td>
      <td>11</td>
    </tr>
  </tbody>
</table>
</div>




```python
# Game purchases made by female
purchase_female = genderpurchase_df.loc[genderpurchase_df["Gender"] == "Female"]
purchase_female.head()
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>Gender</th>
      <th>Price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>7</th>
      <td>Female</td>
      <td>3.32</td>
    </tr>
    <tr>
      <th>16</th>
      <td>Female</td>
      <td>1.14</td>
    </tr>
    <tr>
      <th>17</th>
      <td>Female</td>
      <td>1.65</td>
    </tr>
    <tr>
      <th>22</th>
      <td>Female</td>
      <td>2.52</td>
    </tr>
    <tr>
      <th>29</th>
      <td>Female</td>
      <td>2.46</td>
    </tr>
  </tbody>
</table>
</div>




```python
# Total revenue generated from females
total_purchase_female = purchase_female["Price"].sum()
total_purchase_female
```




    382.90999999999997




```python
# Average purchase price for females
average_purchase_female = purchase_female["Price"].mean()
average_purchase_female
```




    2.815514705882352




```python
# Average purchase price for male
purchase_male = genderpurchase_df.loc[genderpurchase_df["Gender"] == "Male"]
purchase_male.head()
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>Gender</th>
      <th>Price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>Male</td>
      <td>3.37</td>
    </tr>
    <tr>
      <th>1</th>
      <td>Male</td>
      <td>2.32</td>
    </tr>
    <tr>
      <th>2</th>
      <td>Male</td>
      <td>2.46</td>
    </tr>
    <tr>
      <th>3</th>
      <td>Male</td>
      <td>1.36</td>
    </tr>
    <tr>
      <th>4</th>
      <td>Male</td>
      <td>1.27</td>
    </tr>
  </tbody>
</table>
</div>




```python
# Total revenue from male
total_purchase_male = purchase_male["Price"].sum()
total_purchase_male
```




    1867.6800000000001




```python
# Average purchase price for male
average_purchase_male = purchase_male["Price"].mean()
average_purchase_male
```




    2.9505213270142154




```python
# Average purchase price for player that did not specify gender
purchase_other = genderpurchase_df.loc[genderpurchase_df["Gender"] == "Other / Non-Disclosed"]
purchase_other.head()
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>Gender</th>
      <th>Price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>177</th>
      <td>Other / Non-Disclosed</td>
      <td>3.73</td>
    </tr>
    <tr>
      <th>209</th>
      <td>Other / Non-Disclosed</td>
      <td>2.21</td>
    </tr>
    <tr>
      <th>244</th>
      <td>Other / Non-Disclosed</td>
      <td>2.36</td>
    </tr>
    <tr>
      <th>267</th>
      <td>Other / Non-Disclosed</td>
      <td>1.96</td>
    </tr>
    <tr>
      <th>276</th>
      <td>Other / Non-Disclosed</td>
      <td>4.00</td>
    </tr>
  </tbody>
</table>
</div>




```python
# Total purchase price for gamer that did not specify gender
total_purchase_other = purchase_other["Price"].sum()
total_purchase_other
```




    35.739999999999995




```python
# Average purchase price for gamer that did not specify gender
average_purchase_other = purchase_other["Price"].mean()
average_purchase_other
```




    3.2490909090909086




```python
# Create list of average purchase price for each gender
gender_average_purchase = [average_purchase_male,average_purchase_female,average_purchase_other]
gender_average_purchase
```




    [2.9505213270142154, 2.815514705882352, 3.2490909090909086]




```python
# Create list total revenue by each gender
gender_total_purchase = [total_purchase_male,total_purchase_female,total_purchase_other]
gender_total_purchase
```




    [1867.6800000000001, 382.90999999999997, 35.739999999999995]




```python
normalized_purchase_male = total_purchase_male / gender_counts["Male"]
normalized_purchase_male
```




    2.9505213270142181




```python
normalized_purchase_female = total_purchase_female / gender_counts['Female']
normalized_purchase_female
```




    2.8155147058823529




```python
normalized_purchase_other = total_purchase_other / gender_counts['Other / Non-Disclosed']
normalized_purchase_other
```




    3.2490909090909086




```python
normalized_totals = [normalized_purchase_male, normalized_purchase_female, normalized_purchase_other]
normalized_totals
```




    [2.9505213270142181, 2.8155147058823529, 3.2490909090909086]




```python
# Creating a new DataFrame using both gender and gender_percentage
gender_purchase_summary_table = pd.DataFrame({
    "Purchase Count": gender_counts,
    "Average Purchase Price": gender_average_purchase,
    "Total Purchase Value": gender_total_purchase,
    "Normalized Totals": normalized_totals
})
gender_purchase_summary_table.head()
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>Average Purchase Price</th>
      <th>Normalized Totals</th>
      <th>Purchase Count</th>
      <th>Total Purchase Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Male</th>
      <td>2.95</td>
      <td>2.95</td>
      <td>633</td>
      <td>1,867.68</td>
    </tr>
    <tr>
      <th>Female</th>
      <td>2.82</td>
      <td>2.82</td>
      <td>136</td>
      <td>382.91</td>
    </tr>
    <tr>
      <th>Other / Non-Disclosed</th>
      <td>3.25</td>
      <td>3.25</td>
      <td>11</td>
      <td>35.74</td>
    </tr>
  </tbody>
</table>
</div>




```python
# Create data frame purchases by age(s)
agepurchase_df = purchasedata_df[["Age", "Price"]]
agepurchase_df.head()
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>Age</th>
      <th>Price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>38</td>
      <td>3.37</td>
    </tr>
    <tr>
      <th>1</th>
      <td>21</td>
      <td>2.32</td>
    </tr>
    <tr>
      <th>2</th>
      <td>34</td>
      <td>2.46</td>
    </tr>
    <tr>
      <th>3</th>
      <td>21</td>
      <td>1.36</td>
    </tr>
    <tr>
      <th>4</th>
      <td>23</td>
      <td>1.27</td>
    </tr>
  </tbody>
</table>
</div>




```python
# What Age is the largest in the set?
purchasedata_df["Age"].max()

```




    45




```python
# What Age is the smallest in the set?
purchasedata_df["Age"].min()
```




    7




```python
# Create bins to support age groups
bins = [10,14,19,24,29,34,39,40]
```


```python
# Create label for each group
group_labels =["<10," "10-14", "15-19", "20-24", "25-29", "30-34", "35-39", "40+"]
```


```python
pd.cut(agepurchase_df["Age"],bins,labels=group_labels).head()
```




    0    35-39
    1    20-24
    2    30-34
    3    20-24
    4    20-24
    Name: Age, dtype: category
    Categories (7, object): [<10,10-14 < 15-19 < 20-24 < 25-29 < 30-34 < 35-39 < 40+]




```python
# Add Total Count to the set and appply age ranges
agepurchase_df["Total Count"] = pd.cut(agepurchase_df["Age"], bins, labels=group_labels)
```

    C:\Users\Ray\Anaconda3\envs\PythonData\lib\site-packages\ipykernel_launcher.py:1: SettingWithCopyWarning: 
    A value is trying to be set on a copy of a slice from a DataFrame.
    Try using .loc[row_indexer,col_indexer] = value instead
    
    See the caveats in the documentation: http://pandas.pydata.org/pandas-docs/stable/indexing.html#indexing-view-versus-copy
      """Entry point for launching an IPython kernel.
    


```python
# Display table with Age and Price and map to Age groups
agepurchase_df.head(790)
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>Age</th>
      <th>Price</th>
      <th>Total Count</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>38</td>
      <td>3.37</td>
      <td>35-39</td>
    </tr>
    <tr>
      <th>1</th>
      <td>21</td>
      <td>2.32</td>
      <td>20-24</td>
    </tr>
    <tr>
      <th>2</th>
      <td>34</td>
      <td>2.46</td>
      <td>30-34</td>
    </tr>
    <tr>
      <th>3</th>
      <td>21</td>
      <td>1.36</td>
      <td>20-24</td>
    </tr>
    <tr>
      <th>4</th>
      <td>23</td>
      <td>1.27</td>
      <td>20-24</td>
    </tr>
    <tr>
      <th>5</th>
      <td>20</td>
      <td>1.73</td>
      <td>20-24</td>
    </tr>
    <tr>
      <th>6</th>
      <td>20</td>
      <td>4.57</td>
      <td>20-24</td>
    </tr>
    <tr>
      <th>7</th>
      <td>29</td>
      <td>3.32</td>
      <td>25-29</td>
    </tr>
    <tr>
      <th>8</th>
      <td>25</td>
      <td>2.77</td>
      <td>25-29</td>
    </tr>
    <tr>
      <th>9</th>
      <td>31</td>
      <td>4.53</td>
      <td>30-34</td>
    </tr>
    <tr>
      <th>10</th>
      <td>24</td>
      <td>3.81</td>
      <td>20-24</td>
    </tr>
    <tr>
      <th>11</th>
      <td>20</td>
      <td>1.55</td>
      <td>20-24</td>
    </tr>
    <tr>
      <th>12</th>
      <td>30</td>
      <td>4.06</td>
      <td>30-34</td>
    </tr>
    <tr>
      <th>13</th>
      <td>23</td>
      <td>3.68</td>
      <td>20-24</td>
    </tr>
    <tr>
      <th>14</th>
      <td>40</td>
      <td>2.46</td>
      <td>40+</td>
    </tr>
    <tr>
      <th>15</th>
      <td>21</td>
      <td>4.77</td>
      <td>20-24</td>
    </tr>
    <tr>
      <th>16</th>
      <td>22</td>
      <td>1.14</td>
      <td>20-24</td>
    </tr>
    <tr>
      <th>17</th>
      <td>22</td>
      <td>1.65</td>
      <td>20-24</td>
    </tr>
    <tr>
      <th>18</th>
      <td>28</td>
      <td>3.71</td>
      <td>25-29</td>
    </tr>
    <tr>
      <th>19</th>
      <td>31</td>
      <td>4.89</td>
      <td>30-34</td>
    </tr>
    <tr>
      <th>20</th>
      <td>24</td>
      <td>2.33</td>
      <td>20-24</td>
    </tr>
    <tr>
      <th>21</th>
      <td>15</td>
      <td>1.79</td>
      <td>15-19</td>
    </tr>
    <tr>
      <th>22</th>
      <td>11</td>
      <td>2.52</td>
      <td>&lt;10,10-14</td>
    </tr>
    <tr>
      <th>23</th>
      <td>19</td>
      <td>2.36</td>
      <td>15-19</td>
    </tr>
    <tr>
      <th>24</th>
      <td>11</td>
      <td>1.96</td>
      <td>&lt;10,10-14</td>
    </tr>
    <tr>
      <th>25</th>
      <td>21</td>
      <td>1.27</td>
      <td>20-24</td>
    </tr>
    <tr>
      <th>26</th>
      <td>29</td>
      <td>3.90</td>
      <td>25-29</td>
    </tr>
    <tr>
      <th>27</th>
      <td>34</td>
      <td>2.29</td>
      <td>30-34</td>
    </tr>
    <tr>
      <th>28</th>
      <td>15</td>
      <td>4.23</td>
      <td>15-19</td>
    </tr>
    <tr>
      <th>29</th>
      <td>16</td>
      <td>2.46</td>
      <td>15-19</td>
    </tr>
    <tr>
      <th>...</th>
      <td>...</td>
      <td>...</td>
      <td>...</td>
    </tr>
    <tr>
      <th>750</th>
      <td>23</td>
      <td>1.28</td>
      <td>20-24</td>
    </tr>
    <tr>
      <th>751</th>
      <td>26</td>
      <td>1.88</td>
      <td>25-29</td>
    </tr>
    <tr>
      <th>752</th>
      <td>15</td>
      <td>2.37</td>
      <td>15-19</td>
    </tr>
    <tr>
      <th>753</th>
      <td>20</td>
      <td>2.28</td>
      <td>20-24</td>
    </tr>
    <tr>
      <th>754</th>
      <td>31</td>
      <td>1.36</td>
      <td>30-34</td>
    </tr>
    <tr>
      <th>755</th>
      <td>22</td>
      <td>1.88</td>
      <td>20-24</td>
    </tr>
    <tr>
      <th>756</th>
      <td>22</td>
      <td>1.20</td>
      <td>20-24</td>
    </tr>
    <tr>
      <th>757</th>
      <td>35</td>
      <td>2.52</td>
      <td>35-39</td>
    </tr>
    <tr>
      <th>758</th>
      <td>20</td>
      <td>1.21</td>
      <td>20-24</td>
    </tr>
    <tr>
      <th>759</th>
      <td>19</td>
      <td>2.20</td>
      <td>15-19</td>
    </tr>
    <tr>
      <th>760</th>
      <td>29</td>
      <td>4.06</td>
      <td>25-29</td>
    </tr>
    <tr>
      <th>761</th>
      <td>28</td>
      <td>1.24</td>
      <td>25-29</td>
    </tr>
    <tr>
      <th>762</th>
      <td>36</td>
      <td>4.39</td>
      <td>35-39</td>
    </tr>
    <tr>
      <th>763</th>
      <td>27</td>
      <td>4.32</td>
      <td>25-29</td>
    </tr>
    <tr>
      <th>764</th>
      <td>25</td>
      <td>3.89</td>
      <td>25-29</td>
    </tr>
    <tr>
      <th>765</th>
      <td>15</td>
      <td>1.49</td>
      <td>15-19</td>
    </tr>
    <tr>
      <th>766</th>
      <td>22</td>
      <td>2.23</td>
      <td>20-24</td>
    </tr>
    <tr>
      <th>767</th>
      <td>20</td>
      <td>1.21</td>
      <td>20-24</td>
    </tr>
    <tr>
      <th>768</th>
      <td>21</td>
      <td>3.56</td>
      <td>20-24</td>
    </tr>
    <tr>
      <th>769</th>
      <td>24</td>
      <td>3.74</td>
      <td>20-24</td>
    </tr>
    <tr>
      <th>770</th>
      <td>22</td>
      <td>3.27</td>
      <td>20-24</td>
    </tr>
    <tr>
      <th>771</th>
      <td>24</td>
      <td>1.03</td>
      <td>20-24</td>
    </tr>
    <tr>
      <th>772</th>
      <td>15</td>
      <td>2.07</td>
      <td>15-19</td>
    </tr>
    <tr>
      <th>773</th>
      <td>21</td>
      <td>2.46</td>
      <td>20-24</td>
    </tr>
    <tr>
      <th>774</th>
      <td>24</td>
      <td>1.14</td>
      <td>20-24</td>
    </tr>
    <tr>
      <th>775</th>
      <td>22</td>
      <td>3.62</td>
      <td>20-24</td>
    </tr>
    <tr>
      <th>776</th>
      <td>14</td>
      <td>1.36</td>
      <td>&lt;10,10-14</td>
    </tr>
    <tr>
      <th>777</th>
      <td>20</td>
      <td>4.15</td>
      <td>20-24</td>
    </tr>
    <tr>
      <th>778</th>
      <td>20</td>
      <td>1.72</td>
      <td>20-24</td>
    </tr>
    <tr>
      <th>779</th>
      <td>23</td>
      <td>3.61</td>
      <td>20-24</td>
    </tr>
  </tbody>
</table>
<p>780 rows × 3 columns</p>
</div>




```python
age_group = agepurchase_df.groupby("Total Count")
```


```python
# Calculate percentages of occurrence for each age group
age_percent = age_group["Age"].count()/len(age_group)
age_percent
```




    Total Count
    <10,10-14                   4.43
    15-19                      19.00
    20-24                      48.00
    25-29                      17.86
    30-34                       9.14
    35-39                       6.00
    40+                         2.00
    Name: Age, dtype: float64




```python
# Create total revenue for each age group
age_total_purchase = age_group["Price"].sum()
age_total_purchase
```




    Total Count
    <10,10-14                  83.79
    15-19                     386.42
    20-24                     978.77
    25-29                     370.33
    30-34                     197.25
    35-39                     119.40
    40+                        45.11
    Name: Price, dtype: float64




```python
# Creating a new DataFrame for Age demographics
age_purchase_summary_table = pd.DataFrame({
    "Total Count": age_group["Age"].count(),
    "Percentage of Players": age_percent,
    "Total Purchase Value": age_total_purchase
    
})
age_purchase_summary_table.head(10)
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>Percentage of Players</th>
      <th>Total Count</th>
      <th>Total Purchase Value</th>
    </tr>
    <tr>
      <th>Total Count</th>
      <th></th>
      <th></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>&lt;10,10-14</th>
      <td>4.43</td>
      <td>31</td>
      <td>83.79</td>
    </tr>
    <tr>
      <th>15-19</th>
      <td>19.00</td>
      <td>133</td>
      <td>386.42</td>
    </tr>
    <tr>
      <th>20-24</th>
      <td>48.00</td>
      <td>336</td>
      <td>978.77</td>
    </tr>
    <tr>
      <th>25-29</th>
      <td>17.86</td>
      <td>125</td>
      <td>370.33</td>
    </tr>
    <tr>
      <th>30-34</th>
      <td>9.14</td>
      <td>64</td>
      <td>197.25</td>
    </tr>
    <tr>
      <th>35-39</th>
      <td>6.00</td>
      <td>42</td>
      <td>119.40</td>
    </tr>
    <tr>
      <th>40+</th>
      <td>2.00</td>
      <td>14</td>
      <td>45.11</td>
    </tr>
  </tbody>
</table>
</div>




```python
# Display total revenue by age group
age_purchase = age_group["Price"].sum()
age_purchase
```




    Total Count
    <10,10-14                  83.79
    15-19                     386.42
    20-24                     978.77
    25-29                     370.33
    30-34                     197.25
    35-39                     119.40
    40+                        45.11
    Name: Price, dtype: float64




```python
# Create avg. purchase for each age group
age_average = age_group["Price"].mean()
age_average
```




    Total Count
    <10,10-14                   2.70
    15-19                       2.91
    20-24                       2.91
    25-29                       2.96
    30-34                       3.08
    35-39                       2.84
    40+                         3.22
    Name: Price, dtype: float64




```python
normalized_average = age_purchase / age_group["Age"].count()
normalized_average

```




    Total Count
    <10,10-14                   2.70
    15-19                       2.91
    20-24                       2.91
    25-29                       2.96
    30-34                       3.08
    35-39                       2.84
    40+                         3.22
    dtype: float64




```python
# Creating table summary for purchase analysis by age
purchase_by_age_summary_table = pd.DataFrame({
    "Purchase Count": age_group["Age"].count(),
    "Average Purchase Price": age_average,
    "Total Purchase Value": age_purchase,
    "Normalized Totals": normalized_average
    
  
})
purchase_by_age_summary_table.head()
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>Average Purchase Price</th>
      <th>Normalized Totals</th>
      <th>Purchase Count</th>
      <th>Total Purchase Value</th>
    </tr>
    <tr>
      <th>Total Count</th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>&lt;10,10-14</th>
      <td>2.70</td>
      <td>2.70</td>
      <td>31</td>
      <td>83.79</td>
    </tr>
    <tr>
      <th>15-19</th>
      <td>2.91</td>
      <td>2.91</td>
      <td>133</td>
      <td>386.42</td>
    </tr>
    <tr>
      <th>20-24</th>
      <td>2.91</td>
      <td>2.91</td>
      <td>336</td>
      <td>978.77</td>
    </tr>
    <tr>
      <th>25-29</th>
      <td>2.96</td>
      <td>2.96</td>
      <td>125</td>
      <td>370.33</td>
    </tr>
    <tr>
      <th>30-34</th>
      <td>3.08</td>
      <td>3.08</td>
      <td>64</td>
      <td>197.25</td>
    </tr>
  </tbody>
</table>
</div>




```python
# Create new data frame of screen name and price
screen_namepurchase_df = purchasedata_df[["SN", "Price"]]
screen_namepurchase_df.head()
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>SN</th>
      <th>Price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>Aelalis34</td>
      <td>3.37</td>
    </tr>
    <tr>
      <th>1</th>
      <td>Eolo46</td>
      <td>2.32</td>
    </tr>
    <tr>
      <th>2</th>
      <td>Assastnya25</td>
      <td>2.46</td>
    </tr>
    <tr>
      <th>3</th>
      <td>Pheusrical25</td>
      <td>1.36</td>
    </tr>
    <tr>
      <th>4</th>
      <td>Aela59</td>
      <td>1.27</td>
    </tr>
  </tbody>
</table>
</div>




```python
# Create group of Screen Names
sn_group = screen_namepurchase_df.groupby("SN")
sn_group
```




    <pandas.core.groupby.DataFrameGroupBy object at 0x000001C383A62240>




```python
# Create average purchase for each user
sn_avg_purchase = sn_group["Price"].mean()
sn_avg_purchase
```




    SN
    Adairialis76                      2.46
    Aduephos78                        2.23
    Aeduera68                         1.93
    Aela49                            2.46
    Aela59                            1.27
    Aelalis34                         2.53
    Aelin32                           3.14
    Aeliriam77                        3.36
    Aeliriarin93                      2.04
    Aeliru63                          4.49
    Aellyria80                        4.32
    Aellyrialis39                     3.15
    Aellysup38                        3.61
    Aelollo59                         1.55
    Aenarap34                         1.65
    Aenasu69                          3.27
    Aeral43                           2.72
    Aeral85                           4.25
    Aeral97                           2.35
    Aeri84                            3.30
    Aerillorin70                      1.88
    Aerithllora36                     3.48
    Aerithnucal56                     1.59
    Aerithnuphos61                    1.69
    Aerithriaphos45                   2.38
    Aesty51                           1.82
    Aesur96                           4.66
    Aethe80                           2.32
    Aethedru70                        2.97
    Aidain51                          3.42
                              ...         
    Undjaskla97                       4.57
    Undjasksya56                      4.53
    Undotesta33                       3.90
    Wailin72                          2.04
    Whaestysu86                       4.08
    Yadacal26                         1.93
    Yadaisuir65                       4.28
    Yadanun74                         3.03
    Yalaeria91                        1.88
    Yaliru88                          3.71
    Yalo71                            2.41
    Yalostiphos68                     2.37
    Yaralnura48                       2.10
    Yararmol43                        1.55
    Yarirarn35                        2.88
    Yaristi64                         1.24
    Yarithllodeu72                    2.19
    Yarithphos28                      2.35
    Yarithsurgue62                    2.41
    Yarmol79                          2.91
    Yarolwen77                        3.49
    Yasriphos60                       3.47
    Yasrisu92                         2.60
    Yasur35                           2.78
    Yasur85                           2.04
    Yasurra52                         3.14
    Yathecal72                        3.88
    Yathecal82                        2.41
    Zhisrisu83                        1.23
    Zontibe81                         3.71
    Name: Price, Length: 573, dtype: float64




```python
# Calculate total revenue generated from each customer/screen name
sn_total_purchase = sn_group["Price"].sum()
sn_total_purchase
```




    SN
    Adairialis76                      2.46
    Aduephos78                        6.70
    Aeduera68                         5.80
    Aela49                            2.46
    Aela59                            1.27
    Aelalis34                         5.06
    Aelin32                           3.14
    Aeliriam77                        6.72
    Aeliriarin93                      2.04
    Aeliru63                          8.98
    Aellyria80                        4.32
    Aellyrialis39                     3.15
    Aellysup38                        3.61
    Aelollo59                         1.55
    Aenarap34                         1.65
    Aenasu69                          3.27
    Aeral43                           2.72
    Aeral85                           4.25
    Aeral97                           2.35
    Aeri84                            6.60
    Aerillorin70                      1.88
    Aerithllora36                    10.45
    Aerithnucal56                     3.18
    Aerithnuphos61                    1.69
    Aerithriaphos45                   2.38
    Aesty51                           1.82
    Aesur96                           4.66
    Aethe80                           2.32
    Aethedru70                        2.97
    Aidain51                          6.84
                              ...         
    Undjaskla97                       4.57
    Undjasksya56                      4.53
    Undotesta33                       3.90
    Wailin72                          2.04
    Whaestysu86                       4.08
    Yadacal26                         1.93
    Yadaisuir65                       8.56
    Yadanun74                         9.09
    Yalaeria91                        1.88
    Yaliru88                          3.71
    Yalo71                            2.41
    Yalostiphos68                     2.37
    Yaralnura48                       4.19
    Yararmol43                        1.55
    Yarirarn35                        2.88
    Yaristi64                         1.24
    Yarithllodeu72                    2.19
    Yarithphos28                      2.35
    Yarithsurgue62                    4.81
    Yarmol79                          2.91
    Yarolwen77                        6.98
    Yasriphos60                      10.40
    Yasrisu92                         2.60
    Yasur35                           2.78
    Yasur85                           2.04
    Yasurra52                         3.14
    Yathecal72                        7.77
    Yathecal82                        2.41
    Zhisrisu83                        2.46
    Zontibe81                         3.71
    Name: Price, Length: 573, dtype: float64




```python
# Creating a new DataFrame to purchase analysis by customer or screenname
purchase_by_screenname_summary_table = pd.DataFrame({
    "Purchase Count": sn_counts,
    "Average Purchase Price": sn_avg_purchase,
    "Total Purchase Value": sn_total_purchase
    
  
})
purchase_by_screenname_summary_table.head()
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>Average Purchase Price</th>
      <th>Purchase Count</th>
      <th>Total Purchase Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Adairialis76</th>
      <td>2.46</td>
      <td>1</td>
      <td>2.46</td>
    </tr>
    <tr>
      <th>Aduephos78</th>
      <td>2.23</td>
      <td>3</td>
      <td>6.70</td>
    </tr>
    <tr>
      <th>Aeduera68</th>
      <td>1.93</td>
      <td>3</td>
      <td>5.80</td>
    </tr>
    <tr>
      <th>Aela49</th>
      <td>2.46</td>
      <td>1</td>
      <td>2.46</td>
    </tr>
    <tr>
      <th>Aela59</th>
      <td>1.27</td>
      <td>1</td>
      <td>1.27</td>
    </tr>
  </tbody>
</table>
</div>




```python
# Create new data frame for Item name and price
item_namepurchase_df = purchasedata_df[["Item Name", "Price"]]
item_namepurchase_df.head()
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>Item Name</th>
      <th>Price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>Bone Crushing Silver Skewer</td>
      <td>3.37</td>
    </tr>
    <tr>
      <th>1</th>
      <td>Stormbringer, Dark Blade of Ending Misery</td>
      <td>2.32</td>
    </tr>
    <tr>
      <th>2</th>
      <td>Primitive Blade</td>
      <td>2.46</td>
    </tr>
    <tr>
      <th>3</th>
      <td>Final Critic</td>
      <td>1.36</td>
    </tr>
    <tr>
      <th>4</th>
      <td>Stormfury Mace</td>
      <td>1.27</td>
    </tr>
  </tbody>
</table>
</div>




```python
# Group purchases by Item name
item_group = item_namepurchase_df.groupby("Item Name")
item_group
```




    <pandas.core.groupby.DataFrameGroupBy object at 0x000001C383696D30>




```python
# Arrive at the counts for each title
item_most_popular = item_namepurchase_df["Item Name"].value_counts()
item_most_popular
# Arrive at most popular game by number of purchases and sort in ascending order
item_sorted_most_popular = item_most_popular.sort_values(ascending = False)
item_sorted_most_popular

```




    Final Critic                                 14
    Arcane Gem                                   11
    Betrayal, Whisper of Grieving Widows         11
    Stormcaller                                  10
    Retribution Axe                               9
    Trickster                                     9
    Woeful Adamantite Claymore                    9
    Serenity                                      9
    Splitter, Foe Of Subtlety                     8
    Conqueror Adamantite Mace                     8
    Darkheart                                     8
    Bonecarvin Battle Axe                         8
    Crying Steel Sickle                           8
    Crucifer                                      8
    Victor Iron Spikes                            7
    Extraction, Quickblade Of Trembling Hands     7
    Wolf, Promise of the Moonwalker               7
    Brimstone                                     7
    Torchlight, Bond of Storms                    7
    Alpha, Oath of Zeal                           7
    Blade of the Grave                            7
    Spectral Diamond Doomblade                    7
    Darkheart, Butcher of the Champion            7
    Alpha                                         7
    Feral Katana                                  7
    Persuasion                                    7
    Singed Scalpel                                6
    Blazeguard, Reach of Eternity                 6
    Avenger                                       6
    Orenmir                                       6
                                                 ..
    Yearning Crusher                              2
    Dreamsong                                     2
    Thorn, Conqueror of the Corrupted             2
    Blazefury, Protector of Delusions             2
    Foul Titanium Battle Axe                      2
    Blood-Forged Skeletal Spine                   2
    Deathraze                                     2
    Warped Iron Scimitar                          2
    Winter's Bite                                 2
    Pursuit, Cudgel of Necromancy                 2
    Piece Maker                                   2
    Malice, Legacy of the Queen                   2
    Renewed Skeletal Katana                       2
    Emberling, Defender of Delusions              2
    Fusion Pummel                                 2
    Vindictive Glass Edge                         2
    Hellreaver, Heirloom of Inception             1
    Foul Edge                                     1
    Phantomlight                                  1
    Downfall, Scalpel Of The Emperor              1
    Ghastly Adamantite Protector                  1
    Verdict                                       1
    Flux, Destroyer of Due Diligence              1
    Splinter                                      1
    Exiled Mithril Longsword                      1
    Soul-Forged Steel Shortsword                  1
    Lightning, Etcher of the King                 1
    Sun Strike, Jaws of Twisted Visions           1
    Bloodlord's Fetish                            1
    Exiled Doomblade                              1
    Name: Item Name, Length: 179, dtype: int64




```python
# Calculate total revenue for each item name
item_total_purchase = item_group["Price"].sum()
item_total_purchase
```




    Item Name
    Abyssal Shard                                              6.12
    Aetherius, Boon of the Blessed                            19.00
    Agatha                                                     9.55
    Alpha                                                     10.92
    Alpha, Oath of Zeal                                       20.16
    Alpha, Reach of Ending Hope                                9.30
    Amnesia                                                   21.42
    Apocalyptic Battlescythe                                  15.64
    Arcane Gem                                                24.53
    Avenger                                                   24.96
    Azurewrath                                                11.10
    Betrayal, Whisper of Grieving Widows                      25.85
    Betrayer                                                   5.01
    Blade of the Grave                                        11.83
    Blazefury, Protector of Delusions                          3.00
    Blazeguard, Reach of Eternity                             24.00
    Blindscythe                                               18.30
    Blood Infused Guardian                                    14.30
    Blood-Forged Skeletal Spine                                9.54
    Bloodlord's Fetish                                         2.28
    Bone Crushing Silver Skewer                               10.11
    Bonecarvin Battle Axe                                     19.68
    Brimstone                                                 17.64
    Brutality Ivory Warmace                                    6.88
    Celeste                                                   22.26
    Celeste, Incarnation of the Corrupted                      9.24
    Chaos, Ender of the End                                   11.37
    Conqueror Adamantite Mace                                 15.68
    Crucifer                                                  20.20
    Crying Steel Sickle                                       18.32
                                                       ...         
    Thorn, Conqueror of the Corrupted                          4.08
    Thorn, Satchel of Dark Souls                              27.06
    Thunderfury Scimitar                                       9.06
    Toothpick                                                 17.40
    Torchlight, Bond of Storms                                12.39
    Tranquility, Razor of Black Magic                          4.94
    Trickster                                                 18.63
    Twilight's Carver                                          5.70
    Undead Crusader                                           18.68
    Unending Tyranny                                           3.63
    Unholy Wand                                                7.52
    Vengeance Cleaver                                         11.10
    Venom Claymore                                            16.32
    Verdict                                                    3.40
    Victor Iron Spikes                                        24.85
    Vindictive Glass Edge                                      8.52
    War-Forged Gold Deflector                                 11.19
    Warmonger, Gift of Suffering's End                        23.76
    Warped Diamond Crusader                                   13.98
    Warped Fetish                                              4.82
    Warped Iron Scimitar                                       8.16
    Whistling Mithril Warblade                                17.28
    Winter's Bite                                              2.78
    Winterthorn, Defender of Shifting Worlds                  19.56
    Woeful Adamantite Claymore                                11.16
    Wolf                                                       9.20
    Wolf, Promise of the Moonwalker                           13.16
    Worldbreaker                                               6.58
    Yearning Crusher                                           2.12
    Yearning Mageblade                                         7.16
    Name: Price, Length: 179, dtype: float64




```python
# Sort table by game that generated the most revenue
item_sorted_total_purchases = item_total_purchase.sort_values(ascending = False)
item_sorted_total_purchases
```




    Item Name
    Final Critic                                                  38.60
    Retribution Axe                                               37.26
    Stormcaller                                                   34.65
    Spectral Diamond Doomblade                                    29.75
    Orenmir                                                       29.70
    Singed Scalpel                                                29.22
    Splitter, Foe Of Subtlety                                     28.88
    Thorn, Satchel of Dark Souls                                  27.06
    Fiery Glass Crusader                                          26.70
    Betrayal, Whisper of Grieving Widows                          25.85
    Darkheart                                                     25.20
    Avenger                                                       24.96
    Darkheart, Butcher of the Champion                            24.92
    Victor Iron Spikes                                            24.85
    Arcane Gem                                                    24.53
    Persuasion                                                    24.15
    Stormfury Longsword                                           24.15
    Blazeguard, Reach of Eternity                                 24.00
    Warmonger, Gift of Suffering's End                            23.76
    Hopeless Ebon Dualblade                                       23.75
    Extraction, Quickblade Of Trembling Hands                     23.73
    Purgatory, Gem of Regret                                      23.46
    Mercenary Sabre                                               22.85
    Ritual Mace                                                   22.44
    Celeste                                                       22.26
    Rage, Legacy of the Lone Victor                               21.60
    Dawne                                                         21.50
    Amnesia                                                       21.42
    The Oculus, Token of Lost Worlds                              21.15
    Massacre                                                      20.52
                                                           ...         
    Tranquility, Razor of Black Magic                              4.94
    Warped Fetish                                                  4.82
    Oathbreaker, Last Hope of the Breaking Storm                   4.82
    Malice, Legacy of the Queen                                    4.76
    Renewed Skeletal Katana                                        4.74
    Nirvana                                                        4.44
    Hero Cane                                                      4.12
    Thorn, Conqueror of the Corrupted                              4.08
    Putrid Fan                                                     3.96
    Unending Tyranny                                               3.63
    Rusty Skull                                                    3.60
    Hellreaver, Heirloom of Inception                              3.59
    Orbit                                                          3.48
    Verdict                                                        3.40
    Ghastly Adamantite Protector                                   3.30
    Exiled Mithril Longsword                                       3.25
    Downfall, Scalpel Of The Emperor                               3.20
    Frenzy, Defender of the Harvest                                3.18
    Flux, Destroyer of Due Diligence                               3.04
    Blazefury, Protector of Delusions                              3.00
    Winter's Bite                                                  2.78
    Sun Strike, Jaws of Twisted Visions                            2.64
    Foul Edge                                                      2.38
    Bloodlord's Fetish                                             2.28
    Yearning Crusher                                               2.12
    Exiled Doomblade                                               1.92
    Splinter                                                       1.82
    Phantomlight                                                   1.79
    Lightning, Etcher of the King                                  1.65
    Soul-Forged Steel Shortsword                                   1.16
    Name: Price, Length: 179, dtype: float64




```python
# Calculate item price for each item name
item_price = item_total_purchase/item_most_popular
item_price
```




    Abyssal Shard                                              2.04
    Aetherius, Boon of the Blessed                             4.75
    Agatha                                                     1.91
    Alpha                                                      1.56
    Alpha, Oath of Zeal                                        2.88
    Alpha, Reach of Ending Hope                                1.55
    Amnesia                                                    3.57
    Apocalyptic Battlescythe                                   3.91
    Arcane Gem                                                 2.23
    Avenger                                                    4.16
    Azurewrath                                                 2.22
    Betrayal, Whisper of Grieving Widows                       2.35
    Betrayer                                                   1.67
    Blade of the Grave                                         1.69
    Blazefury, Protector of Delusions                          1.50
    Blazeguard, Reach of Eternity                              4.00
    Blindscythe                                                3.66
    Blood Infused Guardian                                     2.86
    Blood-Forged Skeletal Spine                                4.77
    Bloodlord's Fetish                                         2.28
    Bone Crushing Silver Skewer                                3.37
    Bonecarvin Battle Axe                                      2.46
    Brimstone                                                  2.52
    Brutality Ivory Warmace                                    1.72
    Celeste                                                    3.71
    Celeste, Incarnation of the Corrupted                      2.31
    Chaos, Ender of the End                                    3.79
    Conqueror Adamantite Mace                                  1.96
    Crucifer                                                   2.53
    Crying Steel Sickle                                        2.29
                                                       ...         
    Thorn, Conqueror of the Corrupted                          2.04
    Thorn, Satchel of Dark Souls                               4.51
    Thunderfury Scimitar                                       3.02
    Toothpick                                                  3.48
    Torchlight, Bond of Storms                                 1.77
    Tranquility, Razor of Black Magic                          2.47
    Trickster                                                  2.07
    Twilight's Carver                                          1.14
    Undead Crusader                                            4.67
    Unending Tyranny                                           1.21
    Unholy Wand                                                1.88
    Vengeance Cleaver                                          3.70
    Venom Claymore                                             2.72
    Verdict                                                    3.40
    Victor Iron Spikes                                         3.55
    Vindictive Glass Edge                                      4.26
    War-Forged Gold Deflector                                  3.73
    Warmonger, Gift of Suffering's End                         3.96
    Warped Diamond Crusader                                    4.66
    Warped Fetish                                              2.41
    Warped Iron Scimitar                                       4.08
    Whistling Mithril Warblade                                 4.32
    Winter's Bite                                              1.39
    Winterthorn, Defender of Shifting Worlds                   4.89
    Woeful Adamantite Claymore                                 1.24
    Wolf                                                       1.84
    Wolf, Promise of the Moonwalker                            1.88
    Worldbreaker                                               3.29
    Yearning Crusher                                           1.06
    Yearning Mageblade                                         1.79
    Length: 179, dtype: float64




```python
# Creating a new DataFrame to purchase analysis for most popular items
most_popular_summary_table = pd.DataFrame({
    "Purchase Count": item_most_popular.sort_values(ascending = False),
    "Item Price": item_price,
    "Total Purchase Value": item_total_purchase
    
  
})
most_popular_summary_table.head()
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>Item Price</th>
      <th>Purchase Count</th>
      <th>Total Purchase Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Abyssal Shard</th>
      <td>2.04</td>
      <td>3</td>
      <td>6.12</td>
    </tr>
    <tr>
      <th>Aetherius, Boon of the Blessed</th>
      <td>4.75</td>
      <td>4</td>
      <td>19.00</td>
    </tr>
    <tr>
      <th>Agatha</th>
      <td>1.91</td>
      <td>5</td>
      <td>9.55</td>
    </tr>
    <tr>
      <th>Alpha</th>
      <td>1.56</td>
      <td>7</td>
      <td>10.92</td>
    </tr>
    <tr>
      <th>Alpha, Oath of Zeal</th>
      <td>2.88</td>
      <td>7</td>
      <td>20.16</td>
    </tr>
  </tbody>
</table>
</div>




```python
# Creating a new DataFrame to purchase analysis for most profitable items
most_profitable_summary_table = pd.DataFrame({
    "Purchase Count": item_most_popular,
    "Item Price": item_price,
    "Total Purchase Value": item_total_purchase.sort_values(ascending = False)
    
  
})
most_profitable_summary_table.head()
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>Item Price</th>
      <th>Purchase Count</th>
      <th>Total Purchase Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Abyssal Shard</th>
      <td>2.04</td>
      <td>3</td>
      <td>6.12</td>
    </tr>
    <tr>
      <th>Aetherius, Boon of the Blessed</th>
      <td>4.75</td>
      <td>4</td>
      <td>19.00</td>
    </tr>
    <tr>
      <th>Agatha</th>
      <td>1.91</td>
      <td>5</td>
      <td>9.55</td>
    </tr>
    <tr>
      <th>Alpha</th>
      <td>1.56</td>
      <td>7</td>
      <td>10.92</td>
    </tr>
    <tr>
      <th>Alpha, Oath of Zeal</th>
      <td>2.88</td>
      <td>7</td>
      <td>20.16</td>
    </tr>
  </tbody>
</table>
</div>


