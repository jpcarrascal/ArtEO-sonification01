/**
 * ArtEO Sonification Project
 * 
 * This file contains the relative paths to all images in the ESA and NASA collections.
 * These structures are used for image navigation and selection in the application.
 */

// Configuration: Set which image collection to use ('esa' or 'nasa')
const activeCollection = 'esa';

// ESA image collection paths
const esaImagePaths = [
    "images-arteo-esa/Agriculture/Baja_California_Mexico.jpg",
    "images-arteo-esa/Agriculture/Hereford_Texas.jpg",
    "images-arteo-esa/Agriculture/Palm_oil_plantations.jpg",
    "images-arteo-esa/Agriculture/Rice_fields_Vietnam.jpg",
    "images-arteo-esa/Agriculture/Ries_crater_Germany.jpg",
    "images-arteo-esa/Agriculture/Sindh_Pakistan.jpg",
    "images-arteo-esa/Agriculture/South_Kalimantan_Borneo.jpg",
    "images-arteo-esa/Agriculture/Washington_US.jpg",
    "images-arteo-esa/Coastal Zones/Abu_Dhabi.jpg",
    "images-arteo-esa/Coastal Zones/Barranquilla_Colombia.jpg",
    "images-arteo-esa/Coastal Zones/Bouches-du-Rhone_France.jpg",
    "images-arteo-esa/Coastal Zones/Clarence_Strait_Australia.jpg",
    "images-arteo-esa/Coastal Zones/English_Channel.jpg",
    "images-arteo-esa/Coastal Zones/Gulf_of_Kutch_India.jpg",
    "images-arteo-esa/Coastal Zones/Gulf_of_Taranto_Italy.jpg",
    "images-arteo-esa/Coastal Zones/Montevideo_Uruguay.jpg",
    "images-arteo-esa/Coastal Zones/San_Francisco_Bay.jpg",
    "images-arteo-esa/Coastal Zones/Scandinavian_snows_highlight_std.jpg",
    "images-arteo-esa/Coastal Zones/Western_Pakistan.jpg",
    "images-arteo-esa/Deserts/Namib_Desert_pillars.jpg",
    "images-arteo-esa/Deserts/Namib_Desert.jpg",
    "images-arteo-esa/Deserts/Rub_al_Khali_desert_highlight_std.jpg",
    "images-arteo-esa/Glaciers/Glacier_Bay_Alaska.jpg",
    "images-arteo-esa/Glaciers/Melt_Ponds_in_West_Greenland.jpg",
    "images-arteo-esa/Glaciers/Northwest_Greenland.jpg",
    "images-arteo-esa/Glaciers/Svalbard.jpg",
    "images-arteo-esa/Glaciers/Vatnajoekull_Iceland.jpg",
    "images-arteo-esa/Lakes/Alberta_Canada.jpg",
    "images-arteo-esa/Lakes/Lake_Balaton_Hungary.jpg",
    "images-arteo-esa/Lakes/Lake_Balkhash_Kazakhastan.jpg",
    "images-arteo-esa/Lakes/Lake_Chad_s_shrinking_waters.gif",
    "images-arteo-esa/Lakes/Lake_Trasimeno_Italy.jpg",
    "images-arteo-esa/Lakes/Utah_s_Great_Salt_Lake.jpg",
    "images-arteo-esa/Marine/Ari_Atoll_Maldives.jpg",
    "images-arteo-esa/Marine/Earth_from_Space_Blooms_in_the_Gulf_of_Finland.jpg",
    "images-arteo-esa/Marine/Great_Bahamas_Bank.jpg",
    "images-arteo-esa/Marine/Irminger_Sea_ice_swirl.jpg",
    "images-arteo-esa/Marine/New_Zealand.jpg",
    "images-arteo-esa/Marine/Patagonia.jpg",
    "images-arteo-esa/Marine/Queensland_floods.jpg",
    "images-arteo-esa/Marine/Singapore.jpg",
    "images-arteo-esa/Marine/Tarawa_Kiribati.jpg",
    "images-arteo-esa/Mountains/Flinders_Ranges_South_Australia.jpg",
    "images-arteo-esa/Mountains/Peruvian_Andes.jpg",
    "images-arteo-esa/Mountains/Snowy_Pyrenees.jpg",
    "images-arteo-esa/Mountains/The_Alps.jpg",
    "images-arteo-esa/Mountains/Ulan_Bator_Mongolia.jpg",
    "images-arteo-esa/Rivers/Amazon_River.jpg",
    "images-arteo-esa/Rivers/Cambodian_rivers.jpg",
    "images-arteo-esa/Rivers/Colourful_Queensland_Australia.jpg",
    "images-arteo-esa/Rivers/Earth_from_Space_Bentiu_South_Sudan.jpg",
    "images-arteo-esa/Rivers/Ganges_dazzling_delta_pillars.jpg",
    "images-arteo-esa/Rivers/Lena_River_Delta.jpg",
    "images-arteo-esa/Rivers/Meeting_of_waters.jpg",
    "images-arteo-esa/Rivers/Mississippi_River.jpg",
    "images-arteo-esa/Rivers/Nushagak_Bay_Alaska.jpeg",
    "images-arteo-esa/Urban/Barcelona_Spain.jpg",
    "images-arteo-esa/Urban/Bonn_Germany.jpg",
    "images-arteo-esa/Urban/Brussels.jpg",
    "images-arteo-esa/Urban/Earth_from_Space_New_York.jpg",
    "images-arteo-esa/Urban/Milan_Italy.jpg",
    "images-arteo-esa/Urban/Nairobi_Kenya.jpg",
    "images-arteo-esa/Urban/New_York_City.jpg",
    "images-arteo-esa/Urban/Santiago_Chile.jpg",
    "images-arteo-esa/Urban/Tokyo_Bay_Japan.jpg",
    "images-arteo-esa/Volcanoes/Castelli_Romani_Italy.jpg",
    "images-arteo-esa/Volcanoes/East_Bali_Indonesia.jpg",
    "images-arteo-esa/Volcanoes/Mount_Aso_Japan.jpg",
    "images-arteo-esa/Volcanoes/Mount_Fuji_Japan.jpg"
];

