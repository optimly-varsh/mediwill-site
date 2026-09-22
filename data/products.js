// Mediwill Life Sciences — Product Catalogue
// Paste this entire file into: data/products.js
// Hierarchy: Therapeutic Division → Category → Product Family → Variant → Strength → Composition → Dosage Form

const CATALOGUE = [
  ["CLOWILL","Antiplatelet Care",["Cardiac"],"Clopidogrel",[["CLOWILL 75","75 mg","Clopidogrel","Tablet"]]],
  ["ROSUWILL","Antiplatelet Care",["Cardiac"],"Rosuvastatin + Clopidogrel",[["ROSUWILL AC 10","10 mg + 75 mg","Rosuvastatin + Clopidogrel","Tablet"],["ROSUWILL AC 20","20 mg + 75 mg","Rosuvastatin + Clopidogrel","Tablet"]]],
  ["TELWILL","Hypertension Management",["Cardiac"],"Variant-specific formulations",[["TELWILL 20","20 mg","Telmisartan","Tablet"],["TELWILL 40","40 mg","Telmisartan","Tablet"],["TELWILL-H 40/80","40 mg + 80 mg","Telmisartan + Hydrochlorothiazide","Tablet"],["TELWILL-AM","40 mg + 5 mg","Telmisartan + Amlodipine","Tablet"],["TELWILL-AMH","40 mg + 5 mg + 12.5 mg","Telmisartan + Amlodipine + Hydrochlorothiazide","Tablet"],["TELWILL-CT","40 mg + 6.25 mg","Telmisartan + Chlorthalidone","Tablet"],["TELWILL-CL","10 mg + 40 mg","Cilnidipine + Telmisartan","Tablet"],["TELWILL-M 25/50","25 mg + 50 mg","Telmisartan + Metoprolol","Tablet"]]],
  ["ATOWILL","Lipid Management",["Cardiac"],"Atorvastatin",[["ATOWILL 10","10 mg","Atorvastatin","Tablet"],["ATOWILL 20","20 mg","Atorvastatin","Tablet"],["ATOWILL 40","40 mg","Atorvastatin","Tablet"]]],
  ["M-LOW AT","Lipid Management",["Cardiac"],"Amlodipine + Atenolol",[["M-LOW AT 5/50","5 mg + 50 mg","Amlodipine + Atenolol","Tablet"]]],
  ["ROSUWILL","Lipid Management",["Cardiac"],"Variant-specific formulations",[["ROSUWILL 10","10 mg","Rosuvastatin","Tablet"],["ROSUWILL 20","20 mg","Rosuvastatin","Tablet"],["ROSUWILL F 10/160","10 mg + 160 mg","Rosuvastatin + Fenofibrate","Tablet"]]],
  ["FLUPIWILL","Thyroid / Nephro Care",["Cardiac"],"Flupirtine",[["FLUPIWILL 100","100 mg","Flupirtine","Capsule"]]],
  ["M-LIV","Thyroid / Nephro Care",["Cardiac"],"Silymarin + Antioxidants + Amino Acids + Micronutrients",[["M-LIV","","Silymarin + Antioxidants + Amino Acids + Micronutrients",""]]],
  ["RENOWILL","Thyroid / Nephro Care",["Cardiac"],"Taurine + Acetylcysteine",[["RENOWILL 500/150","500 mg + 150 mg","Taurine + Acetylcysteine","Tablet"]]],
  ["THYROWILL","Thyroid / Nephro Care",["Cardiac"],"Thyroxine",[["THYROWILL 12.5","12.5 mcg","Thyroxine","Tablet"],["THYROWILL 25","25 mcg","Thyroxine","Tablet"],["THYROWILL 50","50 mcg","Thyroxine","Tablet"],["THYROWILL 75","75 mcg","Thyroxine","Tablet"],["THYROWILL 100","100 mcg","Thyroxine","Tablet"],["THYROWILL 125","125 mcg","Thyroxine","Tablet"]]],
  ["URSOWILL","Thyroid / Nephro Care",["Cardiac"],"Ursodeoxycholic Acid",[["URSOWILL 300","300 mg","Ursodeoxycholic Acid","Tablet"]]],

  ["DAPAWILL","Advanced Glycemic Management",["Diabetes"],"Variant-specific formulations",[["DAPAWILL M 10/500","10 mg + 500 mg","Dapagliflozin + Metformin","Tablet"],["DAPAWILL V 10/100","10 mg + 100 mg","Dapagliflozin + Vildagliptin","Tablet"],["DAPAWILL S","","Dapagliflozin + Sitagliptin","Tablet"],["DAPAWILL SM","10 mg + 100 mg + 500 mg","Dapagliflozin + Sitagliptin + Metformin","Tablet"]]],
  ["GLIWILL","Advanced Glycemic Management",["Diabetes"],"Glimepiride + Voglibose + Metformin",[["GLIWILL VM 1.2","1 mg + 0.2 mg + 500 mg","Glimepiride + Voglibose + Metformin","Tablet"],["GLIWILL VM 1.3","1 mg + 0.3 mg + 500 mg","Glimepiride + Voglibose + Metformin","Tablet"],["GLIWILL VM 2.2","2 mg + 0.2 mg + 500 mg","Glimepiride + Voglibose + Metformin","Tablet"]]],
  ["GLIWILL","Combination Glycemic Management",["Diabetes"],"Variant-specific formulations",[["GLIWILL M1","1 mg + 500 mg","Glimepiride + Metformin","Tablet"],["GLIWILL M2","2 mg + 500 mg","Glimepiride + Metformin","Tablet"],["GLIWILL M1 FORTE","1 mg + 1000 mg","Glimepiride + Metformin","Tablet"],["GLIWILL M2 FORTE","2 mg + 1000 mg","Glimepiride + Metformin","Tablet"],["GLIWILL PM1","1 mg + 500 mg + 15 mg","Glimepiride + Metformin + Pioglitazone","Tablet"],["GLIWILL PM2","2 mg + 500 mg + 15 mg","Glimepiride + Metformin + Pioglitazone","Tablet"]]],
  ["SIWILL","Combination Glycemic Management",["Diabetes"],"Sitagliptin + Metformin",[["SIWILL M 50/500","50 mg + 500 mg","Sitagliptin + Metformin","Tablet"]]],
  ["TINAWILL","Combination Glycemic Management",["Diabetes"],"Teneligliptin + Metformin",[["TINAWILL M 20/500","20 mg + 500 mg","Teneligliptin + Metformin","Tablet"]]],
  ["VIDAWILL","Combination Glycemic Management",["Diabetes"],"Vildagliptin + Metformin",[["VIDAWILL M 50/500","50 mg + 500 mg","Vildagliptin + Metformin","Tablet"]]],
  ["DAPAWILL","Glycemic Management",["Diabetes"],"Dapagliflozin",[["DAPAWILL 5","5 mg","Dapagliflozin","Tablet"],["DAPAWILL 10","10 mg","Dapagliflozin","Tablet"]]],
  ["GLIWILL","Glycemic Management",["Diabetes"],"Glimepiride",[["GLIWILL 1","1 mg","Glimepiride","Tablet"],["GLIWILL 2","2 mg","Glimepiride","Tablet"]]],
  ["TINAWILL","Glycemic Management",["Diabetes"],"Teneligliptin",[["TINAWILL 20","20 mg","Teneligliptin","Tablet"]]],
  ["VIDAWILL","Glycemic Management",["Diabetes"],"Vildagliptin",[["VIDAWILL 50","50 mg","Vildagliptin","Tablet"]]],
  ["VOGWILL","Glycemic Management",["Diabetes"],"Voglibose",[["VOGWILL 0.2","0.2 mg","Voglibose","Tablet"],["VOGWILL 0.3","0.3 mg","Voglibose","Tablet"]]],

  ["BOFIX","Advanced Pain, Spasm & Recovery",["Orthopedic"],"Cissus Quadrangularis + Calcium K2-7",[["BOFIX","","Cissus Quadrangularis + Calcium K2-7",""]]],
  ["CHYMOWILL","Advanced Pain, Spasm & Recovery",["Orthopedic"],"Variant-specific formulations",[["CHYMOWILL DP","100,000 Armour + 50 mg","Trypsin + Chymotrypsin + Diclofenac Potassium",""],["CHYMOWILL DS","200,000 units","Trypsin + Chymotrypsin",""]]],
  ["E-CART","Advanced Pain, Spasm & Recovery",["Orthopedic"],"L-Carnitine + Vitamin E",[["E-CART","400 mg + 400 IU","L-Carnitine + Vitamin E",""]]],
  ["M-NAC","Advanced Pain, Spasm & Recovery",["Orthopedic"],"Tramadol + Paracetamol",[["M-NAC ULTRA","37.5 mg + 325 mg","Tramadol + Paracetamol","Tablet"]]],
  ["TENDOWILL","Advanced Pain, Spasm & Recovery",["Orthopedic"],"Collagen Peptide + Rose Hip Extract + Sodium Hyaluronate + Chondroitin",[["TENDOWILL","","Collagen Peptide + Rose Hip Extract + Sodium Hyaluronate + Chondroitin",""]]],
  ["THIOWILL","Advanced Pain, Spasm & Recovery",["Orthopedic"],"Thiocolchicoside",[["THIOWILL 8","8 mg","Thiocolchicoside","Tablet"]]],
  ["TRAMAWILL","Advanced Pain, Spasm & Recovery",["Orthopedic"],"Tramadol",[["TRAMAWILL 100 SR","100 mg SR","Tramadol","Tablet"]]],
  ["CALCIWILL","Bone, Joint & Chronic Care",["Orthopedic"],"Calciferol",[["CALCIWILL 60K","60,000 IU","Calciferol",""]]],
  ["FEBUWILL","Bone, Joint & Chronic Care",["Orthopedic"],"Febuxostat",[["FEBUWILL 40","40 mg","Febuxostat","Tablet"]]],
  ["M-COB","Bone, Joint & Chronic Care",["Orthopedic"],"Variant-specific formulations",[["M-COB GP","500 mcg + 300 mg","Methylcobalamin + Gabapentin","Tablet"],["M-COB PG","1500 mcg + 75 mg","Methylcobalamin + Pregabalin","Capsule"],["M-COB FORTE","1500 mcg + 1 mg + 0.5 mg","Methylcobalamin + L-Methylfolate + Pyridoxal","Tablet"],["M-COB NP","1500 mcg + 10 mg + 75 mg","Methylcobalamin + Nortriptyline + Pregabalin","Tablet"]]],
  ["M-COB/FORTE","Bone, Joint & Chronic Care",["Orthopedic"],"Methylcobalamin",[["M-COB/FORTE INJ","500 / 1500 mcg","Methylcobalamin","Injection"]]],
  ["OSTEOWILL-DGM","Bone, Joint & Chronic Care",["Orthopedic"],"Diacerein + Glucosamine + MSM",[["OSTEOWILL-DGM","40 mg + 750 mg + 250 mg","Diacerein + Glucosamine + MSM","Tablet"]]],
  ["RUMAWILL","Bone, Joint & Chronic Care",["Orthopedic"],"Hydroxychloroquine",[["RUMAWILL","200 mg","Hydroxychloroquine","Tablet"]]],
  ["SAZOWILL","Bone, Joint & Chronic Care",["Orthopedic"],"Sulfasalazine",[["SAZOWILL DS","1000 mg","Sulfasalazine","Tablet"]]],

  ["3SB","Injectable & Advanced Care",["Orthopedic"],"Cefoperazone + Sulbactam",[["3SB 1.5GM INJ","1 g + 500 mg","Cefoperazone + Sulbactam","Injection"]]],
  ["CEFUWILL","Injectable & Advanced Care",["Orthopedic"],"Cefuroxime",[["CEFUWILL 1.5GM INJ","1.5 g","Cefuroxime","Injection"]]],
  ["CP-TAZ","Injectable & Advanced Care",["Orthopedic"],"Cefepime + Tazobactam",[["CP-TAZ 1.125GM INJ","1 g + 125 mg","Cefepime + Tazobactam","Injection"]]],
  ["CTZ","Injectable & Advanced Care",["Orthopedic"],"Ceftazidime + Tazobactam",[["CTZ 1.125GM INJ","1 g + 125 mg","Ceftazidime + Tazobactam","Injection"]]],
  ["HYLOWILL","Injectable & Advanced Care",["Orthopedic"],"Sodium Hyaluronate",[["HYLOWILL 2ML/6ML","1%","Sodium Hyaluronate","Injection"]]],
  ["LIZOWILL","Injectable & Advanced Care",["Orthopedic"],"Linezolid",[["LIZOWILL IV","200 mg / 100 mL","Linezolid","Injection"]]],
  ["MEROWILL","Injectable & Advanced Care",["Orthopedic"],"Meropenem",[["MEROWILL 1GM INJ","1 g","Meropenem","Injection"],["MEROWILL 500 INJ","500 mg","Meropenem","Injection"]]],
  ["MIKAWILL","Injectable & Advanced Care",["Orthopedic"],"Amikacin",[["MIKAWILL 500 INJ","500 mg","Amikacin","Injection"]]],
  ["MOXIWILL","Injectable & Advanced Care",["Orthopedic"],"Amoxicillin + Clavulanate",[["MOXIWILL 1.2GM INJ","1 g + 200 mg","Amoxicillin + Clavulanate","Injection"]]],
  ["NANDROWILL","Injectable & Advanced Care",["Orthopedic"],"Nandrolone Decanoate",[["NANDROWILL 50MG INJ","50 mg","Nandrolone Decanoate","Injection"]]],
  ["ONE-SB","Injectable & Advanced Care",["Orthopedic"],"Cefoperazone + Sulbactam",[["ONE-SB 1GM INJ","500 mg + 500 mg","Cefoperazone + Sulbactam","Injection"]]],
  ["SANZONE","Injectable & Advanced Care",["Orthopedic"],"Ceftriaxone",[["SANZONE 1GM INJ","1 g","Ceftriaxone","Injection"]]],
  ["SANZONE-S","Injectable & Advanced Care",["Orthopedic"],"Ceftriaxone + Sulbactam",[["SANZONE-S 1.5GM INJ","1 g + 500 mg","Ceftriaxone + Sulbactam","Injection"]]],
  ["SANZONE-TZ","Injectable & Advanced Care",["Orthopedic"],"Ceftriaxone + Tazobactam",[["SANZONE-TZ 1.125GM INJ","1 g + 125 mg","Ceftriaxone + Tazobactam","Injection"]]],
  ["TAZOWILL-P","Injectable & Advanced Care",["Orthopedic"],"Piperacillin + Tazobactam",[["TAZOWILL-P 4.5GM INJ","4 g + 500 mg","Piperacillin + Tazobactam","Injection"]]],
  ["TRIWILL","Injectable & Advanced Care",["Orthopedic"],"Triamcinolone Acetonide",[["TRIWILL 40 INJ","40 mg","Triamcinolone Acetonide","Injection"]]],
  ["ZOLEWILL","Injectable & Advanced Care",["Orthopedic"],"Zoledronic Acid",[["ZOLEWILL INJ/IV","5 mg / 100 mL","Zoledronic Acid","Injection"]]],

  ["EX","Pain & Inflammation",["Orthopedic"],"Variant-specific formulations",[["EX 90","90 mg","Etoricoxib","Tablet"],["EX T4","60 mg + 4 mg","Etoricoxib + Thiocolchicoside","Tablet"],["EX T8","60 mg + 8 mg","Etoricoxib + Thiocolchicoside","Tablet"],["EX P","60 mg + 325 mg","Etoricoxib + Paracetamol","Tablet"]]],
  ["LX","Pain & Inflammation",["Orthopedic"],"Lornoxicam + Paracetamol",[["LX P4","4 mg + 325 mg","Lornoxicam + Paracetamol","Tablet"],["LX P8","8 mg + 325 mg","Lornoxicam + Paracetamol","Tablet"]]],
  ["M-NAC","Pain & Inflammation",["Orthopedic","Anti-Infective"],"Variant-specific formulations",[["M-NAC P","100 mg + 325 mg","Aceclofenac + Paracetamol","Tablet"],["M-NAC T4","100 mg + 4 mg","Aceclofenac + Thiocolchicoside","Tablet"],["M-NAC T8","100 mg + 8 mg","Aceclofenac + Thiocolchicoside","Tablet"],["M-NAC PLUS","100 mg + 325 mg + 15 mg","Aceclofenac + Paracetamol + Serratiopeptidase","Tablet"],["M-NAC S","40 mg + 10 mg","Diclofenac + Serratiopeptidase","Tablet"],["M-NAC INJ","75 mg","Diclofenac","Injection"]]],
  ["PX","Pain & Inflammation",["Orthopedic"],"Piroxicam",[["PX DT","20 mg","Piroxicam","Tablet"],["PX INJ","20 mg","Piroxicam","Injection"]]],

  ["3SB","Anti-Infective Core",["Anti-Infective"],"Cefoperazone + Sulbactam",[["3SB 1.5GM","1 g + 500 mg","Cefoperazone + Sulbactam","Injection"]]],
  ["CDM","Anti-Infective Core",["Anti-Infective"],"Variant-specific formulations",[["CDM 200","200 mg","Cefpodoxime","Tablet"],["CDM CV","200 mg + 125 mg","Cefpodoxime + Clavulanic Acid","Tablet"]]],
  ["CEFUWILL","Anti-Infective Core",["Anti-Infective"],"Cefuroxime",[["CEFUWILL 500","500 mg","Cefuroxime","Tablet"],["CEFUWILL 1.5GM","1.5 g","Cefuroxime","Injection"]]],
  ["CP-TAZ","Anti-Infective Core",["Anti-Infective"],"Cefepime + Tazobactam",[["CP-TAZ 1.125GM","1 g + 125 mg","Cefepime + Tazobactam","Injection"]]],
  ["CTZ","Anti-Infective Core",["Anti-Infective"],"Ceftazidime + Tazobactam",[["CTZ 1.125GM","1 g + 125 mg","Ceftazidime + Tazobactam","Injection"]]],
  ["CX","Anti-Infective Core",["Anti-Infective"],"Variant-specific formulations",[["CX 200","200 mg","Cefixime","Tablet"],["CX CV","200 mg + 125 mg","Cefixime + Clavulanic Acid","Tablet"],["CX AZ","200 mg + 250 mg + 2.5 million spores","Cefixime + Azithromycin + Lactic Acid Bacillus","Tablet"],["CX O","200 mg + 200 mg","Cefixime + Ofloxacin","Tablet"]]],
  ["LIZOWILL","Anti-Infective Core",["Anti-Infective"],"Linezolid",[["LIZOWILL 600","600 mg","Linezolid","Tablet"],["LIZOWILL IV","200 mg / 100 mL","Linezolid","Infusion"]]],
  ["MEROWILL","Anti-Infective Core",["Anti-Infective"],"Meropenem",[["MEROWILL 500","500 mg","Meropenem","Injection"],["MEROWILL 1GM","1000 mg","Meropenem","Injection"]]],
  ["MIKAWILL","Anti-Infective Core",["Anti-Infective"],"Amikacin",[["MIKAWILL 500","500 mg","Amikacin","Injection"]]],
  ["MOXIWILL","Anti-Infective Core",["Anti-Infective"],"Variant-specific formulations",[["MOXIWILL LCV","625 mg","Amoxicillin + Clavulanic Acid","Tablet"],["MOXIWILL 1.2GM","1 g + 200 mg","Amoxicillin + Clavulanate","Injection"]]],
  ["ONE-SB","Anti-Infective Core",["Anti-Infective"],"Cefoperazone + Sulbactam",[["ONE-SB 1GM","500 mg + 500 mg","Cefoperazone + Sulbactam","Injection"]]],
  ["SANZONE","Anti-Infective Core",["Anti-Infective"],"Ceftriaxone",[["SANZONE 1GM","1 g","Ceftriaxone","Injection"]]],
  ["SANZONE-S","Anti-Infective Core",["Anti-Infective"],"Ceftriaxone + Sulbactam",[["SANZONE-S 1.5GM","1 g + 500 mg","Ceftriaxone + Sulbactam","Injection"]]],
  ["SANZONE-TZ","Anti-Infective Core",["Anti-Infective"],"Ceftriaxone + Tazobactam",[["SANZONE-TZ 1.125GM","1 g + 125 mg","Ceftriaxone + Tazobactam","Injection"]]],
  ["TAZOWILL-P","Anti-Infective Core",["Anti-Infective"],"Piperacillin + Tazobactam",[["TAZOWILL-P 4.5GM","4 g + 500 mg","Piperacillin + Tazobactam","Injection"]]],
  ["HEPAWILL","Hepatocare / Neuropathy",["Anti-Infective"],"L-Ornithine L-Aspartate",[["HEPAWILL INJ","","L-Ornithine L-Aspartate","Injection"]]],
  ["M-COB","Hepatocare / Neuropathy",["Anti-Infective"],"Mecobalamin",[["M-COB INJ/FORTE INJ","500 / 1500 mcg","Mecobalamin","Injection"]]],
  ["PREDWILL","Hepatocare / Neuropathy",["Anti-Infective"],"Methylprednisolone",[["PREDWILL 125/500 INJ","125 / 500 mg","Methylprednisolone","Injection"]]],
  ["STOPVOMIT","Hepatocare / Neuropathy",["Anti-Infective"],"Ondansetron",[["STOPVOMIT INJ","","Ondansetron","Injection"]]],
  ["IROWILL","Nutritional / Supportive",["Anti-Infective"],"Variant-specific formulations",[["IROWILL 100 INJ","100 mg","Iron Sucrose","Injection"],["IROWILL FCM-500","500 mg","Ferric Carboxymaltose","Injection"]]],

  ["M-PAN","Advanced Combinations",["Gastroenterology"],"Variant-specific formulations",[["M-PAN IT","40 mg + 150 mg","Pantoprazole + Itopride","Tablet"],["M-PAN HP KIT","750 mg + 40 mg + 500 mg","Amoxycillin + Pantoprazole + Clarithromycin","Kit"]]],
  ["RABEWILL","Advanced Combinations",["Gastroenterology"],"Variant-specific formulations",[["RABEWILL D","20 mg + 20 mg","Rabeprazole + Domperidone","Tablet"],["RABEWILL DSR","20 mg + 30 mg","Rabeprazole + Domperidone SR","Capsule"],["RABEWILL LS","","Rabeprazole + Levosulpiride",""]]],
  ["DIZEWILL","Iron & Prebiotic Care",["Gastroenterology"],"Digestive Enzymes + Carminatives",[["DIZEWILL","","Digestive Enzymes + Carminatives",""]]],
  ["GUTWILL","Iron & Prebiotic Care",["Gastroenterology"],"Prebiotics",[["GUTWILL","","Prebiotics",""]]],
  ["IROWILL","Iron & Prebiotic Care",["Gastroenterology"],"Variant-specific formulations",[["IROWILL HP","","Heme Iron Polypeptide",""],["IROWILL FCM","","Ferric Carboxymaltose","Injection"]]],
  ["ESOWILL","Primary Acid Control",["Gastroenterology"],"Variant-specific formulations",[["ESOWILL 40","40 mg","Esomeprazole","Tablet"],["ESOWILL DSR","40 mg + 30 mg","Esomeprazole + Domperidone SR","Capsule"]]],
  ["M-PAN","Primary Acid Control",["Gastroenterology"],"Variant-specific formulations",[["M-PAN 40","40 mg","Pantoprazole","Tablet"],["M-PAN D","40 mg + 10 mg","Pantoprazole + Domperidone","Tablet"],["M-PAN DSR","40 mg + 30 mg","Pantoprazole + Domperidone SR","Capsule"],["M-PAN INJ","40 mg","Pantoprazole","Injection"]]],
  ["RABEWILL","Primary Acid Control",["Gastroenterology"],"Rabeprazole",[["RABEWILL IV","20 mg","Rabeprazole","Injection"]]],
  ["GASOWILL","Supportive Care",["Gastroenterology"],"Disodium Hydrogen Citrate + Sodium Bicarbonate + Calcium Carbonate",[["GASOWILL","250 mg + 133.5 mg + 80 mg","Disodium Hydrogen Citrate + Sodium Bicarbonate + Calcium Carbonate",""]]],
  ["M-LIV","Supportive Care",["Gastroenterology"],"Silymarin + Antioxidants + Amino Acids + Micronutrients",[["M-LIV","","Silymarin + Antioxidants + Amino Acids + Micronutrients",""]]],
  ["URSOWILL","Supportive Care",["Gastroenterology"],"Ursodeoxycholic Acid",[["URSOWILL 300","300 mg","Ursodeoxycholic Acid","Tablet"]]],

  ["CHYMOWILL","Pain & Recovery",["Surgery"],"Trypsin + Chymotrypsin",[["CHYMOWILL DS","200,000 units","Trypsin + Chymotrypsin","Tablet"]]],
  ["M-NAC","Pain & Recovery",["Surgery"],"Aceclofenac + Paracetamol + Serratiopeptidase",[["M-NAC PLUS","100 mg + 325 mg + 15 mg","Aceclofenac + Paracetamol + Serratiopeptidase","Tablet"]]],
  ["SURGIPRO","Surgical Nutrition & Recovery",["Surgery"],"Multivitamin powder",[["SURGIPRO","","Multivitamin powder","Powder"]]],
  ["BETAWILL","Wound Care",["Surgery"],"Povidone Iodine",[["BETAWILL SOLUTION","10% w/v","Povidone Iodine","Solution"]]],

  ["FERTIWILL","Fertility & Ovulation Support",["Gynecology"],"Variant-specific formulations",[["FERTIWILL FEM","","N-Acetyl Cysteine + Coenzyme Q10 + Melatonin + Astaxanthin + Folic Acid + Vitamin B6 + Vitamin B12 + Vitamin D2","Capsule"],["FERTIWILL XT","","L-Carnitine L-Tartrate + Coenzyme Q10 + Lycopene + Cucumis Melo Extract","Tablet"]]],
  ["LETROWILL","Fertility & Ovulation Support",["Gynecology"],"Letrozole",[["LETROWILL 2.5","2.5 mg","Letrozole","Tablet"]]],
  ["CABEWILL","Hormonal & Cycle Regulation",["Gynecology"],"Cabergoline",[["CABEWILL 0.5","0.5 mg","Cabergoline","Tablet"]]],
  ["ESTRAWILL","Hormonal & Cycle Regulation",["Gynecology"],"Estradiol",[["ESTRAWILL","2 mg","Estradiol","Tablet"]]],
  ["NORWILL","Hormonal & Cycle Regulation",["Gynecology"],"Norethisterone Acetate",[["NORWILL CR-10","10 mg","Norethisterone Acetate","Controlled Release Tablet"]]],
  ["STOPWILL","Hormonal & Cycle Regulation",["Gynecology"],"Ethinyl Estradiol + Desogestrel",[["STOPWILL","0.03 mg + 0.15 mg","Ethinyl Estradiol + Desogestrel","Tablet"]]],
  ["ARGIWILL","Maternal & Nutritional Support",["Gynecology"],"L-Arginine + Proanthocyanidin",[["ARGIWILL SACHET","","L-Arginine + Proanthocyanidin","Sachet"]]],
  ["CALCIWILL","Maternal & Nutritional Support",["Gynecology"],"Variant-specific formulations",[["CALCIWILL XT","1250 mg + 250 IU + 100 mg + 1500 mcg + 1 mg + 3 mg","Calcium Carbonate + Vitamin D3 + Magnesium + Methylcobalamin + L-Methylfolate + Pyridoxine","Tablet"],["CALCIWILL 60K","60,000 IU","Calciferol","Softgel"],["CALCIWILL NANO","","Calciferol","Softgel"],["CALCIWILL D3","","Calcium + Vitamin D3","Tablet / Syrup"]]],
  ["FERROLAC","Maternal & Nutritional Support",["Gynecology"],"Ferrous Bisglycinate + Zinc Bisglycinate + Folic Acid + Vitamin B12",[["FERROLAC XT","","Ferrous Bisglycinate + Zinc Bisglycinate + Folic Acid + Vitamin B12","Tablet"]]],
  ["FOLWILL","Maternal & Nutritional Support",["Gynecology"],"Methylcobalamin + Calcium L-5-Methyl Tetrahydrofolate + Pyridoxal HCl",[["FOLWILL XT","1500 mcg + 1 mg + 30 mg","Methylcobalamin + Calcium L-5-Methyl Tetrahydrofolate + Pyridoxal HCl","Tablet"]]],
  ["FOLWILL-D","Maternal & Nutritional Support",["Gynecology"],"DHA + L-Methylfolate + Methylcobalamin + Pyridoxal 5-phosphate",[["FOLWILL-D","","DHA + L-Methylfolate + Methylcobalamin + Pyridoxal 5-phosphate","Capsule"]]],
  ["IROWILL","Maternal & Nutritional Support",["Gynecology"],"Variant-specific formulations",[["IROWILL FCM","","Ferric Carboxymaltose","Injection"],["IROWILL XT","","Ferrous Ascorbate + Folic Acid","Tablet / Syrup"],["IROWILL HP","","Heme Iron Polypeptide","Tablet"],["IROWILL INJ","","Iron Sucrose","Injection"]]],
  ["MOMS PRO","Maternal & Nutritional Support",["Gynecology"],"Protein + DHA + GLA",[["MOMS PRO","","Protein + DHA + GLA","Powder"]]],
  ["FLAVOTAB","PCOS / UTI / Support",["Gynecology"],"Flavoxate",[["FLAVOTAB","200 mg","Flavoxate","Tablet"]]],
  ["LACTOWILL","PCOS / UTI / Support",["Gynecology"],"Lactation Granules",[["LACTOWILL GRANULES","","Lactation Granules","Granules"]]],
  ["MYOWILL","PCOS / UTI / Support",["Gynecology"],"Metformin + Myo-Inositol",[["MYOWILL M","500 mg + 500 mg","Metformin + Myo-Inositol","Tablet"]]],
  ["NITROWILL","PCOS / UTI / Support",["Gynecology"],"Nitrofurantoin",[["NITROWILL SR","100 mg SR","Nitrofurantoin","Tablet"]]],
  ["TRAXAWILL","PCOS / UTI / Support",["Gynecology"],"Tranexamic Acid + Mefenamic Acid",[["TRAXAWILL MF","500 mg + 250 mg","Tranexamic Acid + Mefenamic Acid","Tablet"]]],
  ["DYDROWILL","Progesterone Therapy",["Gynecology"],"Dydrogesterone",[["DYDROWILL","10 mg","Dydrogesterone","Tablet"]]],
  ["GESTOWILL","Progesterone Therapy",["Gynecology"],"Natural Micronised Progesterone",[["GESTOWILL 200","200 mg","Natural Micronised Progesterone","Softgel"],["GESTOWILL 400","400 mg","Natural Micronised Progesterone","Softgel"],["GESTOWILL SR 200","200 mg","Natural Micronised Progesterone","Tablet"],["GESTOWILL SR 400","400 mg","Natural Micronised Progesterone","Tablet"]]],
  ["PROLUWILL","Progesterone Therapy",["Gynecology"],"Hydroxyprogesterone",[["PROLUWILL DEPOT 500","","Hydroxyprogesterone","Injection"]]]
];

