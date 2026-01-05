'use client';
import { useState } from 'react';
import type { User } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Switch } from '@/components/ui/switch';
import { toast } from '@/hooks/use-toast';


export default function StudentDataForm({ user, setUser }: { user: User, setUser: (user: User) => void }) {
  const [formData, setFormData] = useState(user.data);

  const handleSliderChange = (category: string, field: string, value: number[]) => {
    setFormData({
      ...formData,
      [category]: { ...formData[category], [field]: value[0] },
    });
  };

  const handleRadioChange = (category: string, field: string, value: string) => {
    setFormData({
      ...formData,
      [category]: { ...formData[category], [field]: value },
    });
  };

  const handleSwitchChange = (category: string, field: string, checked: boolean) => {
    setFormData({
      ...formData,
      [category]: { ...formData[category], [field]: checked },
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setUser({ ...user, data: formData });
    toast({
        title: "Data Submitted!",
        description: "Your insights have been updated.",
      })
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Daily Check-in</CardTitle>
        <CardDescription>Update your data to get new insights.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Sleep & Recovery */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Sleep & Recovery</h3>
            <div className="space-y-2">
              <Label>Avg. sleep hours: {formData.sleep.sleepHours} hrs</Label>
              <Slider
                defaultValue={[formData.sleep.sleepHours]}
                max={12}
                step={0.5}
                onValueChange={(value) => handleSliderChange('sleep', 'sleepHours', value)}
              />
            </div>
            <div className="space-y-2">
                <Label>Sleep Quality</Label>
                <RadioGroup
                    defaultValue={formData.sleep.sleepQuality}
                    className="flex gap-4"
                    onValueChange={(value) => handleRadioChange('sleep', 'sleepQuality', value)}
                >
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="poor" id="q-poor" />
                        <Label htmlFor="q-poor">Poor</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="average" id="q-average" />
                        <Label htmlFor="q-average">Average</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="good" id="q-good" />
                        <Label htmlFor="q-good">Good</Label>
                    </div>
                </RadioGroup>
            </div>
          </div>

          {/* Academics */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Academics</h3>
            <div className="space-y-2">
              <Label>Study hours per day: {formData.academics.studyHours} hrs</Label>
              <Slider
                defaultValue={[formData.academics.studyHours]}
                max={10}
                step={1}
                onValueChange={(value) => handleSliderChange('academics', 'studyHours', value)}
              />
            </div>
            <div className="space-y-2">
              <Label>Attendance: {formData.academics.attendance}%</Label>
              <Slider
                defaultValue={[formData.academics.attendance]}
                max={100}
                step={1}
                onValueChange={(value) => handleSliderChange('academics', 'attendance', value)}
              />
            </div>
          </div>
          
          {/* Well-being & Health */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Well-being & Health</h3>
             <div className="space-y-2">
                <Label>Stress Level</Label>
                <RadioGroup
                    defaultValue={formData.wellbeing.stressLevel}
                    className="flex gap-4"
                    onValueChange={(value) => handleRadioChange('wellbeing', 'stressLevel', value)}
                >
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="low" id="s-low" />
                        <Label htmlFor="s-low">Low</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="medium" id="s-medium" />
                        <Label htmlFor="s-medium">Medium</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="high" id="s-high" />
                        <Label htmlFor="s-high">High</Label>
                    </div>
                </RadioGroup>
            </div>
          </div>

          {/* Finance */}
           <div className="space-y-4">
            <h3 className="text-lg font-medium">Finance</h3>
             <div className="flex items-center justify-between rounded-lg border p-3">
                <div className="space-y-0.5">
                    <Label>Fee-related Stress</Label>
                    <p className="text-sm text-muted-foreground">Are you experiencing stress related to university fees?</p>
                </div>
                <Switch
                    checked={formData.finance.feeStress}
                    onCheckedChange={(checked) => handleSwitchChange('finance', 'feeStress', checked)}
                 />
            </div>
          </div>

          {/* Sustainability */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Sustainability</h3>
            <div className="flex items-center justify-between rounded-lg border p-3">
              <div className="space-y-0.5">
                <Label>Aware of Campus Initiatives</Label>
                <p className="text-sm text-muted-foreground">
                  Are you aware of our campus sustainability programs?
                </p>
              </div>
              <Switch
                checked={formData.sustainability.awareOfInitiatives}
                onCheckedChange={(checked) =>
                  handleSwitchChange('sustainability', 'awareOfInitiatives', checked)
                }
              />
            </div>
            <div className="space-y-2">
              <Label>Recycling Frequency</Label>
              <RadioGroup
                defaultValue={formData.sustainability.recyclingFrequency}
                className="flex gap-4"
                onValueChange={(value) =>
                  handleRadioChange('sustainability', 'recyclingFrequency', value)
                }
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="always" id="r-always" />
                  <Label htmlFor="r-always">Always</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="sometimes" id="r-sometimes" />
                  <Label htmlFor="r-sometimes">Sometimes</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="never" id="r-never" />
                  <Label htmlFor="r-never">Never</Label>
                </div>
              </RadioGroup>
            </div>
          </div>


          <Button type="submit" className="w-full">Update My Data</Button>
        </form>
      </CardContent>
    </Card>
  );
}
