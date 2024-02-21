const mongoose = require('mongoose');

const carData = new mongoose.Schema({
    brand: { type: String },
    model_id: { type: Number },
    model_name: { type: String },
    version_name: { type: String },
    uid: { type: Number },
    body_type: { type: String },
    fuel_type: { type: String },
    transmission_type: { type: String },
    seating_capacity: { type: Number },
    car: {
    },
    position: { type: Number },
    status: { type: String },
    color_algorithm: { type: String },
    price_algorithm: { type: String },
    full_name: { type: String },
    Specifications: { type: Object },
    Features: { type: Object },
    brand_description: { type: String },
    model_description: { type: String },
    pros: { type: String },
    cons: { type: String },
    "arai_mileage": { type: String },
    "mileage_algorithm": { type: String },
    "varient_description": { type: String },
    "zero_onehundred_kmph": { type: String },
    "zero_sixty_kmph": { type: String },
    "threehundredsixty_view_camera": { type: String },
    "third_gear_thirty_eighty_kmph": { type: String },
    "fourth_gear_fourty_onehundred_kmph": { type: String },
    "acceleration_kmph": { type: String },
    "accessory_power_outlet": { type: String },
    "active_noise_cancellation": { type: String },
    "additional_features": { type: String },
    "adjustable_head_rests": { type: String },
    "adjustable_headlights": { type: String },
    "adjustable_seats": { type: String },
    "adjustable_steering": { type: String },
    "advance_safety_features": { type: String },
    "air_conditioner": { type: String },
    "air_quality_control": { type: String },
    "alloy_wheel_size": { type: String },
    "alloy_wheels": { type: String },
    "android_auto": { type: String },
    "anti_lock_braking_system": { type: String },
    "anti_theft_alarm": { type: String },
    "anti_pinch_power_windows": { type: String },
    "anti_theft_device": { type: String },
    "apple_car_play": { type: String },
    "audio_system_remote_control": { type: String },
    "automatic_climate_control": { type: String },
    "automatic_head_lamps": { type: String },
    "battery_capacity": { type: String },
    "battery_saver": { type: String },
    "battery_type": { type: String },
    "battery_warranty": { type: String },
    "blind_spot_monitor": { type: String },
    "bluetooth_compatibility": { type: String },
    "body_type": { type: String },
    "boot_space_Litres": { type: String },
    "bore_x_stroke": { type: String },
    "brake_assist_ba": { type: String },
    "braking_onehundred_zero_kmph": { type: String },
    "braking_sixty_zero_kmph": { type: String },
    "braking_eighty_zero_kmph": { type: String },
    "cd_changer": { type: String },
    "cd_player": { type: String },
    "central_console_armrest": { type: String },
    "central_locking": { type: String },
    "centrally_mounted_fuel_tank": { type: String },
    "charging_time": { type: String },
    "charging_time_a_c": { type: String },
    "charging_time_d_c": { type: String },
    "child_safety_lock": { type: String },
    "chrome_garnish": { type: String },
    "chrome_grille": { type: String },
    "cigarette_lighter": { type: String },
    "city_driveability_twenty_eighty_kmph": { type: String },
    "city_mileage": { type: String },
    "clutch_lock": { type: String },
    "clutchtype": { type: String },
    "cng_fuel_tank_capacity_litres": { type: String },
    "cng_highway_mileage": { type: String },
    "cng_mileage_arai": { type: String },
    "compass": { type: String },
    "compression_ratio": { type: String },
    "connectivity": { type: String },
    "cornering_foglamps": { type: String },
    "cornering_headlights": { type: String },
    "crash_sensor": { type: String },
    "cruise_control": { type: String },
    "cup_holders_front": { type: String },
    "cup_holders_rear": { type: String },
    "day_night_rear_view_mirror": { type: String },
    "diesel_fuel_tank_capacity_litres": { type: String },
    "diesel_highway_mileage": { type: String },
    "diesel_mileage_arai": { type: String },
    "diesel_overall_mileage": { type: String },
    "digital_clock": { type: String },
    "digital_odometer": { type: String },
    "displacement": { type: String },
    "door_ajar_warning": { type: String },
    "drag_coefficient": { type: String },
    "drive_modes": { type: String },
    "drive_type": { type: String },
    "driver_airbag": { type: String },
    "driver_height_adjustable_seat": { type: String },
    "driving_experience_control_eco": { type: String },
    "dual_tone_body_colour": { type: String },
    "dual_tone_dashboard": { type: String },
    "dvd_playback": { type: String },
    "ebd": { type: String },
    "electric_adjustable_seats": { type: String },
    "electric_folding_rear_view_mirror": { type: String },
    "electronic_multi_tripmeter": { type: String },
    "electronic_stability_control": { type: String },
    "emission_control_system": { type: String },
    "emission_norm_compliance": { type: String },
    "engine_check_warning": { type: String },
    "engine_immobilizer": { type: String },
    "engine_start_stop_button": { type: String },
    "engine_type": { type: String },
    "fabric_upholstery": { type: String },
    "fast_charging": { type: String },
    "find_my_car": { type: String },
    "folding_rear_seat": { type: String },
    "folding_table_in_the_rear": { type: String },
    "follow_me_home_headlamps": { type: String },
    "front_brake_type": { type: String },
    "front_cabin_width": { type: String },
    "front_fog_lights": { type: String },
    "front_headroom_mm": { type: String },
    "front_impact_beams": { type: String },
    "front_legroom": { type: String },
    "front_shoulder_room": { type: String },
    "front_suspension": { type: String },
    "front_tread_mm": { type: String },
    "fuel_system": { type: String },
    "fuel_tank_capacity": { type: String },
    "gear_box": { type: String },
    "gear_shift_indicator": { type: String },
    "geo_fence": { type: String },
    "glove_box_cooling": { type: String },
    "glove_compartment": { type: String },
    "gross_weight_kg": { type: String },
    "ground_clearance_laden": { type: String },
    "ground_clearance_unladen": { type: String },
    "ground_clearance_unladen_mm": { type: String },
    "halogen_headlamps": { type: String },
    "hands_free_tailgate": { type: String },
    "head_up_display": { type: String },
    "headlamp_washers": { type: String },
    "heated_seats_rear": { type: String },
    "heated_seats_front": { type: String },
    "heated_wing_mirror": { type: String },
    "heater": { type: String },
    "height": { type: String },
    "height_adjustable_front_seat_belts": { type: String },
    "hill_assist": { type: String },
    "hill_descent_control": { type: String },
    "impact_sensing_auto_door_unlocking": { type: String },
    "integrated_twodin_audio": { type: String },
    "intergrated_antenna": { type: String },
    "internal_storage": { type: String },
    "isofix_child_seat_mounts": { type: String },
    "kerb_weight": { type: String },
    "keyless_entry": { type: String },
    "knee_airbags": { type: String },
    "lane_change_indicator": { type: String },
    "lane_watch_camera": { type: String },
    "leather_seats": { type: String },
    "leather_wrap_gear_shift_selector": { type: String },
    "leather_wrapped_steering_wheel": { type: String },
    "led_drls": { type: String },
    "led_fog_lamps": { type: String },
    "led_headlights": { type: String },
    "led_tail_lamps": { type: String },
    "length": { type: String },
    "lighting": { type: String },
    "low_fuel_warning_light": { type: String },
    "luggage_hook_net": { type: String },
    "manually_adjustable_ext_rear_view_mirror": { type: String },
    "max_power": { type: String },
    "max_torque": { type: String },
    "mild_hybrid": { type: String },
    "mirror_link": { type: String },
    "moon_roof": { type: String },
    "motor_type": { type: String },
    "multi_function_steering_wheel": { type: String },
    "navigation_system": { type: String },
    "no_of_airbags": { type: String },
    "no_of_cylinders": { type: String },
    "no_of_doors": { type: String },
    "no_of_speakers": { type: String },
    "outside_rear_view_mirror_turn_indicators": { type: String },
    "outside_temperature_display": { type: String },
    "parking_sensors": { type: String },
    "passenger_airbag": { type: String },
    "passenger_side_rear_view_mirror": { type: String },
    "petrol_city_mileage": { type: String },
    "petrol_fuel_tank_capacity_litres": { type: String },
    "petrol_highway_mileage": { type: String },
    "petrol_mileage_arai": { type: String },
    "petrol_mileage_wltp": { type: String },
    "power_adjustable_exterior_rear_view_mirror": { type: String },
    "power_antenna": { type: String },
    "power_boot": { type: String },
    "power_door_locks": { type: String },
    "power_folding_thrid_row_seat": { type: String },
    "power_windows_front": { type: String },
    "power_windows_rear": { type: String },
    "pretensioners_force_limiter_seatbelts": { type: String },
    "projector_headlights": { type: String },
    "quarter_mile": { type: String },
    "radio": { type: String },
    "rain_sensing_wipers": { type: String },
    "range": { type: String },
    "real_time_vehicle_tracking": { type: String },
    "rear_ac_vents": { type: String },
    "rear_brake_type": { type: String },
    "rear_camera": { type: String },
    "rear_curtain": { type: String },
    "rear_defogger": { type: String },
    "rear_entertainment_system": { type: String },
    "rear_fog_lights": { type: String },
    "rear_headroom_mm": { type: String },
    "rear_legroom_mm": { type: String },
    "rear_passenger_seatbelt": { type: String },
    "rear_reading_lamp": { type: String },
    "rear_seat_centre_arm_rest": { type: String },
    "rear_seat_headrest": { type: String },
    "rear_shoulder_room": { type: String },
    "rear_spoiler": { type: String },
    "rear_suspension": { type: String },
    "rear_tread_mm": { type: String },
    "rear_window_washer": { type: String },
    "rear_window_wiper": { type: String },
    "remote_climate_control_a_c": { type: String },
    "remote_engine_start_stop": { type: String },
    "remote_fuel_lid_opener": { type: String },
    "remote_horn_light_control": { type: String },
    "remote_trunk_opener": { type: String },
    "removable_convertible_top": { type: String },
    "roof_carrier": { type: String },
    "roof_rails": { type: String },
    "seat_belt_warning": { type: String },
    "seat_lumbar_support": { type: String },
    "secondary_fuel_type": { type: String },
    "shock_absorbers_type": { type: String },
    "side_airbag_front": { type: String },
    "side_airbag_rear": { type: String },
    "side_impact_beams": { type: String },
    "side_stepper": { type: String },
    "smart_access_card_entry": { type: String },
    "smart_key_band": { type: String },
    "smoke_headlamps": { type: String },
    "sos_emergency_assistance": { type: String },
    "speakers_front": { type: String },
    "speakers_rear": { type: String },
    "speed_alert": { type: String },
    "speed_sensing_door_lock": { type: String },
    "steering_column": { type: String },
    "steering_gear_type": { type: String },
    "steering_type": { type: String },
    "steering_wheel_gearshift_paddles": { type: String },
    "sun_roof": { type: String },
    "super_charge": { type: String },
    "tachometer": { type: String },
    "tailgate_ajar": { type: String },
    "tinted_glass": { type: String },
    "top_speed_kmph": { type: String },
    "touch_screen": { type: String },
    "touch_screen_size": { type: String },
    "traction_control_system_tc_tcs": { type: String },
    "transmission_type": { type: String },
    "trunk_light": { type: String },
    "trunk_opener": { type: String },
    "turbocharger": { type: String },
    "turning_radius_metres": { type: String },
    "tyre_pressure_monitoring_system_tpms": { type: String },
    "tyre_size": { type: String },
    "tyre_type": { type: String },
    "usb_auxiliary_input": { type: String },
    "usb_charger": { type: String },
    "valve_configuration": { type: String },
    "valves_per_cylinder": { type: String },
    "vanity_mirror": { type: String },
    "vehicle_stability_control_system": { type: String },
    "ventilated_seats": { type: String },
    "voice_control": { type: String },
    "wheel_covers": { type: String },
    "wheel_size": { type: String },
    "wheelbase": { type: String },
    "wifi_connectivity": { type: String },
    "width": { type: String },
    "wireless_phone_charging": { type: String },
    "wltp_mileage": { type: String },
    "xenon_headlights": { type: String },
    "brand_uri": { type: String },
    "model_uri": { type: String },
    "version_uri": { type: String }
});

const CarData = mongoose.model('CARDATA', carData);

module.exports = CarData;