export const products = CATALOGUE.map(([name, category, areas, familyComposition, variants]) => ({
  name,
  variants: variants.map(([variant]) => variant),
  composition: familyComposition,
  areas,
  category,
  variantDetails: variants.map(([variant, strength, composition, dosageForm]) => ({
    name: variant,
    strength,
    composition,
    dosageForm,
  })),
}));

export const therapeuticAreas = [
  "All",
  "Cardiac",
  "Diabetes",
  "Orthopedic",
  "Anti-Infective",
  "Gastroenterology",
  "Surgery",
  "Gynecology",
];

export const catalogueStats = {
  catalogueFamilies: products.length,
  variantCount: products.reduce(
    (total, product) => total + product.variantDetails.length,
    0
  ),
  source:
    "Mediwill product-range cards and confirmations supplied during the catalogue review",
};

export function searchProducts(query = "") {
  const q = query.trim().toLowerCase();

  if (!q) return products;

  return products.filter((product) => {
    const searchable = [
      product.name,
      product.composition,
      product.category,
      ...product.areas,
      ...product.variants,
      ...product.variantDetails.flatMap((variant) => [
        variant.name,
        variant.strength,
        variant.composition,
        variant.dosageForm,
      ]),
    ]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();

    return searchable.includes(q);
  });
}

export default products;