// NASA image collection paths
const nasaImagePaths = [
    "images-arteo-nasa/Coastal Zones/Long-Island-Bahamas.jpg",
    "images-arteo-nasa/Coastal Zones/MackenzieRiver.jpg",
    "images-arteo-nasa/Coastal Zones/Photosynthetic pigments by land and sea.jpg",
    "images-arteo-nasa/Coastal Zones/suwannee_blackriver1-2400x2400-90.jpg",
    "images-arteo-nasa/Desert/1985 Sea-of-sand-July.jpg",
    "images-arteo-nasa/Desert/Geologic-delight-February2013.jpg",
    "images-arteo-nasa/Desert/landsat_art_kevir_1920x1200.jpg",
    "images-arteo-nasa/Desert/landsat_art_terkezi_lrg.jpg",
    "images-arteo-nasa/Glaciers/Alaskan shimmer.jpg",
    "images-arteo-nasa/Glaciers/Icefall_June-2014-1920x1200.jpg",
    "images-arteo-nasa/Glaciers/landsat_art_greenland_lrg.jpg",
    "images-arteo-nasa/Lakes/landsat_art_carnegie_lrg.jpg",
    "images-arteo-nasa/Lakes/landsat_art_dragon_lrg.jpg",
    "images-arteo-nasa/Lakes/Tibetan-depths_1920x1200-94.jpg",
    "images-arteo-nasa/Marine/ Summer blooms in the Baltic.jpg",
    "images-arteo-nasa/Marine/Blue_Lagoon-June-2013.jpg",
    "images-arteo-nasa/Marine/Churning in the Chukchi Sea.jpg",
    "images-arteo-nasa/Marine/Foxe Basin Ice Stars.jpeg",
    "images-arteo-nasa/Marine/Patagonia-blooms.jpg",
    "images-arteo-nasa/Marine/Phytoplankton-bloom.jpg",
    "images-arteo-nasa/Marine/Ship-Tracks_1920x1200-91.jpg",
    "images-arteo-nasa/Marine/The-Maldives.jpg",
    "images-arteo-nasa/Marine/Van-Gogh-from-space_1920x1200-97.jpg",
    "images-arteo-nasa/Meteorology/Extraordinary-eddies_March.jpg",
    "images-arteo-nasa/Meteorology/landsat_art_aleutian_1900x1200.jpg",
    "images-arteo-nasa/Meteorology/landsat_art_whirlpool_lrg.jpg",
    "images-arteo-nasa/Mountains/landsat_art_atlas_1900x1200-75.jpg",
    "images-arteo-nasa/Mountains/The-Himalayas-May2014.jpg",
    "images-arteo-nasa/Rivers/Bombetoka_Bay_1920x1200-81.jpg",
    "images-arteo-nasa/Rivers/Georgia patchwork_1920x1200-85.jpg",
    "images-arteo-nasa/Rivers/Kuskokwim River.jpg",
    "images-arteo-nasa/Rivers/landsat_art_ghadamis_lrg.jpg",
    "images-arteo-nasa/Rivers/Meandering Mississippi_1920x1200-87.jpg",
    "images-arteo-nasa/Rivers/Parana-River-Argentina.jpg",
    "images-arteo-nasa/Rivers/The heart of Madagascar.jpg",
    "images-arteo-nasa/Rivers/The wild, frozen Dnieper River.jpg",
    "images-arteo-nasa/Urban/Walled-off_1920x1200-99.jpg"
];

// Create an organized structure with categories
const imageCategories = {
    esa: {
        Agriculture: esaImagePaths.filter(path => path.includes('/Agriculture/')),
        'Coastal Zones': esaImagePaths.filter(path => path.includes('/Coastal Zones/')),
        Deserts: esaImagePaths.filter(path => path.includes('/Deserts/')),
        Glaciers: esaImagePaths.filter(path => path.includes('/Glaciers/')),
        Lakes: esaImagePaths.filter(path => path.includes('/Lakes/')),
        Marine: esaImagePaths.filter(path => path.includes('/Marine/')),
        Mountains: esaImagePaths.filter(path => path.includes('/Mountains/')),
        Rivers: esaImagePaths.filter(path => path.includes('/Rivers/')),
        Urban: esaImagePaths.filter(path => path.includes('/Urban/')),
        Volcanoes: esaImagePaths.filter(path => path.includes('/Volcanoes/'))
    },
    nasa: {
        'Coastal Zones': nasaImagePaths.filter(path => path.includes('/Coastal Zones/')),
        Desert: nasaImagePaths.filter(path => path.includes('/Desert/')),
        Glaciers: nasaImagePaths.filter(path => path.includes('/Glaciers/')),
        Lakes: nasaImagePaths.filter(path => path.includes('/Lakes/')),
        Marine: nasaImagePaths.filter(path => path.includes('/Marine/')),
        Meteorology: nasaImagePaths.filter(path => path.includes('/Meteorology/')),
        Mountains: nasaImagePaths.filter(path => path.includes('/Mountains/')),
        Rivers: nasaImagePaths.filter(path => path.includes('/Rivers/')),
        Urban: nasaImagePaths.filter(path => path.includes('/Urban/'))
    }
};

// Export all data structures
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        esaImagePaths,
        nasaImagePaths,
        imageCategories
    };
}
